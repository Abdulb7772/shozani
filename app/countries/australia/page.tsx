import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Australia Destination Guide",
  description:
    "Study, work and settle in Australia — admissions, student visa, post-study work and PR migration pathways from Shozani.",
  alternates: { canonical: "/countries/australia" },
};

export default function Page() {
  return <ServicePage config={countries.australia} />;
}