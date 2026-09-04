import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Germany FAQs",
  description:
    "Every Germany question from Pakistani applicants answered — visas, costs, blocked accounts, family, recognition and settlement, honestly.",
  alternates: { canonical: "/countries/germany/faqs" },
};

const page = germanySubpages.find((s) => s.id === "faqs")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
