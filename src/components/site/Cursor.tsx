import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<"default" | "button" | "view">("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const ok = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    setEnabled(ok);
    if (!ok) return;
    document.documentElement.style.cursor = "none";
    const move = (e: MouseEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      const t = (e.target as HTMLElement).closest("[data-cursor], a, button, input, select, textarea, label");
      setMode(t?.getAttribute("data-cursor") === "view" ? "view" : t ? "button" : "default");
    };
    window.addEventListener("mousemove", move);
    const style = document.createElement("style");
    style.textContent = "a,button,select,label{cursor:none}";
    document.head.appendChild(style);
    return () => { window.removeEventListener("mousemove", move); style.remove(); document.documentElement.style.cursor = ""; };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div style={{ x: sx, y: sy }} className="pointer-events-none fixed left-0 top-0 z-[100]">
      <div className={cn(
        "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300",
        mode === "default" && "h-2.5 w-2.5 bg-gold",
        mode === "button" && "h-12 w-12 border border-gold bg-gold/10",
        mode === "view" && "h-20 w-20 bg-gold text-[10px] font-bold tracking-[0.25em] text-primary-foreground",
      )}>
        {mode === "view" && "VIEW"}
      </div>
    </motion.div>
  );
}
