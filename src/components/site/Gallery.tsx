import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Label, Reveal } from "./ui";
import { Lightbox } from "./Lightbox";
import introImg from "@/assets/intro.jpg";
import strengthImg from "@/assets/strength.jpg";
import functionalImg from "@/assets/functional.jpg";
import tourImg from "@/assets/tour.jpg";
import facilityFloor from "@/assets/facilities/floor.jpg";
import facilityStrength from "@/assets/facilities/strength.jpg";
import facilityCardio from "@/assets/facilities/cardio.jpg";
import facilityFreeWeights from "@/assets/facilities/free_weights.jpg";
import facilityFunctional from "@/assets/facilities/functional.jpg";

const CATS = ["All", "Gym Floor", "Training", "Equipment", "Community", "Interior"] as const;
const ITEMS = [
  { c: "Gym Floor", title: "Main Training Arena", src: facilityFloor, h: "aspect-[4/5]" },
  { c: "Training", title: "Barbell Squat Depth", src: strengthImg, h: "aspect-square" },
  { c: "Equipment", title: "Heavy Duty Power Rack", src: facilityStrength, h: "aspect-[3/4]" },
  { c: "Community", title: "Full Floor Atmosphere", src: tourImg, h: "aspect-[4/3]" },
  { c: "Interior", title: "Dumbbell Gallery & Warm Lights", src: introImg, h: "aspect-[4/5]" },
  { c: "Training", title: "Kettlebell Movement", src: functionalImg, h: "aspect-[3/4]" },
  { c: "Gym Floor", title: "Cardio & Treadmill Line", src: facilityCardio, h: "aspect-square" },
  { c: "Equipment", title: "Precision Steel Dumbbells", src: facilityFreeWeights, h: "aspect-[4/3]" },
  { c: "Interior", title: "Functional Movement Turf", src: facilityFunctional, h: "aspect-[3/4]" },
].map((it) => ({ ...it, label: `${it.c.toUpperCase()} — ${it.title}` }));

export function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [idx, setIdx] = useState<number | null>(null);
  const shown = ITEMS.filter((i) => cat === "All" || i.c === cat);
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><Label>Gallery</Label></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">The Gold experience</h2></Reveal>
        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={cn("shrink-0 border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors", cat === c ? "border-gold bg-gold text-primary-foreground" : "border-foreground/20 text-foreground/70 hover:border-gold hover:text-gold")}>
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence>
            {shown.map((it, i) => (
              <motion.button layout key={it.label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIdx(i)} data-cursor="view"
                className={cn("group relative mb-4 flex w-full break-inside-avoid items-center justify-center overflow-hidden border border-gold/20 bg-graphite transition-all duration-300 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]", it.h)}>
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
                <div className="relative z-10 flex h-full w-full flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{it.c}</span>
                  <h4 className="mt-1 text-base font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-gold">{it.title}</h4>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Lightbox items={shown} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </section>
  );
}
