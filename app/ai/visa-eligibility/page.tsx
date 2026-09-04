"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

const destinationRules = {
  Germany: { study: { maxAge: 45, language: true }, work: { workExp: true }, pr: { workExp: true } },
  Canada: { study: { age: "all" }, work: true, pr: { points: 67 } },
  Australia: { study: true, work: true, pr: { points: 65 } },
  UK: { study: true, work: { skillLevel: true }, pr: false },
  USA: { study: true, work: false, pr: false },
  Saudi: { study: false, work: { employerTrack: true }, pr: false },
  UAE: { study: true, work: true, pr: { investor: true } },
};

const ageOptions = ["Under 24", "24–35", "36–45", "46+"];
const levelOptions = ["Secondary", "Bachelor", "Master", "Professional"];
const expOptions = ["0–2 years", "3–5 years", "6+ years"];
const langOptions = ["A1 / Beginner", "B1 / Intermediate", "B2 / Upper", "C1+ / Fluent"];

export default function VisaEligibilityTool() {
  const { t } = useLanguage();
  const [country, setCountry] = React.useState("Germany");
  const [age, setAge] = React.useState("24–35");
  const [level, setLevel] = React.useState("Bachelor");
  const [exp, setExp] = React.useState("0–2 years");
  const [lang, setLang] = React.useState("B1 / Intermediate");
  const [result, setResult] = React.useState<{ score: number; verdict: string; notes: string[] } | null>(null);

  const calculate = () => {
    const ageNum = age === "Under 24" ? 0 : age === "24–35" ? 1 : age === "36–45" ? 2 : 3;
    let score = 100;
    const notes: string[] = [];
    if (ageNum >= 3) { score -= 25; notes.push(t("Some routes cap at 45 (e.g. German skilled worker).")); }
    if (level === "Secondary") { score -= 15; notes.push(t("A post-secondary degree unlocks more routes.")); }
    if (exp === "0–2 years") { score -= 10; notes.push(t("More experience strengthens skilled work / PR files.")); }
    if (lang.startsWith("A1")) { score -= 10; notes.push(t("A higher language level boosts points (German/English).")); }
    if (country === "Saudi Arabia" && !exp.startsWith("6+")) { score -= 5; }
    const missing = Math.min(score, Math.max(67 - (score / 100) * 67, 0));
    const status = score >= 85 ? t("Strong profile") : score >= 65 ? t("Good, needs polish") : t("Needs a plan");
    setResult({ score, verdict: status, notes: [`${t("Estimated eligibility score")}: ${score}/100.`, ...notes] });
  };

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <Container className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
          <Sparkles className="size-3.5" />
          {t("AI Tool")}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl dark:text-white">
          {t("Visa")} <span className="text-gradient-gold">{t("Eligibility")}</span> {t("Check")}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 dark:text-navy-100/75">
          {t("Answer 5 quick questions for a free honesty-first estimate of your options. Your counsellor refines the final route.")}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { label: "Destination", value: country, set: setCountry, options: Object.keys(destinationRules) },
            { label: "Age group", value: age, set: setAge, options: ageOptions },
            { label: "Education", value: level, set: setLevel, options: levelOptions },
            { label: "Work experience", value: exp, set: setExp, options: expOptions },
            { label: "Language", value: lang, set: setLang, options: langOptions },
          ].map((field) => (
            <label key={field.label} className="block">
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t(field.label)}</span>
              <select
                value={field.value}
                onChange={(e) => { field.set(e.target.value); setResult(null); }}
                className="mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                {field.options.map((o) => (
                  <option key={o} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={o}>{t(o)}</option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="gold" onClick={calculate}>
            {t("Check My Eligibility")}
          </Button>
          <p className="text-xs text-navy-500 dark:text-navy-200/50">{t("Estimates only — always confirm with a certified counsellor.")}</p>
        </div>

        {result && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-3xl border border-gold-700 bg-gold-600 p-8 dark:border-gold-400/30 dark:bg-white/5">
            <p className="flex items-center gap-2 font-display text-2xl font-bold text-white dark:text-white">
              <CheckCircle2 className="size-6 text-white dark:text-gold-400" />
              {result.verdict} — {result.score}%
            </p>
            <ul className="mt-4 space-y-2">
              {result.notes.map((note) => (
                <li key={note} className="text-sm leading-relaxed text-white/90 dark:text-navy-100/75">{note}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/80 dark:text-navy-200/60">
              {t("This is a directional score. Book a free consultation and we will map the precise route, points and documents.")}
            </p>
            <div className="mt-6">
              <Button variant="glass" href="/apply" withArrow>{t("Book Free Consultation")}</Button>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}