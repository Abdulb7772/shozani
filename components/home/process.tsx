"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Search, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Free Consultation",
    description: "Share your profile and goals. We assess your eligibility across study, work and immigration options.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Plan & Documents",
    description: "Get a personalised roadmap. Our team prepares, validates and uploads every required document.",
  },
  {
    icon: Search,
    step: "03",
    title: "Application & Visa",
    description: "We submit your applications, book your visa interview and track every stage until decision.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Land & Settle",
    description: "Pre-departure briefing, accommodation and arrival support so you start strong from day one.",
  },
];

export function Process() {
  return (
    <section className="bg-gold-50/40 py-20 sm:py-28 dark:bg-navy-900/30">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
              <span className="size-1.5 rounded-full bg-current" aria-hidden />
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy-900 text-balance dark:text-white sm:text-4xl lg:text-5xl">
              Your journey in <span className="text-gradient-gold">four simple steps</span>
            </h2>
          </motion.div>
          <Button variant="outline" size="lg" href="/apply" withArrow>
            Start Your Application
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative">
              <div className="h-full rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40">
                <div className="flex items-center justify-between">
                  <span className="grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 transition-transform duration-300 group-hover:scale-110 dark:from-gold-400 dark:to-gold-600 dark:text-navy-950">
                    <s.icon className="size-6" />
                  </span>
                  <span className="font-display text-4xl font-bold text-navy-900/5 dark:text-white/10">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {s.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-gold-400 lg:block dark:text-navy-600" aria-hidden>
                  <span className="block h-0.5 w-6 rounded-full bg-current" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}