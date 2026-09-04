import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Germany Work Visa",
  description:
    "Germany work visa for skilled professionals with a signed job offer — requirements, recognition, processing times and family rights from Shozani Global Consultancy.",
  alternates: { canonical: "/countries/germany/work-visa" },
};

const page = germanySubpages.find((s) => s.id === "work-visa")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
