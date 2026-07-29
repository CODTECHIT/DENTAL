import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Team, Marquee } from "@/components/site/sections";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Specialists | Sri Shobh Dental & Implant Centre, Tukkuguda" },
      { name: "description", content: "Meet our expert team of dental specialists. All major dental specialties under one roof, providing advanced and ethical care." },
      { property: "og:title", content: "Meet Our Specialists - Sri Shobh Dental" },
      { property: "og:description", content: "Our team of experts dedicated to precision, care, and craftsmanship." },
    ],
  }),
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Team"
        title="Specialists you can"
        accent="trust"
        subtitle="Bringing together a team of highly qualified and experienced dental specialists to provide comprehensive care for your smile."
      />
      <Team />
      <Marquee />
    </>
  );
}
