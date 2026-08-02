import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Business & Investment",
  description:
    "Company formation, business visas and investment advisory across UAE, Germany and Europe — incorporation, licensing and banking as one package.",
  alternates: { canonical: "/services/business" },
};

export default function Page() {
  return <ServicePage config={services.business} />;
}