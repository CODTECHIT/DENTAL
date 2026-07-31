import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Gallery, Testimonials, ContactStrip } from "@/components/site/sections";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Smile Gallery | Before & After Dental Treatments in Tukkuguda" },
      {
        name: "description",
        content:
          "Real dental transformations at Sri Shobh Dental, Tukkuguda  smile designs, implants, teeth whitening & orthodontic results. See the difference our specialists make.",
      },
      {
        property: "og:title",
        content: "Smile Gallery | Before & After Dental Treatments in Tukkuguda",
      },
      {
        property: "og:description",
        content:
          "Real dental transformations from Tukkuguda's trusted clinic. Smile designs, implants, whitening & more.",
      },
      { property: "og:url", content: "https://shobhdental.com/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Smiles"
        title="Stories of"
        accent="transformation"
        subtitle="A glimpse at the confidence, comfort and craftsmanship behind every smile we've cared for at our Tukkuguda dental clinic."
      />
      <Gallery />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
