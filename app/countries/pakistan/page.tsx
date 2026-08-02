import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Pakistan — Your Journey Starts Here",
  description:
    "Pakistan-side support for your move abroad — document attestation, language training, GIC and finance structuring from Shozani.",
  alternates: { canonical: "/countries/pakistan" },
};

export default function Page() {
  return <ServicePage config={countries.pakistan} />;
}