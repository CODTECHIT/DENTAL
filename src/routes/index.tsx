import { createFileRoute } from "@tanstack/react-router";
import {
  Hero, Philosophy, Services, WhyChoose, Marquee,
  About, FounderQuote, ContactStrip, Gallery, Contact, Testimonials,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Sri Shobh Dental & Implant Centre | Tukkuguda's Trusted Dental Clinic" },
      { name: "description", content: "Premium specialist dental care in Tukkuguda. Implants, smile design, aligners, laser dentistry & more. Book your appointment today." },
      { property: "og:title", content: "Sri Shobh Dental & Implant Centre" },
      { property: "og:description", content: "Healthy Smiles, Happier Lives. Advanced dental care for a confident tomorrow." },
    ],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services limit={8} />
      <WhyChoose />
      <Marquee />
      <About />
      <FounderQuote />
      <ContactStrip />
      <Gallery limit={6} />
      <Testimonials />
      <Contact />
    </>
  );
}
