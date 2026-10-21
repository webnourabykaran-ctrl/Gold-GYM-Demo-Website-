import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import logoSrc from "@/assets/ghc-logo.png";

export interface BrandLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero";
  showText?: boolean;
  subtext?: string;
  animated?: boolean;
  className?: string;
  glow?: boolean;
  href?: string;
}

const SIZE_MAP = {
  xs: "h-8 w-8",
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
  hero: "h-28 w-28 md:h-32 md:w-32",
};

export function BrandLogo({
  size = "md",
  showText = false,
  subtext,
  animated = true,
  className,
  glow = true,
  href,
}: BrandLogoProps) {
  const sizeClass = SIZE_MAP[size] || SIZE_MAP.md;

  const content = (
    <div className={cn("group inline-flex items-center gap-3.5 select-none", className)}>
      {/* Emblem Container with layered animations */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "relative shrink-0 rounded-full",
          sizeClass,
          animated && "animate-float"
        )}
      >
        {/* Ambient Golden Pulsing Halo */}
        {glow && (
          <div
            className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-gold/30 via-gold/15 to-transparent blur-md transition-opacity duration-500 group-hover:opacity-100 opacity-70 animate-gold-pulse"
          />
        )}

        {/* Outer Rotating Metallic Orbit Ring */}
        {animated && (
          <div className="pointer-events-none absolute -inset-1 rounded-full border border-gold/40 border-dashed animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity" />
        )}

        {/* Outer Ring Border */}
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-gold/70 bg-ink shadow-[0_0_20px_rgba(218,165,32,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(218,165,32,0.6)]">
          {/* Logo Image */}
          <img
            src={logoSrc}
            alt="Gold Health Club Official Logo"
            className="h-full w-full object-cover rounded-full"
            loading="eager"
            width={160}
            height={160}
          />

          {/* Shimmer / Sheen Sweep Animation */}
          {animated && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute -inset-full w-[250%] h-[250%] bg-gradient-to-r from-transparent via-white/25 to-transparent -rotate-45 animate-gold-shimmer" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Optional Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display text-xl tracking-wider leading-none md:text-2xl">
            <span className="text-gold-metal">GOLD</span>{" "}
            <span className="text-foreground transition-colors group-hover:text-gold">HEALTH CLUB</span>
          </span>
          {subtext && (
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-gold/80">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block transition-opacity focus:outline-none">
        {content}
      </a>
    );
  }

  return content;
}
