import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Contact, Marquee } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment | Sri Shobh Dental, Tukkuguda" },
      { name: "description", content: "Book your appointment at Sri Shobh Dental & Implant Centre, Tukkuguda. Call, WhatsApp, email or fill the form  we respond within hours." },
      { property: "og:title", content: "Contact Sri Shobh Dental & Implant Centre" },
      { property: "og:description", content: "Reach us anytime  Tukkuguda's trusted specialist dental clinic. Painless, punctual, patient-centred." },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin Your Journey"
        title="Your perfect smile"
        accent="awaits"
        subtitle="Book a consultation  our specialists respond within a few hours."
      />
      <Contact />
      <Marquee />
    </>
  );
}
