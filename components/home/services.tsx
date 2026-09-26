"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Globe2,
  Building2,
  BookOpen,
  HeartPulse,
  FileCheck,
  Stamp,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n/language-provider";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "Admissions to top German, UK, US, Canadian and Australian universities — from course selection to visa approval.",
    href: "/services/study-abroad",
    tag: "Germany, UK, USA",
  },
  {
    icon: Briefcase,
    title: "Work Abroad",
    description:
      "Job placement support across Germany, Europe, Middle East — IT, Engineering, Healthcare and Nursing roles.",
    href: "/services/work-abroad",
    tag: "IT, Engineering, Healthcare",
  },
  {
    icon: Globe2,
    title: "Immigration & PR",
    description:
      "Permanent residency, family sponsorship and citizenship pathways handled end-to-end for every country.",
    href: "/services/immigration",
    tag: "PR, Family, Skilled",
  },
  {
    icon: Building2,
    title: "Business & Investment",
    description:
      "Company formation, business visas and investment advisory to establish and grow your business abroad.",
    href: "/services/business",
    tag: "Company Formation",
  },
  {
    icon: Stamp,
    title: "Visa Services",
    description:
      "Business visas and visit visas filed end-to-end — company formation, investor residence, business meetings, family travel and eVisas across the UAE, Germany, Europe, the UK and the Gulf.",
    href: "/services/visa",
    tag: "Business & Visit",
  },
  {
    icon: BookOpen,
    title: "Language Training",
    description:
      "German (A1–B2), IELTS and PTE coaching with certified trainers, mock exams and proven band results — online or in-person sessions.",
    href: "/services/language",
    tag: "German, IELTS, PTE",
  },
  {
    icon: HeartPulse,
    title: "Nursing in Germany",
    description:
      "Fast-track German nursing visas with recognition, state-covered language courses and hospital placement — one of the most reliable paths to Europe.",
    href: "/countries/germany/nursing",
    tag: "Recognition, €3,000+ Salary",
  },
  {
    icon: GraduationCap,
    title: "Ausbildung in Germany",
    description:
      "Paid dual vocational training in Germany — earn from day one while you learn a trade that leads to permanent residence.",
    href: "/countries/germany/ausbildung",
    tag: "Paid Training, 330+ Trades",
  },
  {
    icon: FileCheck,
    title: "Attestation & Testing",
    description:
      "Degree attestation, HEC verification, apostille, certified translations and language testing for every admission and visa application.",
    href: "/services/attestation-testing",
    tag: "HEC, Apostille, IELTS & PTE",
  },
];

export function Services() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("Our Services")}
          title={<>{t("Complete solutions for your")} <span className="text-gradient-gold">{t("global journey")}</span></>}
          description={t("From your first consultation to landing and settlement — every service is delivered by specialised experts who have done it themselves.")}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={service.href}
                className="group relative block h-full overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gold-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <span className="grid size-14 place-items-center rounded-2xl bg-navy-800 text-gold-400 transition-colors duration-500 group-hover:bg-gold-600 group-hover:text-white dark:bg-gold-600 dark:text-white">
                  <service.icon className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-900 dark:text-white">
                  {t(service.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {t(service.description)}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-500 dark:bg-white/10 dark:text-navy-200/70">
                    {t(service.tag)}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all duration-300 group-hover:gap-2 dark:text-gold-300">
                    {t("Explore")}
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}