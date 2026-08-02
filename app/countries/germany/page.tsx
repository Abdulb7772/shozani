import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Germany Destination Guide",
  description:
    "Study, work and PR in Germany — tuition-free universities, APS, blocked account and visa timelines from Shozani Global Consultancy.",
  alternates: { canonical: "/countries/germany" },
};

export default function Page() {
  return <ServicePage config={countries.germany} />;
}