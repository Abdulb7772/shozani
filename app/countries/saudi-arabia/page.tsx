import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Saudi Arabia Destination Guide",
  description:
    "Work in Saudi Arabia — job placement, Iqama work residency, Vision 2030 roles and Gulf career support from Shozani.",
  alternates: { canonical: "/countries/saudi-arabia" },
};

export default function Page() {
  return <ServicePage config={countries["saudi-arabia"]} />;
}