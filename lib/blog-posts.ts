export type PostListing = {
  title: string;
  excerpt: string;
  category: string;
  categoryShort: string;
  tags: string[];
  readTime: string;
  date: string;
  href: string;
  code: string;
};

export type BlogSection = {
  heading: string;
  deHeading: string;
  paragraphs: string[];
  deParagraphs?: string[];
  bullets?: string[];
  deBullets?: string[];
};

export type BlogArticle = {
  slug: string;
  category: string;
  code: string;
  date: string;
  deDate: string;
  facts: string[];
  deFacts: string[];
  sections: BlogSection[];
};

export const postListings: PostListing[] = [
  {
    title: "Germany Work Visa 2026: All Five Routes, Compared Honestly",
    excerpt:
      "Opportunity Card, skilled worker, Blue Card, nursing or Ausbildung — five legal routes into Germany, and which profile matches which.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Visa Routes", "Germany", "Work Permit"],
    readTime: "8 min read",
    date: "August 16, 2026",
    href: "/blog/germany-work-visa-routes-2026",
    code: "DEU",
  },
  {
    title: "Ausbildung in Germany: Requirements, Salary & How to Apply",
    excerpt:
      "Paid vocational training with a job guarantee at the end. What Ausbildung is, who qualifies, the age question, salary and the full application path.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Ausbildung", "Vocational Training", "Germany"],
    readTime: "9 min read",
    date: "August 13, 2026",
    href: "/blog/ausbildung-complete-guide",
    code: "DEU",
  },
  {
    title: "EU Blue Card Germany: The Skilled Worker Fast Track",
    excerpt:
      "The Blue Card is the fastest route to permanent residence for professionals with a degree. Salary thresholds, requirements and the 21-month shortcut.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Blue Card", "Skilled Worker", "PR"],
    readTime: "7 min read",
    date: "August 11, 2026",
    href: "/blog/german-blue-card-skilled-worker",
    code: "DEU",
  },
  {
    title: "Job Seeker Visa or Opportunity Card? What Changed and What It Means",
    excerpt:
      "The old six-month job seeker visa is gone. We explain what replaced it, who is affected and how the job-search strategy changed for Pakistan.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Job Seeker Visa", "Opportunity Card", "Germany"],
    readTime: "6 min read",
    date: "August 8, 2026",
    href: "/blog/job-seeker-visa-vs-opportunity-card",
    code: "DEU",
  },
  {
    title: "IT Jobs in Germany: Salaries, Skills & Visa Routes",
    excerpt:
      "Roughly 150,000 IT vacancies and salaries from 45,000 to 100,000 euros. The roles in demand, whether you need a degree, and the language question.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["IT Jobs", "Salary", "Germany"],
    readTime: "8 min read",
    date: "August 6, 2026",
    href: "/blog/it-jobs-germany-guide",
    code: "DEU",
  },
  {
    title: "Germany Salary Guide 2026: What Jobs Really Pay Net",
    excerpt:
      "Gross to net in plain numbers: what engineers, nurses, IT professionals and tradespeople actually take home, and how raises really work.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Salary", "Germany", "Trades"],
    readTime: "7 min read",
    date: "August 4, 2026",
    href: "/blog/germany-salary-guide-2026",
    code: "DEU",
  },
  {
    title: "Nursing Jobs in Germany: Employers, Contracts & How Hiring Works",
    excerpt:
      "Who actually hires nurses from Pakistan: hospital groups, what employers pay for recognition and language, and what your contract really contains.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Nursing Jobs", "Employers", "Contracts"],
    readTime: "7 min read",
    date: "August 1, 2026",
    href: "/blog/nursing-jobs-germany-employers",
    code: "DEU",
  },
  {
    title: "Document Attestation & Certified Translations for Germany: Full Checklist",
    excerpt:
      "The complete chain from your university to German recognition: HEC attestation, MOFA, embassy legalisation, and certified translations — with timelines.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["Attestation", "Certified Translations", "Documents"],
    readTime: "6 min read",
    date: "July 29, 2026",
    href: "/blog/documents-attestation-translations-germany",
    code: "DEU",
  },
  {
    title: "German CV & Interview: What Employers Actually Expect",
    excerpt:
      "The tabular Lebenslauf, the half-page Anschreiben and the directness of German interviews — how to present yourself the way German HR wants.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["CV", "Interview", "Recognition"],
    readTime: "6 min read",
    date: "July 25, 2026",
    href: "/blog/german-cv-interview-guide",
    code: "DEU",
  },
  {
    title: "Germany Student Visa 2026: APS, Blocked Account & Application Steps",
    excerpt:
      "The APS certificate, the blocked account, uni-assist and the embassy interview — the complete student visa sequence for Pakistani applicants.",
    category: "Study Abroad",
    categoryShort: "Study",
    tags: ["Student Visa", "APS", "Blocked Account"],
    readTime: "8 min read",
    date: "July 22, 2026",
    href: "/blog/student-visa-germany-guide",
    code: "DEU",
  },
  {
    title: "Choosing a Visa Consultancy: What Legit Firms Do (and What They Never Do)",
    excerpt:
      "Guarantees, success fees and 'embassy connections' are red flags. How honest consultancies work, how pricing should look, and what to ask on call one.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["Consultancy", "Visa", "Documents"],
    readTime: "6 min read",
    date: "July 18, 2026",
    href: "/blog/choosing-immigration-consultancy",
    code: "INT",
  },
  {
    title: "Business & Freelancer Visa for Germany: The Self-Employment Route",
    excerpt:
      "Founders need a business plan and capital; freelancers need a portfolio and clients. Both routes explained with requirements and the honest odds.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["Business Visa", "Freelancer", "Germany"],
    readTime: "7 min read",
    date: "July 16, 2026",
    href: "/blog/business-freelancer-visa-germany",
    code: "DEU",
  },
  {
    title: "Germany Opportunity Card 2026: Complete Guide for Pakistani Professionals",
    excerpt:
      "The Chancenkarte is your point-based entry ticket to Germany — here's who qualifies, how many points you need, and exactly how to apply.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Opportunity Card", "Germany", "Visa"],
    readTime: "8 min read",
    date: "July 28, 2026",
    href: "/blog/germany-opportunity-card-guide",
    code: "DEU",
  },
  {
    title: "Tuition-Free Study in Germany: 12 Universities That Charge No Fees",
    excerpt:
      "Public universities in Germany are still (almost) free. We break down which states still waive tuition, and what you really pay per month to live.",
    category: "Study Abroad",
    categoryShort: "Study",
    tags: ["Germany", "Universities", "Scholarships"],
    readTime: "6 min read",
    date: "July 21, 2026",
    href: "/blog/tuition-free-study-germany",
    code: "DEU",
  },
  {
    title: "IELTS vs PTE: Which English Test Should You Take in 2026?",
    excerpt:
      "Both are accepted across the UK, Canada and Australia. We compare scoring, availability, resits and which test is easier for your profile.",
    category: "Language",
    categoryShort: "Language",
    tags: ["IELTS", "PTE", "English Test"],
    readTime: "5 min read",
    date: "July 14, 2026",
    href: "/blog/ielts-vs-pte-2026",
    code: "GBR",
  },
  {
    title: "Canada Express Entry July 2026: Latest CRS Scores & In-Demand Jobs",
    excerpt:
      "CRS cut-offs keep moving. This month's update covers the latest draws, category-based selection and who got an ITA.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["Canada", "Express Entry", "CRS"],
    readTime: "7 min read",
    date: "July 8, 2026",
    href: "/blog/canada-express-entry-july-2026",
    code: "CAN",
  },
  {
    title: "Nursing in Germany: Salary, B2 German, and the Anerkennung Process",
    excerpt:
      "Nurses are among the most in-demand professionals in Germany. Here's the realistic timeline, pay scale and paperwork from application to Anerkennung.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Nursing", "Healthcare", "Germany"],
    readTime: "9 min read",
    date: "July 1, 2026",
    href: "/blog/nursing-in-germany",
    code: "DEU",
  },
  {
    title: "Study in Australia: A 2026 Blueprint for Pakistani Students",
    excerpt:
      "From choosing the right DHA-registered institution to the genuine-student interview, a practical blueprint for Australian enrolment.",
    category: "Study Abroad",
    categoryShort: "Study",
    tags: ["Australia", "Admissions", "PR Pathway"],
    readTime: "6 min read",
    date: "June 24, 2026",
    href: "/blog/study-in-australia",
    code: "AUS",
  },
  {
    title: "German Language A1–B2: How Long Does It Really Take?",
    excerpt:
      "That TELC or Goethe path doesn't have to take two years. A realistic timeline for studying A1 to B2 while working or studying.",
    category: "Language",
    categoryShort: "Language",
    tags: ["German", "Goethe", "Language"],
    readTime: "5 min read",
    date: "June 17, 2026",
    href: "/blog/german-a1-to-b2-timeline",
    code: "DEU",
  },
  {
    title: "UK Graduate Visa 2026: Post-Study Work Rules Still Worth It?",
    excerpt:
      "With the UK's updated salary thresholds, is the Graduate Route still the right path? The honest answer for fresh graduates.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["UK", "Graduate Route", "Visa"],
    readTime: "6 min read",
    date: "June 10, 2026",
    href: "/blog/uk-graduate-visa-2026",
    code: "GBR",
  },
  {
    title: "IELTS Band 7 in 6 Weeks: The Exact Study Plan Our Trainers Use",
    excerpt:
      "A tight, proven schedule our IELTS coaches give every student targeting a 7.0 — with the resources and mock tests that matter.",
    category: "Language",
    categoryShort: "Language",
    tags: ["IELTS", "Training", "Band 7"],
    readTime: "7 min read",
    date: "June 3, 2026",
    href: "/blog/ielts-band-7-in-6-weeks",
    code: "GBR",
  },
];

import { extraPostsA } from "@/lib/blog-extra-1";
import { extraPostsB } from "@/lib/blog-extra-2";
import { extraPostsC } from "@/lib/blog-extra-3";

export const postsBySlug: Record<string, BlogArticle> = {
  "germany-opportunity-card-guide": {
    slug: "germany-opportunity-card-guide",
    category: "Work Abroad",
    code: "DEU",
    date: "July 28, 2026",
    deDate: "28. Juli 2026",
    facts: [
      "The Opportunity Card (Chancenkarte) is a points-based job-search visa valid for 12 months.",
      "You need a recognised degree or an equivalent vocational qualification to enter the points system.",
      "Six points are required; a Berlin-style point system rewards qualifications, experience, language and age.",
      "Job-seekers may work 20 hours per week and do unlimited trial working days (Probearbeiten) while searching.",
      "Conversion to a residence permit for employment is possible once you sign a work contract.",
    ],
    deFacts: [
      "Die Chancenkarte ist ein punktebasiertes Jobsuchvisum mit 12 Monaten Gültigkeit.",
      "Für die Teilnahme am Punktesystem benötigen Sie einen anerkannten Studienabschluss oder eine gleichwertige Berufsqualifikation.",
      "Sechs Punkte sind erforderlich; belohnt werden Qualifikation, Erfahrung, Sprache und Alter.",
      "Jobsuchende dürfen 20 Stunden pro Woche arbeiten und unbegrenzt Probearbeitstage absolvieren.",
      "Mit einem Arbeitsvertrag kann die Karte in eine Aufenthaltserlaubnis zur Beschäftigung umgewandelt werden.",
    ],
    sections: [
      {
        heading: "What is the Opportunity Card?",
        deHeading: "Was ist die Chancenkarte?",
        paragraphs: [
          "The Germans introduced the Opportunity Card as the main labour route for skilled workers from non-EU countries like Pakistan. It replaces the old one-track job-seeker visa with a transparent points system that the applicant can self-assess before paying any fees.",
          "The card gives you 12 months to search for a job, with the right to work up to 20 hours weekly and to take unlimited trial shifts. If you find a contract, you switch to a normal work residence permit without leaving Germany.",
        ],
        bullets: [
          "Valid 12 months, extendable under clear conditions",
          "20 hours/week part-time work + unlimited trial shifts",
          "Spouse employment is permitted after arrival",
          "No employer sponsorship needed before you land",
        ],
        deBullets: [
          "12 Monate gültig, unter klaren Bedingungen verlängerbar",
          "20 Stunden/Woche Teilzeit + unbegrenzte Probearbeit",
          "Erwerbstätigkeit des Ehepartners nach der Einreise erlaubt",
          "Keine Arbeitgeberzusage vor der Einreise erforderlich",
        ],
      },
      {
        heading: "How many points do you need?",
        deHeading: "Wie viele Punkte benötigen Sie?",
        paragraphs: [
          "Six points are the threshold. The easiest way to reach them is through your qualifications: a degree from a state-recognised university or an equivalent vocational training gives you the base entry, and then your profile earns additional points.",
          "The scoring favours profiles that Germany actually needs right now: shortage occupations, work experience in skilled roles, German or English language ability, and being under 35.",
        ],
        bullets: [
          "Recognised degree or vocational qualification: entry requirement",
          "Qualification + experience combination: up to 4 points",
          "German B2 gives you the maximum 3 language points",
          "Age under 35 adds points; over 40 loses them",
          "English C1 plus German at least A2 adds a small bonus",
        ],
        deBullets: [
          "Anerkannter Abschluss oder Berufsqualifikation: Voraussetzung",
          "Kombination aus Qualifikation und Erfahrung: bis zu 4 Punkte",
          "Deutsch B2 bringt die maximalen 3 Sprachpunkte",
          "Alter unter 35 bringt Punkte, über 40 verliert sie",
          "Englisch C1 plus mindestens Deutsch A2 gibt einen kleinen Bonus",
        ],
      },
      {
        heading: "Do you qualify with just a bachelor?",
        deHeading: "Reicht ein Bachelorabschluss?",
        paragraphs: [
          "Yes. A four-year bachelor from an HEC-recognised university is treated as a formal qualification and gives you entry into the points system. You do not need a master or a German job offer.",
          "What matters is the recognition of your degree. German recognition databases (Anabin) list most Pakistani universities as H+ (recognised). If your university is listed, the certificate process is mostly paperwork.",
        ],
      },
      {
        heading: "The step-by-step application path",
        deHeading: "Der Schritt-für-Schritt-Antragsweg",
        paragraphs: [
          "First, check your points with our free eligibility tool or a counsellor. Then gather your degree, transcripts, passport, language certificates and CV. Have the degree formally recognised where required, book the visa appointment at the German embassy in Islamabad, and attend the interview.",
          "Processing currently takes 4 to 10 weeks depending on the embassy workload. Once approved you receive a sticker visa tied to the Opportunity Card, valid for travel anytime within that year.",
        ],
        bullets: [
          "1. Point-check + profile review with a counsellor",
          "2. Degree recognition check via Anabin",
          "3. Language certificate (German B1/B2 or English C1)",
          "4. Visa appointment — Islamabad embassy or Lahore/Karachi consulate",
          "5. Interview, decision, sticker, flight",
        ],
        deBullets: [
          "1. Punktecheck + Profilberatung mit einem Berater",
          "2. Prüfung der Anerkennung über Anabin",
          "3. Sprachnachweis (Deutsch B1/B2 oder Englisch C1)",
          "4. Visumstermin — Botschaft Islamabad oder Konsulate Lahore/Karatschi",
          "5. Interview, Entscheidung, Visum, Flug",
        ],
      },
      {
        heading: "Costs and blocked money",
        deHeading: "Kosten und Sperrkonto",
        paragraphs: [
          "You must prove you can support yourself: currently around 992 euros per month, held in a blocked account (Sperrkonto) for one year. On top comes the visa fee (around 75 euros) and the recognition fees where applicable.",
          "Because you may work part-time immediately and full-time once employed, most candidates treat the first three months as the expensive period.",
        ],
      },
      {
        heading: "Common mistakes that get files rejected",
        deHeading: "Häufige Fehler, die zur Ablehnung führen",
        paragraphs: [
          "The most common rejection reason is an incomplete points calculation: applicants claim points for language levels without certificates or for experience without employer letters. Every point claim must be documented.",
          "Second, an unrecognised private university degree. Third, missing proof of the blocked account. A counsellor checks all three before you pay the visa fee, which is why our clients have a far higher first-attempt success rate.",
        ],
      },
      {
        heading: "The honest outlook for 2026",
        deHeading: "Die ehrliche Prognose für 2026",
        paragraphs: [
          "Demand is strong and Germany has repeatedly said it wants 400,000 skilled workers a year. The Opportunity Card is now the most direct route from Pakistan for a professional with German B1 or a strong technical profile.",
          "If you are a nurse, technician, IT professional, engineer or electrician with 3+ years of experience, this route deserves a serious look. Book a free counselling session and we will calculate your points within the first call.",
        ],
      },
    ],
  },
  "tuition-free-study-germany": {
    slug: "tuition-free-study-germany",
    category: "Study Abroad",
    code: "DEU",
    date: "July 21, 2026",
    deDate: "21. Juli 2026",
    facts: [
      "All state (public) universities in Germany charge no tuition fees — only an admin fee of roughly 150 to 350 euros per semester.",
      "Only one public university charges international fees today (TU Munich), and the federal-state negotiators are still debating its future.",
      "The blocked account for living costs is around 11,900 euros per year in 2026.",
      "English-taught bachelor programmes at public universities are rare but growing; master programmes are widely available in English.",
      "You may work 140 full days or 280 half days per year as a student.",
    ],
    deFacts: [
      "Alle staatlichen Universitäten erheben keine Studiengebühren — nur etwa 150 bis 350 Euro Semesterbeitrag.",
      "Nur eine staatliche Universität verlangt heute internationale Gebühren (TU München), deren Zukunft weiter diskutiert wird.",
      "Das Sperrkonto für Lebenshaltungskosten liegt 2026 bei rund 11.900 Euro pro Jahr.",
      "Englischsprachige Bachelorstudiengänge an staatlichen Unis sind selten, aber wachsend; Master gibt es häufig auf Englisch.",
      "Als Student dürfen Sie 140 volle oder 280 halbe Tage pro Jahr arbeiten.",
    ],
    sections: [
      {
        heading: "Is studying in Germany really free?",
        deHeading: "Ist das Studium in Deutschland wirklich kostenlos?",
        paragraphs: [
          "Almost. Public universities are funded by the state and charge no study fee. You pay a semester contribution (Semesterbeitrag) of about 150 to 350 euros, which covers the student ticket for public transport, the student union and student services.",
          "Baden-Württemberg was the last state to charge fees to non-EU students and abandoned them in 2023. Today the only outlier is TU Munich, which charges non-EU students around 2,000-3,000 euros per semester — a widely criticised exception that may be reversed.",
        ],
      },
      {
        heading: "12 universities that charge no fees",
        deHeading: "12 Universitäten ohne Studiengebühren",
        paragraphs: [
          "All of the following are public universities with strong reputations and zero tuition fees. They differ in admission difficulty, city costs and English offers, so treat the list as a starting point for your course search.",
        ],
        bullets: [
          "LMU Munich — elite research university, competitive admission",
          "University of Heidelberg — Germany's oldest university",
          "University of Cologne — wide range of social science and economics courses",
          "University of Freiburg — Baden-Württemberg flagship",
          "University of Tübingen — strong humanities and medicine",
          "University of Bonn — mathematics and natural sciences",
          "University of Göttingen — research-heavy traditional university",
          "University of Leipzig — affordable city, strong international office",
          "Friedrich Schiller University Jena — lower living costs, solid engineering",
          "University of Kiel — maritime, environmental and medical programmes",
          "University of Hamburg — largest northern university, humanities focus",
          "TU Dresden — excellent engineering and IT, cheaper than west Germany",
        ],
        deBullets: [
          "LMU München — Elite-Forschungsuniversität, anspruchsvolle Zulassung",
          "Universität Heidelberg — Deutschlands älteste Universität",
          "Universität zu Köln — breites Angebot in Sozial- und Wirtschaftswissenschaften",
          "Universität Freiburg — Flaggschiff Baden-Württembergs",
          "Universität Tübingen — starke Geisteswissenschaften und Medizin",
          "Universität Bonn — Mathematik und Naturwissenschaften",
          "Universität Göttingen — forschungsstarke Traditionsuniversität",
          "Universität Leipzig — erschwingliche Stadt, starkes International Office",
          "Friedrich-Schiller-Universität Jena — niedrige Lebenshaltung, solides Ingenieurwesen",
          "Universität Kiel — maritime, umwelt- und medizinische Studiengänge",
          "Universität Hamburg — größte Uni im Norden, Fokus Geisteswissenschaften",
          "TU Dresden — exzellentes Ingenieurwesen und IT, günstiger als Westdeutschland",
        ],
      },
      {
        heading: "What you actually pay per month",
        deHeading: "Was Sie tatsächlich pro Monat zahlen",
        paragraphs: [
          "The real cost is living. A student in Leipzig or Jena needs about 850-950 euros a month; in Munich or Hamburg expect 1,100-1,300 euros. This includes rent (often the biggest item), food, transport pass, health insurance and phone.",
          "Since 2026 the blocked account requirement is around 992 euros per month, and most landlords in student cities now accept Dormitory or shared flat contracts starting at 350-450 euros in the east.",
        ],
      },
      {
        heading: "Can you study in English?",
        deHeading: "Kann man auf Englisch studieren?",
        paragraphs: [
          "Yes, especially at master level. English-taught bachelors remain limited — a handful exist in business, IT and engineering. If your goal is a bachelor with no German, you need to plan the course list carefully.",
          "For a bachelor taught in German you will need at least B2, mostly C1 on the TestDaF or DSH-2. That is roughly one extra year of language preparation — worth planning from day one.",
        ],
      },
      {
        heading: "Working while you study",
        deHeading: "Arbeiten während des Studiums",
        paragraphs: [
          "International students may work 140 full days or 280 half days per year without special permission, and jobs on campus are unlimited. A typical student job pays 12.50-14 euros per hour in 2026.",
          "This means around 4,000-5,500 euros of extra income per year — enough to cover a meaningful part of your living costs and to build CV experience that matters for graduate jobs.",
        ],
      },
      {
        heading: "Your realistic application timeline",
        deHeading: "Ihr realistischer Bewerbungszeitraum",
        paragraphs: [
          "Start 12-18 months before the semester you want. First the language or IELTS, then university selection and course-by-course document preparation, then uni-assist or direct application, then the visa with the blocked account.",
          "Winter semester intake (October) is the main one in Germany. Many Pakistani students also target year-round intakes at eastern universities, which are easier to get into and cheaper to live in.",
        ],
      },
    ],
  },
  "ielts-vs-pte-2026": {
    slug: "ielts-vs-pte-2026",
    category: "Language",
    code: "GBR",
    date: "July 14, 2026",
    deDate: "14. Juli 2026",
    facts: [
      "IELTS and PTE are both accepted by the UK, Canada, Australia and New Zealand for visas and universities.",
      "PTE is fully computer-marked — results in 1-2 days; IELTS Academic paper results take 13 days.",
      "PTE allows free skill resits (one skill) in 2026; IELTS requires retaking the full test.",
      "For UKVI purposes you need IELTS UKVI or PTE Academic UKVI variants — check which your university accepts.",
      "Both cost around 300-350 USD in Pakistan; test centres exist in Karachi, Lahore, Islamabad and other major cities.",
    ],
    deFacts: [
      "IELTS und PTE werden von Großbritannien, Kanada, Australien und Neuseeland für Visa und Universitäten akzeptiert.",
      "PTE wird komplett computergestützt ausgewertet — Ergebnisse in 1-2 Tagen; IELTS Academic auf Papier dauert 13 Tage.",
      "PTE erlaubt 2026 kostenlose Teil-Wiederholungen (eine Fähigkeit); IELTS verlangt die komplette Wiederholung.",
      "Für UKVI-Zwecke benötigen Sie IELTS UKVI oder PTE Academic UKVI — prüfen Sie, was Ihre Universität akzeptiert.",
      "Beide kosten in Pakistan rund 300-350 USD; Testzentren gibt es in Karatschi, Lahore, Islamabad und anderen Großstädten.",
    ],
    sections: [
      {
        heading: "The core difference",
        deHeading: "Der entscheidende Unterschied",
        paragraphs: [
          "IELTS is a human-scored test with four papers and a face-to-face speaking interview. PTE is 100% computer-based and computer-graded, from the essay to the speaking section.",
          "This single difference drives everything else: PTE is faster, cheaper to resit, and objectively consistent, while many candidates feel IELTS is more forgiving of imperfect accents in speaking.",
        ],
      },
      {
        heading: "Scoring: bands vs scores",
        deHeading: "Bewertung: Bands vs. Scores",
        paragraphs: [
          "IELTS uses bands 1-9 in half-point increments; PTE uses a 10-90 score. The commonly quoted equivalence for a 7.0 band is a PTE score of 65-72, and for 6.5 about 58-65.",
          "Universities increasingly state their requirements in both systems, which removes most guesswork. Canada's SDS and most Australian visas accept either.",
        ],
      },
      {
        heading: "Which is easier for a Pakistani test-taker?",
        deHeading: "Was ist für Testteilnehmer aus Pakistan einfacher?",
        paragraphs: [
          "The famous PTE pace problem is real: short item types, fast typing, and a single 30-second countdown across the speaking section. Candidates comfortable with computers and touch typing usually score higher in PTE.",
          "IELTS suits candidates who write by hand fast, speak naturally with an examiner, and prefer paper-based listening with headphones. If you freeze in front of a machine or type slowly, IELTS may be the safer bet.",
        ],
        bullets: [
          "PTE: for computer-natives, fast results, resit-only-one-skill policy",
          "IELTS: for confident speakers, paper writing style, human interviewer",
          "Hate retaking everything? PTE's skill resit saves money and weeks",
          "Need a quick deadline? PTE results (1-2 days) beat IELTS paper (13 days)",
        ],
        deBullets: [
          "PTE: für Computernutzer, schnelle Ergebnisse, gezielte Teil-Wiederholung",
          "IELTS: für sichere Sprecher, Schreiben auf Papier, menschliches Interview",
          "Keine Lust auf komplette Wiederholung? PTEs Teil-Wiederholung spart Geld und Wochen",
          "Frist läuft? PTE-Ergebnisse (1-2 Tage) schlagen IELTS-Papier (13 Tage)",
        ],
      },
      {
        heading: "UKVI and the visa variants",
        deHeading: "UKVI und die Visum-Varianten",
        paragraphs: [
          "For a UK student visa or Graduate Route applications you must sit a Secure English Language Test — that means IELTS UKVI (Academic) or PTE Academic UKVI, taken at an approved centre. A regular IELTS score will not do.",
          "Canada, Australia and New Zealand accept the regular versions for student visas. Australia's English requirements for skilled migration can also be met with either test.",
        ],
      },
      {
        heading: "Cost and centre availability in Pakistan",
        deHeading: "Kosten und Testzentren in Pakistan",
        paragraphs: [
          "Both tests cost roughly 300-350 USD in Pakistan. IELTS has more centres and weekend slots; PTE centres exist in Karachi, Lahore and Islamabad with strong weekday availability.",
          "For resits, PTE's one-skill retake (about one-third of the fee) is a genuine money saver. IELTS requires the full test again, which pushes many borderline candidates to PTE.",
        ],
      },
      {
        heading: "Our trainer's recommendation",
        deHeading: "Empfehlung unserer Trainer",
        paragraphs: [
          "If you need Band 7+ and are comfortable with a keyboard, take PTE. If you need a band 6.5 for a specific university or want the familiar IELTS format, stay with IELTS — consistency beats switching under pressure.",
          "Book a free placement mock with our counsellors: we give you a realistic score estimate for both tests and a 6-week plan to close the gap before you pay any test fee.",
        ],
      },
    ],
  },
  "canada-express-entry-july-2026": {
    slug: "canada-express-entry-july-2026",
    category: "Immigration",
    code: "CAN",
    date: "July 8, 2026",
    deDate: "8. Juli 2026",
    facts: [
      "General Express Entry draws in mid-2026 have hovered between the low 500s and the high 530s for CRS.",
      "Category-based draws remain active: healthcare, trades, transport and French-language profiles score far lower cut-offs.",
      "Provincial Nominee draws (PNP) are the fastest route for candidates slightly below general cut-offs.",
      "A Canadian degree, strong CLB 9 English and 2+ years of skilled experience are the three biggest CRS levers.",
      "ITA holders get 60 days to submit their complete application and usually 6-9 months to landing.",
    ],
    deFacts: [
      "Allgemeine Express-Entry-Ziehungen Mitte 2026 bewegen sich im CRS zwischen niedrigen 500ern und hohen 530ern.",
      "Kategoriebezogene Ziehungen bleiben aktiv: Gesundheitswesen, Handwerk, Transport und Französischprofile erreichen deutlich niedrigere Cut-offs.",
      "PNP-Ziehungen sind der schnellste Weg für Profile knapp unter den allgemeinen Cut-offs.",
      "Ein kanadischer Abschluss, starkes Englisch auf CLB 9 und 2+ Jahre Facharbeitserfahrung sind die größten CRS-Hebel.",
      "ITA-Inhaber haben 60 Tage für die vollständige Bewerbung und meist 6-9 Monate bis zur Landung.",
    ],
    sections: [
      {
        heading: "Where cut-offs stand (July 2026)",
        deHeading: "Stand der Cut-offs (Juli 2026)",
        paragraphs: [
          "General draws this summer have ranged between roughly 505 and 535 CRS points, with occasional dips after larger draws. The trend across 2026 has been stable rather than climbing, which is good news for planners.",
          "Category-based draws tell a different story: healthcare candidates have been invited in the mid-400s, trades and transport in the 430-480 range, and French-speaking candidates near 380-430. If you fit a category, you are effectively playing a different game.",
        ],
      },
      {
        heading: "Who actually got an ITA in the last draws",
        deHeading: "Wer in den letzten Ziehungen eine ITA erhielt",
        paragraphs: [
          "Most successful profiles shared three traits: a post-secondary credential (ideally Canadian or an ECA-verified foreign degree), English at or above CLB 9 (IELTS 8/7/7/7 or better), and at least two years of skilled work experience.",
          "Younger candidates (under 30) paired with a Canadian study or work record are over-represented — the points system deliberately rewards Canadian connection.",
        ],
      },
      {
        heading: "The category-based draw list for 2026",
        deHeading: "Die Kategorien-Ziehungen 2026",
        paragraphs: [
          "Immigration Canada keeps the official list updated each year. For 2026 the highlighted occupations are: nurses and nurse supervisors, family doctors and specialists, truck drivers, welders and machinists, carpenters and electricians, and transport managers.",
          "If your occupation appears on the current list, your CRS could be 70-100 points lower than a general draw would demand — worth an immediate profile check.",
        ],
      },
      {
        heading: "How to add points before you apply",
        deHeading: "Punkte sammeln vor der Bewerbung",
        paragraphs: [
          "The three fastest levers: raise English to CLB 9+ (a night-class jump many candidates miss), get your spouse tested and included in the profile, and secure a PNP nomination for +600 points if your province has an active stream.",
          "Job offers add 50-200 points depending on category, and a second degree in Canada or abroad adds between 22 and 30 points. A counsellor can simulate each lever on your real profile within an hour.",
        ],
      },
      {
        heading: "The documentation trap",
        deHeading: "Die Dokumentations-Falle",
        paragraphs: [
          "The most common post-ITA refusal reasons are employment letters that do not state duties and duration, or reference letters that do not match NOC codes. Canada reads one document set only after the 60-day window.",
          "Gather employer letters on letterhead with start/end dates, hours per week, title and detailed duties before you even create your profile. Retrofitting documents after an ITA is stressful and slow.",
        ],
      },
      {
        heading: "Is Express Entry right for you?",
        deHeading: "Ist Express Entry das Richtige für Sie?",
        paragraphs: [
          "If you are under 35, have a bachelor or higher and at least a year of skilled work, your file can be competitive within a year of planning. If you are older or in a non-listed occupation, the honest alternatives are study-to-PR or provincial streams.",
          "Run our free eligibility check and share the score with a counsellor — we will map the fastest realistic route to a permanent residence file, whether that is general draw, a category, or a province.",
        ],
      },
    ],
  },
  "nursing-in-germany": {
    slug: "nursing-in-germany",
    category: "Work Abroad",
    code: "DEU",
    date: "July 1, 2026",
    deDate: "1. Juli 2026",
    facts: [
      "Germany needs roughly 200,000 additional nurses by 2030 — hospitals and care homes recruit abroad aggressively.",
      "A German B2 certificate is the practical entry ticket; many employers accept B1 with a binding commitment to reach B2.",
      "Nurse salaries start around 2,900-3,400 euros gross per month, rising with shift allowances and experience.",
      "The Anerkennung (recognition) process takes about 3-6 months for most Pakistani-trained nurses.",
      "The fastest route is a three-year recognition course (Ausbildung) for nurses whose training is not fully equivalent.",
    ],
    deFacts: [
      "Deutschland braucht bis 2030 rund 200.000 zusätzliche Pflegekräfte — Kliniken und Heime werben gezielt im Ausland.",
      "Ein Deutschzertifikat B2 ist praktisch das Eintrittsticket; viele Arbeitgeber akzeptieren B1 mit verbindlicher B2-Zusage.",
      "Pflegegehälter starten bei rund 2.900-3.400 Euro brutto monatlich und steigen mit Zuschlägen und Erfahrung.",
      "Der Anerkennungsprozess dauert für die meisten pakistanischen Pflegekräfte etwa 3-6 Monate.",
      "Der schnellste Weg ist ein dreijähriger Anerkennungslehrgang (Ausbildung) bei nicht vollwertig anerkannten Abschlüssen.",
    ],
    sections: [
      {
        heading: "Why hospitals keep recruiting from Pakistan",
        deHeading: "Warum Kliniken weiterhin in Pakistan rekrutieren",
        paragraphs: [
          "German clinics and care homes face a structural shortage: the baby-boom generation is retiring while the nursing profession has too few new entrants. Around one in six working nurses is already over 55.",
          "Pakistani-trained nurses bring genuine clinical exposure, strong English for documentation, and the German system has proven that adaptation is fast with structured onboarding. That is why delegation-based employer partnerships remain the dominant route.",
        ],
      },
      {
        heading: "Salary and shift reality",
        deHeading: "Gehalt und Schichtrealität",
        paragraphs: [
          "A starting qualified nurse earns about 2,900-3,400 euros gross per month under the TVöD-P pay scale, before bonuses. Night, weekend and holiday shifts add 10-30% on top, so most nurses take home meaningfully more than the base figure.",
          "With 2-3 years of experience, salaries climb toward 3,800-4,200 euros; care home specialist posts and nursing leadership reach higher. Health insurance is automatic — nursing is treatable work in every sense.",
        ],
      },
      {
        heading: "German: B1 or B2?",
        deHeading: "Deutsch: B1 oder B2?",
        paragraphs: [
          "For registration as a nurse (Pflegefachkraft), German authorities require B2 for direct recognition. Many employers, however, recruit at B1 with a written commitment to reach B2 within their paid onboarding year.",
          "Our honest advice: start German 6-12 months before departure. A nurse with B2 starts working and earning immediately; a B1 arrival spends months in school before full wages.",
        ],
      },
      {
        heading: "The Anerkennung process step by step",
        deHeading: "Der Anerkennungsprozess Schritt für Schritt",
        paragraphs: [
          "The recognition (Anerkennung) compares your nursing education with the German Pflegefachkraft curriculum. After you submit your HEC-approved documents, the responsible state office in Germany checks equivalence — usually 3-6 months.",
          "If gaps are found, you take an adaptation course (Anpassungslehrgang) or a comparative exam (Kenntnisprüfung). Hospitals running foreign-nurse programs cover these costs and pay a salary during the course.",
        ],
        bullets: [
          "1. German B2 (or B1 with employer commitment)",
          "2. Application to a partner hospital or care employer",
          "3. Employer files the recognition request with the state office",
          "4. Adaptation measures paid by the employer",
          "5. Work permit + residence permit as a qualified nurse",
        ],
        deBullets: [
          "1. Deutsch B2 (oder B1 mit Arbeitgeberzusage)",
          "2. Bewerbung bei einem Partnerkrankenhaus oder Pflegearbeitgeber",
          "3. Arbeitgeber stellt den Anerkennungsantrag beim Landesamt",
          "4. Anpassungsmaßnahmen vom Arbeitgeber bezahlt",
          "5. Arbeits- und Aufenthaltserlaubnis als Pflegefachkraft",
        ],
      },
      {
        heading: "What documents you need from day one",
        deHeading: "Dokumente, die Sie von Anfang an brauchen",
        paragraphs: [
          "Your nursing diploma and transcripts, a valid passport, a Clearance certificate, your nursing council registration, and German or English language certificates. All documents must be certified and ready for embassy and state-office use.",
          "Missing documents are the number one cause of delays — recognition never happens after you land if the file was incomplete. A counsellor compiles the full dossier before you pay anything.",
        ],
      },
      {
        heading: "The realistic timeline",
        deHeading: "Der realistische Zeitplan",
        paragraphs: [
          "From first counselling call to landing is usually 9-15 months: 4-8 months for German to B2, 1-2 months for employer matching, 3-6 months for recognition processing, and 4-8 weeks for the visa.",
          "Nurses are the fastest group we process. If your goal is Germany, start with a free call — we will confirm your document status and book your first language assessment in the same week.",
        ],
      },
    ],
  },
  "study-in-australia": {
    slug: "study-in-australia",
    category: "Study Abroad",
    code: "AUS",
    date: "June 24, 2026",
    deDate: "24. Juni 2026",
    facts: [
      "Australia is back on the map for Pakistani students after the COVID-era pause, with strong demand for nursing, IT and business programmes.",
      "Every institution must be CRICOS-registered for its course to qualify for a student visa (subclass 500).",
      "The genuine-student interview is now the decisive step — your study plan and budget story must be coherent.",
      "You may work 24 hours per fortnight while studying and full-time during scheduled breaks.",
      "The post-study work visa (subclass 485) gives 2-4 years of work rights after graduation, with extensions for regional study.",
    ],
    deFacts: [
      "Australien ist nach der Pandemie-Pause wieder gefragt bei pakistanischen Studierenden, besonders in Pflege, IT und Wirtschaft.",
      "Jede Institution muss CRICOS-registriert sein, damit ihr Studiengang für ein Studentenvisum (Subclass 500) zählt.",
      "Das Genuine-Student-Interview ist heute der entscheidende Schritt — Studienplan und Budgetgeschichte müssen schlüssig sein.",
      "Während des Studiums dürfen Sie 24 Stunden pro zwei Wochen arbeiten, in den Ferien Vollzeit.",
      "Das Post-Study-Work-Visum (Subclass 485) gewährt nach dem Abschluss 2-4 Jahre Arbeitsrechte, mit Verlängerungen für Regionalstudium.",
    ],
    sections: [
      {
        heading: "Choose the right institution first",
        deHeading: "Zuerst die richtige Institution wählen",
        paragraphs: [
          "Every Australian course you enrol in must be offered by a CRICOS-registered provider — otherwise the visa is refused no matter how strong your file is. The register is public and easy to check.",
          "Universities sit at the top of the ladder, followed by reputable private providers with strong nursing, IT and business pathways. Your career goal should decide the tier, not your budget alone.",
        ],
      },
      {
        heading: "The genuine student standard",
        deHeading: "Der Genuine-Student-Standard",
        paragraphs: [
          "Australia runs the genuine-student (GS) assessment, replacing the old GTE statement with a structured questionnaire. Officers test whether study is your genuine primary purpose and whether your funding story is real.",
          "The most common refusal pattern of 2026: a study plan copied from a website, budget numbers that contradict the bank certificate, and a course unrelated to your previous education. Prepared candidates sail through; generic files get refused.",
        ],
        bullets: [
          "Explain why this course and city, and what you will do after",
          "Align the course with your education and work history",
          "Show a realistic single-source-of-funds budget",
          "Mention your planned work hours honestly (24h/fortnight)",
        ],
        deBullets: [
          "Begründen, warum dieser Kurs und diese Stadt — und was danach kommt",
          "Kurs mit Ausbildung und Berufserfahrung in Einklang bringen",
          "Ein realistisches Budget aus einer klaren Finanzierungsquelle zeigen",
          "Geplante Arbeitszeiten ehrlich angeben (24 Std./zwei Wochen)",
        ],
      },
      {
        heading: "Costs: tuition, OSHC and living",
        deHeading: "Kosten: Studiengebühren, OSHC und Lebenshaltung",
        paragraphs: [
          "Tuition ranges from roughly 20,000 AUD per year in allied health and business at regional universities to 35,000+ AUD at Go8 universities for engineering and IT.",
          "You must hold Overseas Student Health Cover for the whole stay, show about 29,700 AUD per year of living funds (the 2026 benchmark) and pay course fees up front. At 24 hours per fortnight work rights, realistic budgets cover 30-40% of costs.",
        ],
      },
      {
        heading: "The visa application sequence",
        deHeading: "Die Reihenfolge des Visumantrags",
        paragraphs: [
          "Offer letter, then CoE (Confirmation of Enrolment), then OSHC, then the visa application with the GS questionnaire, then biometrics and medicals at a panel clinic in Islamabad or Karachi.",
          "Processing in 2026 varies from 4 to 10 weeks depending on the stream and the quality of the file. Applications with all documents pre-assembled and a consistent story are routinely decided fastest.",
        ],
      },
      {
        heading: "After graduation: the 485 and beyond",
        deHeading: "Nach dem Abschluss: das 485 und danach",
        paragraphs: [
          "The subclass 485 Graduate Work visa grants 2-4 years of work rights after study, longer when your degree is in a shortage skill and the study was regional. Many students then convert to skilled migration (189/190/491).",
          "The honest advice from our counsellors: pick a course with a realistic migration pathway from day one, not after graduation. Nursing, teaching, engineering and IT remain the strongest bets.",
        ],
      },
    ],
  },
  "german-a1-to-b2-timeline": {
    slug: "german-a1-to-b2-timeline",
    category: "Language",
    code: "DEU",
    date: "June 17, 2026",
    deDate: "17. Juni 2026",
    facts: [
      "Full-time intensive courses: A1 about 8-10 weeks, A2 about 8-10 weeks, B1 about 12 weeks, B2 about 12 weeks.",
      "Part-time evening study (2-4 hours a week with homework) typically takes 12-18 months to B2.",
      "The Goethe-Zertifikat B2 focuses on all skills; the telc B2 exam adds a stronger workplace grammar focus.",
      "Most official caregivers, nurses and skilled-worker routes accept telc Medizin B2 or Goethe B2.",
      "Consistency beats cramming: 30-60 minutes daily beats 5 hours once a week.",
    ],
    deFacts: [
      "Intensivkurse: A1 etwa 8-10 Wochen, A2 etwa 8-10 Wochen, B1 etwa 12 Wochen, B2 etwa 12 Wochen.",
      "Teilzeit am Abend (2-4 Stunden pro Woche plus Hausaufgaben) dauert üblicherweise 12-18 Monate bis B2.",
      "Das Goethe-Zertifikat B2 prüft alle Fertigkeiten; die telc B2-Prüfung legt einen stärkeren Fokus auf Grammatik im Beruf.",
      "Die meisten Pflege- und Fachkräfterouten akzeptieren telc Medizin B2 oder Goethe B2.",
      "Kontinuität schlägt Pauken: 30-60 Minuten täglich schlagen 5 Stunden einmal pro Woche.",
    ],
    sections: [
      {
        heading: "The honest timetable",
        deHeading: "Der ehrliche Zeitplan",
        paragraphs: [
          "If you study intensively (20+ hours per week of class plus daily homework), you reach B2 in 9-11 months. A1 and A2 take 8-10 weeks each, B1 and B2 about 12 weeks each. Most of our work-abroad clients follow exactly this track.",
          "If you learn alongside a job, the same result takes 12-18 months depending on how many evenings you protect. Both paths work — the difference is discipline, not intelligence.",
        ],
      },
      {
        heading: "What each level really means",
        deHeading: "Was jedes Niveau wirklich bedeutet",
        paragraphs: [
          "A1 is survival: introducing yourself, ordering food, basic forms. A2 adds routine conversations and simple work phrases. B1 means you can travel, hold daily conversations and survive an everyday workplace.",
          "B2 is the professional threshold: holding meetings, writing work emails, reading contracts and following medical instructions. For nurses, telc Medizin B2 adds the specific vocabulary of care work.",
        ],
        bullets: [
          "A1: alphabet, greetings, numbers, basic verbs",
          "A2: past tense, everyday topics, simple phone calls",
          "B1: workplace basics, letter writing, opinions",
          "B2: professional fluency, grammar mastery, medical terms",
        ],
        deBullets: [
          "A1: Alphabet, Begrüßungen, Zahlen, Grundverben",
          "A2: Vergangenheit, Alltagsthemen, einfache Telefonate",
          "B1: Arbeitsgrundlagen, Briefe schreiben, Meinungen äußern",
          "B2: berufliche Flüssigkeit, Grammatik, medizinische Fachbegriffe",
        ],
      },
      {
        heading: "The grammar milestones",
        deHeading: "Die Grammatik-Meilensteine",
        paragraphs: [
          "Most learners underestimate German grammar volume: cases, separable verbs, declensions, word order, and modal particles all arrive before B1. Expect an hour of grammar homework for every two hours of class.",
          "The good news: grammar is the first thing AI tutors can drill with you. Our language cell pairs Goethe-certified trainers with daily speaking practice — the combination is what closes the gap on time.",
        ],
      },
      {
        heading: "Exams: Goethe, telc or ÖSD?",
        deHeading: "Prüfungen: Goethe, telc oder ÖSD?",
        paragraphs: [
          "All three certificates are accepted for German work and study routes. Goethe-Zertifikat is the most widely recognised; telc Medizin is often required by employers in healthcare; ÖSD is common in Austria-oriented files.",
          "For employers the certificate matters less than your conversational level — a B2 exam passed with a 70% plus fluent interviews beats a 90% paper score with shaky speaking.",
        ],
      },
      {
        heading: "A training plan that works with a job",
        deHeading: "Lernplan, der mit dem Beruf funktioniert",
        paragraphs: [
          "Protect 45-60 minutes daily: 30 minutes of structured course work, 15 minutes of Anki vocabulary, and 15 minutes of speaking (tutor or AI partner). Use your commute for listening; use weekends for two longer sessions.",
          "Book your exam date early — the deadline decides your pace. Most of our clients book Goethe B2 and then work backward from that date.",
        ],
      },
    ],
  },
  "uk-graduate-visa-2026": {
    slug: "uk-graduate-visa-2026",
    category: "Immigration",
    code: "GBR",
    date: "June 10, 2026",
    deDate: "10. Juni 2026",
    facts: [
      "The Graduate Route still exists and grants 2 years (3 for PhD) of unrestricted work rights after a UK degree.",
      "The route itself has no salary threshold — but switching to Skilled Worker requires meeting the job-specific going rate.",
      "Going rates for Skilled Worker sponsorship in 2026 commonly start around 30,000-38,000 GBP depending on the occupation.",
      "Graduate Route time does not count toward the 5-year qualifying period for settlement.",
      "Applications cost 822 GBP plus the Immigration Health Surcharge and must be made from inside the UK.",
    ],
    deFacts: [
      "Die Graduate Route existiert weiterhin und gewährt 2 Jahre (3 für PhD) uneingeschränktes Arbeitsrecht nach einem UK-Abschluss.",
      "Die Route selbst hat keine Gehaltsschwelle — der Wechsel in den Skilled-Worker-Weg erfordert jedoch den berufsspezifischen Mindestlohn.",
      "Die Going Rates für Skilled-Worker-Sponsoring liegen 2026 je nach Beruf meist zwischen 30.000 und 38.000 GBP.",
      "Graduate-Route-Zeit zählt nicht auf die 5-jährige Qualifikationszeit für Settlement.",
      "Die Bewerbung kostet 822 GBP plus Immigration Health Surcharge und muss aus dem Vereinigten Königreich erfolgen.",
    ],
    sections: [
      {
        heading: "What the Graduate Route still gives you",
        deHeading: "Was die Graduate Route weiterhin bietet",
        paragraphs: [
          "Complete a UK degree and you can stay for 2 years (3 for a PhD) with unrestricted work rights: any employer, any job, no sponsorship, no salary floor. That flexibility is still unique in the UK system.",
          "You can switch into Skilled Worker sponsorship at any point — the common path to settlement later.",
        ],
      },
      {
        heading: "The 2026 changes explained honestly",
        deHeading: "Die Änderungen 2026 ehrlich erklärt",
        paragraphs: [
          "The big rule shift is not in the Graduate Route itself but in the doors it leads to. Skilled Worker sponsorship now demands the job-specific going rate, which for many graduate jobs sits between 30,000 and 38,000 GBP — harsher than headline minimums suggest.",
          "Dependants' rights were tightened for new students in the previous cycle, so family decisions should be verified per cohort, not by hearsay from 2023.",
        ],
      },
      {
        heading: "The honest answer for fresh graduates",
        deHeading: "Die ehrliche Antwort für Absolventen",
        paragraphs: [
          "Still worth it for most: 2 years of UK work experience is an asset even if you later leave, and the visa is a genuine bridge to sponsorship for the top third of graduates.",
          "It is weakest when the plan is indefinite low-paid work with no sponsor trajectory. The route is a bridge, not a destination — treat the first year as a sponsorship hunt.",
        ],
        bullets: [
          "Year 1: internships, client-facing roles, sponsor-eligible employers",
          "Year 2: aim for sponsorship before the route expires",
          "Target sectors: tech, accountancy, engineering, health",
          "Track your graduate oral interviews — they often convert to sponsor offers",
        ],
        deBullets: [
          "Jahr 1: Praktika, kundennahe Rollen, sponsor-fähige Arbeitgeber",
          "Jahr 2: Sponsoring vor Ablauf der Route anpeilen",
          "Zielssektoren: Tech, Buchhaltung, Ingenieurwesen, Gesundheit",
          "Bewerbungsgespräche nachverfolgen — sie führen oft zu Sponsor-Angeboten",
        ],
      },
      {
        heading: "Settlement: the 5-year math",
        deHeading: "Settlement: die 5-Jahres-Rechnung",
        paragraphs: [
          "Graduate Route time does not count toward the 5 qualifying years for indefinite leave. The clock starts when you receive Skilled Worker status.",
          "Plan accordingly: a graduate staying 2 years on the route then needs a full 5 years on Skilled Worker — realistically around 7 years before settlement.",
        ],
      },
      {
        heading: "Should you choose the UK in 2026?",
        deHeading: "Sollten Sie 2026 das UK wählen?",
        paragraphs: [
          "For quality of universities and the breadth of careers, yes. For a pure PR pathway, Canada and Australia now offer more predictable timelines.",
          "The right framing: the UK is a premium education-plus-career play where the Graduate Route is a real option, not a promise. Our counsellors map both the education and the post-study path before you commit a penny.",
        ],
      },
    ],
  },
  "ielts-band-7-in-6-weeks": {
    slug: "ielts-band-7-in-6-weeks",
    category: "Language",
    code: "GBR",
    date: "June 3, 2026",
    deDate: "3. Juni 2026",
    facts: [
      "A Band 7 requires roughly 30-34 correct answers in Listening and Reading (out of 40) and consistently clear performance in Writing and Speaking.",
      "Our 6-week plan assumes 2 hours daily: 90 minutes of task work plus 30 minutes of review and vocabulary.",
      "Mock tests under full exam conditions matter more than overall study hours.",
      "Writing task 2 weighs two-thirds of the writing score — prioritise it above everything else in the plan.",
      "Candidates who reach 7.0 in one skill typically have 6.5-7.5 variance across the other three.",
    ],
    deFacts: [
      "Band 7 erfordert etwa 30-34 richtige Antworten in Listening und Reading (von 40) und konstant klare Leistungen in Writing und Speaking.",
      "Unser 6-Wochen-Plan setzt 2 Stunden täglich voraus: 90 Minuten Aufgabenarbeit plus 30 Minuten Wiederholung und Wortschatz.",
      "Mock-Tests unter echten Prüfungsbedingungen zählen mehr als reine Lernstunden.",
      "Writing Task 2 macht zwei Drittel der Schreibwertung aus — priorisieren Sie ihn über alles andere.",
      "Wer 7.0 in einer Fertigkeit erreicht, hat typischerweise 6.5-7.5 Schwankung bei den anderen dreien.",
    ],
    sections: [
      {
        heading: "The 6-week frame",
        deHeading: "Der 6-Wochen-Rahmen",
        paragraphs: [
          "This plan mirrors what our IELTS coaches assign to every student targeting a 7.0. It assumes about two hours a day, with five study days and two lighter days per week.",
          "The golden rule: task practice 90 minutes, review 30 minutes. Never study a new skill set on the same day you did two mocks.",
        ],
      },
      {
        heading: "Weeks 1-2: foundation and pacing",
        deHeading: "Wochen 1-2: Fundament und Tempo",
        paragraphs: [
          "Listening: drill section 4 and map question types. Reading: learn to skim and scan in 60-second passes, and attack True/False/Not Given systematically. Writing: build the task 2 skeleton (introduction, two body paragraphs, conclusion) and practise paragraph logic daily.",
          "Speaking: record yourself answering Part 1 and 2 prompts and transcribe them to find filler words. From week 2, all four skills get one mock under timing.",
        ],
      },
      {
        heading: "Weeks 3-4: mock rhythm and the writing trap",
        deHeading: "Wochen 3-4: Mock-Rhythmus und die Schreibfalle",
        paragraphs: [
          "Two full mock tests per week now — one timed, one reviewed line-by-line. Analyse every Writing Task 2 essay against the official band descriptors, not against feelings.",
          "The most common reason students stall at 6.5 is under-developed body paragraphs: one idea, no evidence, no example, no counterpoint. Build a habit of writing 230-260 words with a clear example in every body paragraph.",
        ],
        bullets: [
          "Mock every Sunday; review every Monday",
          "Week 3: writing is 60% of your review time",
          "Week 4: speaking fluency drills — 3 minutes daily, untimed feedback",
        ],
        deBullets: [
          "Jeden Sonntag Mock; jeden Montag Auswertung",
          "Woche 3: Schreiben nimmt 60% der Auswertungszeit",
          "Woche 4: Sprechflüssigkeit — 3 Minuten täglich, Feedback ohne Zeitdruck",
        ],
      },
      {
        heading: "Week 5: exam-condition week",
        deHeading: "Woche 5: Prüfungswoche",
        paragraphs: [
          "Three full mocks this week, each at the same real exam time, with strictly enforced timing and no pauses. Book your real exam at the end of week 5 or early week 6.",
          "Watch your band markers: if Speaking floats between 6.5 and 7, spend the last 10 days fixing pronunciation and sentence variety rather than new vocabulary.",
        ],
      },
      {
        heading: "Week 6: sharpening, not learning",
        deHeading: "Woche 6: Schärfen statt Lernen",
        paragraphs: [
          "No new material. Only vocabulary review, two more mocks, and the examiner-facing skills: sleep routine, test-day logistics, and the first five minutes of every section.",
          "On the final two days, stop studying entirely except conversation practice. We have seen more band gains from rested candidates than from last-minute crammers.",
        ],
      },
      {
        heading: "The resources that matter",
        deHeading: "Die Ressourcen, die zählen",
        paragraphs: [
          "Cambridge books 15-19 and the official IELTS practice tests are the only materials we recommend for question accuracy. For writing models, official band-9 samples beat any influencer template.",
          "Our trainers hand every student a weekly sheet with targeted drills and run one live speaking mock with personal feedback — the single most effective hour in the whole plan.",
        ],
      },
    ],
  },
};

Object.assign(postsBySlug, extraPostsA, extraPostsB, extraPostsC);