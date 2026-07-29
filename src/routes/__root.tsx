import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer, MobileActionBar } from "@/components/site/Footer";
import { ScrollProgress, FloatingPhone, FloatingWhatsApp, useReveal } from "@/components/site/hooks";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-medium text-white shadow-gold">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-medium text-white shadow-gold">Try again</button>
          <a href="/" className="rounded-full border border-input px-6 py-2.5 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sri Shobh Dental & Implant Centre | Tukkuguda's Trusted Dental Clinic" },
      { name: "description", content: "Premium specialist dental care in Tukkuguda. Dental implants, smile design, root canal, aligners, laser dentistry & more. Book your appointment today." },
      { name: "author", content: "Sri Shobh Dental & Implant Centre" },
      { property: "og:title", content: "Sri Shobh Dental & Implant Centre" },
      { property: "og:description", content: "Advanced, ethical & patient-centred dental care in Tukkuguda, Telangana." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function OpeningAnimation() {
  const [show, setShow] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // Only show animation once per session to avoid annoying users
    const hasSeen = sessionStorage.getItem("hasSeenOpeningAnimation");
    if (hasSeen) {
      setShow(false);
      return;
    }
    sessionStorage.setItem("hasSeenOpeningAnimation", "true");

    const timer1 = setTimeout(() => setAnimatingOut(true), 1500);
    const timer2 = setTimeout(() => setShow(false), 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-all duration-700 ease-in-out ${
        animatingOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>
        <img
          src="/logo.jpg"
          alt="Sri Shobh Dental"
          className="relative h-32 sm:h-48 w-auto object-contain animate-reveal"
        />
      </div>
    </div>
  );
}

function SiteLayout() {
  useReveal();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <OpeningAnimation />
      <ScrollProgress />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
      <FloatingPhone />
      <FloatingWhatsApp />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
