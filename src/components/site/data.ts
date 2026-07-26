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

export const PHONE = "8686325269";
export const WHATSAPP = "918686325269";
export const EMAIL = "Srishobhdental@gmail.com";
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

export const galleryImgs = [sSmile, sWhiten, sBraces, sGum, sInvisalign, sVeneer, sImplant, sCrown, sLaser];

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
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;
