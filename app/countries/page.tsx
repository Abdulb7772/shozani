import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { countryList } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore all destinations served by Shozani Global Consultancy — Germany, Australia, UK, USA, Canada, Europe, Saudi Arabia, UAE and Pakistan.",
  alternates: { canonical: "/countries" },
};

export default function CountriesIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-gold-50/40 pt-36 pb-20 sm:pt-44 sm:pb-28 dark:bg-navy-950">
        <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
        <div className="pointer-events-none absolute right-[-10%] top-0 size-[520px] rounded-full bg-gold-400/15 blur-[130px]" aria-hidden />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            Destinations
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            One platform, <span className="text-gradient-gold">every destination</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            Requirements, visa processes, timelines, documents, universities, jobs and country-specific FAQs — a dedicated guide for every market we serve.
          </p>
        </Container>
      </section>

      <section className="bg-white pb-20 sm:pb-28 dark:bg-navy-950">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countryList.map((country) => (
              <Link
                key={country.id}
                href={country.href}
                className="group relative block overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md dark:hover:bg-white/10"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="rounded-xl border border-navy-900/10 bg-navy-900/5 px-3 py-1.5 font-display text-xs font-bold tracking-[0.18em] text-navy-500 transition-colors duration-300 group-hover:border-gold-400/50 group-hover:text-gold-600 dark:border-white/10 dark:bg-white/5 dark:text-navy-100/70 dark:group-hover:text-gold-300"
                    aria-hidden
                  >
                    {country.name.slice(0, 3).toUpperCase()}
                  </span>
                  <ArrowUpRight className="size-5 text-navy-900/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-600 dark:text-white/30 dark:group-hover:text-gold-300" />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">{country.name}</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-navy-500 dark:text-navy-100/60">
                  Requirements, visas, timelines and FAQs.
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}