import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Study in Germany",
  description:
    "Tuition-free degrees at 400+ German public universities — APS, blocked account and visa handled end-to-end by Shozani Global Consultancy.",
  alternates: { canonical: "/services/study-abroad/germany" },
};

export default function Page() {
  return <ServicePage config={services["study-germany"]} />;
}