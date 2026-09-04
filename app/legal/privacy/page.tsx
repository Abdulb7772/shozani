import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Shozani",
  description:
    "How Shozani collects, uses and protects your personal data across counselling and application services.",
};

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}