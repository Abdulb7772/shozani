import type { Metadata } from "next";
import { VisaPage } from "@/components/visa/visa-page";

export const metadata: Metadata = {
  title: "Visa Services — Business & Visit Visas",
  description:
    "Business visas and visit visas filed end-to-end — company formation, investor residence, business meetings, family travel and eVisas across the UAE, Germany, Europe, the UK and the Gulf.",
  alternates: { canonical: "/services/visa" },
  openGraph: {
    title: "Business & Visit Visas | Shozani Global Consultancy",
    description:
      "Business visa and visit visa services — company formation, investor residence, business visits, family travel and eVisa processing with documents, timelines and FAQs.",
  },
};

export default function Page() {
  return <VisaPage />;
}
