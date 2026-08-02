"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Globe2,
  Building2,
  Languages,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

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
    icon: Languages,
    title: "Language Training",
    description:
      "German (A1–C1), IELTS and PTE coaching with certified trainers, mock exams and proven band results.",
    href: "/services/language",
    tag: "German, IELTS, PTE",
  },
  {
    icon: Building2,
    title: "Construction Services",
    description:
      "Architecture, interior design, house building and project management with premium quality standards.",
    href: "/services/construction",
    tag: "Design & Build",
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-navy-950">
      <div className="pointer-events-none absolute right-[-10%] top-0 size-[420px] rounded-full bg-gold-400/8 blur-[120px]" aria-hidden />
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title={<>Complete solutions for your <span className="text-gradient-gold">global journey</span></>}
          description="From your first consultation to landing and settlement — every service is delivered by specialised experts who have done it themselves."
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
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 transition-all duration-500 group-hover:from-gold-500 group-hover:to-gold-400 group-hover:text-navy-950 dark:from-gold-400 dark:to-gold-600 dark:text-navy-950">
                  <service.icon className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-500 dark:bg-white/10 dark:text-navy-200/70">
                    {service.tag}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all duration-300 group-hover:gap-2 dark:text-gold-300">
                    Explore
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