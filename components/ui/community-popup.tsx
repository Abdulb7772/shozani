"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Users } from "lucide-react";
import { links } from "@/lib/navigation";
import { useLanguage } from "@/lib/i18n/language-provider";

const STORAGE_KEY = "shozani-community-invite";

const perks = [
  "Instant visa & scholarship alerts",
  "Free guidance from certified counsellors",
  "Deadlines, intakes & job openings first",
];

export function CommunityPopup() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-navy-950/70 p-4 backdrop-blur-sm"
          onClick={dismiss}
          role="dialog"
          aria-modal="true"
          aria-label={t("Join our WhatsApp community")}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-navy-200 bg-white shadow-luxe dark:border-white/10 dark:bg-navy-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gold-500" aria-hidden />

            <button
              type="button"
              onClick={dismiss}
              aria-label={t("Close")}
              className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-navy-200 text-navy-500 transition-colors hover:border-gold-500 hover:text-gold-600 dark:border-white/15 dark:text-navy-100/70 dark:hover:border-gold-400 dark:hover:text-gold-300"
            >
              <X className="size-4" />
            </button>

            <div className="p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
                <Users className="size-3.5" />
                {t("New here? Welcome!")}
              </span>

              <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-navy-900 text-balance sm:text-3xl dark:text-white">
                {t("Join Our")}{" "}
                <span className="text-gradient-gold">{t("WhatsApp Community")}</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-100/75">
                {t("Be part of thousands of students and professionals moving abroad — get real-time updates, answers and support, all in one group.")}
              </p>

              <ul className="mt-5 space-y-2.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-navy-700 dark:text-navy-100/85">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-600 dark:text-gold-400" />
                    {t(perk)}
                  </li>
                ))}
              </ul>

              <a
                href={`${links.whatsapp}?text=Hi%20Shozani%2C%20I%27d%20love%20to%20join%20your%20WhatsApp%20Community.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="mt-7 flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-[0_14px_34px_-10px_rgb(37_211_102/0.6)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {t("Join the Community")}
              </a>

              <button
                type="button"
                onClick={dismiss}
                className="mt-3 w-full text-center text-xs font-medium text-navy-500 underline-offset-4 transition-colors hover:text-gold-600 hover:underline dark:text-navy-200/50 dark:hover:text-gold-300"
              >
                {t("Maybe later")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
