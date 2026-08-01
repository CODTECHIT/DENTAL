import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Team, Marquee } from "@/components/site/sections";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Meet Our Dental Specialists | 7 MDS Doctors in Tukkuguda" },
      {
        name: "description",
        content:
          "7 MDS specialists under one roof in Tukkuguda  prosthodontist, endodontist orthodontist, periodontist, pedodontist oral surgeon & radiologist. Expert dental care for your smile.",
      },
      { property: "og:title", content: "Meet Our Dental Specialists | 7 MDS Doctors in Tukkuguda" },
      {
        property: "og:description",
        content:
          "Our team of 7 MDS dental specialists in Tukkuguda dedicated to precision, care and craftsmanship.",
      },
      { property: "og:url", content: "https://shobhdental.com/team" },
      { property: "og:image", content: "https://shobhdental.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meet Our Dental Specialists | 7 MDS Doctors in Tukkuguda" },
      {
        name: "twitter:description",
        content:
          "7 MDS specialists under one roof in Tukkuguda - prosthodontist, endodontist, orthodontist, periodontist, pedodontist, oral surgeon & radiologist.",
      },
      { name: "twitter:image", content: "https://shobhdental.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/team" }],
  }),
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Team"
        title="Specialists you can"
        accent="trust"
        subtitle="Bringing together a team of highly qualified and experienced dental specialists in Tukkuguda to provide comprehensive care for your smile."
      />
      <Team />
      <Marquee />
    </>
  );
}
