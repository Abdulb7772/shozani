import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "UAE Destination Guide",
  description:
    "Work, live and invest in the UAE — tax-free income, employer sponsorships, Golden Visa and company formation from Shozani.",
  alternates: { canonical: "/countries/uae" },
};

export default function Page() {
  return <ServicePage config={countries.uae} />;
}