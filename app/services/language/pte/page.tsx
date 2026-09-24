import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { PlacementBanner } from "@/components/placement/placement-banner";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "PTE Preparation",
  description:
    "PTE preparation for fast computer-based scoring — 48-hour results, templates and mocks, in-person or online, from Shozani Global Consultancy.",
  alternates: { canonical: "/services/language/pte" },
};

export default function Page() {
  return (
    <>
      <PlacementBanner label="the PTE placement test" href="/services/language/placement/pte" />
      <ServicePage config={services["language-pte"]} />
    </>
  );
}