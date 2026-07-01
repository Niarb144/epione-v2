import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Headset,
  Handshake,
  ClipboardCheck,
  ShieldCheck,
  Briefcase,
  Megaphone,
  Truck,
  ParkingCircle,
  Train,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export interface QuickContactCard {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
  href: string;
}

export const quickContactCards: QuickContactCard[] = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team Mon–Fri, 8 AM–6 PM EAT.",
    value: "+254 700 123 456",
    href: "tel:+254700123456",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "We respond to all inquiries within one business day.",
    value: "info@epionehealth.com",
    href: "mailto:info@epionehealth.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our global distribution hub and head office in Nairobi.",
    value: "Industrial Area, Nairobi, Kenya",
    href: "#location",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "East Africa Time (EAT) — UTC+3.",
    value: "Mon – Fri: 8:00 AM – 6:00 PM",
    href: "#contact-info",
  },
];

export interface ContactInfoBlock {
  icon: LucideIcon;
  label: string;
  lines: string[];
}

export const contactInfoBlocks: ContactInfoBlock[] = [
  {
    icon: Building2,
    label: "Head Office",
    lines: ["Epione Health Ltd.", "Mombasa Road, Industrial Area", "Nairobi, Kenya"],
  },
  {
    icon: Mail,
    label: "General Inquiries",
    lines: ["info@epionehealth.com"],
  },
  {
    icon: Headset,
    label: "Customer Support",
    lines: ["support@epionehealth.com", "+254 700 123 457"],
  },
  {
    icon: Briefcase,
    label: "Sales",
    lines: ["sales@epionehealth.com", "+254 700 123 458"],
  },
  {
    icon: Handshake,
    label: "Partnerships",
    lines: ["partnerships@epionehealth.com"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Monday – Friday: 8:00 AM – 6:00 PM EAT", "Saturday: 9:00 AM – 1:00 PM EAT"],
  },
];

export interface Department {
  icon: LucideIcon;
  title: string;
  description: string;
  email: string;
}

export const departments: Department[] = [
  {
    icon: Briefcase,
    title: "Sales",
    description:
      "Product catalogues, pricing, and order placement for hospitals, pharmacies, and international distributors.",
    email: "sales@epionehealth.com",
  },
  {
    icon: Headset,
    title: "Customer Support",
    description:
      "Order tracking, delivery support, and after-sales assistance for our global client base.",
    email: "support@epionehealth.com",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Collaboration opportunities for manufacturers, NGOs, and international healthcare networks.",
    email: "partnerships@epionehealth.com",
  },
  {
    icon: ClipboardCheck,
    title: "Procurement",
    description:
      "Government and institutional procurement, tenders, and bulk supply agreements across Africa and beyond.",
    email: "procurement@epionehealth.com",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Regulatory compliance, pharmacovigilance, product quality inquiries, and certification documentation.",
    email: "quality@epionehealth.com",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description:
      "Job applications, graduate programmes, internships, and opportunities to join our expanding team.",
    email: "careers@epionehealth.com",
  },
  {
    icon: Megaphone,
    title: "Media",
    description:
      "Press inquiries, partnership announcements, brand communications, and media asset requests.",
    email: "media@epionehealth.com",
  },
];

export interface LocationDetail {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const locationDetails: LocationDetail[] = [
  { icon: MapPin, label: "Office Location", value: "Mombasa Road, Industrial Area, Nairobi" },
  { icon: ParkingCircle, label: "Parking", value: "Free on-site visitor parking available at Gate A" },
  { icon: Train, label: "Public Transport", value: "5 min from Nairobi Railway Station (Bus 34, 56)" },
  { icon: Truck, label: "Delivery Entrance", value: "Gate B, accessible from Likoni Road" },
  { icon: Landmark, label: "Nearby Landmarks", value: "Adjacent to Kenya Ports Authority depot" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How do I become a supplier or manufacturer partner?",
    answer:
      "Submit your company profile, product certifications, and regulatory documentation via our Partnerships department. Our quality assurance team reviews each submission and schedules an evaluation call within five business days. We work with manufacturers who meet WHO-GMP, ISO, and local regulatory standards.",
  },
  {
    question: "How do I request a product quotation?",
    answer:
      "Complete the contact form on this page selecting 'Product Information' as your inquiry type, or email our Sales team directly with your product list and required quantities. For bulk or institutional orders, our Sales team will issue a formal quotation within 48 hours.",
  },
  {
    question: "Where does Epione Health distribute?",
    answer:
      "Epione Health operates a global supply chain originating from Kenya. We distribute pharmaceutical products across East Africa — Kenya, Uganda, Tanzania, Rwanda, Ethiopia — and extend our reach to international markets across Sub-Saharan Africa, the Middle East, and Europe. We are building a network that makes high-quality African pharmaceutical supply accessible worldwide.",
  },
  {
    question: "How quickly will someone respond to my inquiry?",
    answer:
      "Our team responds to all inquiries within one business day (24 hours). Urgent procurement, supply shortage, or emergency requests are escalated and typically addressed the same day.",
  },
  {
    question: "How can international manufacturers partner with Epione?",
    answer:
      "International manufacturers interested in entering East African and African markets can partner with Epione Health for regulatory navigation, last-mile distribution, warehousing, and market access. Contact our Partnerships team with product registration details and your target markets.",
  },
  {
    question: "Does Epione Health support government procurement processes?",
    answer:
      "Yes. We have dedicated Procurement and Government Relations capabilities to support public tenders, national health programme supply, and bulk institutional orders. Our team is experienced in working with Ministries of Health, county governments, and multilateral agencies.",
  },
];

export const organizationTypes = [
  "Hospital",
  "Government Agency",
  "NGO / International Organisation",
  "Pharmaceutical Manufacturer",
  "Pharmacy",
  "Distributor",
  "Healthcare Provider / Clinic",
  "Investor",
  "Research Institution",
  "Other",
] as const;

export const inquiryTypes = [
  "General Inquiry",
  "Become a Partner",
  "Product Information & Quotation",
  "Government Procurement",
  "Distribution Partnership",
  "International Supply",
  "Careers & Recruitment",
  "Media & Press",
  "Investor Relations",
] as const;

export const countries = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Ethiopia",
  "Burundi",
  "South Sudan",
  "Somalia",
  "Democratic Republic of Congo",
  "United Kingdom",
  "United States",
  "Germany",
  "France",
  "India",
  "China",
  "United Arab Emirates",
  "Other",
] as const;