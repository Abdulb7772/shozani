"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

const destinations = [
  "Germany",
  "Canada",
  "Australia",
  "UK",
  "USA",
  "Malaysia",
  "Turkey",
  "Cyprus",
  "Tajikistan",
  "Saudi Arabia",
  "UAE",
  "Europe",
  "Not sure yet",
];

const visaTypes = [
  "Study Visa",
  "Work Visa",
  "PR / Immigration",
  "Family Visa",
  "Business Visa",
  "Language Course",
  "Opportunity Card",
];

const steps = [
  {
    icon: UserCheck,
    key: "Step 1",
    title: "Profile review call",
    text: "A 20-minute call where we check your documents, eligibility and the realistic route for your goal.",
    deTitle: "Profil-Check-Anruf",
    deText: "Ein 20-minütiger Anruf, bei dem wir Unterlagen, Eignung und den realistischen Weg für Ihr Ziel prüfen.",
  },
  {
    icon: Clock,
    key: "Step 2",
    title: "Plan & quote",
    text: "Within two working days you receive a route plan, timeline and a fixed service quotation.",
    deTitle: "Plan & Angebot",
    deText: "Innerhalb von zwei Werktagen erhalten Sie einen Routenplan, Zeitplan und ein festes Angebot.",
  },
  {
    icon: MessageCircle,
    key: "Step 3",
    title: "Kick-off",
    text: "Once you confirm, your case manager opens the file and the work begins — language, recognition or applications first.",
    deTitle: "Start",
    deText: "Nach Ihrer Bestätigung öffnet Ihr Case Manager die Akte und die Arbeit beginnt — Sprache, Anerkennung oder Anträge zuerst.",
  },
];

const initialFields = {
  name: "",
  email: "",
  phone: "",
  destination: destinations[0],
  visaType: visaTypes[0],
  message: "",
};

export default function ApplyPage() {
  const { t, lang } = useLanguage();
  const de = lang === "de";
  const [fields, setFields] = React.useState(initialFields);
  const [submitted, setSubmitted] = React.useState(false);

  const set = (key: keyof typeof initialFields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const inputClass =
    "mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-navy-200/40";

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
            <span className="text-gold-700 dark:text-gold-300">{t("Apply")}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
              <Sparkles className="size-3.5" />
              {t("Free & no obligation")}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
              {t("Start your")} <span className="text-gradient-gold">{t("journey")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
              {t("Tell us about your goal — study, work, PR or family. A senior counsellor reviews your profile and calls you back within one working day.")}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 dark:bg-navy-950">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[2rem] border border-gold-400/40 bg-navy-900 p-10 text-center sm:p-14"
                >
                  <CheckCircle2 className="mx-auto size-14 text-gold-400" />
                  <h2 className="mt-5 text-2xl font-semibold text-white text-balance sm:text-3xl">
                    {t("Application received!")}
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-100/70">
                    {de
                      ? "Vielen Dank! Ihr Berater ruft Sie innerhalb eines Werktags an. Sie können die Wartezeit nutzen, um Ihre Dokumente zusammenzulegen: Reisepass, Zeugnisse und Sprachzertifikate."
                      : "Thank you! Your counsellor will call you within one working day. Meanwhile, you can start gathering your documents: passport, transcripts and language certificates."}
                  </p>
                  <div className="mt-6">
                    <Button variant="gold" href="/" withArrow>
                      {t("Back to Home")}
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="rounded-[2rem] border border-navy-900/10 bg-white p-8 shadow-luxe sm:p-10 dark:border-white/10 dark:bg-navy-900/40"
                >
                  <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                    {t("Application form")}
                  </h2>
                  <p className="mt-1 text-sm text-navy-500 dark:text-navy-200/60">
                    {t("Takes about two minutes — no payment needed at this stage.")}
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Full name")}</span>
                      <input required value={fields.name} onChange={set("name")} placeholder={t("e.g. Ahmed Khan")} className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Email address")}</span>
                      <input required type="email" value={fields.email} onChange={set("email")} placeholder="ahmed@example.com" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Phone / WhatsApp")}</span>
                      <input required type="tel" value={fields.phone} onChange={set("phone")} placeholder="+92 3XX XXXXXXX" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Destination")}</span>
                      <select value={fields.destination} onChange={set("destination")} className={inputClass}>
                        {destinations.map((d) => (
                          <option key={d} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={d}>{t(d)}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Visa type")}</span>
                      <select value={fields.visaType} onChange={set("visaType")} className={inputClass}>
                        {visaTypes.map((v) => (
                          <option key={v} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={v}>{t(v)}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Your background")}</span>
                      <textarea rows={4} value={fields.message} onChange={set("message")} placeholder={t("Education, work experience, language level, target country — anything that helps us prepare.")} className={inputClass} />
                    </label>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button type="submit" variant="gold" size="lg" withArrow>
                      {t("Submit Application")}
                      <Send className="size-4" aria-hidden />
                    </Button>
                    <p className="text-xs text-navy-500 dark:text-navy-200/50">
                      {t("Your data is handled per our privacy policy and never shared.")}
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6 lg:col-span-2"
            >
              <div className="rounded-3xl border border-gold-400/30 bg-navy-900 p-8">
                <h3 className="text-lg font-semibold text-white">{t("What happens next")}</h3>
                <ol className="mt-6 space-y-6">
                  {steps.map((step, i) => (
                    <li key={step.key} className="relative flex gap-4">
                      {i < steps.length - 1 && (
                        <span className="absolute left-5 top-11 h-[calc(100%-2.5rem)] w-px bg-white/15" aria-hidden />
                      )}
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-600 text-white">
                        <step.icon className="size-4.5" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold-300">{t(step.key)}</p>
                        <p className="mt-1 font-display text-sm font-semibold text-white">{de ? step.deTitle : step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-navy-100/70">{de ? step.deText : step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl border border-navy-900/10 bg-white p-8 dark:border-white/10 dark:bg-navy-900/40">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{t("Prefer to talk first?")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
                  {t("Call or write to our counselling desk — Urdu, English and German speakers available.")}
                </p>
                <div className="mt-5 space-y-3 text-sm">
                  <a href="tel:+923001234567" className="flex items-center gap-3 text-navy-700 transition-colors hover:text-gold-600 dark:text-navy-100 dark:hover:text-gold-300">
                    <Phone className="size-4 text-gold-600 dark:text-gold-400" />
                    +92 300 1234567
                  </a>
                  <a href="mailto:shozani.group@gmail.com" className="flex items-center gap-3 text-navy-700 transition-colors hover:text-gold-600 dark:text-navy-100 dark:hover:text-gold-300">
                    <MessageCircle className="size-4 text-gold-600 dark:text-gold-400" />
                    shozani.group@gmail.com
                  </a>
                </div>
                <p className="mt-5 text-xs text-navy-500 dark:text-navy-200/50">
                  {t("Office hours: Monday to Saturday, 10:00 - 19:00 PKT.")}
                </p>
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </>
  );
}