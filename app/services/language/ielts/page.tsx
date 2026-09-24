import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { PlacementBanner } from "@/components/placement/placement-banner";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "IELTS Preparation",
  description:
    "IELTS band 7+ coaching with mock tests and feedback — structured in-person or online study plans from Shozani Global Consultancy.",
  alternates: { canonical: "/services/language/ielts" },
};

export default function Page() {
  return (
    <>
      <PlacementBanner label="the IELTS placement test" href="/services/language/placement/ielts" />
      <ServicePage config={services["language-ielts"]} />
    </>
  );
}