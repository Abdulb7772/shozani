import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Canada Destination Guide",
  description:
    "Study, work and qualify for PR in Canada — DLI admission, study permit, PGWP and Express Entry pathway from Shozani.",
  alternates: { canonical: "/countries/canada" },
};

export default function Page() {
  return <ServicePage config={countries.canada} />;
}