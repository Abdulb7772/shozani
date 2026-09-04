import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Shozani",
  description:
    "The terms governing the use of Shozani counselling, visa and language services.",
};

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}