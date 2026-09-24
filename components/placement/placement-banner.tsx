import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function PlacementBanner({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <div className="bg-navy-950 dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-10">
        <Link
          href={href}
          className="group flex flex-col items-start justify-between gap-3 rounded-2xl border border-gold-400/30 bg-gradient-to-r from-gold-600/15 to-transparent px-5 py-4 transition-colors hover:border-gold-400/60 sm:flex-row sm:items-center"
        >
          <span className="flex items-center gap-3 text-sm font-medium text-white">
            <Sparkles className="size-4 shrink-0 text-gold-400" />
            New — {label} is now free online.
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gold-300 transition-all duration-300 group-hover:gap-2">
            Take the 3-minute test
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}