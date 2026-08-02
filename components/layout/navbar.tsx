"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Search,
  Globe,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
        title: "Language Training",
        href: "/services/language",
        description: "German, IELTS and PTE preparation",
      },
    ],
  },
  {
    label: "Destinations",
    icon: Globe,
    viewAll: "/countries",
    sections: [
      { title: "Germany", href: "/countries/germany", description: "Study, work & PR" },
      { title: "Australia", href: "/countries/australia", description: "Universities & jobs" },
      { title: "Canada", href: "/countries/canada", description: "Express Entry & study" },
      { title: "United Kingdom", href: "/countries/uk", description: "Elite universities" },
      { title: "USA", href: "/countries/usa", description: "STEM & top colleges" },
    ],
  },
  {
    label: "AI Tools",
    icon: Bot,
    viewAll: "/ai",
    sections: [
      { title: "Visa Eligibility", href: "/ai/visa-eligibility", description: "2-min free check" },
      { title: "IELTS Predictor", href: "/ai/ielts-predictor", description: "Estimate your band" },
      { title: "Germany Salary", href: "/ai/salary-calculator", description: "Live net salary" },
      { title: "Study Cost", href: "/ai/study-cost-calculator", description: "Plan your budget" },
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
          ? "border-b border-navy-900/5 bg-white/85 py-2 shadow-[0_8px_30px_rgb(4,16,35,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between gap-6">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
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
                "rounded-full px-4 py-2 font-display text-sm font-medium tracking-tight text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:bg-gold-500/10 hover:text-gold-600 dark:text-gold-300 dark:hover:bg-gold-400/10 dark:hover:text-gold-200",
                pathname === link.href && "text-gold-700 dark:text-gold-200"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Search"
            className="hidden size-10 place-items-center rounded-full border border-gold-500/50 text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 sm:grid dark:border-gold-400/40 dark:text-gold-300 dark:hover:border-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-200"
          >
            <Search className="size-[18px]" />
          </button>
          <ThemeToggle className="hidden sm:grid" />
          <div className="hidden xl:block">
            <Button variant="outline" size="sm" href="/login" className="border-gold-500/50 text-gold-500 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 dark:border-gold-400/40 dark:text-gold-300 dark:hover:border-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-200">
              Login
            </Button>
          </div>
          <Button variant="gold" size="sm" href="/apply" className="hidden sm:inline-flex">
            Apply Now
          </Button>
          <button
            type="button"
            onClick={onOpenSidebar}
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-full bg-navy-900 text-white transition-transform active:scale-95 lg:hidden dark:bg-white/10"
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
            className="absolute inset-x-0 top-full hidden lg:block"
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
                        ? "bg-gold-50 text-navy-950 dark:bg-white/5 dark:text-white"
                        : "text-navy-600 hover:text-navy-950 dark:text-navy-100/70 dark:hover:text-white"
                    )}
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-navy-900/5 text-gold-600 dark:bg-white/10 dark:text-gold-300">
                      <m.icon className="size-4" />
                    </span>
                    <div className="flex items-center justify-between gap-6">
                      <span className="font-display text-sm font-medium">{m.label}</span>
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
                      {s.title}
                      <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-navy-500 dark:text-navy-200/60">
                      {s.description}
                    </span>
                  </Link>
                ))}
                <Link
                  href={MEGA.find((m) => m.label === active)?.viewAll ?? "/"}
                  className="mt-1 inline-flex items-center gap-1.5 self-end rounded-2xl px-4 py-3 text-sm font-medium text-gold-600 transition-colors hover:bg-gold-50 dark:text-gold-300 dark:hover:bg-white/5"
                >
                  View all {active}
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
        "flex items-center gap-1 rounded-full px-4 py-2 font-display text-sm font-medium tracking-tight text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:bg-gold-500/10 hover:text-gold-600 dark:text-gold-300 dark:hover:bg-gold-400/10 dark:hover:text-gold-200",
        active && "text-gold-700 hover:text-gold-700 dark:text-gold-200 dark:hover:text-gold-200"
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