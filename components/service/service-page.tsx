"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export type ServiceData = {
  codecrumbs: { label: string; href: string }[];
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  stats?: { value: string; label: string }[];
  requirements: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  timeline: { step: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
  cta: { title: string; text: string; link: string; linkLabel: string };
};

export function ServicePage({ config }: { config: ServiceData }) {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <ServiceHero config={config} />
      {config.stats && <ServiceStats stats={config.stats} />}
      <RequirementsSection config={config} />
      <ProcessSection config={config} />
      <TimelineSection config={config} />
      <FaqSection config={config} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <ServiceCta config={config} />
    </>
  );
}

function ServiceHero({ config }: { config: ServiceData }) {
  const last = config.codecrumbs[config.codecrumbs.length - 1];
  return (
    <section className="relative overflow-hidden bg-gold-50/40 pt-36 pb-20 sm:pt-44 sm:pb-28 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute right-[-10%] top-0 size-[520px] rounded-full bg-gold-400/15 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">Home</Link>
          {config.codecrumbs.map((c) => (
            <React.Fragment key={c.href + c.label}>
              <ChevronRight className="size-4" aria-hidden />
              {c.href === last.href ? (
                <span className="text-gold-700 dark:text-gold-300">{c.label}</span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">
                  {c.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <Sparkles className="size-3.5" />
            {config.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            {config.title} <span className="text-gradient-gold">{config.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            {config.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              Book Free Consultation
            </Button>
            <Button variant="glass" size="lg" href="/contact">
              Ask a Question
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ServiceStats({ stats }: { stats: NonNullable<ServiceData["stats"]> }) {
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
              <p className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function RequirementsSection({ config }: { config: ServiceData }) {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="What You Need"
          title={<>Key <span className="text-gradient-gold">requirements</span></>}
          description="The essentials before you begin. Each one gets validated and handled by our team."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {config.requirements.map((req, i) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className="rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                <CheckCircle2 className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">{req.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{req.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessSection({ config }: { config: ServiceData }) {
  return (
    <section className="bg-gold-50/40 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <SectionHeading
          eyebrow="Application Process"
          title={<>How we get you <span className="text-gradient-gold">through it</span></>}
          description="A transparent, step-by-step process with a dedicated case officer from start to decision."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {config.process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              className="rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 font-display text-sm font-bold text-gold-400 dark:from-gold-400 dark:to-gold-600 dark:text-navy-950">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TimelineSection({ config }: { config: ServiceData }) {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            align="left"
            eyebrow="Timeline"
            title={<>How long it really <span className="text-gradient-gold">takes</span></>}
            description="Realistic timeframes per stage — updated live as your application moves."
          />
          <div className="space-y-4">
            {config.timeline.map((t, i) => (
              <motion.div
                key={t.step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-5 rounded-2xl border border-navy-900/10 bg-white p-5 transition-colors hover:border-gold-400/50 dark:border-white/10 dark:bg-navy-900/40"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-500/10 font-display text-xs font-bold text-gold-600 dark:text-gold-300">
                  {t.step}
                </span>
                <h3 className="flex-1 font-display text-sm font-semibold text-navy-900 dark:text-white">{t.title}</h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-300">
                  <Clock className="size-3.5" />
                  {t.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqSection({
  config,
  openFaq,
  setOpenFaq,
}: {
  config: ServiceData;
  openFaq: number | null;
  setOpenFaq: (n: number | null) => void;
}) {
  return (
    <section className="bg-gold-50/40 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title={<>Questions, <span className="text-gradient-gold">answered</span></>}
        />
        <div className="space-y-3">
          {config.faqs.map((f, i) => {
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
                  <span className="font-display text-sm font-semibold text-navy-900 dark:text-white">{f.q}</span>
                  <ChevronRight className={cn("size-5 shrink-0 text-gold-500 transition-transform duration-300", open && "rotate-90")} />
                </button>
                {open && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ServiceCta({ config }: { config: ServiceData }) {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold-400/30 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-gold-400/20 blur-[90px]" aria-hidden />
          <h2 className="text-3xl font-semibold text-white text-balance sm:text-4xl lg:text-5xl">
            Ready to start <span className="text-gradient-gold">your application?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-100/70">{config.cta.text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href={config.cta.link} withArrow>
              {config.cta.linkLabel}
            </Button>
            <Button variant="glass" size="lg" href="/contact">
              Talk to a Counsellor
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}