import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Calendar } from "lucide-react";
import { PHONE, WHATSAPP, EMAIL, ADDRESS_SHORT, ADDRESS_FULL, services, navLinks } from "./data";

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/footerlogo.jpg"
              alt="Sri Shobh Dental & Implant"
              width={200}
              height={75}
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-white/70">Specialist Care - Perfect Smiles</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold mb-3">Our Services</div>
          <ul className="space-y-2 text-sm text-white/80">
            {services.slice(0, 6).map((s) => (
              <li key={s.name}>
                <Link to="/services" className="hover:text-gold transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-gold hover:underline">
                + View all
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold mb-3">Contact Us</div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" /> {PHONE}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-gold shrink-0" /> {PHONE}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" /> {EMAIL}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0" /> {ADDRESS_SHORT} - 501359
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/60 px-4">
        © 2026 Sri Shobh Dental & Implant Centre. All Rights Reserved. {ADDRESS_FULL}
        <div className="mt-1">
          Developed by{" "}
          <a
            href="https://codtechitsolutions.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gold hover:underline"
          >
            Cod Tech IT Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  const items = [
    { icon: Phone, label: "Call Now", href: `tel:${PHONE}` as const, ext: false },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP}` as const,
      ext: true,
    },
    { icon: Calendar, label: "Book", to: "/contact" as const, primary: true },
    {
      icon: MapPin,
      label: "Directions",
      href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS_FULL)}` as const,
      ext: true,
    },
  ] as const;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-4">
        {items.map((it) =>
          "to" in it ? (
            <Link
              key={it.label}
              to={it.to}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-semibold ${it.primary ? "btn-book text-white" : "text-ink"}`}
            >
              <it.icon className="w-4 h-4" />
              <span className="text-center leading-tight">{it.label}</span>
            </Link>
          ) : (
            <a
              key={it.label}
              href={it.href}
              target={it.ext ? "_blank" : undefined}
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-semibold text-ink"
            >
              <it.icon className="w-4 h-4" />
              <span className="text-center leading-tight">{it.label}</span>
            </a>
          ),
        )}
      </div>
    </div>
  );
}
