import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHero, Services, WhyChoose, Marquee, ContactStrip } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "15+ Dental Services in Tukkuguda | Sri Shobh Dental & Implant Centre" },
      {
        name: "description",
        content:
          "Complete dental care in Tukkuguda, Hyderabad  dental implants, RCT, Invisalign, teeth whitening, laser gum treatment, pediatric dentistry, zirconia crowns & more by MDS specialists.",
      },
      {
        property: "og:title",
        content: "15+ Dental Services in Tukkuguda | Sri Shobh Dental & Implant Centre",
      },
      {
        property: "og:description",
        content:
          "Comprehensive specialist dental care in Tukkuguda: implants, aligners, cosmetic, laser, pediatric, surgical and preventive dentistry.",
      },
      { property: "og:url", content: "https://shobhdental.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://shobhdental.com/services" }],
  }),
});

function ServicesPage() {
  const matches = useRouterState({ select: (s) => s.matches });
  const isDetailView = matches.some((m) => m.routeId === "/services/$slug");

  if (isDetailView) return <Outlet />;

  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Every treatment,"
        accent="crafted with care"
        subtitle="From routine check-ups to full-mouth rehabilitation  15+ specialist services in Tukkuguda delivered with modern technology and compassion."
      />
      <Services />
      <WhyChoose />
      <Marquee />
      <ContactStrip />
    </>
  );
}
