"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, FileText, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { legalDocs, type LegalDoc } from "@/lib/legal";
import { useLanguage } from "@/lib/i18n/language-provider";

export function LegalPage({ slug }: { slug: LegalDoc["slug"] }) {
  const { t, lang } = useLanguage();
  const doc = legalDocs[slug];
  const de = lang === "de";

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-36 pb-14 sm:pt-44 sm:pb-16 dark:bg-navy-950">
        <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
        <Container className="relative">
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            aria-label={t("Breadcrumb")}
            className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
          >
            <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("Home")}</Link>
            <ChevronRight className="size-4" />
            <span className="text-gold-700 dark:text-gold-300">{de ? doc.deTitle : doc.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
              <FileText className="size-3.5" />
              {t("Legal")}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl dark:text-white">
              {de ? doc.deTitle : doc.title}
            </h1>
            <p className="mt-4 text-sm text-navy-500 dark:text-navy-200/60">
              {de ? doc.deUpdated : doc.updated}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-navy-950">
        <Container className="max-w-3xl">
          {doc.sections.map((section, i) => (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.03 }}
              className="mt-10 first-of-type:mt-0"
            >
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                {de ? section.deHeading : section.heading}
              </h2>
              {section.paragraphs.map((para, j) => (
                <p key={j} className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200/75">
                  {de ? section.deParagraphs[j] ?? para : para}
                </p>
              ))}
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-gold-400/30 bg-navy-50/40 p-8 sm:flex-row sm:items-center sm:justify-between dark:border-gold-400/20 dark:bg-navy-900/30"
          >
            <div>
              <p className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                {t("Questions about this document?")}
              </p>
              <p className="mt-1 text-sm text-navy-500 dark:text-navy-200/60">
                {t("Our team responds within one working day.")}
              </p>
            </div>
            <a
              href="mailto:shozani.group@gmail.com"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              <Mail className="size-4" />
              shozani.group@gmail.com
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}