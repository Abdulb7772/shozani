import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Cyprus Destination Guide",
  description:
    "The complete Cyprus guide from Shozani Global Consultancy — EU-recognised English degrees, student visa, pink slip residence and post-study work.",
  alternates: { canonical: "/countries/cyprus" },
};

export default function Page() {
  return <ServicePage config={countries.cyprus} />;
}