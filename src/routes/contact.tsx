import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Contact, Marquee } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Book Appointment | Dentist in Tukkuguda | Sri Shobh Dental & Implant Centre" },
      {
        name: "description",
        content:
          "Schedule your visit to Sri Shobh Dental in Tukkuguda. Call 8686325269, WhatsApp, or book online. Same-day emergency appointments available. Mon-Sat 10AM-9PM.",
      },
      {
        property: "og:title",
        content: "Book Appointment | Dentist in Tukkuguda | Sri Shobh Dental & Implant Centre",
      },
      {
        property: "og:description",
        content:
          "Reach Tukkuguda's trusted specialist dental clinic. Call, WhatsApp, email or visit. Same-day appointments available.",
      },
      { property: "og:url", content: "https://shobhdental.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin Your Journey"
        title="Your perfect smile"
        accent="awaits"
        subtitle="Book a consultation at our Tukkuguda dental clinic — our specialists respond within a few hours."
      />
      <Contact />
      <Marquee />
    </>
  );
}
