import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Calendar, Menu, X } from "lucide-react";
import { PHONE, WHATSAPP, EMAIL, ADDRESS_SHORT, navLinks } from "./data";

function TopBar() {
  return (
    <div className="hidden md:block bg-ink text-white/90 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-gold transition-colors"><Phone className="w-3.5 h-3.5 text-gold" /> {PHONE}</a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors"><MessageCircle className="w-3.5 h-3.5 text-gold" /> {PHONE}</a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gold transition-colors"><Mail className="w-3.5 h-3.5 text-gold" /> {EMAIL}</a>
        </div>
        <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gold" /> {ADDRESS_SHORT}</div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-40 transition-all rounded-b-2xl lg:rounded-b-3xl border-b-[3px] border-gold shadow-md ${scrolled ? "bg-white/95 backdrop-blur" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 py-1 md:py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center justify-start gap-3 z-10">
            <img src="/logo.jpg" alt="Sri Shobh Dental Logo" className="h-[50px] sm:h-[58px] lg:h-[72px] w-auto object-contain shrink-0" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="text-sm font-semibold text-ink/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[3px] after:rounded after:bg-gold after:transition-all after:w-0 hover:after:w-full data-[status=active]:text-gold data-[status=active]:after:w-full"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 justify-self-end lg:justify-self-auto">
            <Link to="/contact" className="hidden sm:inline-flex items-center gap-2 bg-gradient-gold text-white font-medium text-sm px-5 py-2.5 rounded-full shadow-gold hover:scale-105 transition-transform">
              <Calendar className="w-4 h-4" /> Book Appointment
            </Link>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="lg:hidden p-2.5 rounded-xl border-[2px] border-gold bg-ink text-gold hover:bg-ink/90 transition-colors shadow-sm flex items-center justify-center">
              {open ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white animate-reveal">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: true }}
                  className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-gold-soft data-[status=active]:bg-gold-soft data-[status=active]:text-gold-dark"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
