import {
  Award, GraduationCap, Sparkles, Wallet, Sofa,
  ShieldCheck, HeartPulse, Smile,
} from "lucide-react";
import sImplant from "@/assets/s-implant.jpg";
import sSmile from "@/assets/s-smile.jpg";
import sRct from "@/assets/s-rct.jpg";
import sCrown from "@/assets/s-crown.jpg";
import sWhiten from "@/assets/s-whiten.jpg";
import sBraces from "@/assets/s-braces.jpg";
import sInvisalign from "@/assets/s-invisalign.jpg";
import sWisdom from "@/assets/s-wisdom.jpg";
import sPedo from "@/assets/s-pedo.jpg";
import sGum from "@/assets/s-gum.jpg";
import sLaser from "@/assets/s-laser.jpg";
import sSurgery from "@/assets/s-surgery.jpg";
import sTrauma from "@/assets/s-trauma.jpg";
import sDenture from "@/assets/s-denture.jpg";
import sVeneer from "@/assets/s-veneer.jpg";
import sPreventive from "@/assets/s-preventive.jpg";
import drSaiAkhil from "@/assets/Sai akhil.jpeg";

export const PHONE = "8686325269";
export const WHATSAPP = "918686325269";
export const EMAIL = "srishobhdental@gmail.com";
export const ADDRESS_SHORT = "Tukkuguda, Maheshwaram, Telangana";
export const ADDRESS_FULL = "First Floor, Srisailam Highway, beside HP Petrol Bunk, Tukkuguda, Maheshwaram, Telangana - 501359";

export const services = [
  { name: "Dental Implants", desc: "Replace missing teeth with strong, natural-looking implants.", img: sImplant },
  { name: "Smile Designing", desc: "Customised cosmetic treatments for a perfect smile.", img: sSmile },
  { name: "Root Canal Treatment", desc: "Save infected teeth with painless root canal treatment.", img: sRct },
  { name: "Zirconia & Ceramic Crowns and Bridges", desc: "Premium, metal-free crowns for strength & aesthetics.", img: sCrown },
  { name: "Teeth Whitening", desc: "Professional whitening for a brighter smile.", img: sWhiten },
  { name: "Braces & Clear Aligners", desc: "Straighten teeth with braces or clear aligners.", img: sBraces },
  { name: "Invisalign® Clear Aligners", desc: "Discreet, comfortable and predictable results.", img: sInvisalign },
  { name: "Wisdom Tooth Removal", desc: "Safe extraction by experienced specialists.", img: sWisdom },
  { name: "Pediatric Dentistry", desc: "Gentle care for children's healthy smiles.", img: sPedo },
  { name: "Gum Disease Treatment", desc: "Advanced gum therapy for healthy gums.", img: sGum },
  { name: "Laser Dentistry", desc: "Minimally invasive with faster healing.", img: sLaser },
  { name: "Minor & Major Oral Surgeries", desc: "Expert surgical care with precision.", img: sSurgery },
  { name: "Dental Trauma & Emergency Care", desc: "Immediate care for dental emergencies.", img: sTrauma },
  { name: "Dentures & Full Mouth Rehab", desc: "Restore function & confidence.", img: sDenture },
  { name: "Dental Veneers", desc: "Ultra-thin veneers for a beautiful smile.", img: sVeneer },
  { name: "Preventive & General Dentistry", desc: "Routine check-ups, cleanings & preventive care.", img: sPreventive },
];

import v1 from "@/assets/video1.mp4";
import v2 from "@/assets/video2.mp4";
import v3 from "@/assets/video3.mp4";
import v4 from "@/assets/video 4.mp4";
import v5 from "@/assets/video5.mp4";
import v6 from "@/assets/video6.mp4";
import v7 from "@/assets/video7.mp4";
import v8 from "@/assets/video8.mp4";

export type GalleryItem = { type: 'image' | 'video', src: string };

export const galleryImgs: GalleryItem[] = [
  { type: 'video', src: v1 },
  { type: 'video', src: v2 },
  { type: 'video', src: v3 },
  { type: 'video', src: v4 },
  { type: 'video', src: v5 },
  { type: 'video', src: v6 },
  { type: 'video', src: v7 },
  { type: 'video', src: v8 },
  { type: 'image', src: drSaiAkhil },
  { type: 'image', src: sSmile },
  { type: 'image', src: sWhiten },
  { type: 'image', src: sBraces },
  { type: 'image', src: sGum },
  { type: 'image', src: sInvisalign },
  { type: 'image', src: sVeneer },
  { type: 'image', src: sImplant },
  { type: 'image', src: sCrown },
  { type: 'image', src: sLaser }
];

export const whyChoose = [
  { icon: Award, title: "Advanced Technology" },
  { icon: GraduationCap, title: "Experienced Specialists" },
  { icon: Sparkles, title: "Personalised Treatment" },
  { icon: Wallet, title: "Affordable & Transparent" },
  { icon: Sofa, title: "Comfortable & Friendly Environment" },
];

export const highlights = [
  { icon: Award, title: "Advanced Technology" },
  { icon: ShieldCheck, title: "Expert Specialists" },
  { icon: HeartPulse, title: "Patient-Centred Care" },
  { icon: Smile, title: "100% Safe & Hygienic" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/team", label: "Our Team" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const specialists = [
  {
    name: "Dr. Sai Akhil Khadkekar",
    image: drSaiAkhil,
    qualifications: "BDS, MDS",
    role: "Prosthodontist & Implantologist",
    subtitle: "Owner & Founder",
    department: "Prosthodontics, Implantology & Restorative Dentistry",
    expertise: [
      "Dental Implants",
      "Full Mouth Rehabilitation",
      "Smile Designing",
      "Zirconia & Ceramic Crowns",
      "Implant-Supported Prostheses",
      "Complete & Partial Dentures",
      "Cosmetic & Restorative Dentistry"
    ]
  },
  {
    name: "Dr. Ishitha",
    qualifications: "BDS, MDS",
    role: "Endodontist",
    department: "Conservative Dentistry & Endodontics",
    expertise: [
      "Root Canal Treatment (RCT)",
      "Re-Root Canal Treatment",
      "Microscopic Endodontics",
      "Aesthetic Restorations",
      "Dental Trauma Management"
    ]
  },
  {
    name: "Dr. Shiva Prasad",
    qualifications: "BDS, MDS",
    role: "Periodontist & Oral Implantologist",
    department: "Periodontology & Oral Implantology",
    expertise: [
      "Gum Disease Treatment",
      "Laser Gum Therapy (LANAP)",
      "Flap Surgery",
      "Bone Grafting",
      "Crown Lengthening",
      "Dental Implants"
    ]
  },
  {
    name: "Dr. Abhiram",
    qualifications: "BDS, MDS",
    role: "Orthodontist",
    department: "Orthodontics & Dentofacial Orthopaedics",
    expertise: [
      "Metal Braces",
      "Ceramic Braces",
      "Clear Aligners",
      "Invisalign® Treatment",
      "Bite Correction",
      "Growth Modification"
    ]
  },
  {
    name: "Dr. Geeta Mamilla",
    qualifications: "BDS, MDS",
    role: "Pedodontist",
    department: "Pediatric & Preventive Dentistry",
    expertise: [
      "Child Dental Care",
      "Preventive Dentistry",
      "Pediatric Root Canal Treatment",
      "Fluoride Therapy",
      "Pit & Fissure Sealants",
      "Habit-Breaking Appliances",
      "Special Care Dentistry for Children"
    ]
  },
  {
    name: "Dr. Santosh Vemulapalli",
    qualifications: "BDS, MDS",
    role: "Oral & Maxillofacial Surgeon",
    department: "Oral & Maxillofacial Surgery",
    expertise: [
      "Wisdom Tooth Removal",
      "Impacted Tooth Surgery",
      "Facial Trauma Management",
      "Minor & Major Oral Surgical Procedures",
      "Jaw Cysts & Tumor Management",
      "Pre-Prosthetic Surgery",
      "Dental Implant Surgery"
    ]
  },
  {
    name: "Dr. Hemanth",
    qualifications: "BDS, MDS",
    role: "Oral Medicine & Radiologist",
    department: "Oral Medicine & Oral Radiology",
    expertise: [
      "Oral Disease Diagnosis",
      "Oral Cancer Screening & Early Detection",
      "Management of Oral Mucosal Lesions",
      "TMJ Disorders & Orofacial Pain",
      "Salivary Gland Disorders",
      "Digital Dental Radiology & CBCT Interpretation",
      "Oral Medicine Consultation"
    ]
  }
];
