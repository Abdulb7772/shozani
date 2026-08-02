"use client";

import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

type Social = { label: string; href: string; path: string };

const socials: Social[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/shozani",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/shozani",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/shozani",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@shozani",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/shozani",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

const SocialIcon = ({ path }: { path: string }) => (
  <svg viewBox="0 0 24 24" className="size-[18px] fill-current" aria-hidden>
    <path d={path} />
  </svg>
);

const serviceLinks = [
  { title: "Study Abroad", href: "/services/study-abroad" },
  { title: "Work Abroad", href: "/services/work-abroad" },
  { title: "Immigration", href: "/services/immigration" },
  { title: "Business Setup", href: "/services/business" },
  { title: "Construction", href: "/services/construction" },
  { title: "Language Training", href: "/services/language" },
];

const countryLinks = [
  { title: "Germany", href: "/countries/germany" },
  { title: "Australia", href: "/countries/australia" },
  { title: "Canada", href: "/countries/canada" },
  { title: "United Kingdom", href: "/countries/uk" },
  { title: "USA", href: "/countries/usa" },
  { title: "Saudi Arabia", href: "/countries/saudi-arabia" },
  { title: "UAE", href: "/countries/uae" },
];

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Why Shozani", href: "/why-shozani" },
  { title: "Success Stories", href: "/success-stories" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "/legal/privacy" },
  { title: "Terms of Service", href: "/legal/terms" },
  { title: "Cookie Policy", href: "/legal/cookies" },
  { title: "Refund Policy", href: "/legal/refund-policy" },
];

function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState<"idle" | "done">("idle");

  return (
    <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-br from-navy-800 to-navy-950 p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-white">
        Explore what&apos;s possible
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-100/70">
        Get early visa updates, scholarship alerts and deadline reminders. No spam, unsubscribe anytime.
      </p>
      {state === "done" ? (
        <p className="mt-5 flex items-center gap-2 text-sm font-medium text-gold-300">
          <CheckCircle2 className="size-4" />
          You&apos;re subscribed. Welcome aboard!
        </p>
      ) : (
        <form
          className="mt-5 flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setState("done");
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-navy-100/50 focus:border-gold-400 focus:outline-none"
          />
          <button
            type="submit"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 text-sm font-semibold text-navy-950 transition-all hover:from-gold-400 hover:to-gold-300"
          >
            Subscribe
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      )}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100/70">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -top-40 right-0 size-[420px] rounded-full bg-gold-500/10 blur-[120px]" aria-hidden />

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:py-20">
          <div className="space-y-6">
            <Logo dark />
            <p className="max-w-sm text-sm leading-relaxed">
              Shozani Global Consultancy is your trusted global opportunities platform — helping you study,
              work, settle and invest across the world with transparency and 20+ years of expertise.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold-400/70 hover:text-gold-300"
                >
                  <SocialIcon path={s.path} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services">
            {serviceLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Countries">
            {countryLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <div className="space-y-8">
            <FooterColumn title="Company">
              {companyLinks.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.title}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Legal">
              {legalLinks.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.title}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="grid gap-6 border-t border-white/10 py-10 lg:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
            <div>
              <p className="font-medium text-white">Head Office</p>
              <p className="text-sm">Office #12, Plaza 101, Gulberg III, Lahore, Pakistan</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" />
            <div>
              <p className="font-medium text-white">Call us</p>
              <a href="tel:+924235321234" className="text-sm hover:text-gold-300">
                +92 42 3532 1234
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" />
            <div>
              <p className="font-medium text-white">Email</p>
              <a href="mailto:info@shozani.com" className="text-sm hover:text-gold-300">
                info@shozani.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 pb-12">
          <Newsletter />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-navy-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Shozani Global Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Clock className="size-3.5" aria-hidden />
            <span>Mon – Sat: 10:00 AM – 7:00 PM (PKT)</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm transition-colors hover:text-gold-300"
      >
        {children}
      </Link>
    </li>
  );
}