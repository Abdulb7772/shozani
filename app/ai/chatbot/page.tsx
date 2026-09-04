"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ChevronRight, Info, Send, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

type Answer = {
  en: string;
  de: string;
};

const faqs: { keywords: string[]; answer: Answer }[] = [
  {
    keywords: ["germany", "deutschland", "german"],
    answer: {
      en: "Germany offers three main routes: study (tuition-free public universities), skilled work (Opportunity Card / work visa) and nursing (B2 German + recognition). For most profiles, German B1/B2 unlocks the fastest path. Which route fits your education and experience?",
      de: "Deutschland bietet drei Hauptwege: Studium (gebührenfreie öffentliche Unis), Facharbeit (Chancenkarte / Arbeitsvisum) und Pflege (Deutsch B2 + Anerkennung). Für die meisten Profile öffnet Deutsch B1/B2 den schnellsten Weg. Welcher Weg passt zu Ihrer Ausbildung und Erfahrung?",
    },
  },
  {
    keywords: ["visa", "visum", "embassy", "appointment"],
    answer: {
      en: "Visa appointments are booked at the German embassy in Islamabad or the consulates in Lahore and Karachi. We prepare your complete file first — points calculation, blocked account and documents — so your appointment is a one-time submission, not a discovery session. Current wait times are 3 to 8 weeks depending on the mission.",
      de: "Visumstermine buchen Sie bei der deutschen Botschaft in Islamabad oder den Konsulaten in Lahore und Karatschi. Zuerst bereiten wir Ihre vollständige Akte vor — Punkteberechnung, Sperrkonto und Unterlagen — damit Ihr Termin eine einmalige Abgabe ist, keine Entdeckungsreise. Die aktuellen Wartezeiten liegen je nach Vertretung bei 3 bis 8 Wochen.",
    },
  },
  {
    keywords: ["ielts", "english", "language test"],
    answer: {
      en: "For English: IELTS or PTE depending on your target country. For Germany, German is the unlock — most work routes need B1/B2, and our in-house trainers run Goethe and telc tracks from A1 to B2. Book a free placement assessment and we will tell you exactly how long each level takes for your profile.",
      de: "Für Englisch: IELTS oder PTE, je nach Zielland. Für Deutschland ist Deutsch der Schlüssel — die meisten Arbeitswege verlangen B1/B2, und unsere Trainer unterrichten Goethe- und telc-Kurse von A1 bis B2. Buchen Sie einen kostenlosen Einstufungstest; wir sagen Ihnen genau, wie lange jedes Niveau für Ihr Profil dauert.",
    },
  },
  {
    keywords: ["cost", "fee", "money", "blocked", "kosten", "gebühr"],
    answer: {
      en: "Typical starting picture: blocked account for Germany is about 11,900 EUR per year, visas cost around 75-150 EUR, and our service fees depend on the route — fixed, written in your agreement before any work starts. During our free call we give you the complete figure list for your destination.",
      de: "Typische Ausgangswerte: Das Sperrkonto für Deutschland liegt bei etwa 11.900 EUR pro Jahr, Visa kosten rund 75-150 EUR, und unsere Servicegebühren hängen vom Weg ab — fest und vor Arbeitsbeginn schriftlich fixiert. Im kostenlosen Anruf erhalten Sie die komplette Kostenliste für Ihr Zielland.",
    },
  },
  {
    keywords: ["canada", "express entry", "pr", "permanent"],
    answer: {
      en: "Canada is our strongest PR play: Express Entry general draws are around 505-535 CRS, while category draws (healthcare, trades, French) go lower. The fastest levers: CLB 9 English, a verified degree and 2+ years of skilled experience. Run our free eligibility check to see your realistic score.",
      de: "Kanada ist unser stärkstes PR-Programm: Allgemeine Express-Entry-Ziehungen liegen bei etwa 505-535 CRS, Kategorie-Ziehungen (Gesundheit, Handwerk, Französisch) niedriger. Die schnellsten Hebel: Englisch CLB 9, anerkannter Abschluss und 2+ Jahre Facharbeitserfahrung. Machen Sie unseren kostenlosen Eignungscheck für Ihren realistischen Score.",
    },
  },
  {
    keywords: ["nursing", "nurse", "pflege"],
    answer: {
      en: "Nurses are our fastest Germany route: employer partnerships, paid adaptation courses and salaries from about 2,900-3,400 EUR gross monthly. You need B2 German (many employers accept B1 with a commitment) and recognition of your nursing diploma. Timeline: 9-15 months from first call to landing.",
      de: "Pflegekräfte sind unsere schnellste Deutschland-Route: Arbeitgeberpartnerschaften, bezahlte Anpassungsmaßnahmen und Gehälter ab etwa 2.900-3.400 EUR brutto monatlich. Sie brauchen Deutsch B2 (viele Arbeitgeber akzeptieren B1 mit Zusage) und die Anerkennung Ihres Pflegediploms. Zeitrahmen: 9-15 Monate vom ersten Anruf bis zur Landung.",
    },
  },
  {
    keywords: ["university", "study", "admission", "studium"],
    answer: {
      en: "For study: Germany (tuition-free), Canada, Australia and the UK are our main markets. German bachelor programs need B2/C1 German; masters are widely available in English. Start 12-18 months before your target semester — the earlier the better for blocked account and visa timelines.",
      de: "Fürs Studium: Deutschland (gebührenfrei), Kanada, Australien und das UK sind unsere Hauptmärkte. Deutsche Bachelorstudiengänge verlangen Deutsch B2/C1; Master gibt es häufig auf Englisch. Beginnen Sie 12-18 Monate vor dem Zielsemester — je früher, desto besser für Sperrkonto und Visumzeiten.",
    },
  },
  {
    keywords: ["scholarship", "stipendium", "funding"],
    answer: {
      en: "Real scholarship options: DAAD for Germany (competitive, deadline-based), Türkiye Bursları for Turkey (covers tuition and living), and university-specific waivers. Many clients fund via self-sponsorship + part-time work (20h/week in Germany). We map scholarship deadlines into your application timeline during the free call.",
      de: "Echte Stipendienoptionen: DAAD für Deutschland (wettbewerbsfähig, mit Fristen), Türkiye Bursları für die Türkei (deckt Studiengebühren und Lebenshaltung) und hochschulspezifische Befreiungen. Viele Kunden finanzieren über Eigenmittel plus Teilzeitjob (20 Std./Woche in Deutschland). Wir planen Stipendienfristen im kostenlosen Anruf in Ihre Bewerbungsroute ein.",
    },
  },
];

const greetings: Answer = {
  en: "Hello! I am Shozani's virtual advisor. Ask me about visas, universities, fees, Germany, Canada, nursing or IELTS — or book a free call with a human counsellor.",
  de: "Hallo! Ich bin Shozanis virtueller Berater. Fragen Sie mich zu Visa, Universitäten, Gebühren, Deutschland, Kanada, Pflege oder IELTS — oder buchen Sie ein kostenloses Gespräch mit einem menschlichen Berater.",
};

const fallback: Answer = {
  en: "Good question — that deserves a human answer. Book a free counselling call and we will respond with specifics for your profile. Meanwhile, browse our country pages and guides above.",
  de: "Gute Frage — die verdient eine menschliche Antwort. Buchen Sie ein kostenloses Beratungsgespräch; wir antworten mit Details zu Ihrem Profil. Schauen Sie sich derweil unsere Länder- und Ratgeberseiten an.",
};

const suggestions = [
  "Germany routes",
  "Visa fees",
  "IELTS vs PTE",
  "Canada PR",
  "Nursing in Germany",
  "Scholarships",
];

export default function ChatbotPage() {
  const { t, lang } = useLanguage();
  const de = lang === "de";
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: de ? greetings.de : greetings.en },
  ]);
  const [typing, setTyping] = React.useState(false);

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || typing) return;
    setInput("");
    setMessages((m) => [...m, { from: "user", text }]);
    setTyping(true);

    const lower = text.toLowerCase();
    const matched = faqs.find((f) => f.keywords.some((k) => lower.includes(k.toLowerCase())));

    window.setTimeout(() => {
      const reply = matched ? (de ? matched.answer.de : matched.answer.en) : de ? fallback.de : fallback.en;
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setTyping(false);
    }, 900);
  };

  const chatInputClass =
    "h-12 flex-1 rounded-full border border-navy-900/10 bg-white px-5 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-navy-200/40";

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-36 pb-20 sm:pt-44 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label={t("Breadcrumb")}
          className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("Home")}</Link>
          <span className="text-navy-300 dark:text-navy-100/30">/</span>
          <Link href="/ai" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("AI Tools")}</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-700 dark:text-gold-300">{t("Chatbot")}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="overflow-hidden rounded-[2rem] border border-navy-900/10 bg-white shadow-luxe dark:border-white/10 dark:bg-navy-900/40">
            <div className="flex items-center gap-3 border-b border-navy-900/10 bg-navy-900 px-6 py-5 dark:border-white/10">
              <span className="grid size-11 place-items-center rounded-full bg-gold-600 text-white">
                <Bot className="size-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">{t("Shozani Advisor")}</p>
                <p className="flex items-center gap-1.5 text-xs text-navy-100/60">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                  {t("Online")}
                </p>
              </div>
            </div>

            <div className="h-[22rem] space-y-4 overflow-y-auto bg-navy-50/40 p-4 sm:h-[26rem] sm:p-6 dark:bg-navy-950/40">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`flex gap-2.5 ${m.from === "user" ? "justify-end" : ""}`}
                  >
                    {m.from === "bot" && (
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold-600 text-white">
                        <Bot className="size-4" />
                      </span>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        m.from === "user"
                          ? "rounded-br-sm bg-navy-900 text-white dark:bg-gold-600"
                          : "rounded-bl-sm border border-navy-900/10 bg-white text-navy-700 dark:border-white/10 dark:bg-navy-900/60 dark:text-navy-100/85"
                      }`}
                    >
                      {m.text}
                    </div>
                    {m.from === "user" && (
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-900 text-white dark:bg-white/10">
                        <User className="size-4" />
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {typing && (
                <div className="flex gap-2.5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold-600 text-white">
                    <Bot className="size-4" />
                  </span>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-navy-900/10 bg-white px-4 py-3 dark:border-white/10 dark:bg-navy-900/60">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.1, repeat: Infinity, delay: d * 0.2 }}
                        className="size-1.5 rounded-full bg-navy-400 dark:bg-navy-200/50"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-navy-900/10 p-4 dark:border-white/10">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:bg-white/5 dark:text-navy-200/70 dark:hover:text-gold-300"
                  >
                    {t(s)}
                  </button>
                ))}
              </div>
              <form
                className="flex items-center gap-2.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("Type your question...")}
                  aria-label={t("Chat message")}
                  className={chatInputClass}
                />
                <button
                  type="submit"
                  aria-label={t("Send")}
                  disabled={!input.trim() || typing}
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-gold-600 text-white transition-colors hover:bg-gold-500 disabled:opacity-50"
                >
                  <Send className="size-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-navy-900/10 bg-navy-50/40 p-4 dark:border-white/10 dark:bg-navy-900/30">
            <Info className="mt-0.5 size-4 shrink-0 text-gold-600 dark:text-gold-400" />
            <p className="text-xs leading-relaxed text-navy-500 dark:text-navy-200/60">
              {t("This assistant gives general guidance only — visa decisions rest with embassies and immigration authorities. For a personal route plan, book a free call.")}
            </p>
          </div>

          <div className="mt-6 text-center">
            <Button variant="gold" size="lg" href="/apply" withArrow>
              {t("Book Free Counselling")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}