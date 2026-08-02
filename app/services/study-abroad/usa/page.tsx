import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Study in USA",
  description:
    "Top-ranked US universities and STEM pathways — scholarships, I-20 and F-1 visa support from Shozani Global Consultancy.",
  alternates: { canonical: "/services/study-abroad/usa" },
};

export default function Page() {
  return <ServicePage config={services["study-usa"]} />;
}