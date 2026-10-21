import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { z } from "zod";
import { Label, MagneticButton, Reveal } from "./ui";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255).or(z.literal("")),
  goal: z.string().min(1, "Choose a goal"),
  contact: z.string().min(1),
  message: z.string().trim().max(1000).optional(),
});

const GOALS = ["Strength", "Weight Management", "General Fitness", "Muscle Building", "Cardio", "Other"];
const field = "w-full border-b border-foreground/20 bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";
const lbl = "text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground";

export function EnquiryForm() {
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string; goal?: string; [k: string]: string | undefined }>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <section id="enquire" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1fr_1.3fr] md:px-8">
        <div>
          <Reveal><Label>Enquire</Label></Reveal>
          <Reveal delay={0.1}><h2 className="mt-6 text-5xl uppercase md:text-7xl">Start your <span className="text-gold-metal">journey</span></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 max-w-sm text-foreground/70">Tell us a little about your goals and the club will get in touch with you.</p></Reveal>
        </div>
        <div className="relative border border-gold/20 bg-graphite p-6 md:p-10">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-metal text-primary-foreground"><Check /></span>
                <p className="mt-8 font-display text-4xl uppercase">Thank you.</p>
                <p className="mt-2 font-display text-2xl uppercase text-gold">We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <motion.form key="form" exit={{ opacity: 0 }} onSubmit={submit} noValidate className="grid gap-7 sm:grid-cols-2">
                <div><label className={lbl} htmlFor="name">Full Name</label><input id="name" name="name" className={field} placeholder="Your name" />{errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}</div>
                <div><label className={lbl} htmlFor="phone">Phone Number</label><input id="phone" name="phone" type="tel" className={field} placeholder="+91" />{errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}</div>
                <div><label className={lbl} htmlFor="email">Email</label><input id="email" name="email" type="email" className={field} placeholder="you@email.com" />{errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}</div>
                <div><label className={lbl} htmlFor="goal">Fitness Goal</label>
                  <select id="goal" name="goal" defaultValue="" className={`${field} [&>option]:bg-graphite`}>
                    <option value="" disabled>Select a goal</option>
                    {GOALS.map((g) => <option key={g}>{g}</option>)}
                  </select>{errors.goal && <p className="mt-1 text-xs text-destructive">{errors.goal}</p>}
                </div>
                <fieldset className="sm:col-span-2"><legend className={lbl}>Preferred Contact Method</legend>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {["Phone", "WhatsApp", "Email"].map((m, i) => (
                      <label key={m} className="cursor-pointer">
                        <input type="radio" name="contact" value={m} defaultChecked={i === 0} className="peer sr-only" />
                        <span className="inline-block border border-foreground/20 px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors peer-checked:border-gold peer-checked:text-gold">{m}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="sm:col-span-2"><label className={lbl} htmlFor="message">Message</label><textarea id="message" name="message" rows={3} className={`${field} resize-none`} placeholder="Anything you'd like us to know" /></div>
                <div className="sm:col-span-2"><MagneticButton type="submit" className="w-full sm:w-auto">Send Enquiry</MagneticButton></div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
