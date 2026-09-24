import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { PlacementCards } from "@/components/placement/placement-cards";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Language & Test Preparation",
  description:
    "German, IELTS and PTE preparation — free placement tests, visa-ready language courses and test coaching with mock exams, available as online and in-person sessions at Shozani Global Consultancy.",
  alternates: { canonical: "/services/language" },
};

export default function Page() {
  return (
    <>
      <ServicePage config={services["language"]} />
      <PlacementCards showHeading={false} />
    </>
  );
}