"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  Quote,
  GraduationCap,
  Briefcase,
  Globe,
  PlayCircle,
  ArrowRight,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/i18n/language-provider";

type Story = {
  name: string;
  role: string;
  type: "study" | "work" | "pr";
  country: string;
  code: string;
  quote: string;
  detail: string;
  rating: number;
};

const stories: Story[] = [
  {
    name: "Ayesha Khan",
    role: "MSc in Computer Science",
    type: "study",
    country: "Germany",
    code: "DEU",
    quote: "From a Bachelor's in Lahore to a TU Munich enrollment letter in 7 months.",
    detail:
      "Ayesha had no German language background and a tight budget. We mapped tuition-free public universities, got her a Goethe B2, and handled her blocked account and visa file end-to-end.",
    rating: 5,
  },
  {
    name: "Muhammad Bilal",
    role: "IT Professional",
    type: "work",
    country: "Germany",
    code: "DEU",
    quote:
      "An IT job offer in Berlin two months after landing — my family is now here too.",
    detail:
      "As a full-stack developer with 6 years of experience, Bilal wanted a direct route. We prepared the EU Blue Card package, recognised his degree, and connected him with an employer before departure.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Registered Nurse",
    type: "work",
    country: "Germany",
    code: "DEU",
    quote:
      "Recognition of my nursing qualification plus a hospital contract — all in one process.",
    detail:
      "With 8 years of nursing experience, Fatima needed German recognition and language validation. Our healthcare desk handled the credential equivalence, language prep and employer matching.",
    rating: 5,
  },
  {
    name: "Usman Aziz",
    role: "Engineering Manager",
    type: "pr",
    country: "Australia",
    code: "AUS",
    quote:
      "Permanent residence for my whole family, with my partner's points optimised.",
    detail:
      "Usman targeted skilled migration without a birth agent. The Swedish processing and occupation assessment were done correctly the first time — PR in a single application cycle.",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    role: "MBA Student",
    type: "study",
    country: "United Kingdom",
    code: "GBR",
    quote:
      "Two scholarships plus my student visa in 6 weeks. I couldn't believe the speed.",
    detail:
      "Sara's MBA in the UK was backed by scholarship applications we prepared alongside her admissions. We also secured her parent accommodation and pre-departure briefing.",
    rating: 5,
  },
  {
    name: "Hamza Yousaf",
    role: "Programme Manager",
    type: "work",
    country: "Canada",
    code: "CAN",
    quote:
      "The Express Entry draw came through in my favour — we stayed ready the whole time.",
    detail:
      "Hamza's profile needed careful documentation across employment. We kept the Express Entry profile sharp, tracked draws, and the ITA turned into a smooth PR.",
    rating: 5,
  },
  {
    name: "Mahnoor Ali",
    role: "Health Science Student",
    type: "study",
    country: "Australia",
    code: "AUS",
    quote:
      "Deakin University admission and a PR-pathway course — exactly what I dreamed of.",
    detail:
      "A nursing degree with a clear PR pathway. We compared universities, handled the Genuine Student requirement and coordinated Deakin's offer before fee payment.",
    rating: 5,
  },
  {
    name: "Omar Farooq",
    role: "Business Owner",
    type: "pr",
    country: "UAE",
    code: "UAE",
    quote:
      "Company formation plus residency in 45 days. Professional from the first call.",
    detail:
      "Omar launched a trading company in the UAE while keeping his Lahore business. The formation, visa and banking were orchestrated as one package by our business desk.",
    rating: 4,
  },
];

const filters = [
  { value: "all", label: "All Stories" },
  { value: "study", label: "Study Abroad" },
  { value: "work", label: "Work Abroad" },
  { value: "pr", label: "Immigration & PR" },
] as const;

const typeMeta = {
  study: { icon: GraduationCap, label: "Study Abroad", classes: "text-navy-700 bg-navy-900/5 dark:text-navy-100 dark:bg-white/10" },
  work: { icon: Briefcase, label: "Work Abroad", classes: "text-navy-700 bg-navy-900/5 dark:text-navy-100 dark:bg-white/10" },
  pr: { icon: Globe, label: "Immigration & PR", classes: "text-gold-700 bg-gold-500/10 dark:text-gold-300 dark:bg-gold-400/10" },
} as const;

export function SuccessStoriesPage() {
  const [filter, setFilter] = React.useState<string>("all");
  const filtered = filter === "all" ? stories : stories.filter((s) => s.type === filter);

  return (
    <>
      <StoriesHero />
      <StatsBand />
      <StoriesGrid filter={filter} setFilter={setFilter} filtered={filtered} />
      <VideoSection />
      <StoriesCta />
    </>
  );
}

function StoriesHero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-20 sm:pt-44 sm:pb-24 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label={t("Breadcrumb")}
          className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("Home")}</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-700 dark:text-gold-300">{t("Success Stories")}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <Award className="size-3.5" />
            {t("Real Stories, Real Results")}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            {t("Journeys that started")} <span className="text-gradient-gold">{t("with one conversation")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            {t("Every profile here is a genuine client who chose to study, work or settle abroad with Shozani. These are the outcomes — their words, their journeys, their next chapters.")}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function StatsBand() {
  const { t } = useLanguage();
  const metrics = [
    { value: "100+", label: t("Successful Placements") },
    { value: "96%", label: t("Visa Approval Rate") },
    { value: "40+", label: t("Countries Guided") },
    { value: "4.9/5", label: t("Average Client Rating") },
  ];
  return (
    <section className="relative z-10 -mt-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card grid grid-cols-2 gap-y-8 p-8 md:grid-cols-4 md:p-10"
        >
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">{m.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function StoriesGrid({
  filter,
  setFilter,
  filtered,
}: {
  filter: string;
  setFilter: (f: string) => void;
  filtered: Story[];
}) {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("Client Outcomes")}
          title={<>{t("Success stories across")} <span className="text-gradient-gold">{t("every path")}</span></>}
          description={t("Filter by journey type to see the results most relevant to your own goals.")}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2.5"
          role="tablist"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-out-gold hover:delay-200",
                filter === f.value
                  ? "bg-gold-600 text-white shadow-gold"
                  : "border border-navy-200/70 text-navy-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-navy-200/70 dark:hover:text-gold-300"
              )}
            >
              {t(f.label)}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((story, i) => (
              <motion.article
                key={story.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group flex flex-col rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="flex items-center justify-between">
                  <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium", typeMeta[story.type].classes)}>
                    {(() => {
                      const Icon = typeMeta[story.type].icon;
                      return <Icon className="size-3.5" />;
                    })()}
                    {t(typeMeta[story.type].label)}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-navy-900/5 px-2.5 py-1 font-display text-[10px] font-bold tracking-widest text-navy-500 dark:bg-white/5 dark:text-navy-100/60">
                    {story.code}
                  </span>
                </div>

                <span className="mt-5 grid size-10 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                  <Quote className="size-5" />
                </span>

                <blockquote className="mt-4 font-display text-base font-medium leading-relaxed text-navy-900 dark:text-white">
                  &ldquo;{t(story.quote)}&rdquo;
                </blockquote>
                <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {t(story.detail)}
                </p>

                <div className="mt-6 flex items-center gap-1 border-t border-navy-900/10 pt-5 dark:border-white/10">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={cn(
                        "size-4",
                        s < story.rating ? "fill-gold-400 text-gold-400" : "text-navy-200 dark:text-white/15"
                      )}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm font-semibold text-navy-900 dark:text-white">{story.name}</p>
                    <p className="text-xs text-navy-500 dark:text-navy-200/60">{t(story.role)}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex items-center gap-1 text-xs font-semibold text-gold-600 transition-colors hover:text-gold-500 dark:text-gold-300"
                  >
                    {t("Share similar")}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

function VideoSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow={t("Video Testimonials")}
          title={<>{t("Hear it")} <span className="text-gradient-gold">{t("in their own words")}</span></>}
          description={t("Students and professionals share their journeys — from the first consultation to landing abroad.")}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-navy-900"
            >
              <button
                type="button"
                aria-label={`${t("Play testimonial")} ${v}`}
                className="absolute inset-0 grid place-items-center"
              >
                <span className="relative grid size-16 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute inset-0 rounded-full bg-gold-400/40 animate-pulse-ring" aria-hidden />
                  <PlayCircle className="size-8 text-gold-300" />
                </span>
              </button>
              <p className="absolute bottom-4 left-4 font-display text-sm font-semibold text-white">
                {t(["Ayesha — Germany Study", "Bilal — Germany IT", "Usman — Australia PR"][i])}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StoriesCta() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-gold-400/30 bg-navy-900 p-10 text-center sm:p-16"
        >
          <h2 className="text-3xl font-semibold text-white text-balance sm:text-4xl lg:text-5xl">
            {t("The next success story")} <span className="text-gradient-gold">{t("could be yours")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-100/70">
            {t("Take the first step. A free consultation is a whole lot of progress toward where you want to be.")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              {t("Start Your Free Consultation")}
            </Button>
            <Button variant="glass" size="lg" href="/why-shozani">
              {t("Why Choose Shozani")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}