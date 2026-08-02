"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 flex flex-col gap-4 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em]",
            dark
              ? "border-gold-400/40 bg-white/5 text-gold-300"
              : "border-gold-500/30 bg-gold-50 text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300"
          )}
        >
          <span className="size-1.5 rounded-full bg-current" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "max-w-3xl text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-navy-100/70" : "text-navy-600 dark:text-navy-200/70"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}