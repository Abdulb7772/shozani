"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Globe,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SearchOverlay } from "@/components/layout/search-overlay";
import { useLanguage } from "@/lib/i18n/language-provider";

type MegaGroup = {
  label: string;
  icon: typeof GraduationCap;
  viewAll: string;
  sections: { title: string; href: string; description: string }[];
};

const MEGA: MegaGroup[] = [
  {
    label: "Services",
    icon: GraduationCap,
    viewAll: "/services",
    sections: [
      {
        title: "Study Abroad",
        href: "/services/study-abroad",
        description: "Germany, UK, USA, Australia, Canada, Europe",
      },
      {
        title: "Germany Career Tracks",
        href: "/countries/germany",
        description: "Nursing & Ausbildung in Germany",
      },
      {
        title: "Language Training",
        href: "/services/language",
        description: "German, IELTS and PTE preparation",
      },
      {
        title: "Free Placement Tests",
        href: "/services/language/placement",
        description: "German, IELTS & PTE level test in 3 minutes",
      },
      {
        title: "Work Abroad",
        href: "/services/work-abroad",
        description: "Germany jobs, IT, Engineering, Healthcare, Nursing",
      },
      {
        title: "Immigration",
        href: "/services/immigration",
        description: "Permanent residence, family & business visas",
      },
      {
        title: "Business & Investment",
        href: "/services/business",
        description: "Company formation, visas & investment advisory",
      },
      {
        title: "Visa Services",
        href: "/services/visa",
        description: "Business visa, visit visa & eVisas",
      },
    ],
  },
  {
    label: "Countries",
    icon: Globe,
    viewAll: "/countries",
    sections: [
      { title: "Germany", href: "/countries/germany", description: "Study, work & PR" },
      { title: "Australia", href: "/countries/australia", description: "Universities & jobs" },
      { title: "Canada", href: "/countries/canada", description: "Express Entry & study" },
      { title: "United Kingdom", href: "/countries/uk", description: "Elite universities" },
      { title: "USA", href: "/countries/usa", description: "STEM & top colleges" },
      { title: "Malaysia", href: "/countries/malaysia", description: "Affordable degrees" },
      { title: "Turkey", href: "/countries/turkey", description: "Scholarships & study" },
      { title: "Cyprus", href: "/countries/cyprus", description: "EU base, English degrees" },
      { title: "Tajikistan", href: "/countries/tajikistan", description: "Affordable education" },
    ],
  },
  {
    label: "Free Assessment",
    icon: CheckCircle2,
    viewAll: "/apply",
    sections: [
      { title: "Start Free Assessment", href: "/apply", description: "Find your best route" },
    ],
  },
];

const singleLinks = [
  { label: "About", href: "/about" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({
  scrolled,
  onOpenSidebar,
}: {
  scrolled: boolean;
  onOpenSidebar: () => void;
}) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [active, setActive] = React.useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = React.useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 250);
  }, []);

  const cancelClose = React.useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  React.useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    []
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-900/5 bg-white py-2 shadow-[0_8px_30px_rgb(23,37,84,0.08)] dark:border-white/10 dark:bg-navy-950"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between gap-2">
        <Logo dark={!scrolled && pathname === "/"} />

        <nav
          className="hidden items-center gap-0 whitespace-nowrap xl:flex"
          aria-label="Primary"
          onMouseLeave={scheduleClose}
        >
          {MEGA.map((mega) => (
            <MegaTrigger
              key={mega.label}
              mega={mega}
              active={active === mega.label}
              onOpen={() => {
                cancelClose();
                setActive(mega.label);
              }}
            />
          ))}
          {singleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center rounded-full px-2.5 py-2 font-display text-sm font-extrabold leading-none tracking-tight text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:bg-gold-500/10 hover:text-gold-600 dark:text-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-300",
                pathname === link.href && "text-gold-700 dark:text-gold-300"
              )}
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
          <SearchOverlay />
          <LanguageSwitcher className="hidden text-[11px] sm:flex" />
          <ThemeToggle className="hidden size-8 sm:grid [&_svg]:size-4" />
          <div className="hidden xl:block">
            <Button variant="outline" size="sm" href="/login" className="border-gold-500/50 text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 dark:border-gold-400/40 dark:text-gold-400 dark:hover:border-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-300">
              {t("Login")}
            </Button>
          </div>
          <Button variant="gold" size="sm" href="/apply" className="hidden sm:inline-flex">
            {t("Apply Now")}
          </Button>
          <button
            type="button"
            onClick={onOpenSidebar}
            aria-label={t("Open menu")}
            className="grid size-9 place-items-center rounded-full bg-navy-900 text-white transition-transform active:scale-95 xl:hidden dark:bg-white/10"
          >
            <Menu className="size-[18px]" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full hidden xl:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            aria-label={active}
          >
            <Container className="glass-card mt-3 grid grid-cols-[300px_1fr] gap-0 overflow-hidden p-3">
              <div className="border-r border-navy-900/10 p-3 dark:border-white/10">
                {MEGA.map((m) => (
                  <button
                    key={m.label}
                    type="button"
                    onMouseEnter={() => setActive(m.label)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors",
                      active === m.label
                        ? "bg-gold-600 text-white dark:bg-white/5 dark:text-white"
                        : "text-navy-600 hover:text-navy-950 dark:text-navy-100/70 dark:hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "relative grid size-11 shrink-0 place-items-center rounded-2xl transition-all duration-300",
                        active === m.label
                          ? "bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-white shadow-gold ring-2 ring-gold-400/50 dark:from-gold-300 dark:via-gold-400 dark:to-gold-500 dark:text-navy-950 dark:shadow-gold dark:ring-gold-300/40"
                          : "bg-gradient-to-br from-gold-500/10 via-gold-500/5 to-transparent text-gold-600 ring-1 ring-gold-500/25 group-hover:from-gold-500/20 group-hover:to-gold-500/10 dark:text-gold-300 dark:ring-gold-300/20 dark:group-hover:from-gold-300/20 dark:group-hover:to-gold-300/5"
                      )}
                    >
                      <m.icon className="size-[22px] drop-shadow-sm" strokeWidth={2.2} />
                      {active === m.label && (
                        <span className="absolute inset-0 -z-10 rounded-2xl bg-gold-500/50 blur-md opacity-60 transition-opacity group-hover:opacity-100 dark:bg-gold-400/40" />
                      )}
                    </span>
                    <div className="flex items-center justify-between gap-6">
                      <span className="font-display text-sm font-medium">{t(m.label)}</span>
                      <ChevronRight className="size-4 opacity-40" />
                    </div>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-1 p-3">
                {MEGA.find((m) => m.label === active)?.sections.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group rounded-2xl p-4 transition-colors hover:bg-navy-900/5 dark:hover:bg-white/5"
                  >
                    <span className="flex items-center justify-between font-display text-sm font-medium text-navy-950 transition-colors group-hover:text-gold-600 dark:text-white">
                      {t(s.title)}
                      <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-navy-500 dark:text-navy-200/60">
                      {t(s.description)}
                    </span>
                  </Link>
                ))}
                <Link
                  href={MEGA.find((m) => m.label === active)?.viewAll ?? "/"}
                  className="mt-1 inline-flex items-center gap-1.5 self-end rounded-2xl px-4 py-3 text-sm font-medium text-gold-600 transition-colors hover:bg-gold-500/10 dark:text-gold-300 dark:hover:bg-white/5"
                >
                  {t("View all")} {t(active ?? "")}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaTrigger({
  mega,
  active,
  onOpen,
}: {
  mega: MegaGroup;
  active: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      className={cn(
        "flex items-center gap-1 rounded-full px-2.5 py-2 font-display text-sm font-extrabold leading-none tracking-tight text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:bg-gold-500/10 hover:text-gold-600 dark:text-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-300",
        active && "text-gold-700 hover:text-gold-700 dark:text-gold-300 dark:hover:text-gold-300"
      )}
    >
      {mega.label}
      <ChevronRight
        className={cn(
          "size-3.5 origin-center -rotate-90 transition-transform",
          active && "rotate-90"
        )}
      />
    </button>
  );
}