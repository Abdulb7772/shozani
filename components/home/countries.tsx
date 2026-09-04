"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n/language-provider";

const countries = [
  { name: "Germany", code: "DEU", href: "/countries/germany", detail: "Tuition-free study · Jobs · PR" },
  { name: "Australia", code: "AUS", href: "/countries/australia", detail: "Study · Work · PR Pathway" },
  { name: "United Kingdom", code: "GBR", href: "/countries/uk", detail: "Elite universities · Post-study" },
  { name: "USA", code: "USA", href: "/countries/usa", detail: "Top-ranked colleges · STEM" },
  { name: "Canada", code: "CAN", href: "/countries/canada", detail: "Express Entry · Study · Work" },
  { name: "Malaysia", code: "MYS", href: "/countries/malaysia", detail: "Affordable degrees · English medium" },
  { name: "Turkey", code: "TUR", href: "/countries/turkey", detail: "Scholarships · Low tuition costs" },
  { name: "Cyprus", code: "CYP", href: "/countries/cyprus", detail: "EU base · English degrees" },
  { name: "Tajikistan", code: "TJK", href: "/countries/tajikistan", detail: "Affordable education · New hub" },
  { name: "Europe", code: "EUR", href: "/countries/europe", detail: "EU-wide mobility · Jobs" },
  { name: "Saudi Arabia", code: "KSA", href: "/countries/saudi-arabia", detail: "Job visas · Gulf careers" },
  { name: "UAE", code: "UAE", href: "/countries/uae", detail: "Business · Jobs · Residency" },
];

export function Countries() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow={t("Countries")}
          title={<>{t("One platform,")} <span className="text-gradient-gold">{t("every destination")}</span></>}
          description={t("A dedicated page for each country with requirements, visa processes, timelines, documents, universities, jobs and country-specific FAQs.")}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link
                href={country.href}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white/10"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 font-display text-xs font-bold tracking-[0.18em] text-navy-100/70 transition-colors duration-300 group-hover:border-gold-400/50 group-hover:text-gold-300"
                    aria-hidden
                  >
                    {country.code}
                  </span>
                  <ArrowUpRight className="size-5 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {t(country.name)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-100/60">
                  {t(country.detail)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/countries"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
          >
            <Globe2 className="size-4" />
            {t(`View all ${countries.length} countries`)}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}