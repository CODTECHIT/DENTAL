import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Phone, MessageCircle, Mail, MapPin, Calendar, ChevronRight, ArrowRight,
  ShieldCheck, Sparkles, HeartPulse, Award, Clock, CheckCircle2, Star, Quote, User
} from "lucide-react";
import clinic from "@/assets/clinic.jpg";
import sImplant from "@/assets/s-implant.jpg";
import sSmile from "@/assets/s-smile.jpg";
import {
  PHONE, WHATSAPP, EMAIL, ADDRESS_FULL,
  services, whyChoose, highlights, galleryImgs, specialists, GalleryItem
} from "./data";
import { Counter, useTilt } from "./hooks";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative bg-ink text-white">
      {/* 1. Hero Main Video Banner - Video is contained strictly within this banner */}
      <div className="relative overflow-hidden min-h-[75vh] sm:min-h-[80vh] lg:min-h-[88vh] flex items-center">
        {/* Background Cinematic Video */}
        <div className="absolute inset-0 bg-ink">
          <video
            src="/Cinematic_second_dental_clin.webm"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-[70%_center] sm:object-[65%_center] brightness-[1.08] contrast-[1.05]"
          />
          {/* Soft left-to-right fade: dark tint only behind text on left, fading to 100% transparent so video is fully visible, vivid & bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-transparent sm:from-ink/70 sm:via-ink/30 sm:to-transparent" />
          {/* Subtle top & bottom edge blending without darkening video */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 w-full z-10">
          <div className="max-w-2xl lg:max-w-3xl animate-reveal">
            <div className="inline-flex items-center gap-2.5 bg-ink/70 backdrop-blur-md border border-gold/40 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-gold mb-6 sm:mb-8 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="font-semibold tracking-wide uppercase text-[11px] sm:text-xs">Excellence in Dentistry • Tukkuguda</span>
            </div>

            <h1 className="font-display font-medium text-4xl sm:text-6xl md:text-7xl xl:text-[5rem] leading-[1.08] sm:leading-[1.03] text-white drop-shadow-lg">
              Perfecting harmony <br className="hidden sm:block" />
              and confidence in <br className="hidden sm:block" />
              every radiant <span className="italic-accent text-gold">smile.</span>
            </h1>

            <p className="mt-5 sm:mt-8 max-w-xl text-white/90 text-sm sm:text-lg md:text-xl leading-relaxed font-light drop-shadow">
              Advanced, specialist-driven dental care in Tukkuguda  where craftsmanship meets modern technology to deliver results that last.
            </p>

            <div className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-5">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 bg-gradient-gold text-white font-semibold px-6 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" /> <span>Request an Appointment</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 text-white bg-white/10 backdrop-blur-md border border-white/25 hover:border-gold hover:text-gold hover:bg-white/15 font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base shadow-sm">
                Explore Services
              </Link>
            </div>
          </div>


        </div>
      </div>

      {/* 2. Solid Stats Strip Section - Cleanly below video on dark ink background */}
      <div className="relative bg-ink border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
          {[
            { n: 10, s: "+", l: "Months Serving Tukkuguda" },
            { n: 15, s: "+", l: "Specialist Services" },
            { n: 1000, s: "+", l: "Smiles Cared For" },
            { n: 4, s: ".7", l: "Patient Rating" },
          ].map((s, i) => (
            <div key={s.l} className={`py-8 md:py-10 text-center ${i > 0 ? "md:border-l border-white/10" : ""} ${i % 2 === 1 ? "border-l border-white/10 md:border-l" : ""}`}>
              <div className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold">
                <Counter to={s.n} /><span className="text-gold">{s.s}</span>
              </div>
              <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/70 font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Highlight Strip */}
      <div className="relative bg-ink border-b border-white/10 py-6 sm:py-8 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl md:rounded-full px-5 sm:px-8 py-5 sm:py-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 shadow-xl">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-3.5 sm:justify-center group">
                <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gradient-gold group-hover:border-transparent transition-all duration-300">
                  <h.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white/95 leading-snug">{h.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE HERO (for subpages) ---------------- */
export function PageHero({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent?: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img src={clinic} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/85 to-ink" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 md:py-28 text-center animate-reveal">
        <div className="eyebrow justify-center text-gold">{eyebrow}</div>
        <h1 className="mt-4 font-display font-medium text-3xl sm:text-4xl md:text-6xl text-white leading-tight">
          {title} {accent && <span className="italic-accent text-gold">{accent}</span>}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-white/70 text-sm sm:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}

/* ---------------- PHILOSOPHY ---------------- */
export function Philosophy() {
  const items = [
    { title: "Precision & Innovation", body: "Every scanner, laser, and microscope serves one purpose  better outcomes with a seamless experience for you.", img: sImplant },
    { title: "Legacy of Trust", body: "With every consultation, treatment, and smile restored, we honour the trust our patients place in us.", img: clinic },
    { title: "Highest Standard", body: "A team of specialists trained in modern protocols, unmatched sterilisation standards, and tooth-preservation-first care.", img: sSmile },
  ];
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="eyebrow justify-center">Our Philosophy</div>
          <h2 className="mt-4 font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Experience a whole new <span className="italic-accent">kind of smile</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Traditional craftsmanship meets cutting-edge technology to deliver dentistry with natural results and enduring benefits.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 space-y-12 sm:space-y-16 md:space-y-24">
          {items.map((it, i) => (
            <div key={it.title} className={`reveal grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-14 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-gold opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-gold ring-1 ring-gold/20">
                  <img src={it.img} alt={it.title} loading="lazy" decoding="async" className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="mt-2 md:mt-0">
                <div className="text-xs font-bold tracking-[0.3em] uppercase text-gold-dark">0{i + 1}</div>
                <h3 className="mt-2 sm:mt-3 font-display font-medium text-xl sm:text-2xl md:text-4xl text-ink leading-tight">{it.title}</h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink/70 leading-relaxed max-w-md">{it.body}</p>
                <Link to="/about" className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors group/link">
                  Know more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOUNDER QUOTE ---------------- */
export function FounderQuote() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={clinic} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center reveal">
        <Quote className="mx-auto w-8 sm:w-10 h-8 sm:h-10 text-gold" />
        <blockquote className="mt-4 font-display italic text-xl sm:text-2xl md:text-4xl leading-snug text-white">
          Dentistry isn't just about fixing teeth. It's about restoring confidence, comfort and trust  patient by patient, smile by smile.
        </blockquote>
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 text-sm">
          <span className="w-8 sm:w-10 h-px bg-gold" />
          <span className="tracking-[0.2em] uppercase text-gold text-[10px] sm:text-xs">Sri Shobh Dental  Founding Vision</span>
          <span className="w-8 sm:w-10 h-px bg-gold" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE CARD with tilt ---------------- */
function ServiceCard({ name, desc, img, slug, index }: { name: string; desc: string; img: string; slug: string; index: number }) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <Link to="/services/$slug" params={{ slug }}>
      <div
        ref={ref}
        className="reveal group bg-white border border-border rounded-2xl overflow-hidden hover:border-gold hover:shadow-gold transition-[border,box-shadow,transform] duration-500 flex flex-col h-full cursor-pointer"
        style={{ transitionDelay: `${(index % 4) * 60}ms` }}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gold-soft/40">
          <img src={img} alt={name} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[10px] font-black text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
        <div className="p-4 md:p-5 text-center flex-1 flex flex-col">
          <h3 className="text-sm md:text-base font-bold text-ink leading-tight">{name}</h3>
          <p className="mt-2 text-xs md:text-[13px] text-muted-foreground leading-relaxed flex-1">{desc}</p>
          <div className="mt-3 inline-flex items-center justify-center gap-1 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ---------------- SERVICES ---------------- */
export function Services({ limit }: { limit?: number } = {}) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="eyebrow justify-center">Excellence in Dentistry</div>
          <h2 className="mt-4 font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Comprehensive <span className="italic-accent">specialist</span> care
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">Everything your family needs  under one trusted roof.</p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {list.map((s, i) => (
            <ServiceCard key={s.name} name={s.name} desc={s.desc} img={s.img} slug={s.slug} index={i} />
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center reveal">
            <Link to="/services" className="inline-flex items-center gap-2 bg-gradient-gold text-white font-semibold px-8 py-3.5 rounded-full shadow-gold hover:scale-[1.03] transition-transform text-sm sm:text-base">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
export function WhyChoose() {
  return (
    <section id="why" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal bg-gold-soft/70 border border-gold/25 rounded-3xl p-6 sm:p-8 md:p-10">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-black text-ink">
            Why Choose <span className="text-gold-dark">Sri Shobh Dental & Implant Centre?</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {whyChoose.map((w, i) => (
              <div key={w.title} className="reveal text-center group" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mx-auto w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white shadow-soft flex items-center justify-center group-hover:bg-gradient-gold group-hover:-translate-y-1 transition-all">
                  <w.icon className="w-6 sm:w-7 h-6 sm:h-7 text-gold-dark group-hover:text-white transition-colors" />
                </div>
                <div className="mt-3 text-xs sm:text-sm font-bold text-ink leading-tight">{w.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-8 sm:gap-12 items-stretch">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
          <img src={clinic} alt="Sri Shobh Dental clinic interior" width={1400} height={1000} loading="lazy" decoding="async" className="relative rounded-2xl sm:rounded-3xl w-full h-full min-h-[260px] sm:min-h-[320px] object-cover shadow-gold ring-1 ring-gold/20" />
        </div>
        <div className="reveal bg-white rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8 md:p-10">
          <div className="eyebrow">About the Clinic</div>
          <h2 className="mt-3 font-display font-medium text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
            A premium, <span className="italic-accent">specialist-driven</span> dental home
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Sri Shobh Dental & Implant Centre is committed to advanced, ethical and personalised care  creating healthy, confident smiles with exceptional patient experiences.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBlock icon={Sparkles} title="Our Vision" body="To be Tukkuguda's most trusted dental clinic, delivering ethical, advanced and patient-centred care." />
            <InfoBlock icon={HeartPulse} title="Our Mission" body="To provide comprehensive specialist dental care with advanced technology and compassion." />
            <InfoBlock icon={Award} title="Our Core Values" body="Excellence • Integrity • Compassion • Innovation • Patient-Centred Care • Safety • Continuous Learning" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon: Icon, title, body }: { icon: typeof Phone; title: string; body: string }) {
  return (
    <div className="bg-gold-soft/50 rounded-2xl p-4 border border-gold/20 hover:border-gold hover:-translate-y-1 transition-all">
      <div className="flex items-center gap-2 text-gold-dark font-bold text-sm">
        <Icon className="w-4 h-4" /> {title}
      </div>
      <p className="mt-2 text-xs text-ink/80 leading-relaxed">{body}</p>
    </div>
  );
}

/* ---------------- CONTACT STRIP ---------------- */
export function ContactStrip() {
  return (
    <section className="py-12 sm:py-16 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal bg-gold-soft/80 border border-gold/25 rounded-3xl p-5 sm:p-6 shadow-soft grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-center">
          <StripItem icon={MapPin} title="Our Location" body={ADDRESS_FULL} />
          <StripItem icon={Phone} title="Call Us" body={PHONE} href={`tel:${PHONE}`} />
          <StripItem icon={MessageCircle} title="WhatsApp" body={PHONE} href={`https://wa.me/${WHATSAPP}`} />
          <Link to="/contact" className="w-full sm:w-auto justify-self-stretch lg:justify-self-end inline-flex items-center justify-center gap-2 bg-gradient-gold text-white font-semibold px-6 py-3.5 rounded-full shadow-gold hover:scale-[1.03] transition-transform text-sm sm:text-base">
            <Calendar className="w-4 h-4" /> Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

function StripItem({ icon: Icon, title, body, href }: { icon: typeof Phone; title: string; body: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-3 min-w-0">
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-gold-dark" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-bold text-gold-dark uppercase tracking-wider">{title}</div>
        <div className="text-xs md:text-[13px] text-ink font-medium leading-snug">{body}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:opacity-80 transition-opacity">{inner}</a> : inner;
}

/* ---------------- MARQUEE ---------------- */
export function Marquee() {
  const items = ["Painless Procedures", "Sterile Environment", "Latest Equipment", "Certified Specialists", "Family Friendly", "Emergency Care", "Transparent Pricing", "Digital X-Rays"];
  const row = [...items, ...items];
  return (
    <div className="bg-ink text-white py-4 sm:py-5 overflow-hidden border-y border-gold/30">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm shrink-0">
            <span className="text-gold text-base sm:text-lg">✦</span>
            <span className="font-display italic tracking-wide text-white/95 text-sm sm:text-base md:text-lg">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery({ limit }: { limit?: number } = {}) {
  const imgs = limit ? galleryImgs.slice(0, limit) : galleryImgs;
  const [active, setActive] = useState<GalleryItem | null>(null);
  return (
    <section id="gallery" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="eyebrow justify-center">Patient Smiles</div>
          <h2 className="mt-4 font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Stories of <span className="italic-accent">transformation</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">A glimpse at the smiles we've cared for and crafted.</p>
        </div>
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {imgs.map((item, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActive(item)}
              className="reveal group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-zoom-in text-left shadow-soft hover:shadow-gold transition-all duration-500"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.type === 'video' ? (
                <video src={item.src} preload="metadata" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" muted playsInline loop autoPlay />
              ) : (
                <img src={item.src} alt="" width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3.5 left-4 text-white text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">Sri Shobh Dental • Tukkuguda</div>
            </button>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center reveal">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-gold-dark hover:text-gold font-semibold text-sm sm:text-base">
              View full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] bg-ink/90 backdrop-blur flex items-center justify-center p-4 animate-reveal cursor-zoom-out"
        >
          {active.type === 'video' ? (
            <video src={active.src} controls autoPlay className="max-w-full max-h-full rounded-2xl shadow-gold ring-1 ring-gold/40" />
          ) : (
            <img src={active.src} alt="" loading="lazy" decoding="async" className="max-w-full max-h-full rounded-2xl shadow-gold ring-1 ring-gold/40" />
          )}
        </div>
      )}
    </section>
  );
}

/* ---------------- TESTIMONIALS (new interactive section) ---------------- */
export function Testimonials() {
  const items = [
    { name: "Priya S.", text: "The team made my implants painless and my new smile feels completely natural. Truly caring specialists." },
    { name: "Rahul K.", text: "Cleanest, most modern clinic in Tukkuguda. Explained every step and pricing upfront. Highly recommended." },
    { name: "Anjali M.", text: "My kids love Dr. and the aligners transformed my confidence. Warm, professional and gentle throughout." },
    { name: "Vikram T.", text: "Emergency root canal on a Sunday  they answered, treated me the same evening. Life savers." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <div className="eyebrow justify-center">Patient Voices</div>
          <h2 className="mt-4 font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Loved by <span className="italic-accent">every smile</span> we treat
          </h2>
        </div>

        <div className="mt-10 relative reveal">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gold/20 shadow-soft p-6 sm:p-8 md:p-12 min-h-[220px] sm:min-h-[240px] flex flex-col justify-center">
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 sm:w-5 h-4 sm:h-5 fill-current" />)}
            </div>
            <p key={i} className="mt-5 sm:mt-6 font-display italic text-base sm:text-lg md:text-2xl text-ink leading-snug animate-reveal">
              "{items[i].text}"
            </p>
            <div className="mt-5 sm:mt-6 text-xs sm:text-sm font-semibold text-gold-dark tracking-wider uppercase"> {items[i].name}</div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${k === i ? "bg-gold w-8" : "bg-gold/30 w-2 hover:bg-gold/60"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-14 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="eyebrow justify-center">Begin Your Journey</div>
          <h2 className="mt-4 font-display font-medium text-3xl sm:text-4xl md:text-5xl text-ink leading-tight">
            Your perfect smile <span className="italic-accent">awaits</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">Schedule a consultation with our specialists  we'll be in touch within hours.</p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="reveal lg:col-span-2 space-y-4">
            <ContactCard icon={MapPin} title="Our Location" body={ADDRESS_FULL} />
            <ContactCard icon={Phone} title="Call Us" body={PHONE} href={`tel:${PHONE}`} />
            <ContactCard icon={MessageCircle} title="WhatsApp" body={PHONE} href={`https://wa.me/${WHATSAPP}`} />
            <ContactCard icon={Mail} title="Email" body={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactCard icon={Clock} title="Working Hours" body="Mon – Sat: 10:00 AM – 9:00 PM • Sun: By appointment" />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const d = new FormData(e.currentTarget);
              const msg = `Hi, I'd like to book an appointment.%0A%0AName: ${d.get("name")}%0APhone: ${d.get("phone")}%0AService: ${d.get("service")}%0AMessage: ${d.get("message")}`;
              window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="reveal lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl shadow-soft p-6 sm:p-8 md:p-10 border border-border"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
            </div>
            <div className="mt-4 sm:mt-5">
              <label className="block text-xs font-semibold text-ink/70 mb-1.5">Service Needed</label>
              <select name="service" className="w-full h-11 sm:h-12 rounded-lg border border-border bg-background px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold">
                <option>General Consultation</option>
                {services.map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
            </div>
            <div className="mt-4 sm:mt-5">
              <label className="block text-xs font-semibold text-ink/70 mb-1.5">Message</label>
              <textarea name="message" rows={4} className="w-full rounded-lg border border-border bg-background px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold" placeholder="Tell us briefly about your concern..." />
            </div>
            <button type="submit" className="mt-6 sm:mt-7 group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-white font-semibold px-8 py-4 rounded-full shadow-gold hover:scale-[1.02] transition-transform text-sm sm:text-base">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5" /> Request Appointment
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {sent ? (
              <p className="mt-4 text-xs sm:text-sm text-gold-dark font-semibold flex items-center gap-1.5 animate-reveal">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Opening WhatsApp  we'll respond shortly!
              </p>
            ) : (
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold" /> We'll get back to you within a few hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, body, href }: { icon: typeof Phone; title: string; body: string; href?: string }) {
  const inner = (
    <div className="group bg-white rounded-2xl border border-border p-5 hover:border-gold hover:shadow-soft hover:-translate-y-0.5 transition-all flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-gold-soft flex items-center justify-center group-hover:bg-gradient-gold transition-colors shrink-0">
        <Icon className="w-5 h-5 text-gold-dark group-hover:text-white transition-colors" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-gold-dark font-semibold">{title}</div>
        <div className="mt-1 text-sm text-ink font-medium leading-snug">{body}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-ink/70 mb-1.5">{label}</span>
      <input {...props} className="w-full h-11 sm:h-12 rounded-lg border border-border bg-background px-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold" />
    </label>
  );
}

export function Team() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink font-semibold mb-6">
            Meet Our <span className="text-gold italic font-serif">Specialists</span>
          </h2>
          <p className="text-lg text-ink/70">
            All major dental specialties under one roof, presenting a lineup of experts dedicated to precision, care, and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((doc, i) => (
            <div key={doc.name} className="group bg-white rounded-2xl shadow-soft border border-border hover:border-gold/30 hover:shadow-gold transition-all duration-500 flex flex-col h-full overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-square relative overflow-hidden bg-ink/5">
                {/* @ts-ignore */}
                {doc.image ? (
                  /* @ts-ignore */
                  <img src={doc.image} alt={doc.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-16 h-16 text-ink/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="text-gold font-medium mb-1 drop-shadow-md">{doc.qualifications}</div>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-semibold drop-shadow-md">{doc.name}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <div className="text-base font-semibold text-ink/90">
                    {doc.role} 
                    {/* @ts-ignore */}
                    {doc.subtitle && <span className="text-ink/60 italic font-normal ml-1">({doc.subtitle})</span>}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gold-dark mt-5 mb-2 font-semibold">Department</div>
                  <div className="text-sm text-ink/80">{doc.department}</div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border">
                  <div className="text-xs uppercase tracking-widest text-ink/50 mb-4">Areas of Expertise</div>
                  <ul className="space-y-3">
                    {doc.expertise.map(exp => (
                      <li key={exp} className="flex items-start gap-3 text-sm text-ink/70">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
