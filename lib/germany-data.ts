import type { ServiceData } from "@/components/service/service-page";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Search,
  Code2,
  BadgeCheck,
  Calculator,
  Languages,
  HelpCircle,
} from "lucide-react";

export type GermanySubpageId =
  | "work-visa"
  | "opportunity-card"
  | "nursing"
  | "ausbildung"
  | "job-seeker-visa"
  | "it-jobs"
  | "skilled-worker-visa"
  | "salary-guide"
  | "german-language"
  | "faqs";

export type GermanySubpage = {
  id: GermanySubpageId;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  href: string;
  config: ServiceData;
};

const crumbs = (label: string): ServiceData["codecrumbs"] => [
  { label: "Countries", href: "/countries" },
  { label: "Germany", href: "/countries/germany" },
  { label, href: `/countries/germany/${label.toLowerCase().replace(/ /g, "-")}` },
];

export const germanySubpages: GermanySubpage[] = [
  {
    id: "work-visa",
    name: "Work Visa",
    short: "Employment visa for offered jobs",
    description:
      "The classic German employment visa for skilled professionals with a signed German job offer — processing, requirements and employer sponsorship.",
    icon: Briefcase,
    href: "/countries/germany/work-visa",
    config: {
      codecrumbs: crumbs("Work Visa"),
      eyebrow: "Germany — Work Visa",
      title: "Turn a Job Offer",
      highlight: "into a Residence Permit",
      intro:
        "The German Work Visa (sections 18a/18b of the Residence Act) is for skilled professionals with a recognised qualification and a signed German employment contract. It is the most direct route to earning a German salary — and the foundation for permanent residence.",
      stats: [
        { value: "4–10 wks", label: "Typical Processing" },
        { value: "€3,000+", label: "Typical Monthly Salary" },
        { value: "48,200+", label: "Gross Yearly Threshold (Many Roles)" },
        { value: "4 yrs", label: "Then PR Possible" },
      ],
      requirements: [
        { title: "Job Offer", text: "A signed, valid employment contract from a German employer." },
        { title: "Qualification", text: "A recognised university degree or German vocational training (Fachkraft)." },
        { title: "Recognition", text: "Proof your qualification is recognised in Germany (ZAB / Anerkennung)." },
        { title: "Documents", text: "Passport, photos, CV, contract, employer details and application forms." },
      ],
      process: [
        { step: "01", title: "Offer & Check", text: "We validate your contract, salary and title against German requirements." },
        { step: "02", title: "Recognition", text: "Qualification recognition and any necessary equivalence checks processed." },
        { step: "03", title: "Visa File", text: "Application at the German mission in Pakistan with full supporting file." },
        { step: "04", title: "Landing", text: "Employment starts, registration, health insurance and residence card." },
      ],
      timeline: [
        { step: "1", title: "Recognition", text: "4–12 weeks" },
        { step: "2", title: "Visa Decision", text: "4–10 weeks" },
        { step: "3", title: "Relocation", text: "1–2 months" },
        { step: "4", title: "PR Eligibility", text: "From 4 years" },
      ],
      faqs: [
        { q: "Can I switch to this visa from a job-seeker visa?", a: "Yes — a job-seeker visa converts directly into a work visa once you sign a contract." },
        { q: "Does my employer need to sponsor me?", a: "Employers must fill a labour-market check, but the process is employer-friendly and our team handles the file." },
        { q: "Can my family join me?", a: "Yes — spouses get a work-permitted residence permit and children can join immediately." },
        { q: "What if my qualification isn't recognised?", a: "Germany offers recognition pathways and alternatives such as the IT specialist route or Ausbildung." },
      ],
      cta: { title: "", text: "A German job offer is the strongest card you can hold. Let's convert it into a visa.", link: "/apply", linkLabel: "Check Work Visa Eligibility" },
    },
  },
  {
    id: "opportunity-card",
    name: "Opportunity Card",
    short: "Points-based job seeker entry",
    description:
      "The Chancenkarte lets qualified applicants enter Germany for up to a year to find a job — no employer needed upfront, points-based eligibility.",
    icon: CreditCard,
    href: "/countries/germany/opportunity-card",
    config: {
      codecrumbs: crumbs("Opportunity Card"),
      eyebrow: "Germany — Opportunity Card",
      title: "Move to Germany",
      highlight: "Before You Have a Job",
      intro:
        "The Opportunity Card (Chancenkarte) is Germany's points-based entry visa. Qualified applicants score points on qualifications, language, experience and age — then get up to 12 months in Germany to find a job, with trial-work rights from day one.",
      stats: [
        { value: "6 points", label: "Minimum Score" },
        { value: "12 mo", label: "Job Search Validity" },
        { value: "20 hr/wk", label: "Trial Work Allowed" },
        { value: "No Offer", label: "Required Upfront" },
      ],
      requirements: [
        { title: "Qualification", text: "A recognised degree or completed vocational training (equivalence assessed)." },
        { title: "Points", text: "At least 6 points — language, experience, age and German ties all score." },
        { title: "Finances", text: "Proof of funds to support your stay without public benefits." },
        { title: "Language", text: "Basic German (A1) or English (B2) improves your point score." },
      ],
      process: [
        { step: "01", title: "Points Check", text: "We score your profile against the official points matrix honestly." },
        { step: "02", title: "Recognition", text: "Qualification recognition and equivalence certificates prepared." },
        { step: "03", title: "Application", text: "Visa file at the German mission with finances and language proof." },
        { step: "04", title: "Job Hunt", text: "Arrival, registration, job-search strategy and conversion support." },
      ],
      timeline: [
        { step: "1", title: "Points & File", text: "2–6 weeks" },
        { step: "2", title: "Visa Decision", text: "6–10 weeks" },
        { step: "3", title: "Job Search", text: "Up to 12 months" },
        { step: "4", title: "Work Visa", text: "On contract signing" },
      ],
      faqs: [
        { q: "What earns the most points?", a: "German language (B2 = 3 points), professional experience (2–4 points) and degrees (4 points) score highest." },
        { q: "Can I work while searching?", a: "Yes — up to 20 hours a week of trial work, plus unlimited trial shifts per employer." },
        { q: "What if I find a job?", a: "The card converts to a work visa or EU Blue Card immediately — no new application needed from abroad." },
        { q: "Who is this NOT for?", a: "Anyone without a recognised qualification — degree or vocational — cannot meet the core requirement." },
      ],
      cta: { title: "", text: "Six points is all it takes to start a German career search from inside Germany. Score yours now.", link: "/apply", linkLabel: "Score My Opportunity Card" },
    },
  },
  {
    id: "nursing",
    name: "Nursing",
    short: "Healthcare careers with recognition",
    description:
      "Germany's nursing shortage means fast-track visas for nurses — recognition process, language requirements and salary levels covered.",
    icon: HeartPulse,
    href: "/countries/germany/nursing",
    config: {
      codecrumbs: crumbs("Nursing"),
      eyebrow: "Germany — Nursing",
      title: "Europe's Highest-Paying",
      highlight: "Nursing Path",
      intro:
        "Germany faces a national shortage of roughly 100,000+ nurses (Pflegekräfte). Qualified nurses get accelerated recognition, state-covered German language courses and a visa route designed for healthcare — one of the most reliable paths to Germany from Pakistan.",
      stats: [
        { value: "100k+", label: "Nurse Shortage Nationwide" },
        { value: "€3,000+", label: "Monthly Start Salary" },
        { value: "€1,500+", label: "Language Course Subsidies" },
        { value: "4 yrs", label: "Recognition-Based PR" },
      ],
      requirements: [
        { title: "Nursing Diploma", text: "3-year nursing or midwifery qualification recognised for equivalence." },
        { title: "German B1 / B2", text: "B1 minimum for visa, B2 for full professional recognition." },
        { title: "Registration", text: "Approbation or Berufserlaubnis pathway per federal state." },
        { title: "Employer", text: "A hospital or care facility contract — we match from partner clinics." },
      ],
      process: [
        { step: "01", title: "Equivalence Check", text: "Your diploma assessed against German nursing standards (HPA)." },
        { step: "02", title: "Language", text: "A1 → B2 German structured with visa-timeline planning." },
        { step: "03", title: "Offer & Visa", text: "Employer contract, recognition application and visa filing." },
        { step: "04", title: "Anpassungslehrgang", text: "Adaptation course or exam in Germany, then full registration." },
      ],
      timeline: [
        { step: "1", title: "Recognition", text: "3–6 months" },
        { step: "2", title: "Language to B1", text: "4–8 months" },
        { step: "3", title: "Visa + Arrival", text: "2–4 months" },
        { step: "4", title: "Full Approbation", text: "6–12 months" },
      ],
      faqs: [
        { q: "Which specialities are needed most?", a: "General nursing, intensive care, geriatric care and paediatric care — all under accelerated hiring." },
        { q: "Is the language training free?", a: "Many employers and states fund or reimburse B1–B2 German training for contracted nurses." },
        { q: "Can my family move too?", a: "Yes — spouse and children visas are granted alongside the nursing visa." },
        { q: "What does a nurse earn?", a: "Starting gross salaries of €3,000–€3,800 monthly, rising with shifts, seniority and specialisation." },
      ],
      cta: { title: "", text: "Germany needs you more than it needs most degree-holders. Let's start your recognition.", link: "/apply", linkLabel: "Start My Nursing File" },
    },
  },
  {
    id: "ausbildung",
    name: "Ausbildung",
    short: "Paid vocational training",
    description:
      "Germany's dual vocational training pays you while you learn a trade — salaries, eligible trades and the route to a permanent German career.",
    icon: GraduationCap,
    href: "/countries/germany/ausbildung",
    config: {
      codecrumbs: crumbs("Ausbildung"),
      eyebrow: "Germany — Ausbildung",
      title: "Get Paid While You",
      highlight: "Learn a German Trade",
      intro:
        "Ausbildung is Germany's dual vocational training: you study theory and work in a company at the same time — and get paid from day one. It is the strongest route for school leavers and career-changers who want German qualifications without a university degree.",
      stats: [
        { value: "€900+", label: "Monthly Training Salary" },
        { value: "2–3 yrs", label: "Training Duration" },
        { value: "330+", label: "Recognised Trades" },
        { value: "60%", label: "Get Hired After Training" },
      ],
      requirements: [
        { title: "Age & Education", text: "Generally 18+, with secondary education and strong school records." },
        { title: "German B1 / B2", text: "Training runs in German — B1 is the practical minimum, B2 ideal." },
        { title: "Health", text: "A health clearance certificate (ärztliche Bescheinigung)." },
        { title: "Contract", text: "A signed training contract with an accredited German company." },
      ],
      process: [
        { step: "01", title: "Trade Match", text: "We match you to in-demand trades by your education and goals." },
        { step: "02", title: "Language", text: "German up to B1/B2 while we secure your training contract." },
        { step: "03", title: "Contract & Visa", text: "Training contract signed, then the §16a visa application." },
        { step: "04", title: "Train & Earn", text: "Start work and school, earn monthly and build a German career." },
      ],
      timeline: [
        { step: "1", title: "Language", text: "4–8 months" },
        { step: "2", title: "Contract", text: "2–4 months" },
        { step: "3", title: "Visa", text: "4–8 weeks" },
        { step: "4", title: "Training", text: "2–3 years" },
      ],
      faqs: [
        { q: "Which trades hire internationals?", a: "Nursing assistance, IT, electrical, mechatronics, plumbing, hospitality and elderly care." },
        { q: "Do I need a degree?", a: "No — Ausbildung exists precisely for hands-on careers; school-leavers qualify." },
        { q: "What happens after training?", a: "Most trainees are retained, earn full salaries, and can get PR after 3–5 years of work." },
        { q: "Can I study a degree later?", a: "Yes — many Ausbildung graduates study a related bachelor's part-time, funded by the company." },
      ],
      cta: { title: "", text: "A paid trade apprenticeship beats an unpaid gap year. Let's find your training contract.", link: "/apply", linkLabel: "Explore Ausbildung Routes" },
    },
  },
  {
    id: "job-seeker-visa",
    name: "Job Seeker Visa",
    short: "6 months to find work",
    description:
      "The §20 job-seeker visa gives qualified professionals six months inside Germany to land a job — requirements, finances and conversion.",
    icon: Search,
    href: "/countries/germany/job-seeker-visa",
    config: {
      codecrumbs: crumbs("Job Seeker Visa"),
      eyebrow: "Germany — Job Seeker Visa",
      title: "Six Months in Germany",
      highlight: "to Land Your Job",
      intro:
        "Germany's Job Seeker Visa (section 20) grants recognised graduates six months to enter Germany and find employment in their field. It is the bridge for professionals who are qualified but don't yet have a contract.",
      stats: [
        { value: "6 mo", label: "Job Search Window" },
        { value: "€1,240", label: "Monthly Funds Needed" },
        { value: "0", label: "Work Rights Before Offer" },
        { value: "§18a", label: "Converts To Work Visa" },
      ],
      requirements: [
        { title: "Recognised Degree", text: "A university degree recognised as equivalent in Germany." },
        { title: "Funds", text: "Proof of about €7,440 (6 × €1,240) for the stay." },
        { title: "Health Cover", text: "Travel and health insurance valid for the full period." },
        { title: "Field Match", text: "Your job search must align with your recognised profession." },
      ],
      process: [
        { step: "01", title: "Recognition", text: "Degree equivalence confirmed with ZAB/Anabin documentation." },
        { step: "02", title: "File & Finances", text: "Funds proof, insurance and application at the German mission." },
        { step: "03", title: "Job Hunt", text: "Arrival and an intensive, coach-driven German job search." },
        { step: "04", title: "Conversion", text: "On offer signing, your visa converts to a work or Blue Card." },
      ],
      timeline: [
        { step: "1", title: "Recognition", text: "4–12 weeks" },
        { step: "2", title: "Visa", text: "6–10 weeks" },
        { step: "3", title: "Search", text: "Up to 6 months" },
        { step: "4", title: "Work Permit", text: "On job offer" },
      ],
      faqs: [
        { q: "Job-seeker visa or Opportunity Card?", a: "The Opportunity Card replaced the job-seeker visa for most — it allows work during the search and is points-based; the §20 visa remains for graduates seeking field-specific roles." },
        { q: "Can I work while searching?", a: "No — the classic job-seeker visa allows no employment until you hold an offer and convert." },
        { q: "What if I don't find a job?", a: "You must leave and restart; we only recommend this route when the field demand is verifiable." },
        { q: "Can I extend the six months?", a: "Generally no, but job-offer conversion resets your status into a work permit immediately." },
      ],
      cta: { title: "", text: "Six months is a lot of interviews if you arrive prepared. Let's build your landing plan.", link: "/apply", linkLabel: "Plan My Job Seeker Visa" },
    },
  },
  {
    id: "it-jobs",
    name: "IT Jobs",
    short: "Tech careers without a degree",
    description:
      "Germany's IT specialist route lets experienced tech workers get work visas without a formal degree — the fastest-growing visa category.",
    icon: Code2,
    href: "/countries/germany/it-jobs",
    config: {
      codecrumbs: crumbs("IT Jobs"),
      eyebrow: "Germany — IT Jobs",
      title: "A German Tech Career",
      highlight: "Without a Degree",
      intro:
        "Germany's IT specialist visa (section 18b) is the exception to the degree rule: with at least three years of verifiable IT experience and a job offer, you can qualify without any university degree — the most realistic tech route out of Pakistan.",
      stats: [
        { value: "100k+", label: "Open IT Roles" },
        { value: "3 yrs", label: "Experience Needed" },
        { value: "€55k+", label: "Typical Gross Salary" },
        { value: "No Degree", label: "Required" },
      ],
      requirements: [
        { title: "Experience", text: "At least three years of comparable IT work in the last seven years." },
        { title: "Job Offer", text: "A contract matching your tech specialisation and salary band." },
        { title: "Employer Check", text: "Labour-market approval from the Federal Employment Agency." },
        { title: "Skill Proof", text: "Portfolio, references and certifications validating your stack." },
      ],
      process: [
        { step: "01", title: "Profile Match", text: "Your stack matched to German demand — Java, .NET, SAP, DevOps, cloud, security." },
        { step: "02", title: "Role Sourcing", text: "Direct employer or partner-company matching with salary validation." },
        { step: "03", title: "Visa File", text: "Experience evidence, contract and application prepared for you." },
        { step: "04", title: "Relocation", text: "Landing, registration and integration with the German tech scene." },
      ],
      timeline: [
        { step: "1", title: "Role Search", text: "4–12 weeks" },
        { step: "2", title: "Visa", text: "4–10 weeks" },
        { step: "3", title: "Relocation", text: "1–2 months" },
        { step: "4", title: "PR", text: "From 4–5 years" },
      ],
      faqs: [
        { q: "Which tech skills are in demand?", a: "SAP, Java, .NET, DevOps, cloud (AWS/Azure), data engineering, cybersecurity and embedded systems." },
        { q: "Do remote German jobs count?", a: "The contract must establish a German workplace — hybrid roles at German companies qualify." },
        { q: "What salary should I expect?", a: "€55k–€85k gross for experienced developers; senior staff easily exceed €100k." },
        { q: "Is English enough?", a: "Many German tech companies run in English — B1 German helps integration but isn't always required." },
      ],
      cta: { title: "", text: "Your experience is your degree in German tech. Let's find the role that proves it.", link: "/apply", linkLabel: "Find My IT Role" },
    },
  },
  {
    id: "skilled-worker-visa",
    name: "Skilled Worker Visa",
    short: "Fachkraft route for recognised pros",
    description:
      "The Skilled Worker Visa (Fachkraft) for people with German-recognised training or degrees — requirements, process and settlement.",
    icon: BadgeCheck,
    href: "/countries/germany/skilled-worker-visa",
    config: {
      codecrumbs: crumbs("Skilled Worker Visa"),
      eyebrow: "Germany — Skilled Worker Visa",
      title: "The Fachkraft Route",
      highlight: "to Germany",
      intro:
        "Germany's Skilled Worker Visa covers every professional with a recognised qualification — from certified vocational training to degrees. It is the backbone of German immigration: secure, family-friendly and directly on the path to permanent residence.",
      stats: [
        { value: "§18a–18g", label: "Residence Act Basis" },
        { value: "2 yrs", label: "Residence → PR Route" },
        { value: "All Trades", label: "Eligible With Recognition" },
        { value: "Full", label: "Family Rights" },
      ],
      requirements: [
        { title: "Recognised Training", text: "Degree or vocational qualification recognised in Germany." },
        { title: "Contract", text: "Job offer matching your recognised qualification." },
        { title: "Recognition", text: "ZAB/HPA/state recognition — issued before or within the visa period." },
        { title: "Salary", text: "Market-rate salary for the role (no minimum for most trades)." },
      ],
      process: [
        { step: "01", title: "Recognition", text: "Your qualification mapped to a German equivalent certificate." },
        { step: "02", title: "Offer", text: "Employer and contract validation against the role title." },
        { step: "03", title: "Visa", text: "Submission at the German mission and decision tracking." },
        { step: "04", title: "Settle", text: "Registration, social security, family reunion and PR clock start." },
      ],
      timeline: [
        { step: "1", title: "Recognition", text: "4–16 weeks" },
        { step: "2", title: "Visa", text: "4–10 weeks" },
        { step: "3", title: "Arrival", text: "1 month" },
        { step: "4", title: "PR", text: "4–5 years" },
      ],
      faqs: [
        { q: "How is this different from the work visa?", a: "The Skilled Worker Visa is the umbrella — the general work visa and regulated professions both live under it." },
        { q: "Do regulated professions need extra approval?", a: "Nurses, doctors, teachers and engineers need professional recognition (Anerkennung) before or during the visa." },
        { q: "When can I apply for PR?", a: "After four years of pension payments — reduced to two with strong German (B1+)." },
        { q: "Can my spouse work immediately?", a: "Yes — spouses of skilled workers get unrestricted work rights from day one." },
      ],
      cta: { title: "", text: "Recognition is the key that unlocks the Fachkraft route. Let's get yours stamped.", link: "/apply", linkLabel: "Verify My Skilled Worker Route" },
    },
  },
  {
    id: "salary-guide",
    name: "Salary Guide",
    short: "German salaries by profession",
    description:
      "Realistic gross-to-net German salaries by profession — engineers, nurses, IT, trades and entry-level roles with living-cost context.",
    icon: Calculator,
    href: "/countries/germany/salary-guide",
    config: {
      codecrumbs: crumbs("Salary Guide"),
      eyebrow: "Germany — Salary Guide",
      title: "Know Your German",
      highlight: "Salary Before You Go",
      intro:
        "German salaries vary more by industry and region than by degree. This guide gives realistic gross-to-net figures for the professions we place most — so you can negotiate with numbers, not hopes.",
      stats: [
        { value: "€50k", label: "Median Gross Salary" },
        { value: "≈62%", label: "Average Net Take-Home" },
        { value: "€8.7k", label: "Typical Rent / Year" },
        { value: "13–14", label: "Pay Months (Bonus Often)" },
      ],
      requirements: [
        { title: "Engineers", text: "€55k–€75k gross — mechanical, electrical and automotive lead the range." },
        { title: "IT & Developers", text: "€55k–€85k — senior staff cross €100k in cloud and SAP roles." },
        { title: "Nursing & Care", text: "€3,000–€3,800 monthly gross — shift premiums add 15–25%." },
        { title: "Trades (Ausbildung)", text: "€2,600–€3,500 monthly — electricians and mechatronics top the trades." },
      ],
      process: [
        { step: "01", title: "Role Baseline", text: "National average for your exact title from current German data." },
        { step: "02", title: "Region Factor", text: "Munich/Frankfurt add 10–15%; East Germany sits 10% below average." },
        { step: "03", title: "Net Calculation", text: "German tax class, insurance and church tax applied for your case." },
        { step: "04", title: "Offer Strategy", text: "We brief you with target figures before any negotiation." },
      ],
      timeline: [
        { step: "1", title: "Benchmark", text: "Same day" },
        { step: "2", title: "Region Adjust", text: "Same day" },
        { step: "3", title: "Net Model", text: "1–2 days" },
        { step: "4", title: "Negotiation", text: "With every offer" },
      ],
      faqs: [
        { q: "What is the average net salary?", a: "A €50,000 gross salary (tax class I) nets roughly €2,700–€2,900 per month." },
        { q: "Which city pays most?", a: "Munich, Frankfurt and Stuttgart lead — but higher rent narrows the gap." },
        { q: "Do I get a 13th salary?", a: "Collective agreements (IG Metall, TVöD) often include holiday and Christmas bonuses." },
        { q: "Are German salaries negotiable?", a: "Yes — especially in IT and engineering; experienced candidates regularly negotiate 5–10% above first offer." },
      ],
      cta: { title: "", text: "Numbers win negotiations. Let's model your exact German take-home salary.", link: "/ai/salary-calculator", linkLabel: "Calculate My German Salary" },
    },
  },
  {
    id: "german-language",
    name: "German Language",
    short: "A1–B2 training & exam prep",
    description:
      "German language training A1 to B2 with exam preparation — which level you need for each visa and how long each level takes.",
    icon: Languages,
    href: "/countries/germany/german-language",
    config: {
      codecrumbs: crumbs("German Language"),
      eyebrow: "Germany — German Language",
      title: "German Levels That",
      highlight: "Open Visa Doors",
      intro:
        "German language level determines which German visa you qualify for and how fast you integrate. We train A1 to B2 with exam preparation, so your language progress and visa timeline stay in sync.",
      stats: [
        { value: "A1", label: "Visa / Family Basis" },
        { value: "B1", label: "Nursing & Work Minimum" },
        { value: "B2", label: "Full Recognition" },
        { value: "6–8 mo", label: "A1 → B2 Full Path" },
      ],
      requirements: [
        { title: "Goethe / TELC / ÖSD", text: "Certificates accepted for every German visa category." },
        { title: "A1", text: "Required for family reunion and spouse visas." },
        { title: "B1", text: "Required for nursing and most work routes." },
        { title: "B2", text: "Required for full professional recognition and faster PR." },
      ],
      process: [
        { step: "01", title: "Level Placement", text: "Free assessment to place you at the correct CEFR level." },
        { step: "02", title: "Intensive Track", text: "Structured lessons — in-person or online — with live teachers." },
        { step: "03", title: "Exam Prep", text: "Mock exams and Goethe/TELC format training before booking." },
        { step: "04", title: "Certification", text: "Exam booking, results and certificate delivered into your visa file." },
      ],
      timeline: [
        { step: "1", title: "A1", text: "2–3 months" },
        { step: "2", title: "A2", text: "2–3 months" },
        { step: "3", title: "B1", text: "3–4 months" },
        { step: "4", title: "B2", text: "3–4 months" },
      ],
      faqs: [
        { q: "Which exam should I take?", a: "Goethe is most widely accepted; TELC is accepted for nursing. We book per your visa type." },
        { q: "Can I learn online from Pakistan?", a: "Yes — our full track runs online with the same certification outcomes." },
        { q: "Is German really required?", a: "For English-taught study and some IT roles, no — for every work route long-term, yes." },
        { q: "Does B2 speed up PR?", a: "Yes — B1 shortens PR from 4 to 2 years, and B2 is the recognition standard." },
      ],
      cta: { title: "", text: "Every German level you clear removes a barrier. Let's book your placement test.", link: "/services/language/german", linkLabel: "Start German Training" },
    },
  },
  {
    id: "faqs",
    name: "FAQs",
    short: "Every Germany question answered",
    description:
      "The most-asked Germany questions from Pakistani applicants — visas, costs, family, recognition and settlement, answered honestly.",
    icon: HelpCircle,
    href: "/countries/germany/faqs",
    config: {
      codecrumbs: crumbs("FAQs"),
      eyebrow: "Germany — FAQs",
      title: "Germany Questions,",
      highlight: "Answered Straight",
      intro:
        "Everything Pakistani applicants ask us about Germany — visas, blocked accounts, recognition, family and real costs — answered with the same honesty we use in consultation.",
      stats: [
        { value: "€934", label: "Monthly Blocked Account" },
        { value: "8–12 wks", label: "APS Processing" },
        { value: "5 yrs", label: "PR Route" },
        { value: "Full", label: "Family Rights" },
      ],
      requirements: [
        { title: "Is Germany really tuition-free?", text: "Public universities charge €250–€400 per semester — essentially free compared to global standards." },
        { title: "How much does the move cost?", text: "Plan €10k–€14k: blocked account, APS, visa fees, flights, language and settlement." },
        { title: "Do I need German?", text: "For study in English, no. For work and long-term settlement, increasingly yes." },
        { title: "Can I bring my family?", text: "Spouse and children visas apply across work and study routes from day one." },
      ],
      process: [
        { step: "01", title: "Which route fits?", text: "Study, work, nursing, Ausbildung or Opportunity Card — the honest one for your profile." },
        { step: "02", title: "Recognition & APS", text: "Degrees and documents validated before any application." },
        { step: "03", title: "Language & Funds", text: "Levels and blocked account planned to the visa timeline." },
        { step: "04", title: "Visa & Landing", text: "File, interview prep, arrival and settlement support." },
      ],
      timeline: [
        { step: "1", title: "APS", text: "8–12 weeks" },
        { step: "2", title: "Language", text: "2–8 months" },
        { step: "3", title: "Visa", text: "6–10 weeks" },
        { step: "4", title: "PR", text: "2–5 years" },
      ],
      faqs: [
        { q: "How long does the whole process take?", a: "Typically 6–12 months end-to-end, depending on your language level and route." },
        { q: "Is Germany safe for Pakistani families?", a: "Yes — Germany has strong settlement infrastructure, and family visas carry full work rights." },
        { q: "What is APS and why do I need it?", a: "A document verification by the German Academic Exchange Service — mandatory for Pakistani graduates." },
        { q: "Do I need an agent?", a: "No — but a file built by people who do this daily fails less. That is what we are for." },
      ],
      cta: { title: "", text: "The right answer to your exact question beats a hundred guides. Ask us directly.", link: "/contact", linkLabel: "Ask Your Question" },
    },
  },
];
