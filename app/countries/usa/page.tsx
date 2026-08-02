import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "USA Destination Guide",
  description:
    "Study in the USA — top-ranked universities, STEM OPT, I-20 and F-1 visa support with scholarship-led planning from Shozani.",
  alternates: { canonical: "/countries/usa" },
};

export default function Page() {
  return <ServicePage config={countries.usa} />;
}