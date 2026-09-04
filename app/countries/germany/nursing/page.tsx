import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Nursing in Germany",
  description:
    "German nursing visas for qualified nurses — recognition, B1/B2 language requirements, salaries and the fast-track healthcare route from Pakistan.",
  alternates: { canonical: "/countries/germany/nursing" },
};

const page = germanySubpages.find((s) => s.id === "nursing")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
