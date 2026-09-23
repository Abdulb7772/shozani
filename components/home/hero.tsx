"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  HeartPulse,
  BookOpen,
  Wrench,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-provider";

const stats = [
  { value: "5+", label: "Years of Expertise" },
  { value: "100+", label: "Students Placed" },
  { value: "96%", label: "Visa Success Rate" },
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
    icon: HeartPulse,
    title: "Nursing",
    description: "Healthcare careers with recognition",
    href: "/countries/germany/nursing",
  },
  {
    icon: Wrench,
    title: "Ausbildung",
    description: "Paid vocational training in Germany",
    href: "/countries/germany/ausbildung",
  },
  {
    icon: BookOpen,
    title: "Language Training",
    description: "German, IELTS & PTE — online or in-person classes",
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
  image: string;
  imagePosition: string;
  titleClass?: string;
};

const slides: Slide[] = [
  {
    badge: "Destination · Germany",
    titleA: "Study Free & Build Your Career in",
    titleB: "Germany",
    description:
      "Tuition-free public universities, an 18-month post-study work visa and a permanent residency route in just 5 years. Engineers, nurses and IT professionals are in high demand — and we manage your APS, blocked account and admission end-to-end.",
    services: ["University Admissions", "APS & Blocked Account", "Ausbildung Placement", "German A1–B2 Training", "Nursing & Work Visas"],
    primary: { label: "Explore Germany", href: "/countries/germany" },
    secondary: { label: "Book Free Counselling", href: "/apply" },
    image: "/GERMANY.png",
    imagePosition: "object-right",
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
    image: "/UK.png",
    imagePosition: "object-right",
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
    image: "/USA.png",
    imagePosition: "object-right",
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
    image: "/CANADA.png",
    imagePosition: "object-right",
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
    image: "/AUS.png",
    imagePosition: "object-right",
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
    image: "/CYPRUS.png",
    imagePosition: "object-right",
    titleClass: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
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
    image: "/SA,UAE.png",
    imagePosition: "object-left",
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
    image: "/turkey.png",
    imagePosition: "object-right",
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
    image: "/malaysia.png",
    imagePosition: "object-right",
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
    <section className="relative overflow-hidden bg-white pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-20 dark:bg-navy-950">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className={cn("size-full object-cover", slide.imagePosition)} />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/40 via-navy-950/15 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/25 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines-light opacity-10" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="relative flex h-[560px] items-center sm:h-[600px] lg:h-[580px] xl:h-[620px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ x: 90, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -90, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
                    <Sparkles className="size-3.5" />
                    {t(slide.badge)}
                  </span>

                  <h1
                    className={cn(
                      "mt-6 font-bold leading-[1.08] tracking-tight text-white text-balance",
                      slide.titleClass ?? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                    )}
                  >
                    {t(slide.titleA)}{" "}
                    {slide.titleB && <span className="block text-gradient-gold">{t(slide.titleB)}</span>}
                    {slide.titleC && <> {t(slide.titleC)}</>}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                    {t(slide.description)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {slide.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
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
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={t("Previous slide")}
                  className="grid size-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-gold-400 hover:bg-gold-500/20 hover:text-gold-300"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={t("Next slide")}
                  className="grid size-10 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-gold-400 hover:bg-gold-500/20 hover:text-gold-300"
                >
                  <ChevronRight className="size-5" />
                </button>
                <span className="ml-1 font-display text-sm tracking-[0.2em] text-white/70">
                  {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-gold-300" />
                {t("Licensed & Regulated")}
              </span>
              <span className="size-1 rounded-full bg-white/40" aria-hidden />
              <span>{t("Free Initial Consultation")}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-24 hidden lg:block"
          >
            <div className="relative rounded-3xl border border-white/20 p-5 dark:border-white/10">
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="group block h-full rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-white/30 hover:shadow-luxe dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                    >
                      <span className="grid size-9 place-items-center rounded-lg bg-white/10 text-gold-300 transition-colors duration-300 group-hover:bg-gold-600 group-hover:text-white dark:bg-white/10 dark:text-gold-300">
                        <item.icon className="size-5" />
                      </span>
                      <p className="mt-3 font-display text-sm font-semibold text-white">
                        {t(item.title)}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                        {t(item.description)}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/20 pt-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                <span className="text-gold-300">{stat.value}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-white/60">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}