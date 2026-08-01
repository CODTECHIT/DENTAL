# 02 — JSON-LD Structured Data — Sri Shobh Dental & Implant Centre

> **Rules before implementing:**
> - Replace all `REPLACE_*` placeholders with verified real values.
> - `@id` strings must match the URL of the page the schema lives on (e.g., homepage → `https://shobhdental.com/#...`).
> - One `<script type="application/ld+json">` block per page (can hold multiple `@graph` nodes).
> - **Do NOT add `AggregateRating` until you have ≥ 5 genuine Google/verified reviews** (Google policy). Remove it if a review profile changes.
> - Validate after deploy: Rich Results Test + Schema Markup Validator (see file 08, checklist).

---

## 7a. Full `@graph` — homepage (Dentist + LocalBusiness + openingHours + founder + sameAs + FAQPage + Review + AggregateRating)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      "@id": "https://shobhdental.com/#dentist",
      "name": "Sri Shobh Dental & Implant Centre",
      "alternateName": "Sri Shobh Dental",
      "url": "https://shobhdental.com/",
      "logo": "https://shobhdental.com/og-image.jpg",
      "image": "https://shobhdental.com/clinic-photo.jpg",
      "description": "Best dental clinic in Tukkuguda, Maheshwaram, Hyderabad offering dental implants, root canal treatment, Invisalign clear aligners, braces, smile designing, teeth whitening, laser dentistry, pediatric dentistry and dental emergencies by MDS specialists.",
      "slogan": "Advanced, ethical & patient-centred dental care",
      "priceRange": "₹₹",
      "telephone": "+918686325269",
      "email": "srishobhdental@gmail.com",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Net Banking",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Srisailam Highway, beside HP Petrol Bunk, opposite JK Supermarket",
        "addressLocality": "Tukkuguda",
        "addressRegion": "Telangana",
        "addressCountry": "IN",
        "postalCode": "501359"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.2408,
        "longitude": 78.2939
      },
      "hasMap": "https://www.google.com/maps/search/Sri+Shobh+Dental+Tukkuguda",
      "areaServed": [
        { "@type": "City", "name": "Tukkuguda" },
        { "@type": "City", "name": "Maheshwaram" },
        { "@type": "City", "name": "Adibatla" },
        { "@type": "City", "name": "Shamshabad" },
        { "@type": "City", "name": "LB Nagar" },
        { "@type": "City", "name": "Hyderabad" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "10:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "REPLACE_OPENING",
          "closes": "REPLACE_CLOSING"
        }
      ],
      "founder": { "@type": "Person", "@id": "https://shobhdental.com/#dr-akhil" },
      "employee": [
        { "@type": "Person", "name": "Dr. Sai Akhil Khadkekar", "jobTitle": "Prosthodontist & Implantologist" },
        { "@type": "Person", "name": "Dr. Ishitha", "jobTitle": "Endodontist" },
        { "@type": "Person", "name": "Dr. Shiva Prasad", "jobTitle": "Periodontist & Oral Implantologist" },
        { "@type": "Person", "name": "Dr. Abhiram", "jobTitle": "Orthodontist" },
        { "@type": "Person", "name": "Dr. Geeta Mamilla", "jobTitle": "Pedodontist" },
        { "@type": "Person", "name": "Dr. Santosh Vemulapalli", "jobTitle": "Oral & Maxillofacial Surgeon" },
        { "@type": "Person", "name": "Dr. Hemanth", "jobTitle": "Oral Medicine & Radiologist" }
      ],
      "medicalSpecialty": [
        "Prosthodontics", "Endodontics", "Periodontics", "Orthodontics",
        "PediatricDentistry", "OralSurgery", "Implantology", "CosmeticDentistry"
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Dental Implants" },
        { "@type": "MedicalProcedure", "name": "Root Canal Treatment" },
        { "@type": "MedicalTherapy", "name": "Invisalign Clear Aligners" },
        { "@type": "MedicalProcedure", "name": "Smile Designing" },
        { "@type": "MedicalProcedure", "name": "Teeth Whitening" },
        { "@type": "MedicalProcedure", "name": "Wisdom Tooth Removal" },
        { "@type": "MedicalProcedure", "name": "Gum Disease Treatment" },
        { "@type": "MedicalProcedure", "name": "Pediatric Dentistry" },
        { "@type": "MedicalProcedure", "name": "Laser Dentistry" },
        { "@type": "MedicalProcedure", "name": "Dental Veneers" },
        { "@type": "MedicalProcedure", "name": "Dental Crowns & Bridges" },
        { "@type": "MedicalProcedure", "name": "Dentures & Full Mouth Rehabilitation" }
      ],
      "sameAs": [
        "https://www.facebook.com/REPLACE_FB_URL",
        "https://www.instagram.com/REPLACE_IG_URL",
        "https://www.google.com/maps/search/Sri+Shobh+Dental+Tukkuguda",
        "https://www.justdial.com/REPLACE_JD_URL",
        "https://www.practo.com/REPLACE_PRACTO_URL",
        "https://www.youtube.com/@REPLACE_YT_HANDLE"
      ]
    },

    {
      "@type": "Person",
      "@id": "https://shobhdental.com/#dr-akhil",
      "name": "Dr. Sai Akhil Khadkekar",
      "jobTitle": "Prosthodontist & Implantologist, Clinic Founder",
      "worksFor": { "@id": "https://shobhdental.com/#dentist" },
      "alumniOf": "REPLACE_University",
      "knowsAbout": ["Dental Implants","Full Mouth Rehabilitation","Smile Designing","Zirconia & Ceramic Crowns","Implant-Supported Prostheses"]
    },

    {
      "@type": "FAQPage",
      "@id": "https://shobhdental.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which is the best dental clinic in Tukkuguda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sri Shobh Dental & Implant Centre is a leading dental clinic in Tukkuguda, Maheshwaram, Hyderabad. It is led by 7 MDS dental specialists and offers dental implants, root canal treatment, Invisalign, braces, smile designing and emergency dental care. It is located beside HP Petrol Bunk, opposite JK Supermarket on Srisailam Highway, Tukkuguda. Call 86863 25269 to book an appointment."
          }
        },
        {
          "@type": "Question",
          "name": "Does Sri Shobh Dental provide emergency dental care in Tukkuguda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sri Shobh Dental & Implant Centre offers same-day emergency dental appointments in Tukkuguda for severe toothache, knocked-out teeth, dental fractures, abscesses and facial swelling. Call 86863 25269 for immediate help."
          }
        },
        {
          "@type": "Question",
          "name": "What is the cost of a root canal treatment in Tukkuguda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment cost at Sri Shobh Dental & Implant Centre depends on the tooth type (front, premolar or molar) and the crown you choose. Prices are transparent and affordable. Call 86863 25269 or WhatsApp for an accurate estimate after a free consultation and X-ray."
          }
        },
        {
          "@type": "Question",
          "name": "Are dental implants available at Sri Shobh Dental, Tukkuguda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Sri Shobh Dental & Implant Centre is a prosthodontist-led implant centre offering single-tooth, multiple-tooth and full-arch dental implants with advanced surgical and restorative protocols."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer Invisalign and clear aligners in Tukkuguda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The clinic offers Invisalign and other clear aligner systems with iTero-style digital scanning and 3D treatment simulation by MDS orthodontists."
          }
        },
        {
          "@type": "Question",
          "name": "What are the opening hours of Sri Shobh Dental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sri Shobh Dental & Implant Centre is open Monday to Saturday from 10:00 AM to 8:00 PM. Sunday timing is by appointment — please call 86863 25269 to confirm."
          }
        },
        {
          "@type": "Question",
          "name": "Do you treat children at Sri Shobh Dental, Tukkuguda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our pedodontist (child dental specialist) Dr. Geeta Mamilla provides gentle pediatric dentistry including check-ups, fluoride treatment, pit & fissure sealants, pediatric root canals and habit-breaking appliances."
          }
        }
      ]
    },

    {
      "@type": "Review",
      "@id": "https://shobhdental.com/#review-1",
      "author": { "@type": "Person", "name": "REPLACE_PATIENT_NAME" },
      "datePublished": "REPLACE_YYYY-MM-DD",
      "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 },
      "reviewBody": "REPLACE_VERBATIM_GOOGLE_REVIEW_TEXT"
    },

    {
      "@type": "AggregateRating",
      "@id": "https://shobhdental.com/#aggregate-rating",
      "itemReviewed": { "@id": "https://shobhdental.com/#dentist" },
      "ratingValue": "REPLACE_AVG_GOOGLE_RATING",   /* e.g. 4.9 */
      "bestRating": 5,
      "worstRating": 1,
      "reviewCount": "REPLACE_NUMBER_OF_GOOGLE_REVIEWS"
    }
  ]
}
```

---

## 7b. Service page schema (`/services/{slug}`) — use this per service

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "@id": "https://shobhdental.com/services/dental-implants#procedure",
  "name": "Dental Implants in Tukkuguda",
  "description": "Replace missing teeth with titanium dental implants at Sri Shobh Dental & Implant Centre, Tukkuguda.",
  "procedureType": "https://schema.org/MedicalProcedure",
  "bodyLocation": "Oral cavity",
  "howPerformed": "Surgical placement of a titanium implant post followed by osseointegration and a custom ceramic crown.",
  "medicalSpecialty": "Implantology",
  "followup": "Implant crown placement and periodic review after osseointegration.",
  "provider": {
    "@type": "Dentist",
    "@id": "https://shobhdental.com/#dentist",
    "name": "Sri Shobh Dental & Implant Centre",
    "url": "https://shobhdental.com/"
  }
}
```

## 7c. Blog post schema (`/blog/{slug}`) — use this on every article

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://shobhdental.com/blog/REPLACE_SLUG#article",
  "headline": "REPLACE_TITLE",
  "description": "REPLACE_META_DESCRIPTION",
  "image": "https://shobhdental.com/images/blog/REPLACE_SLUG.webp",
  "datePublished": "REPLACE_YYYY-MM-DD",
  "dateModified": "REPLACE_YYYY-MM-DD",
  "author": { "@type": "Person", "name": "Dr. Sai Akhil Khadkekar", "jobTitle": "Prosthodontist & Implantologist" },
  "publisher": {
    "@type": "Organization",
    "@id": "https://shobhdental.com/#dentist",
    "name": "Sri Shobh Dental & Implant Centre",
    "logo": { "@type": "ImageObject", "url": "https://shobhdental.com/og-image.jpg" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://shobhdental.com/blog/REPLACE_SLUG" },
  "inLanguage": "en-IN",
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".article-intro", ".faq-section"] }
}
```
> The `speakable` property is a Google Assistant/AEO signal — implement CSS hooks `.article-intro` and `.faq-section` on blog templates.

## 7d. Breadcrumb schema (site-wide)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://shobhdental.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://shobhdental.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Dental Implants in Tukkuguda", "item": "https://shobhdental.com/services/dental-implants" }
  ]
}
```

## 7e. LocalBusiness schema for area landing pages (`/dentist-in-{area}`)

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Sri Shobh Dental & Implant Centre",
  "url": "https://shobhdental.com/",
  "telephone": "+918686325269",
  "description": "Best dental clinic in REPLACE_AREA — Sri Shobh Dental & Implant Centre, Tukkuguda serves REPLACE_AREA with implants, RCT, Invisalign and emergency dental care.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, Srisailam Highway, beside HP Petrol Bunk, opposite JK Supermarket",
    "addressLocality": "Tukkuguda",
    "addressRegion": "Telangana",
    "postalCode": "501359",
    "addressCountry": "IN"
  },
  "areaServed": { "@type": "City", "name": "REPLACE_AREA" }
}
```

---

## Implementation notes (TanStack Start / React)

- Inject via a shared `JsonLd` component that renders `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(data)}} />`.
- Keep the canonical URL, `og:url` and schema `url` identical for every page.
- Do not duplicate schema across pages — homepage keeps the full `@graph`; service/area/blog pages keep only their own node + a pointer (`provider: { "@id": "https://shobhdental.com/#dentist" }`).
