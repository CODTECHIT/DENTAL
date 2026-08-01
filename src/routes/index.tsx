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
  Faq,
  Contact,
  Testimonials,
} from "@/components/site/sections";
import { faqs } from "@/components/site/data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Dentist in Tukkuguda | Sri Shobh Dental & Implant Centre" },
      {
        name: "description",
        content:
          "Tukkuguda's top-rated dental clinic. Implants, RCT, Invisalign & smile designing by MDS specialists. Call 86863 25269.",
      },
      {
        property: "og:title",
        content: "Dentist in Tukkuguda | Sri Shobh Dental & Implant Centre",
      },
      {
        property: "og:description",
        content:
          "Tukkuguda's top-rated dental clinic. Implants, root canal, Invisalign & smile designing by MDS specialists. Call 86863 25269.",
      },
      { property: "og:url", content: "https://shobhdental.com/" },
      { property: "og:image", content: "https://shobhdental.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dentist in Tukkuguda | Sri Shobh Dental & Implant Centre",
      },
      {
        name: "twitter:description",
        content:
          "Tukkuguda's top-rated dental clinic. Implants, RCT, Invisalign & smile designing by MDS specialists. Call 86863 25269.",
      },
      { name: "twitter:image", content: "https://shobhdental.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/" }],
  }),
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
      <Faq />
      <Contact />
    </>
  );
}
