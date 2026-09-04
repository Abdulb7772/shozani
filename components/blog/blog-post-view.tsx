"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { postListings, postsBySlug } from "@/lib/blog-posts";
import { useLanguage } from "@/lib/i18n/language-provider";

export function BlogPostView({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const post = postsBySlug[slug];
  const listing = postListings.find((p) => p.href === `/blog/${slug}`);

  if (!post) {
    return null;
  }

  const title = t(postListingsTitle(post.slug));
  const de = lang === "de";
  const categoryLabel = t(post.category);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-36 pb-16 sm:pt-44 sm:pb-20 dark:bg-navy-950">
        <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
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
            <Link href="/blog" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("Blog")}</Link>
            <ChevronRight className="size-4" />
            <span className="text-gold-700 dark:text-gold-300">{t(post.category)}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-600 px-3 py-1.5 text-xs font-bold text-white">
                <Sparkles className="size-3.5" />
                {t("Guide")}
              </span>
              <span className="rounded-full border border-navy-900/10 px-3 py-1.5 text-xs font-medium text-navy-600 dark:border-white/15 dark:text-navy-100/80">
                {categoryLabel}
              </span>
              <span className="rounded-full border border-navy-900/10 px-2.5 py-1 font-display text-[10px] font-bold tracking-widest text-navy-400 dark:border-white/10 dark:text-navy-100/50">
                {post.code}
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-[1.15] text-navy-900 text-balance sm:text-4xl lg:text-5xl dark:text-white">
              {title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy-500 dark:text-navy-200/60">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {de ? post.deDate : post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" />
                {t(listing?.readTime ?? "")}
              </span>
              <span className="flex flex-wrap gap-1.5">
                {(listing?.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-navy-900/[0.04] px-2.5 py-1 text-[11px] text-navy-500 dark:bg-white/5 dark:text-navy-200/60"
                  >
                    <Tag className="size-3" />
                    #{t(tag)}
                  </span>
                ))}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 dark:bg-navy-950">
        <Container className="max-w-3xl">
          <div className="rounded-3xl border border-gold-400/40 bg-gold-600/5 p-6 sm:p-8 dark:border-gold-400/20 dark:bg-white/5">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700 dark:text-gold-300">
              <CheckCircle2 className="size-4" />
              {t("Key facts")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {(de ? post.deFacts : post.facts).map((fact) => (
                <li key={fact} className="flex gap-2.5 text-sm leading-relaxed text-navy-700 dark:text-navy-100/80">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-600 dark:text-gold-400" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {post.sections.map((section, i) => (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-12 first-of-type:mt-14"
            >
              <h2 className="flex items-center gap-3 text-2xl font-semibold text-navy-900 text-balance sm:text-[1.7rem] dark:text-white">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-900 text-xs font-bold text-gold-300 dark:bg-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {de ? section.deHeading : section.heading}
              </h2>
              {section.paragraphs.map((para, j) => (
                <p key={j} className="mt-4 text-base leading-relaxed text-navy-600 dark:text-navy-200/75">
                  {de ? (section.deParagraphs?.[j] ?? para) : para}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-2.5 rounded-2xl border border-navy-900/10 bg-navy-50/40 p-5 dark:border-white/10 dark:bg-navy-900/30">
                  {(de ? section.deBullets ?? section.bullets : section.bullets).map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-navy-700 dark:text-navy-100/80">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-600 dark:text-gold-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-14 overflow-hidden rounded-[2rem] border border-gold-400/30 bg-navy-900 p-8 text-center sm:p-12"
          >
            <h2 className="text-2xl font-semibold text-white text-balance sm:text-3xl">
              {t("Planning a similar")} <span className="text-gradient-gold">{t("step?")}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/70">
              {t("Book a free counselling session — we map the route, points, costs and documents for your profile.")}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="gold" size="lg" href="/apply" withArrow>
                {t("Book Free Counselling")}
              </Button>
              <Button variant="glass" size="lg" href="/contact">
                {t("Contact Us")}
              </Button>
            </div>
          </motion.div>

          <div className="mt-10">
            <Button variant="outline" size="md" href="/blog">
              <ArrowLeft className="size-4" />
              {t("Back to all guides")}
              <ArrowRight className="size-4 -scale-x-100" aria-hidden />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function postListingsTitle(slug: string): string {
  const map: Record<string, string> = {
    "germany-opportunity-card-guide":
      "Germany Opportunity Card 2026: Complete Guide for Pakistani Professionals",
    "tuition-free-study-germany":
      "Tuition-Free Study in Germany: 12 Universities That Charge No Fees",
    "ielts-vs-pte-2026": "IELTS vs PTE: Which English Test Should You Take in 2026?",
    "canada-express-entry-july-2026":
      "Canada Express Entry July 2026: Latest CRS Scores & In-Demand Jobs",
    "nursing-in-germany": "Nursing in Germany: Salary, B2 German, and the Anerkennung Process",
    "study-in-australia": "Study in Australia: A 2026 Blueprint for Pakistani Students",
    "german-a1-to-b2-timeline": "German Language A1–B2: How Long Does It Really Take?",
    "uk-graduate-visa-2026": "UK Graduate Visa 2026: Post-Study Work Rules Still Worth It?",
    "ielts-band-7-in-6-weeks": "IELTS Band 7 in 6 Weeks: The Exact Study Plan Our Trainers Use",
  };
  return map[slug] ?? slug;
}