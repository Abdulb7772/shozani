import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Turkey Destination Guide",
  description:
    "The complete Turkey guide from Shozani Global Consultancy — Türkiye Bursları scholarships, low tuition, student visa and residence permit routes.",
  alternates: { canonical: "/countries/turkey" },
};

export default function Page() {
  return <ServicePage config={countries.turkey} />;
}