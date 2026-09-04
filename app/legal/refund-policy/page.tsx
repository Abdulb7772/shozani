import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Refund Policy | Shozani",
  description:
    "When Shozani service fees are refundable and how to request a refund.",
};

export default function RefundPolicyPage() {
  return <LegalPage slug="refund-policy" />;
}