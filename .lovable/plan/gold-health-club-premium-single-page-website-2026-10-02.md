# GOLD HEALTH CLUB — Premium Single-Page Website

A dark-luxury, one-page site at `/` that follows your brief section by section and is built to turn visitors into enquiries.

## Look and feel
- Mostly deep black and charcoal, with metallic gold used only for buttons, highlights, thin borders and labels. Warm off-white for text.
- Headings in a bold editorial display font (Bebas Neue / Anton style), all other text in a clean sans (Manrope).
- Cinematic AI-generated gym photos for the hero, intro, training cards and gym tour. Facility and gallery slots stay clearly labelled placeholders (e.g. `[CARDIO AREA]`) until you send real photos.

## Sections (in order)
1. Sticky nav: see-through at the top, turns dark and blurred on scroll. JOIN NOW button. Full-screen animated menu on mobile.
2. Hero: "BUILD YOUR STRONGEST SELF." with STRONGEST in gold, the headline revealed word by word, a slow zoom on the background, depth that follows the mouse, a slowly rotating 3D gold dumbbell (simplified on mobile), and a SCROLL TO TRAIN indicator.
3. The Gold Standard intro: split layout, image reveal.
4. More Than a Workout: 3 cards with gold borders that tilt on hover.
5. Find Your Training Style: 4 image cards.
6. Built For Your Workout: facility placeholder cards that scroll sideways on desktop.
7. Step Inside Gold: full-width tour image; EXPLORE THE GYM opens a full-screen gallery.
8. Ready to Join Gold: 3 membership cards with placeholder prices. ASK ABOUT MEMBERSHIP jumps to the form.
9. Start Your Journey form: all your fields, checked before sending, and the thank-you message after.
10. Why Gold: your 4 points.
11. What Our Members Say: 3 placeholder reviews. No made-up testimonials.
12. The Gold Experience gallery: filter by category, masonry layout, full-screen viewer.
13. Find Gold: location, a GET DIRECTIONS link to Google Maps for "Gold Health Club Tarn Taran", and a placeholder map.
14. Contact: placeholder phone, WhatsApp, email and hours. The Call and WhatsApp buttons stay switched off until you send real numbers.
15. Final call to action with a gold glow, then the footer.
- Extras: a custom gold cursor on desktop (shows VIEW over gallery photos), a JOIN GOLD bar fixed to the bottom on mobile, and calmer motion for visitors who ask their device to reduce motion.

## Note on enquiries
Right now the form only shows the thank-you message. Submissions are not saved or sent anywhere. Later I can connect Lovable Cloud so enquiries are stored or emailed to you.

## Technical details
- `src/routes/index.tsx` contains the sections, split into components under `src/components/site/*`.
- Libraries: framer-motion, plus three, @react-three/fiber and @react-three/drei. The 3D scene is lazy-loaded on the client only, sits behind ClientOnly, and is skipped on small screens or when reduced motion is on.
- Design tokens (oklch gold, charcoal, graphite) live in `styles.css`, and fonts load through `<link>` in `__root`.
- Head tags: the title and meta description from the brief, Open Graph tags, and HealthClub/LocalBusiness JSON-LD schema.
- Images are generated into `src/assets` and lazy-loaded.
