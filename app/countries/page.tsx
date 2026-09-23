import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { countries, countryList } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Countries",
  description:
    "Explore all countries served by Shozani Global Consultancy — Germany, Australia, UK, USA, Canada, Europe, Saudi Arabia, UAE, Pakistan, Malaysia, Turkey, Tajikistan and Cyprus.",
  alternates: { canonical: "/countries" },
};

export default function CountriesIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-36 pb-20 sm:pt-44 sm:pb-28 dark:bg-navy-950">
        <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            Countries
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
                className="group relative block h-48 overflow-hidden rounded-3xl border border-navy-900/10 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe sm:h-56 dark:border-white/10"
              >
                <img
                  src={countries[country.id].image}
                  alt={country.name}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" aria-hidden />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span
                    className="rounded-xl border border-white/15 bg-navy-950/30 px-3 py-1.5 font-display text-xs font-bold tracking-[0.18em] text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-gold-400/50 group-hover:text-gold-300"
                    aria-hidden
                  >
                    {country.name.slice(0, 3).toUpperCase()}
                  </span>
                  <ArrowUpRight className="size-5 text-white/90 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="font-display text-xl font-bold text-white drop-shadow-sm">{country.name}</h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/85">
                    Requirements, visas, timelines and FAQs.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}