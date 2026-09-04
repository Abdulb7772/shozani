import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Malaysia Destination Guide",
  description:
    "The complete Malaysia guide from Shozani Global Consultancy — affordable English-medium degrees, twinning programs, EMGS visa process and post-study work.",
  alternates: { canonical: "/countries/malaysia" },
};

export default function Page() {
  return <ServicePage config={countries.malaysia} />;
}