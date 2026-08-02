import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Language & Test Preparation",
  description:
    "German, IELTS and PTE preparation — visa-ready language courses and test coaching with mock exams at Shozani Global Consultancy.",
  alternates: { canonical: "/services/language" },
};

export default function Page() {
  return <ServicePage config={services["language"]} />;
}