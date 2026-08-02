"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard for next-themes
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative grid size-10 place-items-center rounded-full border border-gold-500/50 text-gold-500 transition-all duration-500 ease-out-gold hover:delay-300 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-600 dark:border-gold-400/40 dark:text-gold-300 dark:hover:border-gold-400 dark:hover:bg-gold-400/10 dark:hover:text-gold-200",
        className
      )}
    >
      {mounted && (
        <span className="transition-all duration-300 scale-100 rotate-0">
          {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
        </span>
      )}
    </button>
  );
}