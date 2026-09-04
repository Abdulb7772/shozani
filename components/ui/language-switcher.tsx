"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard for localStorage lang
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-gold-500/50 p-0.5 text-xs font-semibold dark:border-gold-400/40",
        className
      )}
    >
      {(["en", "de"] as const).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            lang === code
              ? "bg-gold-600 text-white dark:bg-white/10 dark:text-gold-200"
              : "text-gold-500 hover:text-gold-600 dark:text-navy-200/70 dark:hover:text-gold-300"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}