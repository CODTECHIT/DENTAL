# 06 — Technical SEO: Image SEO, XML Sitemaps, Robots.txt, Core Web Vitals

---

## 15. Image SEO

### Naming convention (all new uploads)
`{slug}-{descriptor}-{viewport}.webp`
- Lowercase, hyphens, no spaces, ≤ 60 chars, keyword first.
- Examples:
  - `dental-implants-tukkuguda.jpg` → `dental-implant-treatment-tukkuguda.webp`
  - `root-canal-clinic-maheshwaram.webp`
  - `invisalign-consultation-adibatla.webp`
  - `smile-designing-before-after-tukkuguda.webp`
  - `dentist-in-tukkuguda-clinic-front.webp`
  - `srishobh-dental-team-doctors.webp`

### Rename existing `src/assets` files before production export
| Current file | New filename |
|---|---|
| hero.jpg | dentist-in-tukkuguda-dental-clinic-hero.webp |
| clinic.jpg | sri-shobh-dental-clinic-interior-tukkuguda.webp |
| og-image..png | sri-shobh-dental-og-image-1200x630.webp |
| img.jpeg | sri-shobh-dental-clinic-reception.webp |
| s-implant.jpg | dental-implants-tukkuguda.webp |
| s-rct.jpg | root-canal-treatment-tukkuguda.webp |
| s-crown.jpg | zirconia-ceramic-crown-tukkuguda.webp |
| s-whiten.jpg | teeth-whitening-tukkuguda.webp |
| s-braces.jpg | dental-braces-tukkuguda.webp |
| s-invisalign.jpg | invisalign-clear-aligner-tukkuguda.webp |
| s-wisdom.jpg | wisdom-tooth-removal-tukkuguda.webp |
| s-pedo.jpg | pediatric-dentistry-tukkuguda.webp |
| s-gum.jpg | gum-disease-treatment-tukkuguda.webp |
| s-laser.jpg | laser-dentistry-tukkuguda.webp |
| s-surgery.jpg | oral-surgery-tukkuguda.webp |
| s-trauma.jpg | emergency-dental-care-tukkuguda.webp |
| s-denture.jpg | dentures-full-mouth-rehab-tukkuguda.webp |
| s-veneer.jpg | dental-veneers-tukkuguda.webp |
| s-smile.jpg | smile-designing-tukkuguda.webp |
| s-preventive.jpg | preventive-dentistry-tukkuguda.webp |
| Dr Geeta.jpeg | dr-geeta-mamilla-pedodontist-tukkuguda.webp |
| Dr Hemanth.jpeg | dr-hemanth-oral-medicine-tukkuguda.webp |
| Dr Shiva Prasad.jpeg | dr-shiva-prasad-periodontist-tukkuguda.webp |
| dr santosh.jpeg | dr-santosh-oral-surgeon-tukkuguda.webp |
| Dr Ishitha.jpeg | dr-ishitha-endodontist-tukkuguda.webp |
| Dr Abhiram.jpeg | dr-abhiram-orthodontist-tukkuguda.webp |
| Sai akhil.jpeg | dr-sai-akhil-prosthodontist-tukkuguda.webp |

### Alt text formula
`{What the image shows} — {service} in {location} | Sri Shobh Dental`
- Hero: `Modern dental treatment room at Sri Shobh Dental, best dental clinic in Tukkuguda`
- Implant: `Titanium dental implant and ceramic crown — dental implants in Tukkuguda at Sri Shobh Dental`
- RCT: `Root canal treatment in progress — painless RCT in Tukkuguda at Sri Shobh Dental`
- Invisalign: `Invisalign clear aligners in Tukkuguda — Sri Shobh Dental & Implant Centre`
- Doctor photo: `Dr. Geeta Mamilla, pediatric dentist in Tukkuguda — Sri Shobh Dental`
- Do NOT stuff keywords; describe the image accurately, include location + brand once.
- Decorative images (icons, patterns) get `alt=""` (empty) so they don't clutter the index.

### Captions
Use `<figure>` + `<figcaption>` on every content image: `Fig 1. Digital smile simulation at Sri Shobh Dental, Tukkuguda`. Captions repeat location keywords naturally and help featured snippets.

### Format & delivery
- Serve **WebP/AVIF** with responsive `srcset`/`sizes`; convert current JPGs/PNGs (via sharp in build pipeline or a CDN like Cloudinary/Imgix).
- Compression: ≤ 150 KB for content images, ≤ 300 KB hero/OG.
- `loading="lazy"` on below-fold images; `fetchpriority="high"` + preload on hero LCP image only.
- `width`/`height` attributes on every image to prevent CLS.

---

## 16. XML Sitemap & Image Sitemap

### `public/sitemap.xml` (main, live example — extend as pages are added)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://shobhdental.com/</loc>
    <lastmod>2026-08-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://shobhdental.com/images/dentist-in-tukkuguda-dental-clinic-hero.webp</image:loc>
      <image:title>Best dental clinic in Tukkuguda — Sri Shobh Dental &amp; Implant Centre</image:title>
      <image:caption>Sri Shobh Dental &amp; Implant Centre, beside HP Petrol Bunk, Tukkuguda</image:caption>
    </image:image>
  </url>
  <url>
    <loc>https://shobhdental.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/team</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/services</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/services/dental-implants</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>https://shobhdental.com/images/dental-implants-tukkuguda.webp</image:loc>
      <image:title>Dental implants in Tukkuguda</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://shobhdental.com/services/root-canal-treatment</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/services/invisalign-clear-aligners</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/services/teeth-whitening</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/services/pediatric-dentistry</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ...repeat for all 16 service pages, /blog/{slug} posts, and /dentist-in-{area} pages -->
  <url>
    <loc>https://shobhdental.com/gallery</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://shobhdental.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

### Rules
- **One canonical URL per page** — never list the same URL twice with different params.
- Priority: homepage 1.0 → services 0.8–0.9 → areas 0.7 → blog 0.6.
- `lastmod` must update when content changes (wire to your CMS/SSR build automatically).
- Submit sitemap in **Google Search Console** (URL Inspection + Sitemaps) and **Bing Webmaster Tools**.
- For very large sites, split into `sitemap-index.xml` → `sitemap-services.xml`, `sitemap-blog.xml`, `sitemap-areas.xml`, `sitemap-images.xml`.

### Image sitemap
Add `<image:image>` blocks inside the main sitemap (shown above) — this is Google's recommended approach. Every WebP in `public/images/` should be listed once. Never list videos in the XML sitemap; use `VideoObject` JSON-LD instead for the clinic's mp4 files.

---

## 17. Robots.txt Recommendations

### `public/robots.txt`
```txt
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/
Disallow: /*?*

# Allow image crawling
User-agent: *
Allow: /images/

Sitemap: https://shobhdental.com/sitemap.xml
```

### Notes
- Do **not** block JS/CSS or the vite/nitro assets folder — modern rendering needs them.
- The site is SSR/pre-rendered (TanStack Start + Nitro): allow crawlers to see full HTML. Verify with Google's "View as Google" / URL Inspection → "View Crawled Page".
- Keep robots.txt short; no `noindex` in robots (use `<meta name="robots">` or `X-Robots-Tag` headers instead).
- Add `X-Robots-Tag: noindex, nofollow` for thank-you pages (post-form submission) to prevent thin duplicate pages.
- Confirm `sitemap.xml` line matches the actual file path after deploy.

---

## 18. Core Web Vitals Optimization Checklist

Targets (mobile): **LCP < 2.5s · INP < 200ms · CLS < 0.1**

### LCP (Largest Contentful Paint)
- [ ] Identify LCP element on homepage (likely the hero image). Optimize exactly that.
- [ ] Convert hero to WebP/AVIF, size to displayed pixels (e.g. 1200×675), target ≤ 200–300 KB.
- [ ] `fetchpriority="high"` + `<link rel="preload" as="image">` for the hero image.
- [ ] Serve text as HTML (no hero text as image); avoid `background-image` for the hero.
- [ ] Preconnect to image CDN / Google Fonts: `<link rel="preconnect" href="https://fonts.googleapis.com">` + `https://fonts.gstatic.com`.
- [ ] Self-host fonts (or subset) with `font-display: swap`; limit families/weights to 2.
- [ ] Server render critical content (this is a Nitro SSR build — keep `<Hero>` SSR-rendered, not client-only).

### INP (Interaction to Next Paint)
- [ ] Lazy-load below-fold images with `loading="lazy"` + `decoding="async"`.
- [ ] Bundle-size budget: audit with `npm run build` output; code-split route chunks (TanStack Router already does).
- [ ] React: memoize heavy components (`React.memo`), avoid inline functions in hot paths.
- [ ] Video files: the 8 mp4s in `/gallery` — lazy-load `<video preload="none">`, poster image + play button, never autoplay with audio.
- [ ] Long tasks: keep JS main-thread time under 200ms per task; defer non-critical libs (recharts only on pages that use it).

### CLS (Cumulative Layout Shift)
- [ ] Set `width` & `height` (or `aspect-ratio`) on every image and video.
- [ ] Reserve space for embeds: Google Maps iframe wrapper with fixed aspect ratio (e.g., `aspect-[4/3]`).
- [ ] Reserve min-height for accordions, marquees, and sliders (no layout jump on mount).
- [ ] Stable font metrics: `font-display: swap` + fixed icon/emoji widths; no late-injected banners.
- [ ] Test with Lighthouse mobile (target: Performance ≥ 90), PageSpeed Insights, and CrUX field data in GSC.

### Server & infrastructure
- [ ] HTTPS everywhere + HSTS; redirect `www` → apex (or apex → www, pick one, 301).
- [ ] Edge/CDN caching for static assets (immutable, 1 year) and HTML (short TTL + revalidation).
- [ ] Gzip/Brotli compression; HTTP/2 enabled.
- [ ] Reduce redirect chains; ensure no mixed content.
- [ ] Set up GSC + Bing WT + GA4 + Search Console sitemap submission.

### Ongoing monitoring
- [ ] Monthly Lighthouse/PSI report per template (home, service, blog, area).
- [ ] Watch GSC "Core Web Vitals" report for URL groups, not just homepage.
- [ ] Performance budget check in CI (`npx lighthouse-ci` optional) before deploys.
