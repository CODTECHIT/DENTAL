import { createFileRoute } from "@tanstack/react-router";
import {
  PageHero,
  About,
  Philosophy,
  WhyChoose,
  FounderQuote,
  Testimonials,
  Marquee,
} from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Sri Shobh Dental | Top Dentists in Tukkuguda, Hyderabad" },
      {
        name: "description",
        content:
          "Meet Tukkuguda's most trusted dental specialists  advanced technology, 7 MDS doctors, ethical care across all major dental specialties. Learn why patients choose Sri Shobh Dental.",
      },
      {
        property: "og:title",
        content: "About Sri Shobh Dental | Top Dentists in Tukkuguda, Hyderabad",
      },
      {
        property: "og:description",
        content:
          "Our philosophy: precision, legacy of trust and the highest standard of specialist dental care in Tukkuguda.",
      },
      { property: "og:url", content: "https://shobhdental.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Clinic"
        title="Where every smile"
        accent="finds a home"
        subtitle="Sri Shobh Dental & Implant Centre is Tukkuguda's premium specialist-driven dental home  advanced technology, ethical care and exceptional experiences."
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
