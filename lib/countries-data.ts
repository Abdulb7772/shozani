import type { ServiceData } from "@/components/service/service-page";

export type CountryId =
  | "germany"
  | "australia"
  | "uk"
  | "usa"
  | "canada"
  | "europe"
  | "saudi-arabia"
  | "uae"
  | "pakistan";

export const countries: Record<CountryId, ServiceData> = {
  germany: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "Germany", href: "/countries/germany" }],
    eyebrow: "Destination — Germany",
    title: "Germany: tuition-free",
    highlight: "degrees & a real PR path",
    intro:
      "Germany pairs tuition-free university education with the EU's strongest job market, a post-study residence permit and a transparent permanent residency route. Engineers, nurses and skilled workers are in constant demand.",
    stats: [
      { value: "Tuition-free", label: "Public Universities" },
      { value: "€934", label: "Monthly Blocked Account" },
      { value: "18 mo", label: "Post-Study Work Visa" },
      { value: "5 yrs", label: "Residence → PR Route" },
    ],
    requirements: [
      { title: "Valid Passport", text: "With at least 12 months validity beyond your travel date." },
      { title: "Qualifications", text: "Recognised academic documents, verified via APS for Pakistan." },
      { title: "Finances", text: "Blocked account of about €13,200 for the visa year." },
      { title: "Language", text: "English for most programs; German up to B1 where required." },
    ],
    process: [
      { step: "01", title: "Profile & Route", text: "We confirm your study, work or nursing route with a free assessment." },
      { step: "02", title: "APS & Approvals", text: "Document validation and any professional recognition processed for you." },
      { step: "03", title: "Admission / Job Offer", text: "University acceptance or a German employer contract." },
      { step: "04", title: "Visa & Arrival", text: "Blocked account, insurance, interview prep and settlement onboarding." },
    ],
    timeline: [
      { step: "1", title: "APS Certificate", text: "8–12 weeks" },
      { step: "2", title: "Offer / Contract", text: "4–10 weeks" },
      { step: "3", title: "Visa Decision", text: "6–10 weeks" },
      { step: "4", title: "Arrival", text: "Intake Oct / April" },
    ],
    faqs: [
      { q: "Is German really tuition-free?", a: "Yes for public universities — you only pay an administration fee of roughly €250–€400 per semester." },
      { q: "Can I work while studying?", a: "Students may work 120 full days a year, and there are part-time jobs paying €12–15/hour." },
      { q: "What is the PR route?", a: "After 5 years in Germany with German knowledge and a secure income, you can apply for permanent residence." },
      { q: "Do I need German or IELTS?", a: "English-taught programs accept IELTS; German-taught degrees need B1 or higher, which we train in-house." },
    ],
    cta: { title: "", text: "Germany's tuition-free reality is closer than it seems — let's map your exact route.", link: "/apply", linkLabel: "Check Germany Eligibility" },
  },

  australia: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "Australia", href: "/countries/australia" }],
    eyebrow: "Destination — Australia",
    title: "Study, work & settle",
    highlight: "on one proactive path",
    intro:
      "Australia links quality education directly to skilled migration — post-study work visas, employer sponsorship and points-tested migration make Australia one of the strongest study-to-PR destinations.",
    stats: [
      { value: "2–4 yrs", label: "Post-Study Work Visa" },
      { value: "65", label: "PR Points Baseline" },
      { value: "485", label: "Graduate Visa Type" },
      { value: "AUD 30k+", label: "Part-Time Work Cap/Year" },
    ],
    requirements: [
      { title: "Course & University", text: "CRICOS-registered institution and an eligible study program." },
      { title: "English Test", text: "IELTS or PTE at the institution's required band." },
      { title: "Genuine Student Check", text: "Evidence you are a genuine student, not a migration pathway." },
      { title: "Financial Proof", text: "Tuition, living costs and travel funds in the required form." },
    ],
    process: [
      { step: "01", title: "Route Check", text: "We map which course drives your closest points or PR route." },
      { step: "02", title: "Admission", text: "University and college applications until the COE arrives." },
      { step: "03", title: "Skilled & Visa", text: "Skills assessment and student visa decision, reviewed end-to-end." },
      { step: "04", title: "Settlement", text: "Arrival briefing, accommodation help and post-study migration planning." },
    ],
    timeline: [
      { step: "1", title: "Admission", text: "4–8 weeks" },
      { step: "2", title: "Student Visa", text: "4–12 weeks" },
      { step: "3", title: "Intake", text: "Feb / Jul" },
      { step: "4", title: "Post-Study PR", text: "2–3 years" },
    ],
    faqs: [
      { q: "Which courses lead to PR?", a: "Occupations on the skilled occupation list — teaching, nursing, IT, engineering and construction scores best." },
      { q: "Do I need a skills assessment?", a: "For most PR routes, yes — a VETASSESS or TRA occupation assessment is needed in addition to the degree." },
      { q: "Can my family come?", a: "Student and graduate visas include dependent partners and children." },
      { q: "What is the true PR timeline?", a: "Typically 2–3 post-study years — study, graduate visa, then points-tested PR." },
    ],
    cta: { title: "", text: "The study-to-PR route is real if the course is right. Let's verify your occupation list.", link: "/apply", linkLabel: "Check Australia Eligibility" },
  },

  uk: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "United Kingdom", href: "/countries/uk" }],
    eyebrow: "Destination — United Kingdom",
    title: "Elite universities,",
    highlight: "a 2-year stay-back",
    intro:
      "The UK's world-class universities economic, legal and STEM programs are matched by a two-year Graduate Visa that powers a fast path into skilled work.",
    stats: [
      { value: "2 yrs", label: "Graduate Visa Stay-Back" },
      { value: "#50+", label: "QS Top 100 Institutions" },
      { value: "20 hr/wk", label: "Study Work Allowance" },
      { value: "27–33%", label: "Top Universities Worldwide" },
    ],
    requirements: [
      { title: "Offer (CAS)", text: "Confirmation of Acceptance for Studies from your CAS holding university." },
      { title: "English Pro", text: "SELT — IELTS UKVI or PTE academic at the university requirement." },
      { title: "Government Funding", text: "Proof of funds for 9 months living costs + tuition." },
      { title: "Tuberculosis Check", text: "Rn certification for applicants from higher-risk countries." },
    ],
    process: [
      { step: "01", title: "Course & University", text: "Shortlist of universities with ROI for your field." },
      { step: "02", title: "Application & Offer", text: "Admissions including personal statements and interviews." },
      { step: "03", title: "CAS & Visa", text: "Financial documents and a clear student visa file." },
      { step: "04", title: "Landing & Careers", text: "Arrival, accommodation and the two-year graduate journey." },
    ],
    timeline: [
      { step: "1", title: "Offer & CAS", text: "4–8 weeks" },
      { step: "2", title: "Student Visa", text: "3–6 weeks" },
      { step: "3", title: "Intake", text: "Sep / Jan" },
      { step: "4", title: "Stay-Back", text: "2 years post-study" },
    ],
    faqs: [
      { q: "How long is the graduate visa?", a: "Two years for most students, and three for PhD. You can work and switch to an employer route." },
      { q: "Is the UK cheaper than before?", a: "Tuition is higher than Germany, but the shorter courses and the two-year stay-back make the ROI strong." },
      { q: "Who qualifies for the stay-back?", a: "Anyone completing an eligible degree at an eligible UK institution can apply." },
      { q: "Can I stay permanently later?", a: "Yes — skilled worker or innovator routes convert stay-backs into settlement after the qualifying years." },
    ],
    cta: { title: "", text: "Two years of UK work rights is a serious head start. Let's pick the right degree.", link: "/apply", linkLabel: "Check UK Eligibility" },
  },

  usa: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "USA", href: "/countries/usa" }],
    eyebrow: "Destination — United States",
    title: "Top-ranked education,",
    highlight: "STEM & scholarship-driven",
    intro:
      "US universities, colleges and the STEM OPT extension offer global employability. We select affordable, scholarship-friendly institutions aligned to your F-1 journey.",
    stats: [
      { value: "#1", label: "Universities Worldwide" },
      { value: "OPT 24", label: "STEM Extension" },
      { value: "60%", label: "Receive Aid / Scholarships" },
      { value: "120 days", label: "I-20 & Registration" },
    ],
    requirements: [
      { title: "I-20 Form", text: "Certificate of Eligibility issued by the admitting college." },
      { title: "Tests", text: "TOEFL / IELTS and GRE/GMAT where your program requires them." },
      { title: "Proof of Funds", text: "Bank statement equal to one year or more of the I-20 listed costs." },
      { title: "DS-160 & Interview", text: "Visa application, fee and the F-1 consulate interview." },
    ],
    process: [
      { step: "01", title: "Profile & Shortlist", text: "The right institutions by ROI, scholarships and STEM status." },
      { step: "02", title: "Tests & Applications", text: "Test registration, essays and broader university applications." },
      { step: "03", title: "I-20 & Visa", text: "Document review, interview prep and the F-1 filing." },
      { step: "04", title: "Land & Intern", text: "Arrival, campus onboarding and OPT planning into your resume." },
    ],
    timeline: [
      { step: "1", title: "Tests & Admissions", text: "8–20 weeks" },
      { step: "2", title: "I-20 + Visa", text: "4–12 weeks" },
      { step: "3", title: "Intake", text: "Aug / Jan" },
      { step: "4", title: "OPT", text: "Final-year program" },
    ],
    faqs: [
      { q: "Can I study without IELTS?", a: "Many universities accept TOEFL or waive English proof based on academic medium." },
      { q: "What is OPT and STEM?", a: "Optional Practical Training lets you work after graduation — 12 months, extended 24 for STEM degrees." },
      { q: "How expensive is the US?", a: "Tuition varies widely — community colleges and state schools keep the cost realistic; we shortlist scholarships from day one." },
      { q: "Is PR easy from the US?", a: "The H-1B is competitive; for most students, the US is an ROI decision — not necessarily a PR guarantee." },
    ],
    cta: { title: "", text: "The US rewards a smart, scholarship-led plan. Let's position you for it.", link: "/apply", linkLabel: "Plan My US Admission" },
  },

  canada: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "Canada", href: "/countries/canada" }],
    eyebrow: "Destination — Canada",
    title: "Study, earn &",
    highlight: "qualify for PR",
    intro:
      "Canada's post-graduation work permit and Express Entry let international students convert education into permanent residence faster than almost any large study market.",
    stats: [
      { value: "3 yrs", label: "PGWP Length" },
      { value: "24 hr/wk", label: "Work While Studying" },
      { value: "67", label: "Express Entry Points" },
      { value: "Nov-19", label: "Key intake windows" },
    ],
    requirements: [
      { title: "DLI Letter", text: "Admission from a designated learning institution." },
      { title: "IELTS / PTE", text: "CLB or study permit English ranking." },
      { title: "Study Funds", text: "Tuition + 10 months COL — GIC or named account." },
      { title: "Fingerprints & Medical", text: "Pre-check for visa processing from the correct offices." },
    ],
    process: [
      { step: "01", title: "College Match", text: "University match by cost, admissions rate and PR grid." },
      { step: "02", title: "DLI & Application", text: "Admission letter and Study permit file." },
      { step: "03", title: "Settlement", text: "Arrival, bank setup and Canadian job prep." },
      { step: "04", title: "PR Planning", text: "PGWP + Express Entry built from day one." },
    ],
    timeline: [
      { step: "1", title: "Offer & Study Permit", text: "4–12 weeks" },
      { step: "2", title: "Intake", text: "Sep / Jan / May" },
      { step: "3", title: "PGWP", text: "After your study" },
      { step: "4", title: "Express Entry", text: "1–3 years" },
    ],
    faqs: [
      { q: "How much does Canada cost?", a: "College tuition runs CAD 15k–35k at many undergrads, with GIC the biggest living-cost requirement at the front." },
      { q: "Which programs are PR-friendly?", a: "Anything in NOC A–B: IT, nursing, education, or business management with the right CRS points." },
      { q: "Can I bring my family?", a: "Yes — a spouse's open work permit and children can be part of the move." },
      { q: "Is Canada still valuing students?", a: "Yes, but with stronger on-country pathways and higher proof-of-language for PR." },
    ],
    cta: { title: "", text: "Canada still rewards intentional students. Let's chart the PGWP → PR line.", link: "/apply", linkLabel: "Plan My Canada Move" },
  },

  europe: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "Europe", href: "/countries/europe" }],
    eyebrow: "Destination — Europe",
    title: "EU-wide mobility,",
    highlight: "one chosen base",
    intro:
      "Across the Schengen region — Netherlands, France, Ireland, Poland and more — public and affordable education, high salaries and intra-EU movement create options Germany alone cannot.",
    stats: [
      { value: "27", label: "EU Member States" },
      { value: "≈€400", label: "Semester of many Courses" },
      { value: "90 days", label: "Schengen Travel on Visa" },
      { value: "3–5 yrs", label: "PR Pathways Common" },
    ],
    requirements: [
      { title: "National / EU Visa", text: "Schengen-type visa for short stays; national residency for study/work." },
      { title: "Acceptance / Contract", text: "University admission or a job offer from the base country." },
      { title: "Funds Proof", text: "Living-cost evidence per the specific country rules." },
      { title: "Health Insurance", text: "Private or national scheme covering your stay." },
    ],
    process: [
      { step: "01", title: "Country Match", text: "Shortlist a EU base that matches course cost, job market and language." },
      { step: "02", title: "Admission / Job", text: "University intake or employer sponsorship." },
      { step: "03", title: "National Visa", text: "Residency permit processing for the base country." },
      { step: "04", title: "EU Mobility", text: "Schengen freedom to live, work and travel." },
    ],
    timeline: [
      { step: "1", title: "Select Base", text: "2–4 weeks" },
      { step: "2", title: "Admission / Offer", text: "4–12 weeks" },
      { step: "3", title: "Residency Permit", text: "4–10 weeks" },
      { step: "4", title: "EU Settlement", text: "3–5 years" },
    ],
    faqs: [
      { q: "Which EU country is cheapest to live in?", a: "Poland, Romania and Hungary are cheaper; Western Europe gives higher salaries. The balances for your field leans our picks." },
      { q: "Do I need German to study in Europe?", a: "No — the Netherlands, Ireland and many Nordic programs run strong English-taught degrees." },
      { q: "Can I travel Schengen freely?", a: "With a national EU residence you can travel within the Schengen area without additional visas." },
      { q: "Where are the jobs?", a: "Tech, engineering and nursing are borderless in demand — with your base country as the ladder." },
    ],
    cta: { title: "", text: "EU options beat a single-country plan when you know the exact list. Let's shortlist your base.", link: "/apply", linkLabel: "Find My EU Route" },
  },

  "saudi-arabia": {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "Saudi Arabia", href: "/countries/saudi-arabia" }],
    eyebrow: "Destination — Saudi Arabia",
    title: "Gulf careers with",
    highlight: "work, salary & stability",
    intro:
      "With Vision 2030 adding millions of jobs and professional giga-projects, Saudi Arabia is the fastest-growing Gulf market for skilled workers across construction, healthcare, IT and oil industries.",
    stats: [
      { value: "SAR 4-6k", label: "Entry Salaries (USD)" },
      { value: "IQAMA", label: "Residency Work Mechanism" },
      { value: "24/7", label: "Accommodation Often" },
      { value: "2 yrs", label: "Typical Contract Terms" },
    ],
    requirements: [
      { title: "Job Offer & GOSI", text: "A signed offer and the Iqama registration with GOSI." },
      { title: "Talent / Points", text: "For premium residency, the Iqama points system applies." },
      { title: "Medical", text: "Medical examination in Pakistan and Saudi law of health insurance." },
      { title: "Exit / Reentry Visa", text: "Visa stamping and exit consistency handled by employer." },
    ],
    process: [
      { step: "01", title: "CRS & Target", text: "Company matching in Healthcare, Oil, Tech or construction." },
      { step: "02", title: "Contract & Visa", text: "Offer signing and departure visa processing." },
      { step: "03", title: "Iqama & Settlement", text: "Medical, residence card and accommodation." },
      { step: "04", title: "Growth", text: "Contracting and re-entry tracking for your field." },
    ],
    timeline: [
      { step: "1", title: "Job / Offering", text: "4–8 weeks" },
      { step: "2", title: "Flight & Visa", text: "2–4 weeks" },
      { step: "3", title: "Iqama", text: "1–3 weeks" },
      { step: "4", title: "Contract", text: "2 years typical" },
    ],
    faqs: [
      { q: "Is a salary enough to save money?", a: "Salaries vary, but accommodation and transport are often included — many clients save 50%+ of income." },
      { q: "What is the Premium Residency?", a: "The Saudi premium residency (salaried or invested) offers visa freedom and ownership rights." },
      { q: "Can I bring my family?", a: "Yes — family iqama is available once income requirements are met." },
      { q: "Which sectors hire the most?", a: "Construction, healthcare, IT, oil & gas and hospitality hire consistently under Vision 2030." },
    ],
    cta: { title: "", text: "Gulf earnings are a plan, not a wildcard, when the offer is right. Let's find yours.", link: "/apply", linkLabel: "Find My Saudi Role" },
  },

  uae: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "UAE", href: "/countries/uae" }],
    eyebrow: "Destination — UAE",
    title: "Gulf money,",
    highlight: "plus global stature",
    intro:
      "The UAE combines tax-free income, a global business hub and golden residency — from job-seeker and freelance visas to investor residency and company formation.",
    stats: [
      { value: "0%", label: "Personal Income Tax" },
      { value: "2 yrs", label: "Golden Residency Options" },
      { value: "7–10", label: "Days to Form LLC" },
      { value: "Global", label: "Employer Base" },
    ],
    requirements: [
      { title: "Offer / Rights", text: "Job offer plus employer-managed work permit (STS)." },
      { title: "Passport & Photo", text: "Passport and digital applicant files." },
      { title: "Golden Visa", text: "Investor, skilled or family sponsorship records." },
      { title: "Insurance", text: "Mandatory health insurance to retain a residence card." },
    ],
    process: [
      { step: "01", title: "Route Check", text: "Job-seeker visa, employer sponsor, or golden/residency." },
      { step: "02", title: "Visa & Residency", text: "Employment certificate + Emirates ID process." },
      { step: "03", title: "Settlement", text: "Bank account, housing, transport and family sponsorship." },
      { step: "04", title: "Long-Term", text: "Golden visa or business-focused pathways." },
    ],
    timeline: [
      { step: "1", title: "Sponsorship", text: "2–6 weeks" },
      { step: "2", title: "Residence / ID", text: "2–3 weeks" },
      { step: "3", title: "Settlement", text: "1–2 weeks" },
      { step: "4", title: "Golden", text: "From 6 months" },
    ],
    faqs: [
      { q: "Is UAE income really tax-free?", a: "There is no personal income tax in the UAE for residents in most cases — the 9% applies to corporate profits." },
      { q: "How do I get a job visa?", a: "Employer sponsor is the fastest; a job-seeker visa permits entry for interviews and recruiting." },
      { q: "What counts for a Golden Visa?", a: "Investors, skilled professionals and real-estate owners (AED 2M+) have no-sponsor 10-year routes." },
      { q: "Can I include my family?", a: "Yes, and residence can be extended to cover spouse and children." },
    ],
    cta: { title: "", text: "A tax-free paycheck and a golden visa waiting for the right profile. Let's match yours.", link: "/apply", linkLabel: "Map My UAE Move" },
  },

  pakistan: {
    codecrumbs: [{ label: "Destinations", href: "/countries" }, { label: "Pakistan", href: "/countries/pakistan" }],
    eyebrow: "Is Home — Pakistan",
    title: "Train here,",
    highlight: "frame the move out",
    intro:
      "We support the Pakistan side of your journey — visa document preparation, language training, GIC and finance structuring, and family support back home so your move abroad becomes permanent.",
    stats: [
      { value: "24/7", label: "Local Support desk" },
      { value: "0", label: "Hidden doc fees" },
      { value: "100%", label: "Filings reviewed here" },
      { value: "100%", label: "Digital-First Guidance" },
    ],
    requirements: [
      { title: "CNIC & Passport", text: "Valid documents for both the applicant and for any co-sponsor." },
      { title: "Academic", text: "Certified/attestation of degrees and transcripts for all filed routes." },
      { title: "Bank & Credits", text: "Statement of sufficient funds with clear sources." },
      { title: "Family Consent", text: "Consents and declarations for dependent/co-file filings." },
    ],
    process: [
      { step: "01", title: "Document House", text: "Attestation, translation, apostille and PDF packs." },
      { step: "02", title: "Language & Tests", text: "IELTS/PTE/German prep and bookings." },
      { step: "03", title: "Finances", text: "GIC, blocked accounts and proof-of-funds structuring." },
      { step: "04", title: "Visa & Departure", text: "Office interviews, pre-departure and family logistic coordination." },
    ],
    timeline: [
      { step: "1", title: "Documental pack", text: "1–3 weeks" },
      { step: "2", title: "Tests", text: "4–8 weeks" },
      { step: "3", title: "Funds struct", text: "2–4 weeks" },
      { step: "4", title: "Visa", text: "International" },
    ],
    faqs: [
      { q: "Do you process all Pakistan countries?", a: "Yes — study, work and family visas for Germany, UK, Canada, Australia, Saudi, UAE and more." },
      { q: "Do I need to come to your office?", a: "Everything can be completed digitally; local offices are available for mentored and attestation visits." },
      { q: "What documents can you attest?", a: "FES, transcripts, and income declarations — university and MoFA/HEC-level attestation." },
      { q: "What if my file is complicated?", a: "Complicated cases are the standard — we advise honestly before a single rupee is spent." },
    ],
    cta: { title: "", text: "Every successful abroad story starts with the documents at home. Let's start your pack.", link: "/contact", linkLabel: "Start Your Pakistan File" },
  },
};

export const countryList: { id: CountryId; name: string; href: string }[] = [
  { id: "germany", name: "Germany", href: "/countries/germany" },
  { id: "australia", name: "Australia", href: "/countries/australia" },
  { id: "uk", name: "United Kingdom", href: "/countries/uk" },
  { id: "usa", name: "USA", href: "/countries/usa" },
  { id: "canada", name: "Canada", href: "/countries/canada" },
  { id: "europe", name: "Europe", href: "/countries/europe" },
  { id: "saudi-arabia", name: "Saudi Arabia", href: "/countries/saudi-arabia" },
  { id: "uae", name: "UAE", href: "/countries/uae" },
  { id: "pakistan", name: "Pakistan", href: "/countries/pakistan" },
];