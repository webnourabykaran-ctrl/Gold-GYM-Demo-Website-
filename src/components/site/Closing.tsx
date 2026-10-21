import { MapPin, Phone, MessageCircle, Mail, Clock, Instagram, Facebook, ExternalLink } from "lucide-react";
import { DIRECTIONS_URL, Label, MagneticButton, Reveal } from "./ui";
import { NAV } from "./Navbar";
import { BrandLogo } from "./BrandLogo";

const ADDRESS = "Tarn Taran, Amritsar Bypass, near Cafe Villa, Punjab, India";

export function Location() {
  return (
    <section id="location" className="bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <Reveal><Label>Location</Label></Reveal>
          <Reveal delay={0.1}><h2 className="mt-6 text-6xl uppercase md:text-8xl">Find <span className="text-gold-metal">Gold</span></h2></Reveal>
          <Reveal delay={0.2}>
            <address className="mt-10 not-italic">
              <p className="font-display text-2xl tracking-wider">GOLD HEALTH CLUB</p>
              <p className="mt-3 text-lg leading-relaxed text-foreground/70">
                Tarn Taran, Amritsar Bypass<br />
                Near Cafe Villa<br />
                Punjab, India
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-graphite/70 px-4 py-1.5 text-xs text-gold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Prime location on main highway · Easy parking</span>
              </div>
            </address>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton href={DIRECTIONS_URL}>Get Directions</MagneticButton>
              <MagneticButton href="tel:+919876543210" variant="ghost">Call Front Desk</MagneticButton>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="relative min-h-[380px] aspect-square overflow-hidden rounded-2xl border border-gold/30 bg-graphite shadow-2xl md:aspect-auto md:h-full">
            {/* Embedded Live Google Map with dark styling */}
            <iframe
              title="Gold Health Club Location Map"
              src="https://maps.google.com/maps?q=Gold+Health+Club,+Amritsar+Bypass,+near+Cafe+Villa,+Tarn+Taran,+Punjab&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 filter contrast-125 opacity-85 transition-opacity hover:opacity-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Top-left location badge */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-gold/30 bg-ink/90 p-3.5 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground">Gold Health Club</span>
              </div>
              <p className="mt-1 text-[11px] text-muted-foreground">Amritsar Bypass · Near Cafe Villa</p>
            </div>
            {/* Bottom-right interactive action link */}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="group absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-gold/40 bg-ink/90 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-md transition-all hover:bg-gold hover:text-ink shadow-lg"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CONTACTS = [
  { icon: MapPin, l: "Location", v: ADDRESS, href: DIRECTIONS_URL },
  { icon: Phone, l: "Phone", v: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MessageCircle, l: "WhatsApp", v: "+91 98765 43210", href: "https://wa.me/919876543210?text=Hi%20Gold%20Health%20Club,%20I%20am%20interested%20in%20gym%20membership" },
  { icon: Mail, l: "Email", v: "info@goldhealthclub.in", href: "mailto:info@goldhealthclub.in" },
  { icon: Clock, l: "Opening Hours", v: "Mon–Sat: 5:30 AM – 10:00 PM | Sun: 6:00 AM – 2:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><Label>Contact</Label></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">Get in touch</h2></Reveal>
        <div className="mt-14 grid gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-5">
          {CONTACTS.map(({ icon: Icon, l, v, href }) => {
            const Content = (
              <div className="group h-full bg-background p-7 transition-colors duration-300 hover:bg-graphite">
                <Icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.4} />
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">{l}</p>
                <p className="mt-2 text-sm text-foreground/90 transition-colors group-hover:text-gold whitespace-pre-line leading-relaxed">{v}</p>
              </div>
            );
            return href ? (
              <a key={l} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="block">
                {Content}
              </a>
            ) : (
              <div key={l}>{Content}</div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <MagneticButton href="tel:+919876543210">Call Now</MagneticButton>
          <MagneticButton href="https://wa.me/919876543210?text=Hi%20Gold%20Health%20Club,%20I%20am%20interested%20in%20gym%20membership" variant="ghost">
            Chat on WhatsApp
          </MagneticButton>
          <MagneticButton href={DIRECTIONS_URL} variant="ghost">Get Directions</MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 text-center md:px-8">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <BrandLogo size="lg" animated={true} glow={true} />
          </div>
        </Reveal>
        <Reveal><h2 className="text-6xl uppercase md:text-9xl">Your next level<br /><span className="text-gold-metal">starts here.</span></h2></Reveal>
        <Reveal delay={0.15}><p className="mx-auto mt-8 max-w-xl text-foreground/70">Make the decision to train consistently and build your fitness routine at GOLD HEALTH CLUB.</p></Reveal>
        <Reveal delay={0.25}><div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <MagneticButton href="#enquire">Join Gold</MagneticButton>
          <MagneticButton href={DIRECTIONS_URL} variant="ghost">Get Directions</MagneticButton>
        </div></Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold/20 pb-28 pt-16 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-3 md:px-8">
        <div>
          <BrandLogo
            size="md"
            showText
            subtext="Train. Focus. Progress."
            href="#home"
          />
          <p className="mt-4 text-xs leading-relaxed text-foreground/60 max-w-xs">
            Tarn Taran's premier fitness & strength destination. Engineered for peak athletic performance.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-3" aria-label="Footer">
          {NAV.map(([l, h]) => <a key={h} href={h} className="text-sm text-foreground/70 hover:text-gold transition-colors">{l}</a>)}
        </nav>
        <div>
          <p className="text-sm text-foreground/70">{ADDRESS}</p>
          <div className="mt-6 flex gap-6 text-xs text-muted-foreground">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Instagram className="h-4 w-4 text-gold" />
              <span>@goldhealthclub</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Facebook className="h-4 w-4 text-gold" />
              <span>Gold Health Club</span>
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl px-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-8">© 2026 GOLD HEALTH CLUB. All rights reserved.</p>
    </footer>
  );
}

export function MobileCTA() {
  return (
    <a href="#enquire" className="fixed inset-x-3 bottom-3 z-40 bg-gold-metal py-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground shadow-gold md:hidden">
      Join Gold
    </a>
  );
}
