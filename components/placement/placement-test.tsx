"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, Target, RotateCcw, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PlacementTestConfig } from "@/lib/placement-tests";

function formatResult(kind: PlacementTestConfig["kind"], avg: number): string {
  switch (kind) {
    case "cefr":
      if (avg >= 3.6) return "B2";
      if (avg >= 2.7) return "B1";
      if (avg >= 1.8) return "A2";
      if (avg >= 1) return "A1";
      return "Start at A1";
    case "band":
      return `Band ${(Math.round(Math.max(4, Math.min(7.5, avg)) * 2) / 2).toFixed(1)}`;
    case "pte":
      return `${Math.round(Math.max(45, Math.min(85, avg)) / 5) * 5} / 90`;
  }
}

function advise(kind: PlacementTestConfig["kind"], avg: number): string {
  switch (kind) {
    case "cefr":
      if (avg >= 3.6)
        return "B2 — work-ready. Go straight for Goethe/Telc B2 certification for employment or nursing routes.";
      if (avg >= 2.7)
        return "B1 — a strong foundation. Book a visa-relevant B1 certification and keep the momentum.";
      if (avg >= 1.8)
        return "A2 — you can handle daily basics. An A1→B1 course will carry you forward fast.";
      if (avg >= 1) return "A1 — your beginner basics are confirmed. Structured A1 training is your next step.";
      return "Zero knowledge is a clean slate — the best time to start at A1.";
    case "band":
      if (avg >= 7)
        return "Strong — you are at target. A short mock-focused course will keep your score there.";
      if (avg >= 6)
        return "Solid — targeted weekly mocks with examiner feedback can lift you 0.5–1.0 band.";
      if (avg >= 5) return "A guided IELTS course with real examiner feedback is the fastest fix.";
      return "Start with a structured course to build vocabulary and grammar accuracy first, then add exam skills.";
    case "pte":
      if (avg >= 70) return "Strong — you are close to target. A few timed mock tests will lock in your score.";
      if (avg >= 60) return "Solid — structured templates and timed practice will push you higher fast.";
      if (avg >= 50) return "Join a guided PTE course — template drills lift PTE scores quickly.";
      return "Start with core grammar and vocabulary, then shift to PTE templates.";
  }
}

export function PlacementTest({ config }: { config: PlacementTestConfig }) {
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(() =>
    config.questions.map(() => null)
  );
  const [done, setDone] = React.useState(false);

  const total = config.questions.length;
  const answeredCount = answers.filter((a) => a !== null).length;
  const current = answers[index];
  const isLast = index === total - 1;

  const select = (option: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = option;
      return next;
    });
  };

  const next = () => {
    if (current === null) return;
    if (isLast) {
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIndex((i) => i + 1);
    }
  };

  const back = () => {
    if (index > 0) setIndex((i) => i - 1);
  };

  const retake = () => {
    setAnswers(config.questions.map(() => null));
    setIndex(0);
    setDone(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalWeight = config.questions.reduce((s, q) => s + q.weight, 0);
  const correctWeight = config.questions.reduce(
    (s, q, i) => s + (answers[i] === q.answer ? q.weight : 0),
    0
  );
  const avg = totalWeight > 0 ? correctWeight / totalWeight : 0;

  return (
    <section className="relative overflow-hidden bg-navy-50/60 py-20 sm:py-28 dark:bg-navy-900/30">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30 dark:opacity-10" aria-hidden />
      <Container className="relative">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <Sparkles className="size-3.5" />
            {config.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-balance text-navy-900 sm:text-4xl lg:text-5xl dark:text-white">
            {config.title} <span className="text-gradient-gold">{config.highlight}</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-200/70">
            {config.intro}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2rem] border border-navy-900/10 bg-white p-7 shadow-luxe sm:p-10 dark:border-white/10 dark:bg-navy-900/40"
              >
                <div className="flex items-center justify-between gap-4 text-sm text-navy-500 dark:text-navy-200/60">
                  <span className="font-medium">
                    Question {index + 1} of {total}
                  </span>
                  <span>{answeredCount} answered</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy-900/10 dark:bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-600"
                    animate={{ width: `${((index + (current !== null ? 1 : 0)) / total) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <h3 className="mt-8 font-display text-xl font-semibold leading-snug text-navy-900 sm:text-2xl dark:text-white">
                  {config.questions[index].q}
                </h3>

                <div className="mt-6 space-y-3">
                  {config.questions[index].options.map((option, i) => {
                    const selected = current === i;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => select(i)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left text-sm font-medium transition-all duration-300",
                          selected
                            ? "border-gold-500/70 bg-gold-500/10 text-navy-900 ring-1 ring-gold-500/40 dark:border-gold-400/60 dark:bg-gold-400/10 dark:text-white"
                            : "border-navy-900/10 bg-white text-navy-700 hover:-translate-y-0.5 hover:border-gold-400/60 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-navy-100/85 dark:hover:border-gold-400/40"
                        )}
                      >
                        <span
                          className={cn(
                            "grid size-6 shrink-0 place-items-center rounded-full border font-display text-xs font-bold transition-colors",
                            selected
                              ? "border-gold-600 bg-gold-600 text-white"
                              : "border-navy-900/20 text-navy-500 dark:border-white/25 dark:text-navy-200/60"
                          )}
                        >
                          {selected ? <Check className="size-3.5" /> : String.fromCharCode(65 + i)}
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    onClick={back}
                    disabled={index === 0}
                    className={cn(index === 0 && "opacity-0")}
                  >
                    <ChevronLeft className="size-4" />
                    Back
                  </Button>
                  <Button variant="gold" onClick={next} disabled={current === null} withArrow>
                    {current === null ? "Choose an answer" : isLast ? "See My Result" : "Next"}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-[2rem] border border-gold-400/30 bg-navy-900 p-10 text-center sm:p-12 dark:bg-navy-900"
              >
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-gold-600 text-white shadow-gold">
                  <Target className="size-8" />
                </span>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-gold-300">
                  {config.resultLabel}
                </p>
                <p className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">
                  <span className="text-gradient-gold">{formatResult(config.kind, avg)}</span>
                </p>
                <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-navy-100/80 sm:text-base">
                  {advise(config.kind, avg)}
                </p>
                <p className="mt-4 text-xs text-navy-200/50">
                  {correctWeight >= 0 && (
                    <>Base: {answers.filter((a, i) => a === config.questions[i].answer).length} of {total} questions correct · from {answeredCount} answered.</>
                  )}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button variant="gold" href="/apply" withArrow>
                    Book Free Consultation
                  </Button>
                  <Button variant="glass" onClick={retake}>
                    <RotateCcw className="size-4" />
                    Retake the Test
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-navy-500 dark:text-navy-200/50">
            <ArrowRight className="size-3.5 rotate-90" />
            Your answers stay on this device — nothing is saved or shared.
          </p>
        </div>
      </Container>
    </section>
  );
}