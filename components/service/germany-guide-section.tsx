"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { germanySubpages } from "@/lib/germany-data";
import { useLanguage } from "@/lib/i18n/language-provider";

export function GermanyGuideSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 navy-radial" aria-hidden />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow={t("The Germany Hub")}
          title={
            <>
              {t("Your complete")} <span className="text-gradient-gold">{t("Germany section")}</span>
            </>
          }
          description={t("Ten focused guides — every visa, every route, every number. This is the biggest, deepest section on the site, built for anyone serious about Germany.")}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {germanySubpages.map((sub, i) => {
            const Icon = sub.icon;
            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              >
                <Link
                  href={sub.href}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:bg-white/10 hover:shadow-luxe"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gold-500/15 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500/25">
                      <Icon className="size-5" />
                    </span>
                    <ArrowUpRight className="size-5 text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold-300" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">{t(sub.name)}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-gold-400/80">
                    {t(sub.short)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100/70">{t(sub.description)}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
