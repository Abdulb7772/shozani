"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

const faqs = [
  {
    q: "Do I need IELTS to study in Germany?",
    a: "No. Germany accepts TestDaF, Goethe Zertifikat or a medium-of-instruction certificate. Some universities also waive the English test if you have strong grades — we'll map the exact requirement for your target course during your free consultation.",
  },
  {
    q: "Can I work while studying?",
    a: "Yes. Germany allows 120 full days or 240 half days of work per year for students, Canada allows 24 hours/week off-campus, and Australia permits 24 hours/week. These are normally enough to cover living costs.",
  },
  {
    q: "How long does a Germany work visa take?",
    a: "Processing for the EU Blue Card or Opportunity Card typically takes 4–12 weeks at the visa consulate, plus up to 8 weeks for recognition of qualifications. Our team handles the complete submission and tracks your file.",
  },
  {
    q: "What are your fees?",
    a: "The first consultation is free. Fixed, transparent fees are agreed once your roadmap is finalised — no hidden charges, no surprises. You get a written service agreement before we begin.",
  },
  {
    q: "What is your visa success rate?",
    a: "Our verified success rate stands at 96%. We only take cases that are genuinely eligible, and we prepare every application to accept-no-surprises standards before submission.",
  },
  {
    q: "Do you help with accommodation and arrival?",
    a: "Yes. We provide pre-departure briefing, help with blocked account setup, health insurance and accommodation, and connect you with our on-ground support network in Germany, UK, Canada and Australia.",
  },
];

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen ?? false);
  const id = React.useId();
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-colors dark:border-white/10 dark:bg-navy-900/40">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-sm font-semibold text-navy-900 dark:text-white sm:text-base">
          {q}
        </span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-gold-500 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={id}
        role="region"
        className={cn(
          "grid transition-all duration-300 ease-out-gold",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow={t("FAQs")}
          title={<>{t("Answers to")} <span className="text-gradient-gold">{t("the questions you ask most")}</span></>}
          description={t("Still have a question? Talk to a real consultant — your first consultation is free.")}
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              >
                <FaqItem q={t(f.q)} a={t(f.a)} defaultOpen={i === 0} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="rounded-3xl border border-gold-400/30 bg-navy-900 p-8 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 text-gold-300">
                <MessageCircle className="size-7" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {t("Talk to an expert")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-100/70">
                {t("Get a free, no-obligation consultation with a certified counsellor specialising in your country.")}
              </p>
              <Button variant="gold" size="lg" href="/contact" className="mt-6 w-full">
                {t("Book a Consultation")}
              </Button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-navy-100/60">
                <Phone className="size-3.5" />
                {t("Or call:")} +92 320 650 6990
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}