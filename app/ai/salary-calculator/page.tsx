"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

type Status = "marriedChildren" | "married" | "single";

const taxBrackets: Record<string, (gross: number, s: Status) => { net: number; note: string }> = {
  Germany: (gross, s) => {
    const annual = gross;
    const bracket3 = Math.min(Math.max(annual - 12810, 0), 10932);
    const bracket4 = Math.min(Math.max(annual - 23742, 0), 29911);
    const bracket5 = Math.min(Math.max(annual - 53653, 0), 229568);
    const incomeTax = bracket3 * 0.14 + bracket4 * 0.42 + bracket5 * 0.45;
    const solidarity = Math.max(incomeTax * 0.055, 0);
    const pension = annual * 0.093;
    const unemployment = annual * 0.013;
    const health = annual * 0.077;
    const care = annual * 0.018;
    const deductions = solidarity + pension + unemployment + health + care;
    const fiscal = s === "marriedChildren" ? 0.7 : s === "married" ? 0.85 : 1;
    const netAnnual = annual - (incomeTax + deductions) * fiscal;
    return { net: netAnnual / 12, note: "Tax class 1 single / class 3 married. Health ~14.6% + care, social + pension." };
  },
  UAE: (gross) => ({ net: gross, note: "No personal income tax in the UAE." }),
  UK: (gross) => {
    const annual = gross * 12;
    const personal = 12570;
    const basic = Math.min(Math.max(annual - personal, 0), 37700);
    const higher = Math.max(annual - personal - 37700, 0);
    const incomeTax = basic * 0.2 + higher * 0.4;
    const ni = Math.max(annual - 12370, 0) * 0.08;
    return { net: (annual - incomeTax - ni) / 12, note: "Personal allowance £12,570; NI at 8% above £12,570." };
  },
};

const countries = Object.keys(taxBrackets) as (keyof typeof taxBrackets)[];

export default function SalaryCalculatorTool() {
  const [country, setCountry] = React.useState("Germany");
  const [gross, setGross] = React.useState<string>("4000");
  const [status, setStatus] = React.useState<Status>("single");
  const [result, setResult] = React.useState<{ net: number; note: string } | null>(null);

  const calculate = () => {
    const g = Number(gross);
    if (!g || g <= 0) return;
    setResult(taxBrackets[country as keyof typeof taxBrackets](g, status));
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
          Germany <span className="text-gradient-gold">Salary Calculator</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-600 dark:text-navy-100/75">
          See how a gross offer translates into monthly net pay after tax and social security.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">Country</span>
            <select
              value={country}
              onChange={(e) => { setCountry(e.target.value); setResult(null); }}
              className="mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {countries.map((c) => <option key={c} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={c}>{c}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">Gross monthly (€)</span>
            <input
              type="number"
              value={gross}
              onChange={(e) => { setGross(e.target.value); setResult(null); }}
              className="mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
              placeholder="4000"
            />
          </label>
          <label className="block">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">Family status</span>
            <select
              value={status}
              onChange={(e) => { setStatus(e.target.value as Status); setResult(null); }}
              className="mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {["single", "married", "marriedChildren"].map((o) => <option key={o} className="bg-white text-navy-900 dark:bg-navy-950 dark:text-white" value={o}>{o}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-8">
          <Button variant="gold" onClick={calculate}>Calculate Net Salary</Button>
        </div>

        {result && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-3xl border border-gold-500/30 bg-gold-50/30 p-8 backdrop-blur-md dark:border-gold-400/30 dark:bg-white/5">
            <p className="flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-white">
              <Calculator className="size-6 text-gold-500 dark:text-gold-400" />
              Estimated net: €{result.net.toLocaleString("de-DE", { maximumFractionDigits: 0 })} / month
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-100/75">{result.note}</p>
            <div className="mt-6">
              <Button variant="glass" href="/services/work-abroad/germany" withArrow>Explore Work in Germany</Button>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}