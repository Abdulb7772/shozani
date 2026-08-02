import { Sparkles, ArrowRight, GraduationCap, Briefcase, Building2, Languages } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Shozani Global Consultancy services — study abroad, work abroad, immigration, business migration and language training.",
  alternates: { canonical: "/services" },
};

const groups = [
  {
    icon: GraduationCap,
    label: "Study Abroad",
    href: "/services/study-abroad",
    items: [
      { title: "Study Abroad", href: "/services/study-abroad" },
      { title: "Study in Germany", href: "/services/study-abroad/germany" },
      { title: "Study in Australia", href: "/services/study-abroad/australia" },
      { title: "Study in Canada", href: "/services/study-abroad/canada" },
      { title: "Study in USA", href: "/services/study-abroad/usa" },
      { title: "Study in UK", href: "/services/study-abroad/uk" },
    ],
  },
  {
    icon: Briefcase,
    label: "Work Abroad",
    href: "/services/work-abroad",
    items: [
      { title: "Work Abroad", href: "/services/work-abroad" },
      { title: "Work in Germany", href: "/services/work-abroad/germany" },
    ],
  },
  {
    icon: Building2,
    label: "Immigration",
    href: "/services/immigration",
    items: [
      { title: "Immigration", href: "/services/immigration" },
      { title: "Permanent Residence", href: "/services/immigration/permanent-residence" },
      { title: "Family Immigration", href: "/services/immigration/family" },
      { title: "Business & Investment", href: "/services/immigration/business" },
    ],
  },
  {
    icon: Languages,
    label: "Language & Tests",
    href: "/services/language",
    items: [
      { title: "Language & Tests", href: "/services/language" },
      { title: "German Language", href: "/services/language/german" },
      { title: "IELTS Preparation", href: "/services/language/ielts" },
      { title: "PTE Preparation", href: "/services/language/pte" },
    ],
  },
];

export default function ServicesIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-gold-50/40 pt-36 pb-20 sm:pt-44 sm:pb-28 dark:bg-navy-950">
        <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
        <div className="pointer-events-none absolute right-[-10%] top-0 size-[520px] rounded-full bg-gold-400/15 blur-[130px]" aria-hidden />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <Sparkles className="size-3.5" />
            Our Services
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            Everything your move abroad <span className="text-gradient-gold">needs to succeed</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            Study, work, immigration or language — every service is managed end-to-end by a dedicated case officer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              Book Free Consultation
            </Button>
            <Button variant="glass" size="lg" href="/contact">
              Talk to a Counsellor
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {groups.map((group) => (
              <div
                key={group.label}
                className="rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gold-500/10 text-gold-500">
                  <group.icon className="size-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold text-navy-900 dark:text-white">{group.label}</h2>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-navy-600 transition-colors hover:bg-gold-500/10 hover:text-gold-600 dark:text-navy-200/70 dark:hover:text-gold-300"
                      >
                        {item.title}
                        <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}