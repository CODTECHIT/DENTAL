import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHero, Services, WhyChoose, Marquee, ContactStrip } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services | Sri Shobh Dental & Implant Centre" },
      { name: "description", content: "15+ specialist dental services  implants, smile designing, RCT, Invisalign, laser dentistry, pediatric care & more, all under one trusted roof." },
      { property: "og:title", content: "Dental Services in Tukkuguda  Sri Shobh Dental" },
      { property: "og:description", content: "Comprehensive specialist dental care: implants, aligners, cosmetic, laser, pediatric, surgical and preventive dentistry." },
    ],
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
        subtitle="From routine check-ups to full-mouth rehabilitation  15+ specialist services delivered with modern technology and compassion."
      />
      <Services />
      <WhyChoose />
      <Marquee />
      <ContactStrip />
    </>
  );
}
