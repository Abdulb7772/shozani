"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Landmark,
  Languages,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Licensed & regulated",
    deTitle: "Lizenziert & reguliert",
    text: "Registered with the relevant Pakistani authorities, with counsellors bound by a professional code of conduct. No partner is paid based on your country choice — ever.",
    deText: "Bei den zuständigen pakistanischen Behörden registriert; Berater an einen Berufskodex gebunden. Kein Partner wird nach Ihrem Zielland vergütet — niemals.",
  },
  {
    icon: HeartHandshake,
    title: "Honesty before commissions",
    deTitle: "Ehrlichkeit vor Provisionen",
    text: "If we believe a route is unlikely for your profile, we tell you on the first call. Our revenue does not depend on selling you a dream.",
    deText: "Wenn ein Weg für Ihr Profil unwahrscheinlich ist, sagen wir es im ersten Anruf. Unser Umsatz hängt nicht davon ab, Ihnen einen Traum zu verkaufen.",
  },
  {
    icon: Languages,
    title: "In-house language school",
    deTitle: "Eigene Sprachschule",
    text: "German from A1 to B2, plus IELTS and PTE training, delivered by our own trainers with weekly progress tracking — not outsourced to third parties.",
    deText: "Deutsch von A1 bis B2 sowie IELTS- und PTE-Training von eigenen Trainern mit wöchentlicher Fortschrittskontrolle — nicht an Dritte ausgelagert.",
  },
  {
    icon: Landmark,
    title: "End-to-end case management",
    deTitle: "Ganzheitliches Case Management",
    text: "One named case manager owns your file from the first call to landing: documents, recognition, embassy appointment, travel and arrival support.",
    deText: "Ein benannter Case Manager trägt Ihre Akte vom ersten Anruf bis zur Landung: Unterlagen, Anerkennung, Botschaftstermin, Reise und Ankunft.",
  },
  {
    icon: LineChart,
    title: "Outcomes we publish",
    deTitle: "Ergebnisse, die wir veröffentlichen",
    text: "We publish visa approval statistics and real success stories. Success rates are reported honestly — with the rejections included in the math.",
    deText: "Wir veröffentlichen Visa-Statistiken und echte Erfolgsgeschichten. Erfolgsquoten werden ehrlich ausgewiesen — einschließlich der Ablehnungen.",
  },
  {
    icon: Globe2,
    title: "12+ destination programmes",
    deTitle: "12+ Zielländer-Programme",
    text: "Germany, Canada, Australia, UK, USA, Malaysia, Turkey, Cyprus, Tajikistan, Saudi Arabia and the UAE — each with a dedicated route design.",
    deText: "Deutschland, Kanada, Australien, UK, USA, Malaysia, Türkei, Zypern, Tadschikistan, Saudi-Arabien und die VAE — jeweils mit eigenem Routendesign.",
  },
];

const numbers = [
  { value: "15,000+", label: "Counselling sessions", deLabel: "Beratungsgespräche" },
  { value: "4,800+", label: "Visa approvals", deLabel: "Visumgenehmigungen" },
  { value: "92%", label: "First-attempt success", deLabel: "Erfolg beim ersten Versuch" },
  { value: "12+", label: "Countries served", deLabel: "Betreute Länder" },
];

const comparison = [
  { us: "Fixed, written quotation before any work", deUs: "Festes, schriftliches Angebot vor Arbeitsbeginn", typical: "Vague 'packages' that grow later", deTypical: "Vage 'Pakete', die später teurer werden" },
  { us: "Named case manager, weekly updates", deUs: "Benannter Case Manager, wöchentliche Updates", typical: "Hotline-style support, unclear ownership", deTypical: "Hotline-Support ohne klare Zuständigkeit" },
  { us: "In-house A1-B2 German + IELTS training", deUs: "Internes Deutsch A1-B2 + IELTS-Training", typical: "Outsourced courses, no progress tracking", deTypical: "Externe Kurse ohne Fortschrittskontrolle" },
  { us: "Honest eligibility assessment on call one", deUs: "Ehrliche Eignungsprüfung im ersten Anruf", typical: "Optimistic promises until payment", deTypical: "Optimistische Versprechen bis zur Zahlung" },
  { us: "Success rates published with rejections", deUs: "Veröffentlichte Erfolgsquoten inkl. Ablehnungen", typical: "No published data at all", deTypical: "Gar keine veröffentlichten Daten" },
];

export default function WhyShozaniPage() {
  const { t, lang } = useLanguage();
  const de = lang === "de";

  return (
    <>
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
            <span className="text-gold-700 dark:text-gold-300">{t("Why Shozani")}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
              <Award className="size-3.5" />
              {t("Our difference")}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
              {t("Counselling that")} <span className="text-gradient-gold">{t("answers to outcomes")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
              {t("Agencies sell dreams; we build files. Shozani exists because too many families paid for promises and received paperwork. We publish what we achieve, teach the language ourselves and assign one case manager to every file.")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" size="lg" href="/apply" withArrow>
                {t("Book Free Counselling")}
              </Button>
              <Button variant="outline" size="lg" href="/success-stories">
                {t("Read success stories")}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20 dark:bg-navy-900/30">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <motion.div
                key={n.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-navy-900/10 bg-white p-8 text-center dark:border-white/10 dark:bg-navy-900/40"
              >
                <p className="font-display text-3xl font-bold text-gold-700 dark:text-gold-300">{n.value}</p>
                <p className="mt-2 text-sm text-navy-500 dark:text-navy-200/60">{de ? n.deLabel : n.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
        <Container>
          <SectionHeading
            eyebrow={t("What we stand on")}
            title={<>{t("Six pillars of")} <span className="text-gradient-gold">{t("the Shozani way")}</span></>}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-600 group-hover:text-white dark:bg-white/10">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {de ? p.deTitle : p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {de ? p.deText : p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-navy-950">
        <Container>
          <SectionHeading
            eyebrow={t("Straight comparison")}
            title={<>{t("Shozani vs")} <span className="text-gradient-gold">{t("typical agencies")}</span></>}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-navy-900/10 dark:border-white/10"
          >
            <div className="grid grid-cols-2 bg-navy-900 text-white">
              <div className="flex items-center gap-2 px-6 py-4 text-sm font-semibold">
                <BadgeCheck className="size-4 text-gold-400" />
                {t("Shozani")}
              </div>
              <div className="px-6 py-4 text-sm font-semibold">{t("Typical agencies")}</div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid grid-cols-2 text-sm ${i % 2 ? "bg-navy-50/50 dark:bg-navy-900/20" : "bg-white dark:bg-navy-900/40"}`}>
                <div className="flex items-start gap-2.5 px-6 py-5 text-navy-700 dark:text-navy-100/85">
                  <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold-600 dark:text-gold-400" />
                  {de ? row.deUs : row.us}
                </div>
                <div className="px-6 py-5 text-navy-500 dark:text-navy-200/60">
                  {de ? row.deTypical : row.typical}
                </div>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-navy-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-gold-400/30 bg-navy-900 p-10 text-center sm:p-14"
          >
            <Sparkles className="mx-auto size-8 text-gold-400" />
            <h2 className="mt-4 text-2xl font-semibold text-white text-balance sm:text-3xl">
              {t("The first call")} <span className="text-gradient-gold">{t("is free — and honest")}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/70">
              {t("Bring your education and experience, and we will tell you exactly what is realistic: route, timeline, costs and documents — before you pay anything.")}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="gold" size="lg" href="/apply" withArrow>
                {t("Book Free Counselling")}
              </Button>
              <Button variant="glass" size="lg" href="/contact">
                {t("Contact Us")}
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}