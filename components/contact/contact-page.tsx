"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Loader2,
  Heart,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialLinks } from "@/components/ui/social-links";

const offices = [
  { city: "Lahore (Head Office)", country: "Pakistan", address: "Office #12, Plaza 101, Gulberg III, Lahore", phone: "+92 42 3532 1234" },
  { city: "Karachi", country: "Pakistan", address: "Suite 5, Clifton Block 4, Karachi", phone: "+92 21 3534 5678" },
  { city: "Islamabad", country: "Pakistan", address: "Office #8, Blue Area, Islamabad", phone: "+92 51 287 4567" },
  { city: "Dubai", country: "UAE", address: "Office 340, Business Bay, Dubai", phone: "+971 4 567 8901" },
  { city: "Frankfurt", country: "Germany", address: "Kaiserstraße 43, 60329 Frankfurt", phone: "+49 69 1234 5678" },
  { city: "Toronto", country: "Canada", address: "Suite 210, 100 King Street W, Toronto", phone: "+1 416 555 0134" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  country: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "Study Abroad",
  country: "Germany",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <>
      <ContactHero />
      <ContactSection
        form={form}
        update={update}
        status={status}
        onSubmit={onSubmit}
      />
      <OfficesSection />
      <ContactCta />
    </>
  );
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gold-50/40 pt-36 pb-20 sm:pt-44 sm:pb-24 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
      <div className="pointer-events-none absolute right-[-10%] top-0 size-[520px] rounded-full bg-gold-400/15 blur-[130px]" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">Home</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-700 dark:text-gold-300">Contact</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <MessageCircle className="size-3.5" />
            We reply within 24 hours
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            Let&apos;s start your <span className="text-gradient-gold">conversation</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            Tell us a little about your goals and a certified counsellor will reach out — a free, no-obligation
            consultation is just one message away.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

const inputClasses =
  "w-full rounded-2xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 dark:border-white/10 dark:bg-navy-900/60 dark:text-white dark:placeholder:text-navy-200/40";

function ContactSection({
  form,
  update,
  status,
  onSubmit,
}: {
  form: FormState;
  update: (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  status: "idle" | "sending" | "sent";
  onSubmit: (e: React.FormEvent) => void;
}) {
  const cards = [
    { icon: MapPin, title: "Visit Us", text: "Gulberg III, Lahore, Pakistan", href: "#offices" },
    { icon: Phone, title: "Call Us", text: "+92 42 3532 1234", href: "tel:+924235321234" },
    { icon: Mail, title: "Email Us", text: "info@shozani.com", href: "mailto:info@shozani.com" },
    { icon: Clock, title: "Working Hours", text: "Mon–Sat · 10:00–19:00 PKT", href: "#" },
  ];

  return (
    <section className="relative z-10 -mt-8 pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {cards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group flex items-center gap-5 rounded-3xl border border-navy-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 text-gold-400 dark:from-gold-400 dark:to-gold-600 dark:text-navy-950">
                  <c.icon className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-400 dark:text-navy-200/50">
                    {c.title}
                  </p>
                  <p className="mt-0.5 font-display text-base font-medium text-navy-900 dark:text-white">
                    {c.text}
                  </p>
                </div>
              </a>
            ))}

            <div className="rounded-3xl border border-gold-400/30 bg-gradient-to-br from-navy-800 to-navy-950 p-6">
              <p className="font-display text-sm font-semibold text-white">Follow us</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-navy-900/10 bg-white p-7 shadow-luxe sm:p-9 dark:border-white/10 dark:bg-navy-900/40"
            aria-label="Contact form"
          >
            <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-white">
              Get a free consultation
            </h2>
            <p className="mt-2 text-sm text-navy-600 dark:text-navy-200/70">
              Fill the form and our team will reach out within 24 hours.
            </p>

            {status === "sent" ? (
              <div className="mt-8 rounded-2xl border border-gold-500/30 bg-gold-50 p-8 text-center dark:bg-white/5">
                <CheckCircle2 className="mx-auto size-12 text-gold-500" />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900 dark:text-white">
                  Message received!
                </h3>
                <p className="mt-2 text-sm text-navy-600 dark:text-navy-200/70">
                  Thank you {form.name.split(" ")[0] || "for reaching out"}. A consultant will contact you within
                  one business day.
                </p>
              </div>
            ) : (
              <div className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold text-navy-700 dark:text-navy-100">
                      Full Name
                    </label>
                    <input id="cf-name" type="text" required value={form.name} onChange={update("name")} placeholder="e.g. Ayesha Khan" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold text-navy-700 dark:text-navy-100">
                      Email
                    </label>
                    <input id="cf-email" type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" className={inputClasses} />
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-semibold text-navy-700 dark:text-navy-100">
                    Phone (WhatsApp)
                  </label>
                  <input id="cf-phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="+92 3xx xxxxxxx" className={inputClasses} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-service" className="mb-1.5 block text-xs font-semibold text-navy-700 dark:text-navy-100">
                      I&apos;m interested in
                    </label>
                    <select id="cf-service" value={form.service} onChange={update("service")} className={inputClasses}>
                      {["Study Abroad", "Work Abroad", "Immigration & PR", "Business Setup", "Language Training", "Construction"].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cf-country" className="mb-1.5 block text-xs font-semibold text-navy-700 dark:text-navy-100">
                      Destination
                    </label>
                    <select id="cf-country" value={form.country} onChange={update("country")} className={inputClasses}>
                      {["Germany", "Australia", "Canada", "USA", "UK", "Europe", "UAE", "Saudi Arabia", "Pakistan"].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold text-navy-700 dark:text-navy-100">
                    Message
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your goals, qualifications and timeline..."
                    className={inputClasses}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-1 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-8 text-sm font-semibold text-navy-950 shadow-gold transition-all duration-300 hover:from-gold-400 hover:to-gold-300 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="size-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

function OfficesSection() {
  return (
    <section id="offices" className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="Our Offices"
          title={<>Where to <span className="text-gradient-gold">find us</span></>}
          description="Drop in for a face-to-face consultation at any of our locations — or reach us online from anywhere."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-gold-500/10 text-gold-500">
                <MapPin className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900 dark:text-white">
                {office.city}
              </h3>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold-600 dark:text-gold-300">
                {office.country}
              </p>
              <p className="mt-2 text-sm text-navy-600 dark:text-navy-200/70">{office.address}</p>
              <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="mt-3 inline-block text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600 dark:text-white dark:hover:text-gold-300">
                {office.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="bg-gold-50/40 py-16 sm:py-20 dark:bg-navy-900/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-gold-400/30 bg-white p-8 text-center sm:p-10 md:flex-row md:text-left dark:bg-navy-900/40"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold-500 to-gold-400 text-navy-950">
              <Heart className="size-6" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-navy-900 dark:text-white sm:text-2xl">
                Prefer to talk on WhatsApp?
              </h2>
              <p className="mt-1 text-sm text-navy-600 dark:text-navy-200/70">
                Message us now and get a response in minutes during working hours.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-13 items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-5" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </Container>
    </section>
  );
}