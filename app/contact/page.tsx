import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Shozani Global Consultancy — Lahore head office plus support for Germany, Australia, Canada, UK, USA, UAE and Saudi Arabia. Book a free consultation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Shozani Global Consultancy",
    description:
      "Speak to a certified counsellor today. Free consultation, fixed prices, offices worldwide.",
  },
};

export default function Page() {
  return <ContactPage />;
}