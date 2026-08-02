"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Globe,
  Languages,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 navy-radial" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" aria-hidden />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute -top-32 right-[-10%] size-[500px] rounded-full bg-gold-400/15 blur-[140px]"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] size-[420px] rounded-full bg-navy-500/25 blur-[130px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-300"
            >
              <Sparkles className="size-3.5" />
              Your Global Opportunities Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Study, Work &amp;
              <span className="block text-gradient-gold">Settle Anywhere</span>
              in the World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/75 sm:text-lg"
            >
              From visa eligibility to university admissions, jobs, business setup and settlement —
              Shozani Global Consultancy guides you at every step with a 20+ year track record
              and a transparent, success-driven process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="gold" size="lg" href="/apply" withArrow>
                Book Free Counselling
              </Button>
              <Button variant="glass" size="lg" href="/ai/visa-eligibility">
                Check Visa Eligibility
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-6 flex items-center gap-4 text-sm text-navy-100/60"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-gold-400" />
                Licensed &amp; Regulated
              </span>
              <span className="size-1 rounded-full bg-navy-100/30" aria-hidden />
              <span>Free Initial Consultation</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="glass-card relative overflow-hidden p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" aria-hidden />
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
                      className="group block h-full rounded-2xl border border-navy-900/10 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-white/5"
                    >
                      <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 transition-transform duration-300 group-hover:scale-110 dark:from-gold-400 dark:to-gold-600 dark:text-navy-950">
                        <item.icon className="size-5" />
                      </span>
                      <p className="mt-4 font-display text-sm font-semibold text-navy-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-navy-500 dark:text-navy-200/60">
                        {item.description}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="mt-5 flex items-center gap-3 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-gold-50 to-transparent p-4 dark:from-white/5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950">
                  <Star className="size-4 fill-current" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900 dark:text-white">
                    Rated 4.9 / 5 by 4,200+ clients
                  </p>
                  <p className="text-xs text-navy-500 dark:text-navy-200/60">
                    Verified Google reviews from students &amp; workers
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="glass absolute -bottom-8 -left-8 hidden rounded-2xl px-6 py-4 xl:block"
            >
              <p className="text-3xl font-bold text-gradient-gold">96%</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-navy-500 dark:text-navy-200/60">
                Visa Success Rate
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                <span className="text-gradient-gold">{stat.value}</span>
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-navy-200/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}