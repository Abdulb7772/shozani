"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, FileText, Globe, Compass } from "lucide-react";
import { postListings } from "@/lib/blog-posts";
import { countryList } from "@/lib/countries-data";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/lib/i18n/language-provider";

type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: "post" | "country" | "page";
};

const pages: SearchItem[] = [
  { title: "Apply Now", description: "Start your free assessment", href: "/apply", type: "page" },
  { title: "All Services", description: "Study, work, immigration, language & more", href: "/services", type: "page" },
  { title: "All Countries", description: "Every destination we serve", href: "/countries", type: "page" },
  { title: "About Us", description: "Who we are and what guides us", href: "/about", type: "page" },
  { title: "Why Shozani", description: "What makes us different", href: "/why-shozani", type: "page" },
  { title: "Success Stories", description: "Journeys that started with one conversation", href: "/success-stories", type: "page" },
  { title: "Careers", description: "Do work that changes borders", href: "/careers", type: "page" },
  { title: "Blog", description: "Guides, news & resources", href: "/blog", type: "page" },
  { title: "Contact", description: "Get a free consultation", href: "/contact", type: "page" },
];

const ICONS = {
  post: FileText,
  country: Globe,
  page: Compass,
} as const;

export function SearchOverlay() {
  const { t } = useLanguage();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  const results = React.useMemo<SearchItem[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: SearchItem[] = [
      ...postListings.map((p) => ({
        title: p.title,
        description: p.excerpt,
        href: p.href,
        type: "post" as const,
      })),
      ...countryList.map((c) => ({
        title: c.name,
        description: `Learn about ${c.name} — requirements, visas, timelines`,
        href: c.href,
        type: "country" as const,
      })),
      ...pages,
    ];

    return items
      .filter((item) => {
        const haystack = `${item.title} ${item.description}`.toLowerCase();
        return !q || haystack.includes(q);
      })
      .slice(0, 20);
  }, [query]);

  const grouped = React.useMemo(() => {
    const order: SearchItem["type"][] = ["post", "country", "page"];
    return order
      .map((type) => ({ type, items: results.filter((r) => r.type === type) }))
      .filter((g) => g.items.length > 0);
  }, [results]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("Search")}
        className="hidden size-8 place-items-center rounded-full border border-gold-500/50 text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 sm:grid dark:border-gold-400/40 dark:text-gold-400 dark:hover:border-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-300"
      >
        <Search className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-0 z-[60] overflow-visible"
            >
              <div className="border-b border-navy-900/10 bg-white shadow-[0_8px_30px_rgb(23,37,84,0.08)] dark:border-white/10 dark:bg-navy-950">
                <Container className="flex items-center gap-3 py-4">
                  <Search className="size-5 shrink-0 text-gold-500 dark:text-gold-300" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t("Search countries, services, guides...")}
                    aria-label={t("Search the site")}
                    className="w-full bg-transparent text-base text-navy-900 outline-none placeholder:text-navy-400 dark:text-white dark:placeholder:text-navy-200/40"
                  />
                  <kbd className="hidden shrink-0 rounded-md border border-navy-900/15 px-1.5 py-0.5 text-[11px] text-navy-400 sm:block dark:border-white/20 dark:text-navy-200/40">
                    ESC
                  </kbd>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label={t("Close search")}
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-900/5 text-navy-500 transition-colors hover:bg-navy-900/10 dark:bg-white/10 dark:text-navy-100"
                  >
                    <X className="size-4" />
                  </button>
                </Container>
              </div>

              <Container className="relative">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-3 right-3 top-2 overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-luxe dark:border-white/10 dark:bg-navy-900 lg:left-6 lg:right-6"
                >
                  <div className="max-h-80 overflow-y-auto p-2">
                    {query.trim() === "" ? (
                      <div className="px-4 py-8 text-center text-sm text-navy-500 dark:text-navy-200/60">
                        {t("Type to search across countries, guides and services.")}
                      </div>
                    ) : results.length === 0 ? (
                      <div className="px-4 py-8 text-center text-sm text-navy-500 dark:text-navy-200/60">
                        {t("No results for")} "{query}"
                      </div>
                    ) : (
                      grouped.map((group) => (
                        <div key={group.type}>
                          <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-400 dark:text-navy-200/50">
                            {t(group.type === "post" ? "Guides" : group.type === "country" ? "Countries" : "Pages")}
                          </p>
                          {group.items.map((item) => {
                            const Icon = ICONS[item.type];
                            return (
                              <button
                                key={item.href}
                                type="button"
                                onClick={() => go(item.href)}
                                className="group flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors hover:bg-gold-500/10"
                              >
                                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-navy-900/5 text-gold-600 dark:bg-white/10 dark:text-gold-300">
                                  <Icon className="size-4" />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate font-display text-sm font-semibold text-navy-900 dark:text-white">
                                    {item.title}
                                  </span>
                                  <span className="mt-0.5 block truncate text-xs text-navy-500 dark:text-navy-200/60">
                                    {item.description}
                                  </span>
                                </span>
                                <ArrowRight className="mt-1 size-4 shrink-0 text-navy-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-gold-600 group-hover:opacity-100 dark:text-navy-600 dark:group-hover:text-gold-300" />
                              </button>
                            );
                          })}
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              </Container>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55]"
              onClick={() => setOpen(false)}
              aria-hidden
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}