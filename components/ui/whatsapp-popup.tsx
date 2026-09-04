"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Users } from "lucide-react";
import { links } from "@/lib/navigation";
import { useLanguage } from "@/lib/i18n/language-provider";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function WhatsAppPopup() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-72 overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-luxe dark:border-white/15 dark:bg-navy-900"
          >
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-white/20">
                  <WhatsAppIcon className="size-5 text-white" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Shozani Global Consultancy
                  </p>
                  <p className="text-[11px] text-white/85">{t("Typically replies within minutes")}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("Close WhatsApp chat")}
                className="grid size-8 place-items-center rounded-full text-white transition-colors hover:bg-white/20"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="bg-navy-50 p-4 dark:bg-black">
              <div className="inline-block max-w-[85%] rounded-2xl rounded-tl-sm border border-navy-100 bg-white px-4 py-3 text-sm leading-relaxed text-navy-800 shadow-sm dark:border-white/10 dark:bg-navy-800 dark:text-navy-100">
                {t("Hi there! 👋 Got questions about studying, working or settling abroad? Chat with us on WhatsApp — it's free.")}
              </div>
            </div>
            <div className="grid gap-2 p-3">
              <a
                href={`${links.whatsapp}?text=Hi%20Shozani%2C%20I%20need%20help%20with%20my%20move%20abroad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1faf53]"
              >
                <WhatsAppIcon className="size-4" />
                {t("Start Chat on WhatsApp")}
              </a>
              <a
                href={`${links.whatsapp}?text=Hi%20Shozani%2C%20I%27d%20love%20to%20join%20your%20WhatsApp%20Community.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-navy-200 px-4 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 dark:border-white/15 dark:text-navy-100 dark:hover:border-gold-400 dark:hover:text-gold-300"
              >
                <Users className="size-4" />
                {t("Join Our WhatsApp Community")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHint && !open && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none rounded-full border border-navy-200 bg-white px-4 py-2 text-xs font-medium text-navy-700 shadow-lg dark:border-white/15 dark:bg-navy-900 dark:text-navy-100"
          >
            {t("Chat with us 👋")}
          </motion.span>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => {
          setShowHint(false);
          setOpen((v) => !v);
        }}
        aria-label={open ? t("Close WhatsApp popup") : t("Chat with us on WhatsApp")}
        className="group grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgb(37_211_102/0.55)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <WhatsAppIcon className="size-7" />
        )}
      </button>
    </div>
  );
}