"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Compass,
  Eye,
  Target,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Users,
  Award,
  Globe,
  MapPin,
  Phone,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n/language-provider";

const stats = [
  { value: "5+", label: "Years of Expertise" },
  { value: "100+", label: "Success Stories" },
  { value: "96%", label: "Visa Success Rate" },
  { value: "25+", label: "Partner Universities" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Fixed, written fees with zero hidden charges. You always know exactly where your application stands.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We only take cases that are genuinely eligible — honesty over empty promises, every time.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description:
      "Specialists in every country and visa category, trained to accept-no-surprises standards.",
  },
  {
    icon: Users,
    title: "Client-First",
    description:
      "Your plans guide every decision. We listen, advise and build a roadmap around your goals.",
  },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "Admission to Germany, UK, USA, Canada and Australia with course mapping, scholarships and visa preparation.",
  },
  {
    icon: Compass,
    title: "Work Abroad",
    description:
      "Job market guidance for Germany and beyond — healthcare, nursing, IT and engineering pathways.",
  },
  {
    icon: Globe,
    title: "Immigration & PR",
    description:
      "Permanent residence, family sponsorship and citizenship across dedicated country specialists.",
  },
  {
    icon: HeartHandshake,
    title: "Business & Settlement",
    description:
      "Company formation, business visas, accommodation and on-ground support for a smooth landing.",
  },
];

const journey = [
  { year: "2020", title: "First office opens in Germany", text: "Founded by a small team of advisors committed to ethical consultancy." },
  { year: "2020", title: "Founded in Germany", text: "Became one of the first agencies dedicated to the German market." },
  { year: "2021", title: "100th student placed", text: "Reached 100+ successful placements across Europe, the UK, Canada and Australia." },
  { year: "2022", title: "Global Opportunities Platform", text: "Digital-first tools — eligibility checks, calculators and live status tracking." },
  { year: "2025", title: "25+ partner institutions", text: "Deep partnerships with universities, employers and A1–B2 language centres." },
];

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsBand />
      <Story />
      <ValuesSection />
      <PillarsSection />
      <JourneySection />
<div className="relative mt-16 overflow-hidden rounded-3xl bg-navy-900 shadow-luxe">
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #d4a017, transparent 55%)" }} aria-hidden />
          <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-2">
            <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,240px)_1fr]">
              <div className="relative mx-auto w-56 sm:w-full">
                <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gradient-to-br from-gold-500 to-gold-700 opacity-80" />
                <img
                  src="/images/WhatsApp Image 2026-09-11 at 11.23.07 AM.jpeg"
                  alt="Shozani CEO"
                  className="relative aspect-[3/4] w-full rounded-3xl border-4 border-white object-cover shadow-2xl dark:border-navy-950"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Meet our CEO</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                  The hands behind every Shozani story
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-100/70">
                  From the first consultation to the day you land, our CEO leads a team that treats your future as their own — keeping every promise personal, honest and within reach.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,240px)_1fr]">
              <div className="relative mx-auto w-56 sm:w-full">
                <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-gradient-to-br from-gold-500 to-gold-700 opacity-80" />
                <img
                  src="/images/sr consultant.jpeg"
                  alt="Umer Ali — Senior Consultant"
                  className="relative aspect-[3/4] w-full rounded-3xl border-4 border-white object-cover shadow-2xl dark:border-navy-950"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Meet Our Senior Consultant</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">Umer Ali</h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy-100/70">
                  <span className="flex items-center justify-center gap-2 sm:justify-start">
                    <MapPin className="size-4 shrink-0 text-gold-300" aria-hidden />
                    47B Lennox Avenue, Lutana, Hobart
                  </span>
                  <a
                    href="tel:+61426960825"
                    className="flex items-center justify-center gap-2 sm:justify-start transition-colors hover:text-gold-300"
                  >
                    <Phone className="size-4 shrink-0 text-gold-300" aria-hidden />
                    +61 426 960 825
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 px-6 pb-10 sm:px-10">
            <Button variant="gold" size="lg" href="/gallery" withArrow>
              View More Pictures
            </Button>
            <Button variant="glass" size="lg" href="/about">
              Meet the leadership
            </Button>
          </div>
        </div>
    </>
  );
}

function AboutHero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-20 min-h-[560px] sm:pt-24 sm:pb-28 sm:min-h-[640px] lg:min-h-[720px] dark:bg-navy-950">
      <Image
        src="/about.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/25 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/40 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label={t("Breadcrumb")}
          className="flex items-center gap-2 text-sm text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-gold-300">{t("Home")}</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-300">{t("About Us")}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-950/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <Compass className="size-3.5" />
            {t("About Shozani")}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            {t("Your global journey,")}{" "}<span className="text-gradient-gold">{t("guided with integrity")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t("Shozani Global Consultancy is more than an education and immigration agency. We are a global opportunities platform built on one belief: everyone deserves a transparent path to study, work and settle abroad — without guesswork or hidden agendas.")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function StatsBand() {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 -mt-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card grid grid-cols-2 gap-y-8 p-8 md:grid-cols-4 md:p-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function Story() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow={t("Our Story")}
            title={<>{t("From a single desk to a")}{" "}<span className="text-gradient-gold">{t("global platform")}</span></>}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-base leading-relaxed text-navy-600 dark:text-navy-200/70"
          >
            <p>
              {t("Shozani began in 2020 in Germany and a simple idea: that world-class guidance should never come with fine print. Six years later, we have helped more than 100 students and professionals begin new chapters in Germany, the UK, Canada, Australia, the USA and across Europe.")}
            </p>
            <p>
              {t("We grew the way trust grows — slowly, carefully and on the strength of client referrals. Today our specialists, counsellors and trainers work as one team across study, work, immigration, business and settlement, supported by technology that puts your entire application in your own hands.")}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Licensed & Regulated", "Fix-Priced Services", "Local & On-Ground Support"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 px-3.5 py-1.5 text-xs font-medium text-navy-700 dark:bg-white/10 dark:text-navy-100"
                >
                  <CheckCircle2 className="size-3.5 text-gold-500" />
                  {t(item)}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <SectionHeading
          eyebrow={t("What We Stand For")}
          title={<>{t("The values behind")}{" "}<span className="text-gradient-gold">{t("every decision")}</span></>}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.1 }}
              className="group rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-gold-600 text-white transition-transform duration-300 group-hover:scale-110">
                <value.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                {t(value.title)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                {t(value.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PillarsSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("What We Do")}
          title={<>{t("Four pillars,")}{" "}<span className="text-gradient-gold">{t("one mission")}</span></>}
          description={t("Everything we do exists to move you from where you are to where you want to be.")}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              className="flex gap-5 rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-navy-800 text-gold-400 dark:bg-gold-600 dark:text-white">
                <pillar.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {t(pillar.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {t(pillar.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function JourneySection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow={t("Our Journey")}
          title={<>{t("Four years of")}{" "}<span className="text-gradient-gold">{t("moving forward")}</span></>}
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gold-400/40 sm:left-1/2" aria-hidden />
          <ol className="space-y-10">
            {journey.map((step, i) => (
              <motion.li
                key={`${step.year}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className={`relative pl-14 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute top-1 size-10 grid place-items-center rounded-full border border-gold-400/50 bg-white text-gold-700 shadow-luxe dark:border-gold-400/50 dark:bg-navy-950 dark:text-gold-300 ${
                    i % 2 === 0
                      ? "left-0 sm:left-auto sm:-right-5"
                      : "left-0 sm:-left-5"
                  }`}
                >
                  <Award className="size-4" />
                </span>
                <p className="font-display text-sm font-bold text-gradient-gold">{step.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900 dark:text-white">{t(step.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600 dark:text-navy-100/60">{t(step.text)}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function AboutCta() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold-400/30 bg-navy-900 p-10 text-center sm:p-16"
        >
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 text-gold-300">
            <Target className="size-7" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white text-balance sm:text-4xl lg:text-5xl">
            {t("Ready to begin")}{" "}<span className="text-gradient-gold">{t("your story?")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-100/70">
            {t("Book a free consultation and let us map your options across study, work and immigration in a single honest conversation.")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              {t("Book Free Consultation")}
            </Button>
            <Button variant="glass" size="lg" href="/why-shozani">
              {t("Why Shozani")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}