"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileText, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const costData: Record<string, { tuition: [number, number]; living: [number, number]; blocked: number }> = {
  Germany: { tuition: [250, 400], living: [850, 1200], blocked: 12000 },
  Canada: { tuition: [18000, 30000], living: [1000, 1500], blocked: 18000 },
  Australia: { tuition: [20000, 40000], living: [1300, 1800], blocked: 0 },
  UK: { tuition: [15000, 35000], living: [1000, 1500], blocked: 0 },
  USA: { tuition: [20000, 45000], living: [1200, 2000], blocked: 0 },
  Europe: { tuition: [1000, 8000], living: [900, 1400], blocked: 0 },
};

export default function StudyCostCalculatorTool() {
  const [country, setCountry] = React.useState("Germany");
  const [duration, setDuration] = React.useState("4");
  const [result, setResult] = React.useState<{ total: number; perYear: number; blocked: number } | null>(null);

  const calculate = () => {
    const [tMin, tMax] = costData[country].tuition;
    const [lMin, lMax] = costData[country].living;
    const years = Number(duration);
    const tuition = (tMin + tMax) / 2;
    const living = ((lMin + lMax) / 2) * 12;
    const perYear = (tuition + living);
    const total = perYear * years;
    setResult({ total, perYear, blocked: costData[country].blocked });
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
          Study <span className="text-gradient-gold">Cost Calculator</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 dark:text-navy-100/75">
          Tuition, living costs and the blocked account requirement — a realistic yearly and total budget for your destination.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">Destination</span>
            <select
              value={country}
              onChange={(e) => { setCountry(e.target.value); setResult(null); }}
              className="mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {Object.keys(costData).map((c) => <option key={c} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={c}>{c}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">Duration (years)</span>
            <select
              value={duration}
              onChange={(e) => { setDuration(e.target.value); setResult(null); }}
              className="mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {["2", "3", "4", "5"].map((y) => <option key={y} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={y}>{y} years</option>)}
            </select>
          </label>
          <div className="mt-8 sm:mt-6">
            <Button variant="gold" onClick={calculate} className="w-full">Calculate Budget</Button>
          </div>
        </div>

        {result && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-3xl border border-gold-500/30 bg-gold-50/30 p-8 backdrop-blur-md dark:border-gold-400/30 dark:bg-white/5">
            <p className="flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-white">
              <FileText className="size-6 text-gold-500 dark:text-gold-400" />
              €{result.perYear.toLocaleString("de-DE", { maximumFractionDigits: 0 })} / year — €{result.total.toLocaleString("de-DE", { maximumFractionDigits: 0 })} total
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-100/75">
              As a rough guide from typical figures. {result.blocked > 0 ? `Your visa will need a blocked account of roughly €${result.blocked.toLocaleString("de-DE")}.` : "No blocked account is required for this route, but funds must still be shown."}
            </p>
            <div className="mt-6">
              <Button variant="glass" href="/services/study-abroad" withArrow>Explore Study Options</Button>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}