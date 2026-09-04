"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Lock, Mail, ShieldCheck, User } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-provider";

export default function LoginPage() {
  const { t, lang } = useLanguage();
  const de = lang === "de";
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);

  const inputClass =
    "mt-2 w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-400 focus:border-gold-400/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-navy-200/40";

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-36 pb-20 sm:pt-44 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label={t("Breadcrumb")}
          className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("Home")}</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-700 dark:text-gold-300">{t("Login")}</span>
        </motion.nav>

        <div className="mx-auto mt-12 max-w-md">
          {signedIn ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[2rem] border border-gold-400/40 bg-navy-900 p-10 text-center"
            >
              <ShieldCheck className="mx-auto size-12 text-gold-400" />
              <h1 className="mt-5 text-2xl font-semibold text-white">
                {t("Welcome back!")}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/70">
                {de
                  ? "Die Demo-Anmeldung ist erfolgreich. In der vollständigen Version sehen Sie hier Ihren Fallstatus, Dokumente und Meilensteine."
                  : "Demo sign-in successful. In the full version you will see your case status, documents and milestones here."}
              </p>
              <div className="mt-6">
                <Button variant="gold" href="/" withArrow>
                  {t("Back to Home")}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-[2rem] border border-navy-900/10 bg-white p-8 shadow-luxe sm:p-10 dark:border-white/10 dark:bg-navy-900/40"
            >
              <div className="text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-navy-900 text-gold-300 dark:bg-white/10">
                  <User className="size-6" />
                </span>
                <h1 className="mt-6 text-2xl font-semibold text-navy-900 dark:text-white">
                  {t("Client login")}
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-navy-200/60">
                  {t("Track your case progress, uploaded documents and appointments in one place.")}
                </p>
              </div>

              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSignedIn(true);
                }}
              >
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Email address")}</span>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-400 dark:text-navy-200/40" aria-hidden />
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={`${inputClass} pl-11`} />
                  </div>
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-navy-500 dark:text-navy-200/60">{t("Password")}</span>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-400 dark:text-navy-200/40" aria-hidden />
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className={`${inputClass} pl-11`} />
                  </div>
                </label>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-navy-600 dark:text-navy-200/70">
                    <input type="checkbox" className="size-4 accent-gold-600" />
                    {t("Remember me")}
                  </label>
                  <a href="mailto:shozani.group@gmail.com" className="text-gold-700 transition-colors hover:text-gold-600 dark:text-gold-300">
                    {t("Forgot password?")}
                  </a>
                </div>

                <Button type="submit" variant="gold" size="lg" withArrow className="w-full">
                  {t("Sign in")}
                </Button>
              </form>

              <p className="mt-6 border-t border-navy-900/10 pt-5 text-center text-xs text-navy-500 dark:border-white/10 dark:text-navy-200/50">
                {t("No account yet?")}{" "}
                <Link href="/apply" className="font-semibold text-gold-700 transition-colors hover:text-gold-600 dark:text-gold-300">
                  {t("Start your application")} <ArrowRight className="inline size-3" aria-hidden />
                </Link>
              </p>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}