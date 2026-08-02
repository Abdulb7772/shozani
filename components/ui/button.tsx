import * as React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy-900 text-white shadow-luxe hover:bg-navy-800 hover:shadow-lg dark:bg-white dark:text-navy-900 dark:hover:bg-gold-100",
  gold: "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold hover:from-gold-400 hover:to-gold-300",
  outline:
    "border border-navy-200 bg-transparent text-navy-800 hover:border-gold-400 hover:text-gold-600 dark:border-white/20 dark:text-navy-100 dark:hover:border-gold-400 dark:hover:text-gold-300",
  ghost:
    "bg-transparent text-navy-700 hover:bg-navy-100 dark:text-navy-100 dark:hover:bg-white/10",
  glass:
    "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
  xl: "h-14 px-10 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-display font-medium tracking-tight transition-all duration-300 hover:delay-125 ease-out-gold active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {children}
      {withArrow && !loading && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (props.href !== undefined || "href" in props) {
    const href = (props as ButtonAsLink).href;
    if (typeof href === "string" && href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </Link>
      );
    }
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const btnProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...btnProps}>
      {content}
    </button>
  );
}