import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Study Abroad",
  description:
    "Study abroad with Shozani Global Consultancy — admissions, scholarships and visa for Germany, UK, Australia, Canada, USA and Europe.",
  alternates: { canonical: "/services/study-abroad" },
};

export default function Page() {
  return <ServicePage config={services["study-abroad"]} />;
}