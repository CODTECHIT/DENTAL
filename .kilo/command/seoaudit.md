---
description: Run comprehensive SEO audit and health check on shobhdental.com
---

Analyze the current SEO health of the project at `C:\Users\MAHAJAN ASHOK\OneDrive\Desktop\dental`.

Read all route files in `src/routes/`, the root layout at `src/routes/__root.tsx`, the data file at `src/components/site/data.ts`, section components at `src/components/site/sections.tsx`, and check `public/` for sitemap and robots.

Produce a structured report with status badges (✅ PASS / ⚠️ WARN / ❌ FAIL) and specific file references for each check below.

### 1. Critical Technical SEO
- robots.txt exists in public/ with correct Sitemap directive
- sitemap.xml exists in public/ with all 21 URLs
- Canonical link tags present in every route head function
- JSON-LD Dentist schema present in __root.tsx
- MedicalService JSON-LD present in services.$slug.tsx
- noindex meta on 404 NotFoundComponent
- og:image set in root head
- og:url set on every page

### 2. On-Page Meta
- Every route has a unique location-optimized meta title
- Every route has a unique meta description with keyword + location + CTA
- Every route has og:title, og:description, og:url
- Every route has canonical link matching the page URL

### 3. Local SEO
- NAP data in data.ts is complete (name, address, phone, email, hours)
- JSON-LD geo coordinates present
- H1 headings contain location keyword (Tukkuguda/Hyderabad)
- Key section H2s contain location mentions

### 4. Content & Accessibility
- All img elements have non-empty alt attributes
- Gallery images have descriptive alt text
- Service detail descriptions are proper sentences

### 5. Performance
- loading="lazy" on non-hero images
- width/height attributes on loaded images

End the report with: SEO Health Score (X/30), remaining critical items, and quick wins.
