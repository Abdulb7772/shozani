import Link from "next/link";
import { ArrowRight, Languages, GraduationCap, MonitorPlay } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const tests = [
  {
    icon: Languages,
    title: "German Placement Test",
    description: "12 grammar and vocabulary questions that place you on the CEFR scale from A1 to B2.",
    href: "/services/language/placement/german",
    tag: "A1–B2 · 3 min",
  },
  {
    icon: GraduationCap,
    title: "IELTS Placement Test",
    description: "12 English questions that estimate your starting band from 4.0 to 7.5 before you book the exam.",
    href: "/services/language/placement/ielts",
    tag: "Band 4.0–7.5 · 3 min",
  },
  {
    icon: MonitorPlay,
    title: "PTE Placement Test",
    description: "12 computer-style English questions that estimate your PTE score range before test day.",
    href: "/services/language/placement/pte",
    tag: "Score 45–85 · 3 min",
  },
];

export function PlacementCards({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Free Placement Tests"
            title={
              <>
                Know your level <span className="text-gradient-gold">before you pay</span>
              </>
            }
            description="Three quick, pure-language tests — no personal details, nothing saved. Pick your language, answer 12 questions, get your level in 3 minutes."
          />
        )}
        <div className="grid gap-5 md:grid-cols-3">
          {tests.map((test) => (
            <Link
              key={test.title}
              href={test.href}
              className="group relative block overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gold-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <span className="grid size-14 place-items-center rounded-2xl bg-navy-800 text-gold-400 transition-colors duration-500 group-hover:bg-gold-600 group-hover:text-white">
                <test.icon className="size-7" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-navy-900 dark:text-white">
                {test.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                {test.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-500 dark:bg-white/10 dark:text-navy-200/70">
                  {test.tag}
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 transition-all duration-300 group-hover:gap-2 dark:text-gold-300">
                  Take the test
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}