import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Plane,
  FileText,
  Landmark,
  Handshake,
  Users,
  Briefcase,
  Globe2,
  GraduationCap,
  BookOpen,
  HeartPulse,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { countryList, type CountryId } from "@/lib/countries-data";

export type VisaTrackId = "business" | "visit";

export type VisaTrack = {
  id: VisaTrackId;
  name: string;
  short: string;
  icon: LucideIcon;
  anchor: string;
  summary: string;
  points: string[];
  suitedTo: string[];
};

export type VisaVariant = {
  name: string;
  country: string;
  countryHref: string;
  purpose: string;
  stay: string;
  requirement: string;
};

export type VisaFaq = { q: string; a: string };

export type VisaRelated = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type VisaProgram = {
  id: VisaTrackId;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  stats: { value: string; label: string }[];
  requirements: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  timeline: { step: string; title: string; text: string }[];
  variants: VisaVariant[];
  documents: string[];
  faqs: VisaFaq[];
  related: VisaRelated[];
};

export const visaStats = [
  { value: "96%", label: "Approval Rate" },
  { value: "10", label: "Visa Routes" },
  { value: "20", label: "PRs Secured" },
  { value: "1,200+", label: "Companies Formed" },
];

export const visaTracks: VisaTrack[] = [
  {
    id: "business",
    name: "Business Visa",
    short: "Company formation & investor residence",
    icon: Building2,
    anchor: "business-visa",
    summary:
      "Company formation, investor and founder visas across the UAE, Germany, Saudi Arabia, Europe and the UK — incorporation, licensing, banking and residency handled as one file.",
    points: [
      "UAE company licence in 7–10 days",
      "Germany self-employment & founder permits",
      "Investor and Golden Visa routes",
      "Family residence on the same application",
    ],
    suitedTo: [
      "Founders registering a company abroad",
      "Investors buying into a licensed business",
      "Freelancers and consultants going self-employed",
      "Business owners expanding into a new market",
    ],
  },
  {
    id: "visit",
    name: "Visit Visa",
    short: "Tourist, business visit & family travel",
    icon: Plane,
    anchor: "visit-visa",
    summary:
      "Tourism, business meetings, family visits, medical travel and eVisa processing for Schengen, the UK, the UAE, Saudi Arabia, Turkey, Malaysia and Cyprus — filed correctly the first time.",
    points: [
      "Schengen, UK, Gulf and eVisa filing",
      "Invitation letters and insurance prepared",
      "eVisa approvals in 1–3 days",
      "Attested documents where the mission asks",
    ],
    suitedTo: [
      "Tourists and family visitors",
      "Business travellers on meetings",
      "Anyone attending trade fairs or events",
      "Visitors needing medical or pilgrimage travel",
    ],
  },
];

export const visaPrograms: Record<VisaTrackId, VisaProgram> = {
  business: {
    id: "business",
    eyebrow: "Business Visa",
    title: "Open a Company,",
    highlight: "Get the Visa With It",
    intro:
      "A business visa is not a separate piece of paper from company formation — the visa follows the entity. We register the company, obtain the trade licence, open the corporate account and then file the business owner, investor or self-employment visa the destination actually recognises, with family residence prepared on the same application.",
    stats: [
      { value: "1,200+", label: "Companies Formed" },
      { value: "7–10 days", label: "UAE LLC Licence" },
      { value: "€25k–50k", label: "German Capital" },
      { value: "96%", label: "Approval Rate" },
    ],
    requirements: [
      { title: "Passport & Profile", text: "Valid passport plus a CV showing your trade, industry and business experience." },
      { title: "Business Concept", text: "A written concept — what you will sell, to whom, and how the activity makes money." },
      { title: "Capital Proof", text: "Bank statements and a source-of-funds trail for the capital your chosen route requires." },
      { title: "Sponsor or Trade Licence", text: "A host company invitation, or the newly issued licence, depending on the destination." },
      { title: "Attested Documents", text: "Degree, police certificate and marriage certificate attested and translated where required." },
      { title: "Tax & Compliance Plan", text: "Registration, VAT or a tax seat and the ongoing compliance for the entity you register." },
    ],
    process: [
      { step: "01", title: "Route Selection", text: "We compare founder, investor, freelance and self-employment routes against your capital, market and goal — then fix one." },
      { step: "02", title: "Company Formation", text: "Name reservation, entity type, registered address, trade licence and notarised documents." },
      { step: "03", title: "Visa Filing", text: "Business owner, investor or self-employment visa filed with the correct authority alongside the licence." },
      { step: "04", title: "Bank & Launch", text: "Corporate bank account, tax and VAT registration, trade licence, and family residence paperwork." },
    ],
    timeline: [
      { step: "1", title: "Eligibility Call", text: "Free, 24 hrs" },
      { step: "2", title: "Documentation", text: "1–2 weeks" },
      { step: "3", title: "Formation & Filing", text: "2–6 weeks" },
      { step: "4", title: "Approval & Residence", text: "1–4 weeks" },
    ],
    variants: [
      {
        name: "UAE Investor & Golden Visa",
        country: "United Arab Emirates",
        countryHref: "/countries/uae",
        purpose: "Invest in a qualifying UAE business and hold long-term investor residency for you and your family.",
        stay: "10 years, renewable",
        requirement: "Sector licence from about AED 15,000",
      },
      {
        name: "UAE Company & Freelance Visa",
        country: "United Arab Emirates",
        countryHref: "/countries/uae",
        purpose: "Register a mainland or free-zone LLC and hold residence through the company or a freelance permit.",
        stay: "2 years, renewable",
        requirement: "Licence in 7–10 days via our licensed partner",
      },
      {
        name: "Germany Self-Employment Visa",
        country: "Germany",
        countryHref: "/countries/germany",
        purpose: "Freelance or self-employed permit for consultants, specialists and independent professionals.",
        stay: "Up to 3 years, then PR path",
        requirement: "Client proof, health insurance and A1 German",
      },
      {
        name: "Germany Business Establishment",
        country: "Germany",
        countryHref: "/countries/germany",
        purpose: "Set up a trading company, workshop or service business in Germany with a residence permit attached.",
        stay: "Residence permit, PR after 5 years",
        requirement: "Business capital from about €25,000",
      },
      {
        name: "Saudi Arabia Business Visa",
        country: "Saudi Arabia",
        countryHref: "/countries/saudi-arabia",
        purpose: "Sponsor-based entry for meetings, contracts, exhibitions and company operations.",
        stay: "Up to 90 days per entry",
        requirement: "Saudi sponsor or host company",
      },
      {
        name: "Schengen & UK Business Visa",
        country: "Europe",
        countryHref: "/countries/europe",
        purpose: "Trade fairs, client meetings and negotiations without establishing residence.",
        stay: "90/180 days (Schengen), 6 months (UK)",
        requirement: "Invitation letter and company evidence",
      },
    ],
    documents: [
      "Passport with 6+ months validity",
      "Business plan or service concept",
      "Bank statements and capital proof",
      "Certificate of incorporation or trade licence",
      "Attested degree and police certificate",
      "Sponsor or invitation letter",
      "Health and travel insurance",
      "Marriage and birth certificates for family",
    ],
    faqs: [
      { q: "Do I need a company before applying?", a: "Not always. The German self-employment and freelance permits are built on your professional qualification and client base rather than a registered company. Investor and Golden Visa routes do require an entity — we tell you which side of that line your case falls on in the first call." },
      { q: "How much capital do I actually need?", a: "It depends on the jurisdiction. Germany typically expects €25,000–€50,000 for a business establishment, while UAE free-zone and mainland licences run on a licence-fee basis starting around AED 15,000. We quote the full landed cost — licence, visa, bank, attestation and setup — before you spend anything." },
      { q: "Can I manage the company from abroad?", a: "Yes. Most UAE and German formations can be completed by power of attorney with remote notarisation. You fly in only when a signature, biometric or medical is required, and we tell you in advance when that is." },
      { q: "Can my family come with me?", a: "On the UAE investor and company visas, and on the German residence permit, spouse and dependent children are included in the same application. We prepare their documents alongside yours so the household moves together." },
      { q: "Does a business visa lead to permanent residence?", a: "In Germany a business residence permit counts toward the five-year PR route. In the UAE the investor route is long-term residency rather than citizenship. We show you the end state before you commit capital." },
      { q: "Business visa or business immigration?", a: "The business visa is your entry and stay document. Business immigration is the longer residence and eventual PR track. Business & Investment covers incorporation and investment; Business Immigration covers investor and founder residence." },
    ],
    related: [
      { title: "Business & Investment", description: "Company formation, licensing, banking and investment as one package.", href: "/services/business", icon: Building2 },
      { title: "Business Immigration", description: "Investor and founder residence routes with family on the file.", href: "/services/immigration/business", icon: Handshake },
      { title: "Attestation & Testing", description: "Degree attestation, HEC, apostille and certified translations.", href: "/services/attestation-testing", icon: FileText },
      { title: "Family Immigration", description: "Bring your spouse and dependants on the same application.", href: "/services/immigration/family", icon: Users },
      { title: "Permanent Residence", description: "How a business residence permit becomes a permanent home.", href: "/services/immigration/permanent-residence", icon: Landmark },
      { title: "Work Abroad", description: "Employment visas when the role — not the company — is the goal.", href: "/services/work-abroad", icon: Briefcase },
    ],
  },

  visit: {
    id: "visit",
    eyebrow: "Visit Visa",
    title: "Travel, Visit &",
    highlight: "Return Without Stress",
    intro:
      "A visit visa is refused for paperwork reasons far more often than for eligibility. We check the exact consulate rules for your nationality and purpose of travel, prepare the invitation, insurance and financial evidence in the format that specific mission expects, and file it with the authority that actually has jurisdiction over you.",
    stats: [
      { value: "1–3 days", label: "eVisa Turnaround" },
      { value: "15 days", label: "Schengen Decision" },
      { value: "Up to 6 mo", label: "Multi-entry Valid" },
      { value: "8+", label: "Destinations" },
    ],
    requirements: [
      { title: "Valid Passport", text: "At least 6 months validity beyond your return date, with two blank pages." },
      { title: "Passport Photos", text: "Recent white-background photos in the exact size and format the consulate specifies." },
      { title: "Travel Insurance", text: "Schengen requires medical cover of at least €30,000 for the entire stay." },
      { title: "Financial Evidence", text: "Bank statements, salary slips or a sponsor letter proving you can fund the whole trip." },
      { title: "Itinerary & Stay", text: "Confirmed return ticket plus hotel booking or host address covering the full visit." },
      { title: "Invitation Letter", text: "Where required — from a company, host or family member, in the consulate's own format." },
    ],
    process: [
      { step: "01", title: "Purpose & Destination", text: "We confirm whether you need a tourist, business-visit, family, medical or eVisa category — and which consulate has jurisdiction over your passport." },
      { step: "02", title: "Document Preparation", text: "Passport check, photos, insurance, funds, invitation, itinerary and any attestation the mission specifically requires." },
      { step: "03", title: "Filing", text: "An online eVisa application, or a biometric appointment at the correct consulate or visa centre for your jurisdiction." },
      { step: "04", title: "Decision & Travel", text: "Collection or approval, a condition check, and a departure briefing so nothing expires on you mid-trip." },
    ],
    timeline: [
      { step: "1", title: "Eligibility Check", text: "Free, 24 hrs" },
      { step: "2", title: "Document Prep", text: "3–7 days" },
      { step: "3", title: "Filing & Biometrics", text: "1–2 weeks" },
      { step: "4", title: "Decision", text: "1–4 weeks" },
    ],
    variants: [
      {
        name: "Schengen Short-Stay Visa",
        country: "Europe",
        countryHref: "/countries/europe",
        purpose: "Tourism, business meetings and family visits across the Schengen states on a single application.",
        stay: "90 days in any 180",
        requirement: "€30,000 medical insurance",
      },
      {
        name: "UK Standard Visitor",
        country: "United Kingdom",
        countryHref: "/countries/uk",
        purpose: "Tourism, business meetings, family visits and permitted engagements.",
        stay: "Up to 6 months",
        requirement: "Funds and confirmed accommodation",
      },
      {
        name: "Turkey e-Visa",
        country: "Turkey",
        countryHref: "/countries/turkey",
        purpose: "Online short-stay tourism and light business entry without a consulate appointment.",
        stay: "15–30 days",
        requirement: "Online application, no visa stamp",
      },
      {
        name: "Malaysia eVisa",
        country: "Malaysia",
        countryHref: "/countries/malaysia",
        purpose: "Tourism, business visits, medical treatment and transit.",
        stay: "Up to 90 days",
        requirement: "Online approval, print and carry",
      },
      {
        name: "UAE Tourist Visa",
        country: "United Arab Emirates",
        countryHref: "/countries/uae",
        purpose: "Tourism, family visits, events and short business meetings.",
        stay: "30–90 days",
        requirement: "Sponsor or host arrangement",
      },
      {
        name: "Saudi Arabia Visit Visa",
        country: "Saudi Arabia",
        countryHref: "/countries/saudi-arabia",
        purpose: "Tourism, Umrah, business meetings and industry events.",
        stay: "30–90 days",
        requirement: "Sponsor arranged by us",
      },
    ],
    documents: [
      "Passport valid 6+ months",
      "Recent passport-size photographs",
      "Confirmed return flight booking",
      "Hotel booking or host address",
      "Travel medical insurance policy",
      "Bank statements and salary slips",
      "Invitation or sponsorship letter",
      "Attested police or civil documents if asked",
    ],
    faqs: [
      { q: "What is the difference between a visit visa and a business visa?", a: "A visit visa lets you attend meetings, negotiate and sign on behalf of an existing employer abroad — it cannot be used to start trading or take local employment. A business visa is built around an entity or a business plan: you form a company, invest, or go self-employed. Choosing the wrong category is the most common reason a business traveller is stopped at the border." },
      { q: "Do I need an invitation letter?", a: "For a pure tourism visit usually not, but a business or family visit nearly always needs one. We draft it in the consulate's own format, with the host's registration or tax details where they are requested." },
      { q: "Can I work on a visit visa?", a: "No. Visit visas permit attendance at meetings, site visits, trade fairs and permitted engagements — not employment and not operating a business in the country. If you intend to trade, you need the business visa or the work visa instead." },
      { q: "How long is a visit visa valid?", a: "It depends on the destination. Schengen allows 90 days in any 180-day period, the UK allows up to 6 months, and several Gulf and Asian destinations issue 30–90 day visas that can be single or multi-entry. Your itinerary must match the validity exactly." },
      { q: "Do I need attested documents for a visit visa?", a: "Sometimes. If you are visiting family, claiming sponsorship, or applying where the mission asks for a police certificate or civil document, it must be attested and translated. We run that through our attestation desk so it lands in your file in the right format." },
      { q: "Can I convert a visit visa into a business visa later?", a: "Yes, in most destinations you can leave and reapply for the business route from outside the country. UAE free-zone and German self-employment routes are both commonly started this way. We plan the visit and the business route together so the second application is not starting from zero." },
    ],
    related: [
      { title: "Attestation & Testing", description: "Police certificates, civil documents and certified translations.", href: "/services/attestation-testing", icon: FileText },
      { title: "Family Immigration", description: "Sponsor your family instead of visiting them on a short stay.", href: "/services/immigration/family", icon: Users },
      { title: "Business Visa Route", description: "When your visit turns into a company, switch to this track.", href: "/services/visa#business-visa", icon: Building2 },
      { title: "Europe Guide", description: "Schengen rules, insurance and the 90/180 rule explained.", href: "/countries/europe", icon: Globe2 },
      { title: "Work Abroad", description: "Employment visas when the visit turned into a job offer.", href: "/services/work-abroad", icon: Briefcase },
      { title: "Study Abroad", description: "If the answer is a degree, not a visa category.", href: "/services/study-abroad", icon: GraduationCap },
    ],
  },
};

const destinationNotes: Record<CountryId, { business: string; visit: string }> = {
  germany: { business: "Self-employment, founder & business establishment permits", visit: "Schengen short-stay visa" },
  australia: { business: "Business innovation, entrepreneur & investor visas", visit: "Visitor visa (subclass 600)" },
  uk: { business: "Business visitor, skilled worker & founder routes", visit: "Standard visitor visa" },
  usa: { business: "E-2 treaty investor & L-1 intracompany transfer", visit: "B-1 business visitor / B-2 tourism" },
  canada: { business: "Start-up Visa & Provincial Nominee business streams", visit: "Temporary Resident Visa (TRV)" },
  europe: { business: "Schengen business & intra-corporate visas", visit: "Schengen short-stay visa" },
  "saudi-arabia": { business: "Investor, corporate & sponsored business visas", visit: "Tourist, Umrah & visit visa" },
  uae: { business: "Golden Visa, investor, company & freelance visas", visit: "Tourist and visit visa" },
  pakistan: { business: "Consulate attestation for every business file", visit: "Not issued here — we prepare your file" },
  malaysia: { business: "Malaysia Second Pass & investor residence", visit: "eVisa, VFR and medical visitor" },
  turkey: { business: "Business e-Visa and short-term trade entry", visit: "e-Visa, no consulate appointment" },
  tajikistan: { business: "Investor and commercial entry on request", visit: "eVisa and visa-free short stays" },
  cyprus: { business: "Schengen business visa for meetings", visit: "Short-stay visitor visa" },
};

export const visaDestinations = countryList.map((country) => ({
  ...country,
  ...destinationNotes[country.id],
}));

export const visaGeneralFaqs: VisaFaq[] = [
  { q: "How do I know which visa I need?", a: "Start from the purpose, not the country. Working for an employer is a work visa. Trading, investing or going self-employed is a business visa. Tourism, meetings and family are a visit visa. Studying needs a study visa. If the purpose will change — a meeting becoming a contract, a visit becoming a move — tell us upfront so we file the category that can grow." },
  { q: "Can you handle both visas in one file?", a: "Yes. A large share of our clients arrive on a visit visa and convert to a business, work or study route, and we keep the same case officer and the same attested document set across the whole journey." },
  { q: "How long does Shozani take?", a: "A free eligibility call and a written route plan within two working days. After that the timeline is the destination's — eVisas can be approved in 1–3 days, UAE company licensing 7–10 days, Schengen roughly 15 days, and a residence permit several weeks. We publish the real range per stage rather than a single optimistic number." },
  { q: "What does a visa cost?", a: "Every route has different government fees, and the service fee depends on how much is already in place. You receive a fixed quotation with the route plan — licence fee, visa fee, attestation, bank setup and our service fee itemised — before anything is booked." },
  { q: "What if my passport expires soon?", a: "Most missions require six months validity beyond the intended stay, and some require a blank page. We check your passport at the eligibility call so a renewal is scheduled in time rather than discovered at the appointment." },
  { q: "Do I need attested documents?", a: "For a business visa, usually yes — degree, police certificate and civil documents are commonly required. For a visit visa it depends on the consulate and the sponsor situation. Our attestation desk handles the whole chain, including HEC, embassy, MOFA and apostille, and certified English or German translation." },
];

export const visaWhyUs = [
  { title: "One Desk, Not Five", text: "Visa, company formation, attestation, banking and tax handled by the same case officer — no vendor ping-pong.", icon: Handshake },
  { title: "Documents That Survive Scrutiny", text: "Files are built to the consulate's own checklist, pre-checked before filing to avoid the 15-day refund cycle.", icon: ShieldCheck },
  { title: "Real Timelines", text: "We quote the destination's actual processing window per stage, and we tell you when a deadline is a problem.", icon: Wallet },
];

export const visaServiceLinks: VisaRelated[] = [
  { title: "Business & Investment", description: "Company formation, licensing, banking and investment across the UAE, Germany and Europe.", href: "/services/business", icon: Building2 },
  { title: "Business Immigration", description: "Investor, founder and self-employment residence routes end to end.", href: "/services/immigration/business", icon: Handshake },
  { title: "Permanent Residence", description: "Points audits, EOI and PR filing for Canada, Australia, Germany and the Gulf.", href: "/services/immigration/permanent-residence", icon: Landmark },
  { title: "Family Immigration", description: "Spouse, children and parent sponsorship filed on the same case.", href: "/services/immigration/family", icon: Users },
  { title: "Work Abroad", description: "Employer-matched work visas, Blue Card, Opportunity Card and Gulf contracts.", href: "/services/work-abroad", icon: Briefcase },
  { title: "Study Abroad", description: "Tuition-free Germany, plus UK, USA, Canada and Australia admissions and visas.", href: "/services/study-abroad", icon: GraduationCap },
  { title: "Language Training", description: "German A1–B2, IELTS and PTE — the scores these visa files demand.", href: "/services/language", icon: BookOpen },
  { title: "Attestation & Testing", description: "HEC verification, apostille, MOFA and certified translation for every file.", href: "/services/attestation-testing", icon: FileText },
  { title: "Nursing in Germany", description: "Recognition, language and placement for Germany's fastest work route.", href: "/countries/germany/nursing", icon: HeartPulse },
];
