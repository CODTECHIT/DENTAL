import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Gallery, Testimonials, ContactStrip } from "@/components/site/sections";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Smile Gallery | Sri Shobh Dental & Implant Centre" },
      { name: "description", content: "Explore real transformations  smile designs, implants, whitening and orthodontic results crafted at Sri Shobh Dental, Tukkuguda." },
      { property: "og:title", content: "Smile Gallery  Sri Shobh Dental" },
      { property: "og:description", content: "Stories of transformation from patients we've cared for at Tukkuguda's trusted dental clinic." },
    ],
  }),
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Smiles"
        title="Stories of"
        accent="transformation"
        subtitle="A glimpse at the confidence, comfort and craftsmanship behind every smile we've cared for."
      />
      <Gallery />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
