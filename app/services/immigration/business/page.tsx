import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Business & Investment Immigration",
  description:
    "Business visas and investment migration — company formation, market entry and investor routes handled by Shozani Global Consultancy.",
  alternates: { canonical: "/services/immigration/business" },
};

export default function Page() {
  return <ServicePage config={services["immigration-business"]} />;
}