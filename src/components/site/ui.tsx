import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold", className)}>
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="font-mono text-sm tracking-wider text-gold/80">{children}</span>;
}

type BtnProps = { children: ReactNode; href?: string; onClick?: () => void; variant?: "gold" | "ghost"; className?: string; disabled?: boolean; type?: "button" | "submit" };

export function MagneticButton({ children, href, onClick, variant = "gold", className, disabled, type = "button" }: BtnProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const move = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-300",
    variant === "gold"
      ? "bg-gold-metal text-primary-foreground shadow-gold hover:brightness-110"
      : "border border-foreground/25 text-foreground hover:border-gold hover:text-gold",
    disabled && "pointer-events-none opacity-40",
    className,
  );
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );
  const Comp = href ? motion.a : motion.button;
  return (
    <Comp
      {...(href ? { href, ...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {}) } : { type, onClick, disabled })}
      data-cursor="button"
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={reset}
      className={cls}
      aria-disabled={disabled}
    >
      {inner}
    </Comp>
  );
}

export const DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=Gold+Health+Club+Amritsar+Bypass+near+Cafe+Villa+Tarn+Taran+Punjab";
