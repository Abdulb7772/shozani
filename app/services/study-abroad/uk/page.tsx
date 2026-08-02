import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Study in UK",
  description:
    "Elite UK institutions with two-year post-study work visas — admissions, CAS and visa support from Shozani.",
  alternates: { canonical: "/services/study-abroad/uk" },
};

export default function Page() {
  return <ServicePage config={services["study-uk"]} />;
}