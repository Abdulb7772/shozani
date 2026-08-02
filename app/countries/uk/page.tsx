import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "United Kingdom Destination Guide",
  description:
    "Study and work in the UK — elite universities, CAS, student visa and the two-year Graduate Visa stay-back from Shozani.",
  alternates: { canonical: "/countries/uk" },
};

export default function Page() {
  return <ServicePage config={countries.uk} />;
}