"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Globe2,
  Plane,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/language-provider";
import {
  visaDestinations,
  visaGeneralFaqs,
  visaPrograms,
  visaServiceLinks,
  visaStats,
  visaTracks,
  visaWhyUs,
  type VisaProgram,
} from "@/lib/visa-data";

const trackIcons = { business: Building2, visit: Plane } as const;

export function VisaPage() {
  return (
    <>
      <VisaHero />
      <VisaStats />
      <TrackSwitcher />
      <ProgramSection program={visaPrograms.business} />
      <ProgramSection program={visaPrograms.visit} />
      <WhyUsSection />
      <DestinationsSection />
      <ServiceLinksSection />
      <GeneralFaqSection />
      <VisaCta />
    </>
  );
}

function VisaHero() {
  const { t } = useLanguage();
  const lastCrumb = { label: "Visas", href: "/services/visa" };

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-white pb-20 pt-20 sm:min-h-[640px] sm:pt-24 lg:min-h-[720px] lg:pt-24 dark:bg-navy-950">
      <Image
        src="/immigration.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[75%_center]"
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
          className="flex flex-wrap items-center gap-2 text-sm text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-gold-300">
            {t("Home")}
          </Link>
          <ChevronRight className="size-4" aria-hidden />
          <Link href="/services" className="transition-colors hover:text-gold-300">
            {t("Services")}
          </Link>
          <ChevronRight className="size-4" aria-hidden />
          <span className="text-gold-300">{t(lastCrumb.label)}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-navy-950/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <Sparkles className="size-3.5" />
            {t("Visa Services")}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl">
            {t("Every Visa Route,")} <span className="text-gradient-gold">{t("One Visa Desk")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">
            {t(
              "Business visas and visit visas filed properly — company formation, investor residence, business meetings, family travel and eVisas across the UAE, Germany, Europe, the UK and the Gulf, with attestation and banking handled in the same file.",
            )}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              {t("Book Free Consultation")}
            </Button>
            <Button variant="glass" size="lg" href="/ai/visa-eligibility">
              {t("Check Visa Eligibility")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function VisaStats() {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 -mt-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 gap-y-8 rounded-3xl border-2 border-red-500/60 bg-transparent p-8 backdrop-blur-2xl md:grid-cols-4 md:p-10 dark:border-red-400/40 dark:bg-transparent"
        >
          {visaStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">{stat.value}</p>
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

function TrackSwitcher() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("Two Tracks")}
          title={<>{t("Pick your")} <span className="text-gradient-gold">{t("visa type")}</span></>}
          description={t("Most confusion in visa cases comes from filing the wrong category. Start with the one that matches your purpose — we handle both, plus the upgrade from one to the other.")}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {visaTracks.map((track, i) => {
            const Icon = trackIcons[track.id];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <a
                  href={`#${track.anchor}`}
                  className="group flex h-full flex-col rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-navy-800 text-gold-400 transition-colors duration-500 group-hover:bg-gold-600 group-hover:text-white dark:bg-gold-600 dark:text-white">
                      <Icon className="size-7" />
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 dark:text-gold-300">
                      {t("Read the detail")}
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900 dark:text-white">
                    {t(track.name)}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-gold-600 dark:text-gold-300">
                    {t(track.short)}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                    {t(track.summary)}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {track.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-200/70">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                        {t(point)}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-navy-900/10 pt-5 dark:border-white/10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-400 dark:text-navy-200/50">
                      {t("Who this is for")}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {track.suitedTo.map((who) => (
                        <li key={who} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-200/70">
                          <Target className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                          {t(who)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProgramSection({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  const Icon = trackIcons[program.id];
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const anchor = program.id === "business" ? "business-visa" : "visit-visa";

  return (
    <div id={anchor} className="scroll-mt-28">
      <section className="relative overflow-hidden bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" aria-hidden />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
              <Icon className="size-3.5" />
              {t(program.eyebrow)}
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight text-balance text-navy-900 sm:text-4xl lg:text-5xl dark:text-white">
              {t(program.title)} <span className="text-gradient-gold">{t(program.highlight)}</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
              {t(program.intro)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 grid grid-cols-2 gap-y-8 rounded-3xl border border-navy-900/10 bg-white p-8 md:grid-cols-4 dark:border-white/10 dark:bg-navy-900/40"
          >
            {program.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-gradient-gold sm:text-3xl">{stat.value}</p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      <RequirementsBlock program={program} />
      <VariantsBlock program={program} />
      <ProcessBlock program={program} />
      <DocumentsBlock program={program} />
      <TimelineBlock program={program} />
      <ProgramFaqBlock program={program} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <RelatedBlock program={program} />
    </div>
  );
}

function RequirementsBlock({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("What You Need")}
          title={<>{t("Key")} <span className="text-gradient-gold">{t("requirements")}</span></>}
          description={t("Everything below gets checked before filing. Missing one of these is the most common reason a visa is delayed or refused.")}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {program.requirements.map((req, i) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                <FileText className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">{t(req.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(req.text)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function VariantsBlock({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <SectionHeading
          eyebrow={t("Route Options")}
          title={<>{t("Where we can")} <span className="text-gradient-gold">{t("file for you")}</span></>}
          description={t("Each destination has its own category, stay limit and capital rule. Open the country guide for the full picture, timelines and costs.")}
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {program.variants.map((variant, i) => (
            <motion.div
              key={variant.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={variant.countryHref}
                className="group flex h-full flex-col rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-gold-600 dark:text-gold-300">
                    {t(variant.country)}
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-navy-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600 dark:text-navy-600 dark:group-hover:text-gold-300" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold text-navy-900 dark:text-white">{t(variant.name)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(variant.purpose)}</p>
                <dl className="mt-5 space-y-2 border-t border-navy-900/10 pt-4 text-sm dark:border-white/10">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                    <dt className="sr-only">{t("Stay")}</dt>
                    <dd className="text-navy-600 dark:text-navy-200/70">{t(variant.stay)}</dd>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                    <dt className="sr-only">{t("Key Requirement")}</dt>
                    <dd className="text-navy-600 dark:text-navy-200/70">{t(variant.requirement)}</dd>
                  </div>
                </dl>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessBlock({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("Application Process")}
          title={<>{t("How we get you")} <span className="text-gradient-gold">{t("through it")}</span></>}
          description={t("A transparent, step-by-step process with a dedicated case officer from first call to decision.")}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {program.process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className="rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-navy-800 font-display text-sm font-bold text-gold-400 dark:bg-gold-600 dark:text-white">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">{t(step.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(step.text)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DocumentsBlock({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow={t("Document Pack")}
            title={<>{t("Your file, ready to")} <span className="text-gradient-gold">{t("file")}</span></>}
            description={t("We assemble, translate and attest everything before the appointment — so the first submission is a complete one.")}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {program.documents.map((doc, i) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
                className="flex items-start gap-3 rounded-2xl border border-navy-900/10 bg-white p-4 dark:border-white/10 dark:bg-navy-900/40"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                <span className="text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(doc)}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-gold-400/40 bg-white p-8 sm:flex-row sm:items-center sm:justify-between dark:border-gold-400/20 dark:bg-navy-900/40"
        >
          <div>
            <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
              {t("Need your documents attested?")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
              {t("HEC verification, degree attestation, apostille, MOFA and certified English or German translation run through our own attestation desk.")}
            </p>
          </div>
          <Button variant="gold" href="/services/attestation-testing" withArrow>
            {t("Attestation & Testing")}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

function TimelineBlock({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow={t("Timeline")}
            title={<>{t("How long it really")} <span className="text-gradient-gold">{t("takes")}</span></>}
            description={t("Realistic timeframes per stage — updated live as your application moves.")}
          />
          <div className="space-y-4">
            {program.timeline.map((tl, i) => (
              <motion.div
                key={tl.step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-5 rounded-2xl border border-navy-900/10 bg-white p-5 transition-colors hover:border-gold-400/50 dark:border-white/10 dark:bg-navy-900/40"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-500/10 font-display text-xs font-bold text-gold-600 dark:text-gold-300">
                  {tl.step}
                </span>
                <h3 className="flex-1 font-display text-sm font-semibold text-navy-900 dark:text-white">{t(tl.title)}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-300">
                  <Clock className="size-3.5" />
                  {t(tl.text)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProgramFaqBlock({
  program,
  openFaq,
  setOpenFaq,
}: {
  program: VisaProgram;
  openFaq: number | null;
  setOpenFaq: (n: number | null) => void;
}) {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow={t("FAQs")}
          title={<>{t("Questions,")} <span className="text-gradient-gold">{t("answered")}</span></>}
        />
        <div className="space-y-3">
          {program.faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-colors dark:border-white/10 dark:bg-navy-900/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-semibold text-navy-900 dark:text-white">{t(f.q)}</span>
                  <ChevronRight className={cn("size-5 shrink-0 text-gold-500 transition-transform duration-300", open && "rotate-90")} />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(f.a)}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function RelatedBlock({ program }: { program: VisaProgram }) {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("Related Services")}
          title={<>{t("If this is not quite")} <span className="text-gradient-gold">{t("your route")}</span></>}
          description={t("These pages cover the neighbouring visa categories — same case officer, same document set.")}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {program.related.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-4 shrink-0 text-navy-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600 dark:text-navy-600 dark:group-hover:text-gold-300" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">{t(item.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(item.description)}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function WhyUsSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 navy-radial" aria-hidden />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow={t("Why Shozani")}
          title={<>{t("One desk for the whole")} <span className="text-gradient-gold">{t("visa file")}</span></>}
          description={t("Most visa refusals are file failures, not applicant failures. We build the file the mission can approve, and we keep it moving.")}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visaWhyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-white/10"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-100/70">{t(item.text)}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function DestinationsSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("Destinations")}
          title={<>{t("Where we")} <span className="text-gradient-gold">{t("file visas")}</span></>}
          description={t("Every destination below has its own country guide with costs, timelines and the routes we handle there.")}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visaDestinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={dest.href}
                className="group flex h-full flex-col rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-2xl bg-navy-800 text-gold-400 transition-colors duration-500 group-hover:bg-gold-600 group-hover:text-white dark:bg-gold-600 dark:text-white">
                    <Globe2 className="size-5" />
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-navy-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600 dark:text-navy-600 dark:group-hover:text-gold-300" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900 dark:text-white">{t(dest.name)}</h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  <div className="flex items-start gap-2">
                    <Building2 className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400 dark:text-navy-200/50">
                        {t("Business")}
                      </dt>
                      <dd className="text-navy-600 dark:text-navy-200/70">{t(dest.business)}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Plane className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden />
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400 dark:text-navy-200/50">
                        {t("Visit")}
                      </dt>
                      <dd className="text-navy-600 dark:text-navy-200/70">{t(dest.visit)}</dd>
                    </div>
                  </div>
                </dl>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceLinksSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <SectionHeading
          eyebrow={t("The Full Service Map")}
          title={<>{t("Every route, in one")} <span className="text-gradient-gold">{t("consultation")}</span></>}
          description={t("Most visa files start as something else — a degree, a job offer, an investment, a family reunion. Here is the whole desk.")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visaServiceLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition-all duration-500 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-sm font-semibold text-navy-900 dark:text-white">
                      {t(item.title)}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-navy-500 dark:text-navy-200/60">
                      {t(item.description)}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-navy-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-600 dark:text-navy-600 dark:group-hover:text-gold-300" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function GeneralFaqSection() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow={t("FAQs")}
          title={<>{t("Visa questions,")} <span className="text-gradient-gold">{t("answered")}</span></>}
        />
        <div className="space-y-3">
          {visaGeneralFaqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-colors dark:border-white/10 dark:bg-navy-900/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-semibold text-navy-900 dark:text-white">{t(f.q)}</span>
                  <ChevronRight className={cn("size-5 shrink-0 text-gold-500 transition-transform duration-300", open && "rotate-90")} />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(f.a)}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function VisaCta() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold-400/30 bg-navy-900 p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-semibold text-white text-balance sm:text-4xl lg:text-5xl">
            {t("Not sure which visa you")} <span className="text-gradient-gold">{t("actually need?")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-100/70">
            {t("A 20-minute call, an honest eligibility view and a written route plan with a fixed quotation within two working days. No empty guarantees.")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              {t("Start Free Assessment")}
            </Button>
            <Button variant="glass" size="lg" href="/contact">
              {t("Talk to a Counsellor")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
