import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Europe Destination Guide",
  description:
    "Study and work across Europe — Schengen mobility, affordable EU universities, national residency permits and PR routes.",
  alternates: { canonical: "/countries/europe" },
};

export default function Page() {
  return <ServicePage config={countries.europe} />;
}