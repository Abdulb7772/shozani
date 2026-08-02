import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Work in Germany",
  description:
    "Germany Opportunity Card, IT and nursing work visas — job matching and full migration support from Shozani Global Consultancy.",
  alternates: { canonical: "/services/work-abroad/germany" },
};

export default function Page() {
  return <ServicePage config={services["work-germany"]} />;
}