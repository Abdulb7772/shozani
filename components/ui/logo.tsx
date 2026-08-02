import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Shozani Global Consultancy — Home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-xl font-display text-lg font-bold transition-shadow duration-300 group-hover:shadow-gold",
          dark
            ? "bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950"
            : "bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 dark:from-gold-400 dark:to-gold-600 dark:text-navy-950"
        )}
      >
        S
      </span>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          dark ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        Shozani
        <span className="ml-1 text-gold-500">Global</span>
      </span>
    </Link>
  );
}