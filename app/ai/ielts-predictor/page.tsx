"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BarChart3, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const sectionSignals = {
  Reading: ["8+ correct", "28 correct", "22 correct", "16 correct", "Under 12 correct"],
  Listening: ["Full alert", "Perfect focus", "Good focus", "Distracted", "Lost often"],
  Writing: ["Structured essays", "Strong grammar", "Basic grammar", "Weak structure", "Task 2 struggle"],
  Speaking: ["Fluent & confident", "Good fluency", "Some hesitation", "Heavy accent", "Very hesitant"],
};

const signalScore = ["9.0", "7.5", "6.0", "5.0", "4.0"];

export default function IeltsPredictorTool() {
  const [answers, setAnswers] = React.useState<Record<string, number>>({});
  const [result, setResult] = React.useState<number | null>(null);

  const set = (section: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [section]: value }));
    setResult(null);
  };

  const calculate = () => {
    const values = Object.values(answers).map((idx) => Number(signalScore[idx]) || 5);
    if (values.length < 3) return;
    const overall = values.reduce((a, b) => a + b, 0) / values.length;
    setResult(overall);
  };

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute right-[-10%] top-0 size-[420px] rounded-full bg-gold-400/10 blur-[120px] dark:bg-gold-400/8" aria-hidden />
      <Container className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
          <Sparkles className="size-3.5" />
          AI Tool
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl dark:text-white">
          IELTS <span className="text-gradient-gold">Band Predictor</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 dark:text-navy-100/75">
          Pick the sentence closest to you in each skill for a quick band direction. See exactly where you are and what to fix.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {Object.entries(sectionSignals).map(([section, options]) => (
            <div key={section} className="rounded-3xl border border-navy-900/10 bg-white p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <h2 className="font-display text-lg font-semibold text-navy-900 dark:text-white">{section}</h2>
              <div className="mt-4 space-y-2">
                {options.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => set(section, i)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-left text-sm transition-colors ${
                      answers[section] === i
                        ? "border-gold-500/60 bg-gold-500/10 text-gold-700 dark:border-gold-400/60 dark:bg-gold-400/10 dark:text-gold-300"
                        : "border-navy-900/10 bg-white text-navy-600 hover:border-gold-400/50 dark:border-white/10 dark:bg-white/5 dark:text-navy-100/80 dark:hover:border-gold-400/40"
                    }`}
                  >
                    Option {i + 1}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button variant="gold" onClick={calculate} disabled={Object.keys(answers).length < 3}>
            Predict My Band
          </Button>
        </div>

        {result !== null && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-3xl border border-gold-500/30 bg-gold-50/30 p-8 backdrop-blur-md dark:border-gold-400/30 dark:bg-white/5">
            <p className="flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-white">
              <BarChart3 className="size-6 text-gold-500 dark:text-gold-400" />
              Estimated overall band: {result.toFixed(1)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-100/75">
              {result >= 7 ? "Strong — aim for your target with light polish." : result >= 6 ? "Solid — targeted mock practice will lift 0.5–1.0 band." : "A structured course with mocks is the fastest fix."}
            </p>
            <div className="mt-6">
              <Button variant="glass" href="/services/language/ielts" withArrow>Join IELTS Coaching</Button>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}