"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Globe,
  Languages,
  ShieldCheck,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-provider";

const stats = [
  { value: "20+", label: "Years of Expertise" },
  { value: "10,000+", label: "Students Placed" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "25+", label: "Partner Universities" },
];

const quickLinks = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Germany, UK, USA, Canada, Australia",
    href: "/services/study-abroad",
  },
  {
    icon: Briefcase,
    title: "Work Abroad",
    description: "Germany jobs, healthcare, IT & engineering",
    href: "/services/work-abroad",
  },
  {
    icon: Globe,
    title: "Immigration & PR",
    description: "Permanent residence & family sponsorship",
    href: "/services/immigration",
  },
  {
    icon: Languages,
    title: "Language Training",
    description: "German, IELTS & PTE with exam prep",
    href: "/services/language",
  },
];

type Slide = {
  badge: string;
  titleA: string;
  titleB: string;
  titleC?: string;
  description: string;
  services: string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const slides: Slide[] = [
  {
    badge: "Destination · Germany",
    titleA: "Study Free & Build Your Career in",
    titleB: "Germany",
    description:
      "Tuition-free public universities, an 18-month post-study work visa and a permanent residency route in just 5 years. Engineers, nurses and IT professionals are in high demand — and we manage your APS, blocked account and admission end-to-end.",
    services: ["University Admissions", "APS & Blocked Account", "Ausbildung Placement", "German A1–C1 Training", "Nursing & Work Visas"],
    primary: { label: "Explore Germany", href: "/countries/germany" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · United Kingdom",
    titleA: "World-Class Degrees in the",
    titleB: "United Kingdom",
    description:
      "QS Top-100 universities, a 2-year Graduate Route stay-back and 20 hours-per-week work rights during your studies. From CAS to scholarship applications and embassy interview prep — we handle it all.",
    services: ["Admissions & CAS", "Scholarship Guidance", "IELTS / PTE Preparation", "Student Visa Filing"],
    primary: { label: "Explore the UK", href: "/countries/uk" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · USA",
    titleA: "Unlock Your Future in the",
    titleB: "USA",
    description:
      "F-1 admissions across America's top-ranked universities, STEM OPT extensions of up to 3 years and generous scholarship options — backed by our dedicated embassy interview training.",
    services: ["University Shortlisting", "Scholarship Applications", "F-1 Visa Interview Prep", "OPT / CPT Guidance"],
    primary: { label: "Explore the USA", href: "/countries/usa" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · Canada",
    titleA: "Study Today, Settle Tomorrow in",
    titleB: "Canada",
    description:
      "Post-graduation work permits of up to 3 years, open work permits for your spouse and direct Express Entry PR pathways — one of the world's smoothest study-to-settlement routes.",
    services: ["College & University Admissions", "GIC & Financial Proof", "Study Permit Filing", "PR Pathway Planning"],
    primary: { label: "Explore Canada", href: "/countries/canada" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · Australia",
    titleA: "Turn Your Studies into a Life in",
    titleB: "Australia",
    description:
      "Post-study work visas of 2–4 years, employer sponsorship and points-tested skilled migration. We map the exact course that carries you fastest from student to permanent resident.",
    services: ["Course & PR Mapping", "Skills Assessment", "Visa Lodgement", "Settlement Support"],
    primary: { label: "Explore Australia", href: "/countries/australia" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · Europe",
    titleA: "Affordable European Education in",
    titleB: "Cyprus & Europe",
    description:
      "Low-tuition universities, straightforward visa processing and a Schengen gateway on your doorstep — a genuine European degree that fits your budget.",
    services: ["Admissions Processing", "Visa Filing", "Accommodation Support", "Airport Pickup"],
    primary: { label: "Explore Europe", href: "/countries/europe" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · UAE & Gulf",
    titleA: "Tax-Free Careers in the",
    titleB: "UAE & Saudi Arabia",
    description:
      "Work permits, golden visas and full business setup across Dubai, Abu Dhabi and Riyadh — tax-free salaries, fast processing and family sponsorship built in.",
    services: ["Work Permits", "Golden Visa", "Business Setup", "Family Sponsorship"],
    primary: { label: "Explore the UAE", href: "/countries/uae" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · Turkey",
    titleA: "Study Where East Meets West in",
    titleB: "Turkey",
    description:
      "Internationally recognised universities, affordable tuition and vibrant campus life straddling two continents — with simple, reliable residence permit renewals.",
    services: ["University Admissions", "Scholarship Guidance", "Residence Permits", "Travel & Settlement"],
    primary: { label: "Explore Turkey", href: "/countries/turkey" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
  {
    badge: "Destination · Malaysia",
    titleA: "Global Degrees for Less in",
    titleB: "Malaysia",
    description:
      "Twinning programs with UK and Australian partner campuses, very low living costs and a simple, high-approval student visa process — quality education at half the price.",
    services: ["Admissions & Twinning Programs", "EMGS Visa Processing", "Scholarships", "On-Arrival Support"],
    primary: { label: "Explore Malaysia", href: "/countries/malaysia" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
  },
];

const AUTOPLAY_MS = 6000;

export function Hero() {
  const { t } = useLanguage();
  const [index, setIndex] = React.useState(0);
  const count = slides.length;

  const goNext = React.useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const goPrev = React.useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  React.useEffect(() => {
    const timer = setInterval(goNext, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [goNext, index]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-lines-light" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="relative flex min-h-[560px] items-center sm:min-h-[640px] lg:min-h-[600px] xl:min-h-[660px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ x: 90 }}
                  animate={{ x: 0 }}
                  exit={{ x: -90 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
                    <Sparkles className="size-3.5" />
                    {t(slide.badge)}
                  </span>

                  <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
                    {t(slide.titleA)}{" "}
                    {slide.titleB && <span className="block text-gradient-gold">{t(slide.titleB)}</span>}
                    {slide.titleC && <> {t(slide.titleC)}</>}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/80">
                    {t(slide.description)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {slide.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 dark:border-white/10 dark:bg-white/5 dark:text-navy-100"
                      >
                        {t(service)}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button variant="gold" size="lg" href={slide.primary.href} withArrow>
                      {t(slide.primary.label)}
                    </Button>
                    <Button variant="outline" size="lg" href={slide.secondary.href}>
                      {t(slide.secondary.label)}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.badge}
                    type="button"
                    aria-label={`${t("Go to slide")} ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300",
                      i === index
                        ? "w-8 bg-gold-500"
                        : "w-2.5 bg-navy-300 hover:bg-navy-500 dark:bg-white/25 dark:hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={t("Previous slide")}
                  className="grid size-10 place-items-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 dark:border-white/25 dark:text-white dark:hover:border-gold-400 dark:hover:text-gold-300"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={t("Next slide")}
                  className="grid size-10 place-items-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 dark:border-white/25 dark:text-white dark:hover:border-gold-400 dark:hover:text-gold-300"
                >
                  <ChevronRight className="size-5" />
                </button>
                <span className="ml-1 font-display text-sm tracking-[0.2em] text-navy-500 dark:text-navy-100/70">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-navy-600 dark:text-navy-100/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-gold-500 dark:text-gold-400" />
                {t("Licensed & Regulated")}
              </span>
              <span className="size-1 rounded-full bg-navy-300 dark:bg-navy-100/30" aria-hidden />
              <span>{t("Free Initial Consultation")}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="glass-card relative overflow-hidden p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gold-500" aria-hidden />
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="group block h-full rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/60"
                    >
                      <span className="grid size-11 place-items-center rounded-xl bg-navy-800 text-gold-400 transition-colors duration-300 group-hover:bg-gold-600 group-hover:text-white dark:bg-navy-700 dark:text-gold-400">
                        <item.icon className="size-5" />
                      </span>
                      <p className="mt-4 font-display text-sm font-semibold text-navy-900 dark:text-white">
                        {t(item.title)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-navy-500 dark:text-navy-200/60">
                        {t(item.description)}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="mt-5 flex items-center gap-3 rounded-2xl border border-gold-700 bg-gold-600 p-4 dark:bg-white/5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-gold-600">
                  <Star className="size-4 fill-current" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">{t("Rated 4.9 / 5 by 4,200+ clients")}</p>
                  <p className="text-xs text-white/85 dark:text-navy-200/60">
                    {t("Verified Google reviews from students & workers")}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-navy-200 bg-white px-6 py-4 shadow-luxe xl:block dark:border-white/10 dark:bg-navy-900"
            >
              <p className="text-3xl font-bold text-gold-600 dark:text-gold-400">96%</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-navy-500 dark:text-navy-200/60">
                {t("Visa Success Rate")}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-y-8 border-t border-navy-900/10 pt-10 md:grid-cols-4 dark:border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-navy-900 sm:text-4xl dark:text-white">
                <span className="text-gold-600 dark:text-gold-400">{stat.value}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}