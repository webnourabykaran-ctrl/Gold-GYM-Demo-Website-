import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Intro, Features, Training, Facilities, Tour, Membership, Why, Testimonials } from "@/components/site/Sections";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Gallery } from "@/components/site/Gallery";
import { Location, Contact, FinalCTA, Footer, MobileCTA } from "@/components/site/Closing";
import { Cursor } from "@/components/site/Cursor";

const TITLE = "GOLD HEALTH CLUB | Premium Gym in Tarn Taran";
const DESC = "GOLD HEALTH CLUB in Tarn Taran, near Cafe Villa on Amritsar Bypass. Explore our fitness environment, training options and membership enquiries.";

const schema = {
  "@context": "https://schema.org",
  "@type": ["HealthClub", "LocalBusiness"],
  name: "GOLD HEALTH CLUB",
  description: DESC,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Amritsar Bypass, near Cafe Villa",
    addressLocality: "Tarn Taran",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <Intro />
      <Features />
      <Training />
      <Facilities />
      <Tour />
      <Membership />
      <EnquiryForm />
      <Why />
      <Testimonials />
      <Gallery />
      <Location />
      <Contact />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </main>
  );
}
