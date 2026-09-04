import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy | Shozani",
  description:
    "Which cookies the Shozani website uses, why, and how you can manage them.",
};

export default function CookiesPage() {
  return <LegalPage slug="cookies" />;
}