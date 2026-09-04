import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Tajikistan Destination Guide",
  description:
    "The complete Tajikistan guide from Shozani Global Consultancy — affordable medical and engineering programs, invitation letter, visa and enrolment process.",
  alternates: { canonical: "/countries/tajikistan" },
};

export default function Page() {
  return <ServicePage config={countries.tajikistan} />;
}