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
      className={cn("group inline-flex shrink-0 items-center gap-2.5", className)}
    >
      <img
        src="/logo.png"
        alt="Shozani Global Consultancy"
        className="h-11 w-auto shrink-0 object-contain transition-shadow duration-300 group-hover:shadow-gold xl:h-10"
      />
      <span
        className={cn(
          "flex items-baseline gap-1.5 whitespace-nowrap font-display text-[17px] font-semibold leading-none tracking-tight",
          dark ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        Shozani
        <span className="hidden text-[13px] leading-none text-gold-500 2xl:inline-block">
          Global Consultancy
        </span>
      </span>
    </Link>
  );
}