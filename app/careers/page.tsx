"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Languages,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

type Role = {
  title: string;
  deTitle: string;
  dept: string;
  deDept: string;
  location: string;
  deLocation: string;
  type: string;
  deType: string;
  blurb: string;
  deBlurb: string;
};

const roles: Role[] = [
  {
    title: "IELTS Trainer",
    deTitle: "IELTS-Trainer (m/w/d)",
    dept: "Language",
    deDept: "Sprache",
    location: "Islamabad",
    deLocation: "Islamabad",
    type: "Full-time",
    deType: "Vollzeit",
    blurb: "Deliver band-7-focused training and mark student writing and speaking progress weekly.",
    deBlurb: "Vermitteln Sie band-7-orientiertes Training und bewerten Sie wöchentlich Schreib- und Sprechfortschritte.",
  },
  {
    title: "Visa Case Officer",
    deTitle: "Visum-Sachbearbeiter (m/w/d)",
    dept: "Operations",
    deDept: "Operations",
    location: "Lahore",
    deLocation: "Lahore",
    type: "Full-time",
    deType: "Vollzeit",
    blurb: "Compile complete, embassy-ready application files and manage milestones across German and Canadian routes.",
    deBlurb: "Erstellen Sie vollständige, botschaftsfertige Antragsakten und steuern Sie Meilensteine für deutsche und kanadische Routen.",
  },
  {
    title: "Study Abroad Counsellor",
    deTitle: "Studienberater (m/w/d)",
    dept: "Counselling",
    deDept: "Beratung",
    location: "Islamabad",
    deLocation: "Islamabad",
    type: "Full-time",
    deType: "Vollzeit",
    blurb: "Guide students from profile assessment to university admission across Germany, Canada, Australia and the UK.",
    deBlurb: "Begleiten Sie Studierende von der Profilbewertung bis zur Hochschulzulassung in Deutschland, Kanada, Australien und dem UK.",
  },
  {
    title: "German Language Trainer",
    deTitle: "Deutsch-Trainer (m/w/d)",
    dept: "Language",
    deDept: "Sprache",
    location: "Karachi",
    deLocation: "Karatschi",
    type: "Full-time",
    deType: "Vollzeit",
    blurb: "Teach Goethe and telc track courses from A1 to B2 with a strong focus on workplace fluency.",
    deBlurb: "Unterrichten Sie Goethe- und telc-Kurse von A1 bis B2 mit starkem Fokus auf beruflicher Flüssigkeit.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Honesty first",
    deTitle: "Ehrlichkeit zuerst",
    text: "If a route is unlikely to work, we say so before you spend a rupee.",
    deText: "Wenn ein Weg unwahrscheinlich ist, sagen wir es, bevor Sie eine Rupie ausgeben.",
  },
  {
    icon: Briefcase,
    title: "Craft over volume",
    deTitle: "Qualität statt Masse",
    text: "Every file is prepared as if it were our own application — complete, accurate, embassy-ready.",
    deText: "Jede Akte wird so vorbereitet, als wäre es unser eigener Antrag — vollständig, korrekt, botschaftsfertig.",
  },
  {
    icon: Languages,
    title: "Language is the unlock",
    deTitle: "Sprache ist der Schlüssel",
    text: "Real outcomes depend on real German and English skills. We train in-house, not outsourced.",
    deText: "Echte Ergebnisse hängen von echten Deutsch- und Englischkenntnissen ab. Wir trainieren intern, nicht ausgelagert.",
  },
  {
    icon: Users,
    title: "One team, one file",
    deTitle: "Ein Team, eine Akte",
    text: "A named case manager owns your file end to end — counsellor, trainer and officer stay in sync.",
    deText: "Ein benannter Case Manager trägt Ihre Akte von Anfang bis Ende — Berater, Trainer und Sachbearbeiter bleiben synchron.",
  },
  {
    icon: GraduationCap,
    title: "We keep learning",
    deTitle: "Wir lernen weiter",
    text: "Visa rules change monthly. Every team member trains weekly on the latest policy updates.",
    deText: "Visaregeln ändern sich monatlich. Jedes Teammitglied wird wöchentlich zu aktuellen Regeländerungen geschult.",
  },
  {
    icon: Handshake,
    title: "Outcomes we can measure",
    deTitle: "Messbare Ergebnisse",
    text: "Visa approvals, admit letters and salary offers are the only KPI that matters.",
    deText: "Visumgenehmigungen, Zulassungen und Gehaltsangebote sind die einzige KPI, die zählt.",
  },
];

export default function CareersPage() {
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
            <span className="text-gold-700 dark:text-gold-300">{t("Careers")}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
              <Briefcase className="size-3.5" />
              {t("Join the team")}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
              {t("Do work that")} <span className="text-gradient-gold">{t("changes borders")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
              {t("We are counsellors, trainers and case officers who help thousands of Pakistanis reach universities and jobs abroad. If you believe in honest advice and meticulous files, this is your team.")}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-navy-950">
        <Container>
          <SectionHeading
            eyebrow={t("Open positions")}
            title={<>{t("Roles we are")} <span className="text-gradient-gold">{t("hiring for")}</span></>}
            description={t("Locations: our Islamabad and Lahore offices, with expanded Karachi training rooms opening Q4 2026.")}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {roles.map((role, i) => (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                className="group flex flex-col rounded-3xl border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white">
                      {de ? role.deTitle : role.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-gold-700 dark:text-gold-300">
                      {de ? role.deDept : role.dept}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gold-600/10 px-3 py-1.5 text-xs font-semibold text-gold-700 dark:text-gold-300">
                    <Sparkles className="size-3" />
                    {de ? role.deType : role.type}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {de ? role.deBlurb : role.blurb}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-navy-900/10 pt-5 dark:border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-sm text-navy-500 dark:text-navy-200/60">
                    <MapPin className="size-4 text-gold-600 dark:text-gold-400" />
                    {de ? role.deLocation : role.location}
                  </span>
                  <Button variant="outline" size="sm" href="mailto:shozani.group@gmail.com">
                    {t("Apply now")}
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-16 sm:py-20 dark:bg-navy-900/30">
        <Container>
          <SectionHeading
            eyebrow={t("Our culture")}
            title={<>{t("What working at")} <span className="text-gradient-gold">{t("Shozani feels like")}</span></>}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-3xl border border-navy-900/10 bg-white p-7 dark:border-white/10 dark:bg-navy-900/40"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-navy-900 text-gold-300 dark:bg-white/10">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {de ? v.deTitle : v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {de ? v.deText : v.text}
                </p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl font-semibold text-white text-balance sm:text-3xl">
              {t("Do not see your role?")}{" "}
              <span className="text-gradient-gold">{t("Write to us anyway")}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/70">
              {t("Great people rarely fit a job description perfectly. Send your CV and one story about work you are proud of.")}
            </p>
            <div className="mt-6">
              <Button variant="gold" size="lg" href="mailto:shozani.group@gmail.com" withArrow>
                shozani.group@gmail.com
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}