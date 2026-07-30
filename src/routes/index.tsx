import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Philosophy,
  Services,
  WhyChoose,
  Marquee,
  About,
  FounderQuote,
  ContactStrip,
  Gallery,
  Contact,
  Testimonials,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Best Dental Clinic in Tukkuguda | Sri Shobh Dental & Implant Centre" },
      {
        name: "description",
        content:
          "Sri Shobh Dental — Tukkuguda's top-rated dental clinic offering implants, RCT, Invisalign, smile designing & laser dentistry by MDS specialists. Call 8686325269.",
      },
      {
        property: "og:title",
        content: "Best Dental Clinic in Tukkuguda | Sri Shobh Dental & Implant Centre",
      },
      {
        property: "og:description",
        content:
          "Tukkuguda's most trusted dental clinic — implants, RCT, Invisalign, smile design & laser dentistry by specialist doctors. Book your appointment today.",
      },
      { property: "og:url", content: "https://shobhdental.com/" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/" }],
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
