import { useRef, useState, useEffect, type MouseEvent } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Dumbbell, Activity, Target, Gem, Repeat, Users, Crosshair, Quote, ImageIcon, ChevronLeft, ChevronRight, Pause, Play, Check, Star, Sparkles, ShieldCheck, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import introImg from "@/assets/intro.jpg";
import strengthImg from "@/assets/strength.jpg";
import cardioImg from "@/assets/cardio.jpg";
import functionalImg from "@/assets/functional.jpg";
import generalImg from "@/assets/general.jpg";
import tourImg from "@/assets/tour.jpg";
import heroImg from "@/assets/hero.jpg";
import facilityFloor from "@/assets/facilities/floor.jpg";
import facilityStrength from "@/assets/facilities/strength.jpg";
import facilityCardio from "@/assets/facilities/cardio.jpg";
import facilityFreeWeights from "@/assets/facilities/free_weights.jpg";
import facilityFunctional from "@/assets/facilities/functional.jpg";
import { Label, MagneticButton, Reveal } from "./ui";
import { Lightbox } from "./Lightbox";
import { BrandLogo } from "./BrandLogo";

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-24 md:py-36">
      {/* Ambient background glow aura */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        
        {/* Left Column: Ultra-Premium Layered Visual Showcase */}
        <div className="relative">
          {/* Subtle gold glow background */}
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold/20 via-transparent to-gold/10 blur-2xl" />

          {/* Main Hero Photo Container with smooth entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-gold/35 bg-graphite shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            <motion.img
              style={{ y }}
              src={introImg}
              alt="Rows of precision steel dumbbells along a dark gym floor lit with warm gold strip lights"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-[114%] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Atmospheric gradient overlay for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-gold/20" />

            {/* Inset Top Badge */}
            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-gold/30 bg-ink/85 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">The Gold Arena</span>
            </div>

            {/* Inset Bottom Title */}
            <div className="absolute bottom-6 left-6 right-6 z-10 hidden sm:block">
              <p className="font-mono text-xs uppercase tracking-widest text-gold/90">Precision Iron & Free Weights</p>
              <h4 className="mt-1 font-display text-2xl uppercase tracking-wide text-foreground">
                Engineered for Peak Performance
              </h4>
            </div>
          </motion.div>

          {/* Overlapping Floating Feature Card: Strength Zone */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: 25 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="absolute -bottom-8 -right-4 hidden w-64 items-center gap-3.5 rounded-2xl border border-gold/40 bg-graphite/95 p-3.5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-gold sm:flex"
          >
            <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl border border-gold/25">
              <img src={strengthImg} alt="Power rack" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="rounded bg-gold/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gold">
                Heavy Duty
              </span>
              <p className="mt-1 text-xs font-bold uppercase tracking-wide text-foreground">Olympic Lifting</p>
              <p className="text-[10px] text-muted-foreground">Up to 50kg Dumbbells</p>
            </div>
          </motion.div>

          {/* Floating Live Badge: Rating & Recognition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="absolute -right-2 -top-4 z-20 flex items-center gap-3 rounded-2xl border border-gold/40 bg-ink/90 px-3.5 py-2 shadow-xl backdrop-blur-xl"
          >
            <BrandLogo size="xs" animated={true} glow={false} />
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">Official Crest</p>
              <p className="text-[9px] uppercase tracking-wider text-gold">4.9 ★ Tarn Taran</p>
            </div>
          </motion.div>

          {/* Floating Stat Pill: Floor Space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-6 left-6 z-20 flex items-center gap-3 rounded-2xl border border-gold/30 bg-ink/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:left-10"
          >
            <ShieldCheck className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/90">
              5,000+ Sq.Ft. Multi-Zone Arena
            </span>
          </motion.div>
        </div>

        {/* Right Column: High-Impact Typography & Value Propositions */}
        <div>
          <Reveal><Label>The Gold Standard</Label></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-5xl uppercase leading-[0.95] md:text-7xl">
              Train with purpose.<br />
              <span className="text-gold-metal">Move with confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-base leading-relaxed text-foreground/75 md:text-lg">
              GOLD HEALTH CLUB is Tarn Taran's flagship fitness destination on the Amritsar Bypass. Designed from the ground up for individuals who value a focused environment, imported precision equipment, and consistent long-term progress.
            </p>
          </Reveal>

          {/* 3 Luxury Feature Pillars */}
          <div className="mt-8 space-y-3.5">
            <Reveal delay={0.25}>
              <div className="flex items-start gap-3.5 rounded-xl border border-gold/15 bg-graphite/40 p-4 transition-colors hover:border-gold/40">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Dumbbell className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Commercial Biomechanics</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Heavy-duty power racks, selectorized pin machines, and precision dumbbells calibrated for joint safety.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-start gap-3.5 rounded-xl border border-gold/15 bg-graphite/40 p-4 transition-colors hover:border-gold/40">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Trophy className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Certified Personal Coaching</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Experienced coaches on the floor to supervise posture, structure workout splits, and keep you progressing.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex items-start gap-3.5 rounded-xl border border-gold/15 bg-graphite/40 p-4 transition-colors hover:border-gold/40">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">Hygienic & Climate-Controlled</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Clean locker facilities, purified air ventilation, and high-energy music tuned for intense workout focus.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Action CTAs */}
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#location">Visit the Gym</MagneticButton>
              <MagneticButton href="#membership" variant="ghost">View Membership Plans</MagneticButton>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setT({ x: ((e.clientY - r.top) / r.height - 0.5) * -10, y: ((e.clientX - r.left) / r.width - 0.5) * 10 });
  };
  return (
    <div style={{ perspective: 1000 }} className={className}>
      <div onMouseMove={move} onMouseLeave={() => setT({ x: 0, y: 0 })}
        style={{ transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)` }}
        className="h-full transition-transform duration-200 ease-out">
        {children}
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: Dumbbell, t: "Strength", d: "Train with focus and build a stronger foundation." },
  { icon: Activity, t: "Fitness", d: "Make movement and consistency part of your routine." },
  { icon: Target, t: "Discipline", d: "Show up, stay consistent and keep progressing." },
];

export function Features() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><Label>The Experience</Label></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">More than a workout</h2></Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FEATURES.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <TiltCard className="h-full">
                <div className="group h-full border border-gold/25 bg-graphite p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-gold">
                  <Icon className="h-9 w-9 text-gold" strokeWidth={1.2} />
                  <p className="mt-10 font-mono text-xs text-muted-foreground">0{i + 1}</p>
                  <h3 className="mt-2 text-4xl uppercase">{t}</h3>
                  <p className="mt-4 text-foreground/65">{d}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TRAINING = [
  { img: strengthImg, t: "Strength Training", d: "Build power and a solid foundation under focused conditions.", alt: "Athlete squatting a loaded barbell under a gold spotlight" },
  { img: cardioImg, t: "Cardio", d: "Improve stamina and keep your heart in the work.", alt: "Woman running on a treadmill in warm backlight" },
  { img: functionalImg, t: "Functional Training", d: "Move better with training that carries into everyday life.", alt: "Woman performing a kettlebell swing" },
  { img: generalImg, t: "General Fitness", d: "A steady, balanced routine for feeling and moving well.", alt: "Woman stretching on a mat in a calm gym corner" },
];

export function Training() {
  return (
    <section id="training" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><Label>Training</Label></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">Find your<br />training style</h2></Reveal>
          </div>
          <Reveal delay={0.2}><p className="max-w-xs text-sm text-foreground/70">Custom fitness routines guided by certified trainers to match your endurance and strength goals.</p></Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINING.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <article className="group relative aspect-[3/4] overflow-hidden" data-cursor="button">
                <img src={c.img} alt={c.alt} loading="lazy" width={912} height={1200} className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">0{i + 1} — Style</p>
                  <h3 className="mt-2 text-3xl uppercase">{c.t}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm text-foreground/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 max-lg:max-h-24 max-lg:opacity-100">{c.d}</p>
                </div>
                <div className="absolute inset-0 border border-gold/0 transition-colors duration-500 group-hover:border-gold/50" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FACILITIES = [
  {
    title: "Gym Floor",
    category: "Main Training Arena",
    description: "Expansive layout with Olympic lifting platforms, benches, rubber flooring, and ample space to move.",
    img: facilityFloor,
    alt: "Spacious main gym floor with dumbbell racks, benches, and training stations",
  },
  {
    title: "Strength Equipment",
    category: "Power & Hypertrophy",
    description: "Commercial heavy-duty power racks, plate-loaded stations, pin-selected machines, and cable towers.",
    img: facilityStrength,
    alt: "Heavy duty strength training equipment, power racks and cable pulldown towers",
  },
  {
    title: "Cardio Area",
    category: "Endurance & Conditioning",
    description: "Commercial Matrix treadmills, cross-trainers, and stationary bikes positioned along panoramic windows.",
    img: facilityCardio,
    alt: "Row of commercial treadmills and cardio machines overlooking large windows",
  },
  {
    title: "Free Weights Area",
    category: "Heavy Iron",
    description: "Precision-knurled steel dumbbells up to 50kg, Olympic barbells, bumper plates, and adjustable benches.",
    img: facilityFreeWeights,
    alt: "Heavy steel dumbbells organized on commercial gym dumbbell racks",
  },
  {
    title: "Functional Training",
    category: "Agility & Movement",
    description: "Dedicated turf track, kettlebells, battle ropes, medicine balls, and open bodyweight conditioning.",
    img: facilityFunctional,
    alt: "Functional training turf area with push-up equipment and conditioning gear",
  },
];

export function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "100px 0px" });

  const [isHovered, setIsHovered] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const isPaused = isHovered || isManualPaused || !isInView;

  // Smooth continuous auto-glide using requestAnimationFrame
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId: number;
    const speed = 1.0; // gentle, readable speed (~60px/sec)

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;

        const oneSet = el.scrollWidth / 3;
        if (oneSet > 0) {
          if (el.scrollLeft >= oneSet * 2) {
            el.scrollLeft -= oneSet;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += oneSet;
          }
          const normalized = el.scrollLeft % oneSet;
          const cardApprox = oneSet / FACILITIES.length;
          const current = Math.floor(normalized / cardApprox) % FACILITIES.length;
          setActiveIdx(current);
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // Next / Prev button navigation
  const handleScroll = (dir: "next" | "prev") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.querySelector(".facility-card") as HTMLElement | null;
    const cardWidth = cardEl?.offsetWidth || 400;
    const offset = (cardWidth + 20) * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  const jumpTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.querySelector(".facility-card") as HTMLElement | null;
    const cardWidth = cardEl?.offsetWidth || 400;
    const oneSet = el.scrollWidth / 3;
    const targetScroll = oneSet + index * (cardWidth + 20);
    el.scrollTo({ left: targetScroll, behavior: "smooth" });
    setActiveIdx(index);
  };

  // Mouse drag support for desktop
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <section id="facilities" ref={sectionRef} className="overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 md:flex-row md:items-end md:px-8">
        <div>
          <Reveal><Label>Facilities</Label></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-5xl uppercase md:text-7xl">
              Built for your workout
            </h2>
          </Reveal>
        </div>

        {/* Interactive Controls & Live Status */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Auto-Scroll Toggle Button */}
          <button
            onClick={() => setIsManualPaused((p) => !p)}
            className="flex items-center gap-2 rounded-full border border-gold/30 bg-graphite/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            title={isPaused ? "Click to resume auto-scroll" : "Click to pause auto-scroll"}
          >
            <span className={cn("h-2 w-2 rounded-full", isPaused ? "bg-muted-foreground" : "bg-gold animate-pulse")} />
            <span>{isPaused ? "Paused" : "Auto-Glide"}</span>
            {isPaused ? <Play className="h-3 w-3 text-gold" /> : <Pause className="h-3 w-3 text-gold" />}
          </button>

          {/* Prev & Next navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("prev")}
              aria-label="Previous facility"
              className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-graphite text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("next")}
              aria-label="Next facility"
              className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-graphite text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Auto-Scrolling Track with cloned elements for 100% seamless loop */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 1500)}
        className="no-scrollbar mt-12 flex cursor-grab select-none gap-5 overflow-x-auto px-5 active:cursor-grabbing md:mt-16 md:px-8"
      >
        {[...FACILITIES, ...FACILITIES, ...FACILITIES].map((f, i) => (
          <FacilityCard key={`${f.title}-${i}`} item={f} i={i % FACILITIES.length} />
        ))}
      </div>

      {/* Interactive Dots Pagination */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-2 px-5">
        {FACILITIES.map((f, idx) => (
          <button
            key={f.title}
            onClick={() => jumpTo(idx)}
            aria-label={`Go to ${f.title}`}
            className="group flex items-center gap-2 py-2"
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIdx === idx
                  ? "w-8 bg-gold"
                  : "w-2 bg-foreground/20 group-hover:bg-gold/60"
              )}
            />
            <span
              className={cn(
                "hidden text-[10px] font-semibold uppercase tracking-wider md:inline transition-colors",
                activeIdx === idx ? "text-gold" : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {f.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function FacilityCard({ item, i }: { item: typeof FACILITIES[number]; i: number }) {
  return (
    <div className="facility-card group relative flex aspect-[4/5] w-[78vw] shrink-0 flex-col justify-between overflow-hidden border border-gold/25 bg-graphite p-6 transition-all duration-500 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] md:w-[26rem]">
      {/* Real Photograph */}
      <img
        src={item.img}
        alt={item.alt}
        loading="lazy"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Dark & Gold Vignette Overlay for readability and atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/20 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 border border-gold/15 transition-colors duration-500 group-hover:border-gold/50" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs font-semibold tracking-wider text-gold">0{i + 1}</span>
        <span className="rounded-full border border-gold/30 bg-ink/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-md">
          {item.category}
        </span>
      </div>

      {/* Bottom Information */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-gold md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-foreground/80 md:text-sm">
          {item.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
          <span>Explore Zone</span>
          <span className="h-px flex-1 bg-gold/25 transition-all duration-300 group-hover:bg-gold/60" />
        </div>
      </div>
    </div>
  );
}

const TOUR_ITEMS = [
  { src: tourImg, label: "The training floor" },
  { src: introImg, label: "Free weights" },
  { src: heroImg, label: "Strength" },
  { src: strengthImg, label: "Squat rack" },
  { src: cardioImg, label: "Cardio" },
  { src: functionalImg, label: "Functional" },
];

export function Tour() {
  const [idx, setIdx] = useState<number | null>(null);
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <img src={tourImg} alt="Wide view of a dark gym floor under gold linear ceiling lights" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full animate-drift object-cover" />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative mx-auto w-full max-w-7xl px-5 text-center md:px-8">
        <Reveal><Label className="justify-center">Step Inside Gold</Label></Reveal>
        <Reveal delay={0.1}><h2 className="mx-auto mt-6 max-w-5xl text-5xl uppercase md:text-8xl">Your training environment <span className="text-gold-metal">matters.</span></h2></Reveal>
        <Reveal delay={0.2}><div className="mt-12"><MagneticButton onClick={() => setIdx(0)}>Explore the Gym</MagneticButton></div></Reveal>
      </div>
      <Lightbox items={TOUR_ITEMS} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </section>
  );
}

const PLANS = [
  {
    t: "Monthly Pass",
    price: "₹1,499",
    period: "/ month",
    badge: null,
    desc: "Perfect for beginners and anyone looking for flexible, no-commitment premium training.",
    features: [
      "Unlimited access to gym floor & weights",
      "Full use of commercial cardio stations",
      "Clean locker room & shower access",
      "Complimentary fitness assessment",
      "Trainer floor support & equipment intro",
    ],
    featured: false,
  },
  {
    t: "Quarterly Pro",
    price: "₹3,999",
    period: "/ 3 months",
    badge: "Most Popular",
    desc: "Our recommended plan for dedicated individuals aiming for serious physique transformations.",
    features: [
      "All Monthly Pass benefits included",
      "Custom workout split & progression sheet",
      "2 complimentary 1-on-1 personal training sessions",
      "Personalized nutrition & diet starter guide",
      "Monthly body composition & measurements scan",
    ],
    featured: true,
  },
  {
    t: "Annual Elite",
    price: "₹12,999",
    period: "/ year",
    badge: "Best Value",
    desc: "The ultimate Gold standard membership with exclusive perks and round-the-year VIP privileges.",
    features: [
      "365-day all-inclusive VIP club access",
      "Free Gold Health Club kit & shaker bottle",
      "Quarterly 1-on-1 trainer strategy check-ins",
      "2 free guest workout passes every month",
      "Full access to functional turf & conditioning zone",
    ],
    featured: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Reveal><Label className="justify-center">Membership</Label></Reveal>
          <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">Ready to join <span className="text-gold-metal">Gold?</span></h2></Reveal>
          <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-xl text-foreground/70">Choose a training routine that fits your goals and become part of the GOLD HEALTH CLUB experience.</p></Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.1}>
              <div className={`relative flex h-full flex-col border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 ${p.featured ? "border-gold bg-graphite shadow-gold" : "border-gold/20 bg-card hover:border-gold/60"}`}>
                {p.badge && (
                  <span className="absolute -top-3 left-8 bg-gold-metal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground shadow-md">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-3xl font-bold uppercase tracking-tight">{p.t}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold text-gold md:text-5xl">{p.price}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-foreground/70">{p.desc}</p>
                <div className="my-6 h-px bg-gold/20" />
                <ul className="space-y-3 text-left">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <MagneticButton href="#enquire" variant={p.featured ? "gold" : "ghost"} className="w-full">
                    Join with {p.t}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Gem, t: "Premium Environment", d: "A focused and modern atmosphere for training." },
  { icon: Repeat, t: "Consistency", d: "Build a routine that supports long-term progress." },
  { icon: Users, t: "Community", d: "Train around people working toward their own fitness goals." },
  { icon: Crosshair, t: "Focus", d: "Keep your attention on the work that matters." },
];

export function Why() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><Label>Why Gold</Label></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">Why Gold</h2></Reveal>
        <div className="mt-16 grid border-t border-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full border-b border-gold/20 py-10 sm:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.2} />
                <h3 className="mt-8 text-2xl uppercase">{t}</h3>
                <p className="mt-3 text-sm text-foreground/65">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Gurpreet Singh",
    role: "Powerlifter · Member 1.5 Years",
    stars: 5,
    quote: "Hands down the best gym facility on Amritsar Bypass. Top-notch imported machines, heavy knurled dumbbells up to 50kg, and great ventilation. The motivating atmosphere makes you want to show up every single day.",
  },
  {
    name: "Simranjit Kaur",
    role: "Functional & Strength Training",
    stars: 5,
    quote: "Super clean, respectful, and safe gym environment. The trainers are polite and attentive, always making sure you have safe form on squats and deadlifts. Couldn't ask for a better club in Tarn Taran!",
  },
  {
    name: "Maninder Dhillon",
    role: "Hypertrophy Member",
    stars: 5,
    quote: "Dedicated deadlift platforms, solid power racks, and abundant bumper plates. Even during rush hours, there's plenty of space to train without waiting around. 100% worth every single rupee.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><Label>Members</Label></Reveal>
            <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">What our members say</h2></Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3 rounded-full border border-gold/30 bg-graphite/80 px-5 py-2">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                4.9 / 5 Rating (200+ Reviews)
              </span>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((rev, i) => (
            <Reveal key={rev.name} delay={i * 0.1}>
              <figure className="group flex h-full flex-col justify-between border border-gold/20 bg-card p-8 transition-all duration-300 hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.12)]">
                <div>
                  <div className="flex items-center justify-between">
                    <Quote className="h-7 w-7 text-gold/60 transition-colors group-hover:text-gold" strokeWidth={1.2} />
                    <div className="flex text-gold">
                      {[...Array(rev.stars)].map((_, s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-6 text-sm leading-relaxed text-foreground/85 italic">
                    "{rev.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-gold/15 pt-4">
                  <p className="text-sm font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-gold">
                    {rev.name}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {rev.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
