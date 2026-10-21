import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { MagneticButton } from "./ui";
import { BrandLogo } from "./BrandLogo";

const Hero3D = lazy(() => import("./Hero3D"));

const WORDS = ["BUILD", "YOUR", "STRONGEST", "SELF."];

export function Hero() {
  const reduce = useReducedMotion();
  const [show3D, setShow3D] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, (v) => v * -18);
  const bgY = useTransform(sy, (v) => v * -12);
  const fgX = useTransform(sx, (v) => v * 14);
  const fgY = useTransform(sy, (v) => v * 10);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setShow3D(mq.matches && !reduce);
  }, [reduce]);

  return (
    <section
      id="home"
      onMouseMove={(e) => { mx.set(e.clientX / window.innerWidth - 0.5); my.set(e.clientY / window.innerHeight - 0.5); }}
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-24 pt-32 md:items-center md:pb-0"
    >
      <motion.div style={{ x: bgX, y: bgY }} className="absolute -inset-8">
        <img src={heroImg} alt="Athlete preparing to lift a barbell inside a dark gym with gold lighting" width={1920} height={1088} className="h-full w-full animate-slow-zoom object-cover object-[60%_center]" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-ink/60" />

      {show3D && (
        <motion.div style={{ x: fgX, y: fgY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1.5 }}
          className="pointer-events-none absolute bottom-[8%] right-[2%] h-[46vh] w-[40vw]">
          <ClientOnly>
            <Suspense fallback={null}><Hero3D /></Suspense>
          </ClientOnly>
        </motion.div>
      )}

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/80 py-1.5 pl-2 pr-5 backdrop-blur-md shadow-lg"
        >
          <BrandLogo size="xs" animated={true} glow={true} />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            Gold Health Club · Tarn Taran
          </span>
        </motion.div>
        <h1 className="max-w-4xl text-[17vw] uppercase leading-[0.88] sm:text-7xl md:text-8xl lg:text-[9.5rem]">
          {WORDS.map((w, i) => (
            <span key={w} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                className={w === "STRONGEST" ? "inline-block text-gold-metal" : "inline-block"}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.9 }}
          className="mt-8 max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
          A premium fitness environment designed to help you train with focus, consistency and confidence.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.55, duration: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row">
          <MagneticButton href="#enquire">Join Gold</MagneticButton>
          <MagneticButton href="#about" variant="ghost">Explore the Club</MagneticButton>
        </motion.div>

        {/* Live Club Highlights & Stats Card to enrich the Hero space */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="mt-12 w-full max-w-md rounded-2xl border border-gold/30 bg-graphite/85 p-6 backdrop-blur-md shadow-2xl lg:absolute lg:bottom-12 lg:right-8 lg:mt-0 lg:max-w-sm"
        >
          <div className="flex items-center justify-between border-b border-gold/15 pb-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="xs" animated={true} glow={false} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">Gold Health Club</p>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Open Daily</span>
                </div>
              </div>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">5:30 AM – 10:00 PM</span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-left">
            <div className="rounded-lg border border-gold/15 bg-ink/60 p-3">
              <p className="font-display text-2xl text-gold">50+</p>
              <p className="text-[11px] text-muted-foreground">Pro Stations</p>
            </div>
            <div className="rounded-lg border border-gold/15 bg-ink/60 p-3">
              <p className="font-display text-2xl text-gold">4.9 ★</p>
              <p className="text-[11px] text-muted-foreground">Google Rating</p>
            </div>
            <div className="rounded-lg border border-gold/15 bg-ink/60 p-3">
              <p className="font-display text-2xl text-gold">100%</p>
              <p className="text-[11px] text-muted-foreground">Certified Trainers</p>
            </div>
            <div className="rounded-lg border border-gold/15 bg-ink/60 p-3">
              <p className="font-display text-2xl text-gold">5000+</p>
              <p className="text-[11px] text-muted-foreground">Sq.Ft Arena</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-2 text-[11px] text-foreground/75">
            <span className="flex items-center gap-1.5 text-gold">
              <Sparkles className="h-3.5 w-3.5" /> Amritsar Bypass, Tarn Taran
            </span>
            <a href="#membership" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-light">
              View Plans →
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/30 pt-2">
          <span className="h-2 w-px animate-scroll-dot bg-gold" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/60">Scroll to Train</span>
      </a>
    </section>
  );
}
