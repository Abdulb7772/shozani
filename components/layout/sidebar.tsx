"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Globe, GraduationCap, Moon, Sun, LogIn, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/lib/i18n/language-provider";

const groups = [
  {
    label: "Services",
    icon: GraduationCap,
    links: [
      { title: "Study Abroad", href: "/services/study-abroad" },
      { title: "Work Abroad", href: "/services/work-abroad" },
      { title: "Immigration", href: "/services/immigration" },
      { title: "Business Setup", href: "/services/business" },
      { title: "Construction", href: "/services/construction" },
      { title: "Language Training", href: "/services/language" },
    ],
  },
  {
    label: "Countries",
    icon: Globe,
    links: [
      { title: "Germany", href: "/countries/germany" },
      { title: "Australia", href: "/countries/australia" },
      { title: "Canada", href: "/countries/canada" },
      { title: "United Kingdom", href: "/countries/uk" },
      { title: "USA", href: "/countries/usa" },
      { title: "Europe", href: "/countries/europe" },
      { title: "Malaysia", href: "/countries/malaysia" },
      { title: "Turkey", href: "/countries/turkey" },
      { title: "Cyprus", href: "/countries/cyprus" },
      { title: "Tajikistan", href: "/countries/tajikistan" },
    ],
  },
  {
    label: "Free Assessment",
    icon: CheckCircle2,
    links: [
      { title: "Start Free Assessment", href: "/apply" },
    ],
  },
];

const singles = [
  { title: "About", href: "/about" },
  { title: "Why Shozani", href: "/why-shozani" },
  { title: "Success Stories", href: "/success-stories" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

function Accordion({
  group,
  defaultOpen = false,
}: {
  group: (typeof groups)[number];
  defaultOpen?: boolean;
}) {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className="border-b border-navy-900/10 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left font-display text-sm font-medium text-navy-900 dark:text-white"
      >
        <span className="flex items-center gap-3">
          <group.icon className="size-4 text-gold-500" />
          {t(group.label)}
        </span>
        <ChevronDown
          className={cn("size-4 text-navy-400 transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-4 pl-7">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-navy-600 transition-colors hover:bg-navy-900/5 hover:text-gold-600 dark:text-navy-100/70 dark:hover:bg-white/5 dark:hover:text-gold-400"
                >
                  {t(link.title)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard for next-themes
  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-navy-950/60 lg:hidden"
            aria-hidden
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden dark:bg-navy-950"
            role="dialog"
            aria-modal="true"
            aria-label={t("Navigation menu")}
          >
            <div className="flex items-center justify-between border-b border-navy-900/10 px-6 py-5 dark:border-white/10">
              <span className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                {t("Menu")}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("Close menu")}
                className="grid size-10 place-items-center rounded-full bg-navy-900/5 text-navy-900 transition-colors hover:bg-navy-900/10 dark:bg-white/10 dark:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="flex-1 overflow-y-auto px-6 py-2"
            >
              {groups.map((group, i) => (
                <Accordion key={group.label} group={group} defaultOpen={i === 0} />
              ))}
              {singles.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="flex border-b border-navy-900/10 py-4 font-display text-sm font-medium text-navy-900 dark:border-white/10 dark:text-white"
                >
                  {t(link.title)}
                </Link>
              ))}
            </motion.div>

            <div className="border-t border-navy-900/10 px-6 py-5 dark:border-white/10">
              <Button variant="gold" size="lg" href="/apply" className="w-full">
                {t("Apply Now")}
              </Button>
              <div className="mt-3 flex items-center gap-3">
                <Button variant="outline" size="md" href="/login" className="flex-1">
                  <LogIn className="size-4" />
                  {t("Login")}
                </Button>
                <LanguageSwitcher className="flex" />
                <button
                  type="button"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label={t("Toggle theme")}
                  className="grid size-11 place-items-center rounded-full border border-navy-200/70 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-500 dark:border-white/10 dark:text-navy-100"
                >
                  {mounted && (isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />)}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}