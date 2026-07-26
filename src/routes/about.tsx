import { createFileRoute } from "@tanstack/react-router";
import { PageHero, About, Philosophy, WhyChoose, FounderQuote, Testimonials, Marquee } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | Sri Shobh Dental & Implant Centre, Tukkuguda" },
      { name: "description", content: "Meet Sri Shobh Dental — specialist-driven, patient-centred dentistry in Tukkuguda. Our vision, mission, values and philosophy of care." },
      { property: "og:title", content: "About Sri Shobh Dental & Implant Centre" },
      { property: "og:description", content: "Our philosophy: precision, legacy of trust, and the highest standard of specialist dental care." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Clinic"
        title="Where every smile"
        accent="finds a home"
        subtitle="Sri Shobh Dental & Implant Centre is Tukkuguda's premium specialist-driven dental home — advanced technology, ethical care, and exceptional experiences."
      />
      <About />
      <Philosophy />
      <WhyChoose />
      <Marquee />
      <FounderQuote />
      <Testimonials />
    </>
  );
}
