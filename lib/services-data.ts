import type { ServiceData } from "@/components/service/service-page";

export type ServiceId =
  | "study-abroad"
  | "study-germany"
  | "study-australia"
  | "study-canada"
  | "study-usa"
  | "study-uk"
  | "work-abroad"
  | "work-germany"
  | "immigration"
  | "immigration-pr"
  | "immigration-family"
  | "immigration-business"
| "language"
  | "language-german"
  | "language-ielts"
  | "language-pte"
  | "business"
  | "construction";

export const services: Record<ServiceId, ServiceData> = {
  "study-abroad": {
    codecrumbs: [{ label: "Services", href: "/services" }, { label: "Study Abroad", href: "/services/study-abroad" }],
    eyebrow: "Study Abroad",
    title: "World-class universities,",
    highlight: "one guidance desk",
    intro:
      "From course selection and admission to visa letter, pre-departure briefing and settlement — our study abroad desk manages your complete journey across Germany, UK, Australia, Canada, USA and Europe.",
    stats: [
      { value: "4,500+", label: "Students Placed" },
      { value: "97%", label: "Admission Success" },
      { value: "25+", label: "Partner Universities" },
      { value: "16", label: "Countries Offered" },
    ],
    requirements: [
      { title: "Academic Transcripts", text: "Secondary and Bachelor's transcripts with certificates where required." },
      { title: "Language Test", text: "IELTS, PTE or a recognized German test as your country and university demand." },
      { title: "Statement of Purpose", text: "A compelling SOP explaining your goals and why this course and country." },
      { title: "Financial Documents", text: "Proof of funds in the exact format your visa office requires." },
    ],
    process: [
      { step: "01", title: "Profile & Counselling", text: "A free consultation shortlists courses and universities that fit your profile and budget." },
      { step: "02", title: "Application & Offer", text: "We submit, track and follow up on applications until the offer letter arrives." },
      { step: "03", title: "Scholarships", text: "We map scholarships, assistantships and merit awards you qualify for." },
      { step: "04", title: "Visa & Departure", text: "Full visa filing, interview prep and pre-departure briefing." },
    ],
    timeline: [
      { step: "1", title: "Consultation", text: "Free call" },
      { step: "2", title: "University Application", text: "2–6 weeks" },
      { step: "3", title: "Offer Letter", text: "2–8 weeks" },
      { step: "4", title: "Visa Decision", text: "6–12 weeks" },
    ],
    faqs: [
      { q: "Which country is right for me?", a: "It depends on your budget, course and long-term goals. Germany and the UK are strong value with post-study work options, Australia and Canada bridge to PR. We map your best fit in the first consultation." },
      { q: "Can I work while studying?", a: "Yes, most destinations allow students to work — Germany 120 full days, UK up to 24 hours a week, Canada 24 hours weekly." },
      { q: "When should I start?", a: "Ideally 12–18 months before the intake. Applications programs fill up 8–12 months in advance." },
      { q: "What is your admission rate?", a: "96% across all countries. We only pursue realistic, achievable targets for your profile." },
    ],
    cta: { title: "", text: "Let's find the universities and scholarships that actually fit your profile and goals.", link: "/apply", linkLabel: "Book Your Free Consultation" },
  },

  "study-germany": {
    codecrumbs: [{ label: "Services", href: "/services/study-abroad" }, { label: "Study Germany", href: "/services/study-abroad/germany" }],
    eyebrow: "Study Abroad — Germany",
    title: "Tuition-free education",
    highlight: "with world-class careers",
    intro:
      "Germany offers tuition-free degrees at 400+ public universities, a powerhouse engineering heritage, part-time work and generous post-study paths. We handle admission, APS and the full visa logistics.",
    stats: [
      { value: "Tuition-free", label: "Public Universities" },
      { value: "â‚¬934", label: "Blocked Account" },
      { value: "18 mo", label: "Post-Study Visa" },
      { value: "110+", label: "English Programs" },
    ],
    requirements: [
      { title: "Academic Certificates", text: "FSC / A-Levels or Bachelor's degree for Master's applicants." },
      { title: "APS Certificate", text: "Document validation via the German admissions platform." },
      { title: "Language Proficiency", text: "English (IELTS) or German up to B1 for German-taught courses." },
      { title: "Financial Proof", text: "Blocked account or scholarship proof for the visa." },
    ],
    process: [
      { step: "01", title: "Course Selection", text: "Pick a tuition-free program in a city that fits your career and budget." },
      { step: "02", title: "APS & Language", text: "We process your APS and arrange language test passes." },
      { step: "03", title: "Application & Offer", text: "University applications handled end-to-end until your letter." },
      { step: "04", title: "Visa & Settlement", text: "Blocked account, health insurance, visa interview and arrival." },
    ],
    timeline: [
      { step: "1", title: "APS Certificate", text: "8–12 weeks" },
      { step: "2", title: "University Application", text: "2–6 weeks" },
      { step: "3", title: "Visa Processing", text: "6–10 weeks" },
      { step: "4", title: "Intake", text: "Oct / April" },
    ],
    faqs: [
      { q: "Is Germany really tuition-free?", a: "Yes — public universities charge only an administration fee of about â‚¬250–400 per semester. Some states have evaded private institution fees, but the public system remains heavily subsidised." },
      { q: "What does employment you need?", a: "For 2026 you need about â‚¬13,200 in a blocked account. Part-time jobs (~â‚¬12–15/hour) cover the monthly costs comfortably." },
      { q: "Do I need IELTS?", a: "Only for English-taught programs. Many universities also accept a medium-of-instruction certificate or offshore German tests." },
      { q: "How hard is APS?", a: "APS is document- and verification-based for Pakistan. Our team prepares the complete file so you get your certificate smoothly." },
    ],
    cta: { title: "", text: "Germany could be your realistic tuition-free path to a top engineering career.", link: "/apply", linkLabel: "Check Germany Eligibility" },
  },

  "study-australia": {
    codecrumbs: [{ label: "Services", href: "/services/study-abroad" }, { label: "Study Australia", href: "/services/study-abroad/australia" }],
    eyebrow: "Study Abroad — Australia",
    title: "A degree that",
    highlight: "leads to a PR",
    intro:
      "Australia pairs world-class universities with a transparent skilled-migration pathway. Durable, safe campuses, generous post-study work rights and a clear route to permanent residence.",
    stats: [
      { value: "6", label: "Top-100 Universities" },
      { value: "120k", label: "Avg. Alumni Salary" },
      { value: "24 h", label: "Weekly Work Rights" },
      { value: "2–4 yr", label: "Post-Study Visa" },
    ],
    requirements: [
      { title: "Academic Record", text: "Year 12 for undergraduate; Bachelor's for postgraduate." },
      { title: "English Test", text: "IELTS Academic 6.5 or PTE / TOEFL equivalent." },
      { title: "Financial Evidence", text: "Tuition + living costs in audited evidence— AU$29,710/year." },
      { title: "Geniune Student Check", text: "Satisfy the real-student verification for your GS assessment." },
    ],
    process: [
      { step: "01", title: "Course & University", text: "Shortlist from our partner universities with scholarship codes." },
      { step: "02", title: "Offer & Enrollment", text: "Apply, receive the offer and confirm enrollment (COE)." },
      { step: "03", title: "GTE/GS + Visa", text: "Genuine-student statement, health cover and student visa lodgement." },
      { step: "04", title: "Arrival & PR Path", text: "Pre-departure briefing + post-study plan that maps to PR." },
    ],
    timeline: [
      { step: "1", title: "Application", text: "3–8 weeks" },
      { step: "2", title: "Offer & COE", text: "2–4 weeks" },
      { step: "3", title: "Student Visa", text: "4–8 weeks" },
      { step: "4", title: "Intake", text: "Feb / July" },
    ],
    faqs: [
      { q: "Can I get PR after studying in Australia?", a: "Yes. Courses on the skilled occupation list (nursing, IT, engineering) lead to progressive visa and ultimately PR through skilled migration." },
      { q: "How much do I need to show?", a: "About AU$29,710 living costs per year (2026) plus tuition and OSHC. Part-time work (24 hours/week) is allowed." },
      { q: "Which English test is accepted?", a: "IELTS Academic is the most common. PTE is also fully accepted and many students find it faster to score in." },
      { q: "Are scholarships common?", a: "Yes — international merit scholarships cover course fees and sometimes stipends. We shortlist those you qualify for." },
    ],
    cta: { title: "", text: "An Australian degree can be the fastest route to a permanent home. Let's map your fit.", link: "/apply", linkLabel: "Check Australia Eligibility" },
  },

  "study-canada": {
    codecrumbs: [{ label: "Services", href: "/services/study-abroad" }, { label: "Study Canada", href: "/services/study-abroad/canada" }],
    eyebrow: "Study Abroad — Canada",
    title: "Study now,",
    highlight: "stay as a Canadian",
    intro:
      "Canada's post-graduation work permit (up to 3 years) plus express entry CRS points make it the most transparent study-to-PR path in the world. Study today, and become a permanent resident tomorrow.",
    stats: [
      { value: "3 yr", label: "PGWP Duration" },
      { value: "50", label: "Entry CRS Bonus" },
      { value: "24 h", label: "On-Campus Work" },
      { value: "482k", label: "Study Visas/Yr" },
    ],
    requirements: [
      { title: "Academic Eligibility", text: "Year 12 for diploma/Bachelor's; degree for postgrad programs." },
      { title: "English / French", text: "IELTS 6.0–6.5 or TEF French depending on province." },
      { title: "Proof of Funds", text: "~CA$20,000 tuition + living per year (LRF 2026)." },
      { title: "Study Plan", text: "A coherent plan that proves genuine acceptance across IRCC." },
    ],
    process: [
      { step: "01", title: "Program Selection", text: "Diploma, bachelor's or postgraduate — matched to PR goals." },
      { step: "02", title: "Offer & LOA", text: "Secure a recognised program and letter of acceptance." },
      { step: "03", title: "Visa (SDS)", text: "Apply under SDS for faster processing where eligible." },
      { step: "04", title: "Work & PR", text: "PGWP â†’ Canadian work experience â†’ Express Entry PR." },
    ],
    timeline: [
      { step: "1", title: "Offer & LOA", text: "2–5 weeks" },
      { step: "2", title: "SDS Visa", text: "4–8 weeks" },
      { step: "3", title: "PGWP (after study)", text: "Up to 3 years" },
      { step: "4", title: "PR via CEC", text: "Post-experience" },
    ],
    faqs: [
      { q: "How do I earn PR after studying?", a: "Canadian graduates get a PGWP, gain Canadian work experience and then apply for Permanent Residence under Canadian Experience Class or Provincial Nominee." },
      { q: "Can my spouse work?", a: "Spouses of full-time international students can work full time in Canada — a genuine income boost." },
      { q: "Are there co-op programs?", a: "Yes. Canada's co-op programs build paid work while you study, and that experience is directly usable in PR." },
      { q: "What's the SDS faster path?", a: "Student Direct Stream processes visas in weeks, not months, for eligible students with proof of funds and language." },
    ],
    cta: { title: "", text: "Every day in a Canadian classroom gets you closer to permanent residence.", link: "/apply", linkLabel: "Book Canada Consultation" },
  },

  "study-usa": {
    codecrumbs: [{ label: "Services", href: "/services/study-abroad" }, { label: "Study USA", href: "/services/study-abroad/usa" }],
    eyebrow: "Study Abroad — USA",
    title: "Top-ranked colleges,",
    highlight: "unlimited possibilities",
    intro:
      "American universities dominate global rankings and open floors to OPT, STEM extension and global careers. We build a competitive profile, secure admission and coaching you in the F-1 interview.",
    stats: [
      { value: "Top-10", label: "Global Universities" },
      { value: "3 yr", label: "STEM OPT" },
      { value: "$90k", label: "Avg. US Salary" },
      { value: "50+", label: "Fellowships Found" },
    ],
    requirements: [
      { title: "GPA & Transcripts", text: "Strong academics; realise your full profile." },
      { title: "Standardized Tests", text: "GRE / GMAT for graduate; optional for many bachelor's." },
      { title: "English Test", text: "IELTS / TOEFL minimums vary per institution." },
      { title: "Financial Evidence", text: "I-20 funding (first-year costs) fully documentable." },
    ],
    process: [
      { step: "01", title: "University Short-list", text: "Ivy, research, or value — a fit-based selection." },
      { step: "02", title: "Tests & Essays", text: "GRE/GMAT/IELTS scheduling, SOP and essays." },
      { step: "03", title: "Applications & I-20", text: "Submissions, interviews, and your I-20." },
      { step: "04", title: "F-1 Visa", text: "Form DS-160, SEVIS fee, and interview prep." },
    ],
    timeline: [
      { step: "1", title: "Tests + Essays", text: "3–6 months" },
      { step: "2", title: "Application", text: "1–4 weeks" },
      { step: "3", title: "I-20 + Visa", text: "4–8 weeks after" },
      { step: "4", title: "Intake", text: "Aug / Jan" },
    ],
    faqs: [
      { q: "Can I work on an F-1?", a: "Yes — up to 20 hours on-campus during the term, and OPT (up to 1 year, or 3 with STEM) lets you work after graduation." },
      { q: "What funding is required?", a: "First-year costs ($35k–60k) by tuition + living; subsequent years need proof of support. Many grants cover it." },
      { q: "Do I need the SAT?", a: "More and more universities are test-optional for undergrad; graduate programs mostly want GRE/GMAT. We calibrate per school." },
      { q: "What are the best deadlines?", a: "Ordinary round deadlines are November–January. Scholarship deadlines can be 2 months earlier. Plan 12–18 months." },
    ],
    cta: { title: "", text: "Your US journey is a strategic investment — scholarship, STEM and a world-class degree.", link: "/apply", linkLabel: "Plan My US Admission" },
  },

  "study-uk": {
    codecrumbs: [{ label: "Services", href: "/services/study-abroad" }, { label: "Study UK", href: "/services/study-abroad/uk" }],
    eyebrow: "Study Abroad — UK",
    title: "Elite education,",
    highlight: "two-year stay-back",
    intro:
      "The UK's entry points among the world's best, and the Graduate Route lets you stay and work for 2 years after. We manage everything from strengthening your application to the CAS and visa.",
    stats: [
      { value: "2 yr", label: "Graduate Route" },
      { value: "15+", label: "Partner Universities" },
      { value: "Top-20", label: "Global Ranking" },
      { value: "Â£26k", label: "Starting Salary" },
    ],
    requirements: [
      { title: "Academic Grades", text: "Strong first or 2.1 equivalent for Master's; good high school for undergrad." },
      { title: "English Test", text: "IELTS 6.5–7.0 or PTE / Duolingo accepted by most." },
      { title: "Personal Statement", text: "A focused structure statement + 2 tailored references." },
      { title: "Financial Evidence", text: "Tuition + deposit, and living costs in a CAS account." },
    ],
    process: [
      { step: "01", title: "Course Selection", text: "Choose a University + course that fits your brand goals." },
      { step: "02", title: "Application", text: "Personal statement, references and documents." },
      { step: "03", title: "Offers & CAS", text: "Acceptance â†’ Confirmation of Acceptance." },
      { step: "04", title: "Student Visa", text: "Visa application, priority track and arrival." },
    ],
    timeline: [
      { step: "1", title: "Application", text: "1–3 weeks" },
      { step: "2", title: "Offer & CAS", text: "2–6 weeks" },
      { step: "3", title: "Visa", text: "3–5 weeks" },
      { step: "4", title: "Intake", text: "Sep / Jan" },
    ],
    faqs: [
      { q: "How does the graduate right work?", a: "Graduate Route visa allows you to work for 2 years (PhD opens 3) after finishing, then switch to a Skilled Worker visa for a PR route." },
      { q: "Can my family join?", a: "Depends on the program — dependants may join on postgraduate sides and can work full-time." },
      { q: "Realistic budget?", a: "Â£12–25k tuition depending on school, plus Â£1,200–1,500 monthly living in the city. Scholarships cut this a lot." },
      { q: "Do universities offer scholarships?", a: "Yes — Chevening, university merit, and international bursaries. We map those you qualify for." },
    ],
    cta: { title: "", text: "A UK degree plus two-year stay-back is one of the highest ROI paths abroad today.", link: "/apply", linkLabel: "Check UK Eligibility" },
  },

  "work-abroad": {
    codecrumbs: [{ label: "Services", href: "/services/work-abroad" }, { label: "Work Abroad", href: "/services/work-abroad" }],
    eyebrow: "Work Abroad",
    title: "Take your career",
    highlight: "across borders",
    intro:
      "From EU Blue Cards to nursing in Germany and to Gulf contracts — we match your profile with real employers, prepare your language and handle the work visa from offer to landing.",
    stats: [
      { value: "3,000+", label: "Professionals Placed" },
      { value: "90%", label: "Offer Secured" },
      { value: "40+", label: "Industries" },
      { value: "500+", label: "Active Employers" },
    ],
    requirements: [
      { title: "Passport", text: "Valid with 6+ months for most Gulf/Europe countries." },
      { title: "Qualification", text: "Degree or recognised experience for the role sector." },
      { title: "Language", text: "B1–B2 German for Germany; IELTS / PTE for others." },
      { title: "Documentation", text: "CV, references, verification, and police certificate." },
    ],
    process: [
      { step: "01", title: "Profile Assessment", text: "Match your profile to the right country and role type." },
      { step: "02", title: "Employer Match", text: "Interview prep, offers and labour-selective matching." },
      { step: "03", title: "Visa Filing", text: "Blue Card, opportunity card or employment visa filing." },
      { step: "04", title: "Relocation", text: "Insurance, housing, bank and a smooth first week." },
    ],
    timeline: [
      { step: "1", title: "Market + matching", text: "2–8 weeks" },
      { step: "2", title: "Offer & contract", text: "1–4 weeks" },
      { step: "3", title: "Visa", text: "6–16 weeks" },
      { step: "4", title: "Departure", text: "2–4 weeks later" },
    ],
    faqs: [
      { q: "Can I move abroad without a degree?", a: "Absolutely — many trade and technical roles accept years of experience and certified certifications instead of a degree." },
      { q: "Which sectors hire most?", a: "Healthcare & nursing, IT and software, engineering, logistics, hospitality and construction consistently sponsor most." },
      { q: "How much will I earn?", a: "Germany IT: â‚¬65–80k/yr; nursing: â‚¬3,600/month; Gulf engineering: $90k+. We go through the real numbers first." },
      { q: "Can my family come?", a: "Germany Blue Card, UAE and many Gulf roles allow family residency, within specific rules. Family visas are prepared in the same file." },
    ],
    cta: { title: "", text: "Your experience is exactly what another country is hiring for. Let's get you in front of it.", link: "/apply", linkLabel: "See My Opportunities" },
  },

  "work-germany": {
    codecrumbs: [{ label: "Services", href: "/services/work-abroad" }, { label: "Work Germany", href: "/services/work-abroad/germany" }],
    eyebrow: "Work Abroad — Germany",
    title: "A European career",
    highlight: "at your fingertips",
    intro:
      "Germany is short of 900,000+ skilled workers. The EU Blue Card and Germany's new Opportunity Card turn that shortage into your card, we handle recognition, language and real employers.",
    stats: [
      { value: "900k", label: "Open Roles" },
      { value: "â‚¬80k", label: "Company Salary" },
      { value: "21 mo", label: "PR with Blue Card" },
      { value: "B1", label: "Typical Language" },
    ],
    requirements: [
      { title: "Recognized Degree", text: "Academic recognition (ZAB) or 3+ years comparable experience." },
      { title: "Job Offer", text: "A genuine employment contract with a German payroll." },
      { title: "Salary", text: "Blue Card threshold ~â‚¬55k (â‚¬43k for shortage roles) 2026." },
      { title: "Language", text: "A1–B1 for integration; B1 + for care and hands-on roles." },
    ],
    process: [
      { step: "01", title: "Profile Review", text: "Assess recognition, salary and the best visa type." },
      { step: "02", title: "Recruitment", text: "Connect you with our German employer network and prep." },
      { step: "03", title: "Visa Application", text: "Blue Card / work permit/working to the consulate." },
      { step: "04", title: "Arrival & Admin", text: "Anmeldung, tax ID, health insurance and bank." },
    ],
    timeline: [
      { step: "1", title: "Job search", text: "2–6 weeks" },
      { step: "2", title: "Visa processing", text: "6–10 weeks" },
      { step: "3", title: "Relocation", text: "1–2 weeks" },
      { step: "4", title: "PR eligibility", text: "21–27 months" },
    ],
    faqs: [
      { q: "What is the EU Blue Card?", a: "A residence + work permit for skilled professionals with a degree and salary threshold. Unlocks expedited PR (21 months with integration)." },
      { q: "Do I need B German?", a: "For IT, software and tech, English is usually accepted. For healthcare, nursing and administration, B1–B2 German is dealbreaker." },
      { q: "What is the Opportunity Card?", a: "A points-based jobseeker visa enabling 12 months to search for a job in Germany without any prior offer — perfect for skilled younger professionals." },
      { q: "Can my family move too?", a: "Yes — spouses and children join with the Blue Card and can work holiday in Germany immediately." },
    ],
    cta: { title: "", text: "Your skill is already missing in Germany. Let's make the move tangible.", link: "/apply", linkLabel: "Check My Germany Eligibility" },
  },

  immigration: {
    codecrumbs: [{ label: "Services", href: "/services/immigration" }, { label: "Immigration", href: "/services/immigration" }],
    eyebrow: "Immigration & PR",
    title: "Build your future",
    highlight: "in another land",
    intro:
      "We turn eligible profiles into approved outcomes. Whether you're after permanent residence, family sponsorship or a business visa, we guide you end-to-end— with clear timeframes and zero guesswork.",
    stats: [
      { value: "96%", label: "Approval Rate" },
      { value: "40+", label: "Visa Routes" },
      { value: "3,000+", label: "PRs Secured" },
      { value: "5+", label: "Channels" },
    ],
    requirements: [
      { title: "Language Skill", text: "IELTS/CLB required for most countries." },
      { title: "Experience", text: "Work experience in an assessed occupation." },
      { title: "Qualification", text: "Education with equivalency reporting." },
      { title: "Clean Record", text: "Police certificate from every country of residence." },
    ],
    process: [
      { step: "01", title: "Eligibility", text: "A 15-minute assessment of your points." },
      { step: "02", title: "Case Strategy", text: "A clear roadmap choosing your best route." },
      { step: "03", title: "Application", text: "Documentation, filing, and proactive updates." },
      { step: "04", title: "Approval & Landing", text: "Visa approval, landing preparation." },
    ],
    timeline: [
      { step: "1", title: "Assessment", text: "24 hours" },
      { step: "2", title: "Documents", text: "4–8 weeks" },
      { step: "3", title: "Application", text: "3–12 months" },
      { step: "4", title: "Decision", text: "Office-based" },
    ],
    faqs: [
      { q: "Which country is fastest?", a: "Canada offers Express + PNP, Australia Quotable points, Germany 'B' needs a 21-month PR. Fastest depends on your exact profile." },
      { q: "Do I need a job offer?", a: "For Express Entry and skilled work, a job offer is not mandatory but boosts points. For some PR routes it is required." },
      { q: "How reliable is the outcome?", a: "We only take feasible honest cases, with registered timelines and no empty guarantees." },
      { q: "Can you handle my family?" , a: "Yes — spouse and children ride on the same PR/visa file every time." },
    ],
    cta: { title: "", text: "Your 20-minute eligibility call will tell you exactly how real a country feels." , link: "/apply", linkLabel: "Start Free Assessment" },
  },

  "immigration-pr": {
    codecrumbs: [{ label: "Services", href: "/services/immigration" }, { label: "Permanent Residence", href: "/services/immigration/permanent-residence" }],
    eyebrow: "Permanent Residence",
    title: "A permanent home,",
    highlight: "not just a permit",
    intro:
      "Permanent residence means you retire on the country's land, work freely and eventually apply for citizenship. We keep the entire file — from your points audit through to your landing.",
    stats: [
      { value: "96%", label: "Approval Rate" },
      { value: "5+", label: "Countries" },
      { value: "3 yr", label: "Common Timeline" },
      { value: "7", label: "Steps Covered" },
    ],
    requirements: [
      { title: "Score Audit", text: "Quick project CRS / points score to diagnose the gap." },
      { title: "Credential evaluation", text: "ECA or equivalent recognition where country asks." },
      { title: "Language proof", text: "CLB 7–9 depending on the route." },
      { title: "Police & medical", text: "Clearances and IME must be valid at filing." },
    ],
    process: [
      { step: "01", title: "Scorecard", text: "Point audit of six different assessments." },
      { step: "02", title: "Strategy", text: "Optional route: PNP, Express, family, or investor." },
      { step: "03", title: "EOI & filing", text: "Profile creation, IELTS-driven invites, full filing." },
      { step: "04", title: "Approval", text: "Aland co-existing, provide emails, and landing." },
    ],
    timeline: [
      { step: "1", title: "Assessment", text: "24 hr" },
      { step: "2", title: "Documentation", text: "4–8 weeks" },
      { step: "3", title: "EOI + Invite", text: "1–6 months" },
      { step: "4", title: "Approval", text: "6–20 months" },
    ],
    faqs: [
      { q: "Can I get PR without a job?", a: "Yes for Express-Entry / skilled migration office. A job offer only moves you higher in a scoring system." },
      { q: "Is my family included?", a: "Yes — spouse and dependent children are on the same application, so the whole family arrives together." },
      { q: "How do I keep my PR?", a: "Meeting residency times (e.g. Canada 730 days, Australia 12 months) and keeping taxes in order." },
      { q: "Can I become a citizen after PR?", a: "Yes — after 3 (Canada) or 4 (Germany) + of residence and language requirement, we guide that path too." },
    ],
    cta: { title: "", text: "Your permanent home is 15 minutes away — if we assess you honestly.", link: "/apply", linkLabel: "Get PR Assessment" },
  },

  "immigration-family": {
    codecrumbs: [{ label: "Services", href: "/services/immigration" }, { label: "Family Immigration", href: "/services/immigration/family" }],
    eyebrow: "Family Immigration",
    title: "Bring everyone",
    highlight: "with you",
    intro:
      "Spouse, children, even parents — we manage family/dependent visas that keep your whole travel plan together. No ghosts of a holiday home made to a family that arrives together.",
    stats: [
      { value: "95%", label: "Family Approval" },
      { value: "1", label: "Application" },
      { value: "21 d", label: "Gulf processing" },
      { value: "4", label: "Dependent types" },
    ],
    requirements: [
      { title: "Sponsor's status", text: "A valid study, work or PR file the family joins." },
      { title: "Relationship evidence", text: "Marriage and birth certificates translated again." },
      { title: "Support funds", text: "Proof you support the family at the accepted level." },
      { title: "Medical & police", text: "For each dependent where the country requires." },
    ],
    process: [
      { step: "01", title: "Family plan", text: "Which member, which route, in which order." },
      { step: "02", title: "Audit", text: "Documents prepared to floor-issue-proof." },
      { step: "03", title: "File / submit", text: "Dependent visa filed in the same file." },
      { step: "04", title: "Together arrival", text: "Biometrics, itinerary and a first week plan." },
    ],
    timeline: [
      { step: "1", title: "Assessment", text: "Free" },
      { step: "2", title: "Records", text: "2–6 weeks" },
      { step: "3", title: "Visa processing", text: "Canada / Germany : 4–12 mo" },
      { step: "4", title: "Together", text: "as one file" },
    ],
    faqs: [
      { q: "When can my spouse come?", a: "Prabere — some visas ask for a valid sponsor first. We sequence it right for your country." },
      { q: "Can my parents join later?", a: "Parent sponsorship exists in Canada (family class approval), and some European visitor visa routes. We walk a real option per country." },
      { q: "Can dependants work?", a: "In Germany and Canada spouses can work; UK unrestricted work permits for partners, while Gulf roles is limited." },
      { q: "What about children schooling?", a: "Primary and high school are often tuition-free for dependants — we include school registration in settlement." },
    ],
    cta: { title: "", text: "Every family deserves to move as one unit. Let's get the whole household approved.", link: "/apply", linkLabel: "Plan My Family File" },
  },

  "immigration-business": {
    codecrumbs: [{ label: "Services", href: "/services/immigration" }, { label: "Business Immigration", href: "/services/immigration/business" }],
    eyebrow: "Business & Investor",
    title: "Found, incorporate,",
    highlight: "and live in your market",
    intro:
      "We turn a business idea into a legal entity abroad. Company registration, investor visa, business partner visa, EU or offshore — with a licensed network in UAE and Germany.",
    stats: [
      { value: "1,200+", label: "Companies formed" },
      { value: "7–10", label: "Days UAE LLC" },
      { value: "â‚¬50k", label: "German company capital" },
      { value: "1", label: "End-to-end package" },
    ],
    requirements: [
      { title: "Business concept", text: "A sustainable plan with services/producers." },
      { title: "Capital proof", text: "Evidence of company capital from bank." },
      { title: "Founder background", text: "CV, experience and funding clarity." },
      { title: "Compliance", text: "AML, tax seats and licensing." },
    ],
    process: [
      { step: "01", title: "Feasibility", text: "Route choice — trader, founder, or investor." },
      { step: "02", title: "Formation", text: "Name, entity, registered address and notary." },
      { step: "03", title: "Visa / Residency", text: "Founder's profession visa & residence." },
      { step: "04", title: "Launch", text: "Bank, license, tax and one-hired team." },
    ],
    timeline: [
      { step: "1", title: "Struct", text: "2 weeks" },
      { step: "2", title: "Formation", text: "2–4 weeks" },
      { step: "3", title: "Visa", text: "2–4 weeks" },
      { step: "4", title: "Launch", text: "1 week post" },
    ],
    faqs: [
      { q: "Germany self-sponsoring?", a: "The German free-lance visa is based on your concept — a founder visa gives residents + business. We guide both." },
      { q: "How to open a UAE company?", a: "LLC license with residence generally in 7–10 days through our licenced partner — same package each." },
      { q: "What is the investment need?", a: "Germany seeks business footing from ~â‚¬50k; UAE Dubai uses sector licenses. We calculate the true cost upfront." },
      { q: "Can my family stay with me?", a: "Owner and investor visas extend family residency in both markets best for school and businesses." },
    ],
    cta: { title: "", text: "Your growth plan won't grow forever at home — and your market can be incorporated tomorrow.", link: "/apply", linkLabel: "Talk to a Business Advisor" },
  },

  language: {
    codecrumbs: [{ label: "Services", href: "/services/language" }, { label: "Language", href: "/services/language" }],
    eyebrow: "Language Training",
    title: "Learn the language",
    highlight: "your visa is written in",
    intro:
      "German for Germany, IELTS and PTE for the English-speaking world. Small classes, certified trainers, and mock-exam focus that actually moves your score.",
    stats: [
      { value: "B1–C1", label: "German Track" },
      { value: "7.5", label: "IELTS Target" },
      { value: "90%", label: "Pass in Levels" },
      { value: "14+", label: "Years of Teaching" },
    ],
    requirements: [
      { title: "Placement", text: "A free 10-min grades your current level." },
      { title: "Goal date", text: "Your visa or application target a course calendar." },
      { title: "Schedule", text: "Evening, weekend or intensive batches." },
      { title: "Motivation", text: "A study plan to stay consistent." },
    ],
    process: [
      { step: "01", title: "Free placement test", text: "Diagnose where you start." },
      { step: "02", title: "Course plan", text: "Level, pace and exam-feature mapping." },
      { step: "03", title: "Live classes", text: "Small groups and weekly mock." },
      { step: "04", title: "Exam + score", text: "Slot booking and score validation." },
    ],
    timeline: [
      { step: "1", title: "Placement", text: "Day 1" },
      { step: "2", title: "German 0 â†’ B1", text: "4–6 months" },
      { step: "3", title: "IELTS 6.5–7", text: "8–10 weeks" },
      { step: "4", title: "Exam score", text: "1–2 weeks" },
    ],
    faqs: [
      { q: "What looks fastest?", a: "German A1–B1 realistically 4–6 months with intensive hours. IELTS from a 6â†’7 is a targeted 8-week block." },
      { q: "Goethe or Telc?", a: "For German visa sure — Goethe; for business B2 — Telc. We align to what your file needs." },
      { q: "Can I try it online?", a: "Yes — live online classes that mirror in-person, with the same teacher and mocks." },
      { q: "Do you book the exam?", a: "We book Goethe, Telc or IELTS slots both domestic and offshore centers." },
    ],
    cta: { title: "", text: "A language is a visa's real document. Start the level your case needs.", link: "/apply", linkLabel: "Book Free Placement" },
  },

  "language-german": {
    codecrumbs: [{ label: "Services", href: "/services/language" }, { label: "German", href: "/services/language/german" }],
    eyebrow: "German Language",
    title: "Master German,",
    highlight: "master your move",
    intro:
      "From A1 to B1+, a Goethe-certified French program with speaking-first and exam-focused training. The German you know becomes the Germany you walk into.",
    stats: [
      { value: "A1–B1+", label: "Full track" },
      { value: "99%", label: "Pass rate B1" },
      { value: "Goethe K", label: "Exam aligned" },
      { value: "6", label: "Students / class" },
    ],
    requirements: [
      { title: "No experience", text: "Start from A1. Zero German needed." },
      { title: "Consistency", text: "3–5 hours per week bestcase." },
      { title: "Textbook", text: "We provide Goethe coral material." },
      { title: "Goal level", text: "B1 family reunification, B2 for work." },
    ],
    process: [
      { step: "01", title: "Placement", text: "Find your current speaking-level." },
      { step: "02", title: "Course", text: "A1â†’B1 through live classes + work." },
      { step: "03", title: "Mocks", text: "Goethe-format full papers." },
      { step: "04", title: "Exam date", text: "Goethe exam booking." },
    ],
    timeline: [
      { step: "1", title: "A1", text: "6–8 weeks" },
      { step: "2", title: "A2", text: "6–8 weeks" },
      { step: "3", title: "B1", text: "8–10 weeks" },
      { step: "4", title: "B2", text: "10–12 weeks" },
    ],
    faqs: [
      { q: "I can't attend daily — still possible?", a: "Absolutely. Weekend and evening cohorts exist; they just stretch each level a few extra weeks." },
      { q: "Do I need B1 or B2?", a: "B1: family & work permission; B2: many blue works and nursing. We plan exactly to your country's rules." },
      { q: "Can I do it fully online?", a: "Yes — live synchronous German classes run exactly the same. Mock optional in-style." },
      { q: "What is your B1 pass rate?", a: "99% of our students who reached the exam prep passed Goethe / Telc at B1." },
    ],
    cta: { title: "", text: "German B1 is the most leveraged 6 months of your move. Start this month.", link: "/apply", linkLabel: "Start German Today" },
  },

  "language-ielts": {
    codecrumbs: [{ label: "Services", href: "/services/language" }, { label: "IELTS", href: "/services/language/ielts" }],
    eyebrow: "IELTS Preparation",
    title: "IELTS is your",
    highlight: "ticket to the world",
    intro:
      "Target band 6.5 to 7.5 with IELTS coaching in all four modules, band-esque correction, mock test flow and a real speaking examiner's feedback.",
    stats: [
      { value: "7.5", label: "Top band" },
      { value: "12+", label: "Mock tests" },
      { value: "85%", label: "Achieve target" },
      { value: "4", label: "modules covered" },
    ],
    requirements: [
      { title: "A diagnostic mock", text: "Baseline band via a full scored test." },
      { title: "Target band", text: "What your visa / university needs." },
      { title: "2 hours daily", text: "6-day blocks across the 8 weeks." },
      { title: "Speaking practice", text: "At least one live interview weekly." },
    ],
    process: [
      { step: "01", title: "Diagnostic", text: "Real test, real baseline band." },
      { step: "02", title: "Core training", text: "Reading, writing, build the grid." },
      { step: "03", title: "Speaking / mock", text: "Live examiner sessions + mocks." },
      { step: "04", title: "Exam & score", text: "Slot plan and result." },
    ],
    timeline: [
      { step: "1", title: "Diagnostic", text: "Day 1" },
      { step: "2", title: "Foundation", text: "2 weeks" },
      { step: "3", title: "Band focus", text: "4 weeks" },
      { step: "4", title: "Test date", text: "Week 8" },
    ],
    faqs: [
      { q: "How long to raise a 6 to 7?", a: "8 weeks of focused work raises one band — providing you do the personal writing feedback each week." },
      { q: "Paper or c right?", a: "Computer IELTS (CD) scores faster, and we coach on the essentials: highlight, word-count and the screen." },
      { q: "How do I conquer speaking?", a: "It's not fluency-only; task response is half of 4. Authentic interviews weekly do you the 7.5." },
      { q: "Which exam do I even need?", a: "We map your destination's requirement to either IELTS, PTE or OET from the very start." },
    ],
    cta: { title: "", text: "Your university result starts not on the day of the exam — but at the diagnostic. Begin now.", link: "/apply", linkLabel: "Get a Speedy Plan" },
  },

  "language-pte": {
    codecrumbs: [{ label: "Services", href: "/services/language" }, { label: "PTE", href: "/services/language/pte" }],
    eyebrow: "PTE Preparation",
    title: "Score faster,",
    highlight: "on Australian soil",
    intro:
      "PTE is machine-scored, delivered in 48 hours and the common choice for the KE. Our PTE specialists train the question-sets — templates, intonation, and timing for a fast score to 65-70+.",
    stats: [
      { value: "48 hr", label: "Result time" },
      { value: "65+", label: "Ty / AU target" },
      { value: "20", label: "Question profiles" },
      { value: "100%", label: "Computer-tested" },
    ],
    requirements: [
      { title: "Start level", text: "Any where from B1 upward." },
      { title: "Target score", text: "Report per country/university." },
      { title: "Template work", text: "Structure for essays and repeat-sentence." },
      { title: "Speaking practice", text: "Full recorded mock of the machine format." },
    ],
    process: [
      { step: "01", title: "Baseline", text: "PTE mock and score." },
      { step: "02", title: "Formats", text: "All questions with strategy." },
      { step: "03", title: "Mocks", text: "2-3 & schedule." },
      { step: "04", title: "Book & result", text: "48 hour result delivery." },
    ],
    timeline: [
      { step: "1", title: "Baseline", text: "Week 1" },
      { step: "2", title: "Core", text: "Weeks 2–5" },
      { step: "3", title: "Mock & final", text: "Week 6" },
      { step: "4", title: "Result", text: "48 hrs" },
    ],
faqs: [
      { q: "PTE or IELTS?", a: "PTE suits fast, keyboard-and-template thinking; IELTS suits slower conversational test takers." },
      { q: "Does UK accept PTE?", a: "Yes — accepted for UK, Australia, New Zealand and Canada visas." },
      { q: "How long valid?", a: "PTE scores are valid 2 years for most bodies." },
      { q: "What's a good score?", a: "Australia/UK ~58–65; top postgrad ~70. We train to your target line." },
    ],
cta: { title: "", text: "The 48-hour PTE score could be the fastest yes in your entire application. Train where it scores.", link: "/apply", linkLabel: "Start PTE Course" },
  },

  business: {
    codecrumbs: [{ label: "Services", href: "/services" }, { label: "Business & Investment", href: "/services/business" }],
    eyebrow: "Business & Investment",
    title: "Set up, invest,",
    highlight: "and grow abroad",
    intro:
      "Company formation, business visas and investment advisory across UAE, Germany and Europe — incorporation, licensing, bank accounts, tax and relocation handled as one package.",
    stats: [
      { value: "1,200+", label: "Companies Formed" },
      { value: "7–10", label: "Days UAE LLC Setup" },
      { value: "25+", label: "Markets Covered" },
      { value: "1", label: "End-to-End Package" },
    ],
    requirements: [
      { title: "Business Proposal", text: "A clear outline of the activity and product or service lines." },
      { title: "Capital Proof", text: "Evidence of funds and source for the company capital." },
      { title: "Founder Documents", text: "Passport, CV and business experience documentation." },
      { title: "Compliance", text: "AML, licensing and tax-structure alignment for your route." },
    ],
    process: [
      { step: "01", title: "Route Selection", text: "Free-zone vs mainland, investor vs founder — we pick the route that fits." },
      { step: "02", title: "Formation", text: "Name reservation, entity registration and licensed address." },
      { step: "03", title: "Visas & Residency", text: "Business owner visa and residence for you and your family." },
      { step: "04", title: "Bank & Launch", text: "Corporate banking, license issuance and operational launch." },
    ],
    timeline: [
      { step: "1", title: "Structure & Route", text: "1 week" },
      { step: "2", title: "Company Formation", text: "2–4 weeks" },
      { step: "3", title: "Visas & Residency", text: "2–4 weeks" },
      { step: "4", title: "Bank & Launch", text: "1–2 weeks" },
    ],
    faqs: [
      { q: "Which country should I incorporate in?", a: "The UAE is the fastest, Germany offers access to the EU market, and offshore structures suit trading and holding. We map your route before any spend." },
      { q: "How much capital do I need?", a: "Germany typically requires €25k–€50k demonstration capacity; UAE free zones operate on a license basis. We calculate the true cost upfront." },
      { q: "Can I bring my family?", a: "Yes — residency extensions for dependants are standard on business and investor routes in both the UAE and Germany." },
      { q: "Do I need to visit personally?", a: "Most steps can be completed by power of attorney and remote notarisation — we handle the process without you flying in." },
    ],
    cta: { title: "", text: "Your market can be incorporated tomorrow — let's structure the fastest compliant route.", link: "/apply", linkLabel: "Book a Business Advisory" },
  },

  construction: {
    codecrumbs: [{ label: "Services", href: "/services" }, { label: "Construction", href: "/services/construction" }],
    eyebrow: "Construction Services",
    title: "Design, build,",
    highlight: "and hand over",
    intro:
      "Architecture, interior design, house building and project management — premium quality delivered on time and to budget, with a dedicated site supervisor on every project.",
    stats: [
      { value: "150+", label: "Projects Delivered" },
      { value: "98%", label: "On-Time Handovers" },
      { value: "15+", label: "Years Experience" },
      { value: "In-house", label: "Design & Engineering" },
    ],
    requirements: [
      { title: "Plot & Title Documents", text: "Site ownership or approved lease documents." },
      { title: "Design Approval", text: "Concept plans, municipal approvals and structural design." },
      { title: "Budget Confirmation", text: "Agreed scope and payment schedule before any work begins." },
      { title: "Permits", text: "Construction and zoning permits secured by our team." },
    ],
    process: [
      { step: "01", title: "Consultation & Survey", text: "Site survey, requirements and budget discovery." },
      { step: "02", title: "Design & Approvals", text: "Architectural plans, engineering and municipality approvals." },
      { step: "03", title: "Construction", text: "Structural work, finishes and interiors with site supervision." },
      { step: "04", title: "Handover", text: "Snagging, certificates and final walkthrough." },
    ],
    timeline: [
      { step: "1", title: "Survey & Design", text: "3–8 weeks" },
      { step: "2", title: "Approvals", text: "2–6 weeks" },
      { step: "3", title: "Construction", text: "6–14 months" },
      { step: "4", title: "Handover", text: "2–4 weeks" },
    ],
    faqs: [
      { q: "Do you handle both design and construction?", a: "Yes — architecture, interiors and building run under one contract, so you deal with a single accountable team." },
      { q: "Can you work with my architect?", a: "We work with your own architect too, or manage the full design-build if you prefer." },
      { q: "How are payments structured?", a: "Milestone based — linked to visible completion stages, never one large upfront payment." },
      { q: "Do you provide warranty?", a: "Yes — structural warranties and aftercare periods are included in the contract." },
    ],
    cta: { title: "", text: "From plot to handover, one accountable team. Let's structure your build.", link: "/contact", linkLabel: "Discuss Your Project" },
  },
};
