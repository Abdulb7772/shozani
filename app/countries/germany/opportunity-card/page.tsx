import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Germany Opportunity Card",
  description:
    "The German Opportunity Card (Chancenkarte) — points-based job search visa with 12 months of validity, trial-work rights and conversion to a work visa.",
  alternates: { canonical: "/countries/germany/opportunity-card" },
};

const page = germanySubpages.find((s) => s.id === "opportunity-card")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
