import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "PTE Preparation",
  description:
    "PTE preparation for fast computer-based scoring — 48-hour results, templates and mocks from Shozani Global Consultancy.",
  alternates: { canonical: "/services/language/pte" },
};

export default function Page() {
  return <ServicePage config={services["language-pte"]} />;
}