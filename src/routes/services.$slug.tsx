import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone, MessageCircle, Calendar } from "lucide-react";
import { services, PHONE, WHATSAPP } from "@/components/site/data";
import { PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/services/$slug")({
  notFoundComponent: () => (
    <section className="py-32 text-center">
      <h1 className="text-3xl font-display font-semibold text-ink mb-4">Service not found</h1>
      <Link to="/services" className="text-gold hover:underline">← Back to all services</Link>
    </section>
  ),
  component: ServiceDetailPage,
  head: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    return {
      meta: [
        { title: `${service?.name ?? "Service"} | Sri Shobh Dental & Implant Centre` },
        { name: "description", content: service?.detailContent?.slice(0, 160) ?? "" },
      ],
    };
  },
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) throw notFound();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={service.name}
        subtitle={service.desc}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gold hover:underline mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to all services
          </Link>

          <div className="aspect-video rounded-2xl overflow-hidden bg-ink/5 mb-10">
            <img src={service.img} alt={service.name} width={800} height={600} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-ink/80 leading-relaxed text-justify">{service.detailContent}</p>
          </div>

          <div className="mt-12 p-6 md:p-8 bg-white rounded-2xl border border-border shadow-soft">
            <h3 className="font-display text-xl font-semibold text-ink mb-6">Interested in this treatment?</h3>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-full font-semibold text-sm hover:bg-gold-dark transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-semibold text-sm hover:bg-green-700 transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-full font-semibold text-sm hover:bg-ink/80 transition-colors">
                <Calendar className="w-4 h-4" /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
