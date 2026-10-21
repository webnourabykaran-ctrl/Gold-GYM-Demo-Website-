import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export type LightboxItem = { src?: string; label: string };

export function Lightbox({ items, index, onClose, onIndex }: { items: LightboxItem[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) {
  useEffect(() => {
    if (index === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [index, items.length, onClose, onIndex]);

  return (
    <AnimatePresence>
      {index !== null && items[index] && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md" onClick={onClose} role="dialog" aria-modal="true">
          <button className="absolute right-5 top-5 p-2 text-foreground hover:text-gold" aria-label="Close"><X /></button>
          <button className="absolute left-3 p-3 text-foreground hover:text-gold md:left-8" aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + items.length) % items.length); }}><ChevronLeft className="h-8 w-8" /></button>
          <button className="absolute right-3 p-3 text-foreground hover:text-gold md:right-8" aria-label="Next"
            onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % items.length); }}><ChevronRight className="h-8 w-8" /></button>
          <motion.div key={index} initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}
            className="max-h-[82vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {items[index]!.src ? (
              <img src={items[index]!.src} alt={items[index]!.label} className="max-h-[82vh] w-auto object-contain" />
            ) : (
              <div className="flex aspect-[4/3] w-[80vw] max-w-3xl items-center justify-center border border-gold/30 bg-graphite font-mono text-gold">{items[index]!.label}</div>
            )}
            <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">{items[index]!.label} · {index + 1} / {items.length}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
