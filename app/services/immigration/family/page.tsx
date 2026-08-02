import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Family Immigration",
  description:
    "Reunite with family abroad — spouse, parent and dependent visas prepared and filed accurately by Shozani Global Consultancy.",
  alternates: { canonical: "/services/immigration/family" },
};

export default function Page() {
  return <ServicePage config={services["immigration-family"]} />;
}