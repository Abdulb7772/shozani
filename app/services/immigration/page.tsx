import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Immigration",
  description:
    "Immigration services — permanent residence, family sponsorship and business migration for Canada, Australia, Germany and Europe.",
  alternates: { canonical: "/services/immigration" },
};

export default function Page() {
  return <ServicePage config={services["immigration"]} />;
}