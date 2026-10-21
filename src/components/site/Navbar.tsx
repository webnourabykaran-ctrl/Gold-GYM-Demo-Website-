import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./ui";
import { BrandLogo } from "./BrandLogo";

export const NAV = [
  ["Home", "#home"], ["About", "#about"], ["Training", "#training"], ["Facilities", "#facilities"],
  ["Membership", "#membership"], ["Gallery", "#gallery"], ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-gold/20 bg-ink/90 py-2.5 backdrop-blur-xl shadow-lg" : "py-5",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <BrandLogo
            size="sm"
            showText
            subtext="Tarn Taran · Punjab"
            href="#home"
          />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="relative text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/75 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform hover:text-foreground hover:after:origin-left hover:after:scale-x-100">
                {l}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <MagneticButton href="#enquire" className="px-5 py-3">Join Now</MagneticButton>
          </div>
          <button onClick={() => setOpen((o) => !o)} className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden" aria-label={open ? "Close menu" : "Open menu"}>
            <span className={cn("h-px w-7 bg-foreground transition-transform duration-300", open && "translate-y-[3.5px] rotate-45 bg-gold")} />
            <span className={cn("h-px w-7 bg-foreground transition-transform duration-300", open && "-translate-y-[3.5px] -rotate-45 bg-gold")} />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-6 pb-10 pt-24 lg:hidden"
          >
            {/* Mobile Header Brand Crest */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="pb-4 border-b border-gold/15"
            >
              <BrandLogo
                size="md"
                showText
                subtext="Tarn Taran, Punjab"
                href="#home"
              />
            </motion.div>

            <nav className="flex flex-col gap-2 my-auto">
              {NAV.map(([l, h], i) => (
                <motion.a key={h} href={h} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}
                  className="font-display text-4xl uppercase text-foreground hover:text-gold transition-colors">
                  {l}
                </motion.a>
              ))}
            </nav>
            <a href="#enquire" onClick={() => setOpen(false)} className="bg-gold-metal py-4 text-center text-sm font-bold uppercase tracking-[0.3em] text-primary-foreground shadow-gold">Join Gold</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
