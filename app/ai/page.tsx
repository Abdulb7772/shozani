import { Bot, CheckCircle2, BarChart3, Calculator, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "Free AI tools from Shozani Global Consultancy — visa eligibility check, IELTS predictor, Germany salary calculator and study cost calculator.",
  alternates: { canonical: "/ai" },
};

const tools = [
  {
    icon: CheckCircle2,
    title: "Visa Eligibility",
    description: "A 2-minute automated assessment of your visa options across Germany, UK, Canada, Australia and more.",
    href: "/ai/visa-eligibility",
    tag: "2-min free check",
  },
  {
    icon: BarChart3,
    title: "IELTS Predictor",
    description: "Estimate your current IELTS band from typical section-level signals and see what target score you need.",
    href: "/ai/ielts-predictor",
    tag: "Band estimate",
  },
  {
    icon: Calculator,
    title: "Germany Salary Calculator",
    description: "Convert a German gross salary into net pay after tax, social security and health insurance deductions.",
    href: "/ai/salary-calculator",
    tag: "Live net salary",
  },
  {
    icon: FileText,
    title: "Study Cost Calculator",
    description: "Build a realistic budget for tuition, living costs, blocked account and travel for your chosen destination.",
    href: "/ai/study-cost-calculator",
    tag: "Plan your budget",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "Instant answers to your study, work and visa questions — 24/7, in your language.",
    href: "/contact",
    tag: "24/7 support",
  },
];

export default function AiToolsIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-gold-50/40 pt-36 pb-20 sm:pt-44 sm:pb-28 dark:bg-navy-950">
        <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
        <div className="pointer-events-none absolute right-[-10%] top-0 size-[520px] rounded-full bg-gold-400/15 blur-[130px]" aria-hidden />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            AI Tools
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            Smart tools that <span className="text-gradient-gold">de-risk your move</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            Free, fast and honest estimates — before you spend a single rupee. Every tool is built on the same data our counsellors use.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative block overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 transition-all duration-500 group-hover:from-gold-500 group-hover:to-gold-400 group-hover:text-navy-950">
                  <tool.icon className="size-7" />
                </span>
                <h2 className="mt-6 font-display text-xl font-semibold text-navy-900 dark:text-white">{tool.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{tool.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-500 dark:bg-white/10 dark:text-navy-200/70">
                    {tool.tag}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all duration-300 group-hover:gap-2 dark:text-gold-300">
                    Use tool
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}