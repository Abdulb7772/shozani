import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Study in Canada",
  description:
    "Canadian colleges and universities with PGWP and fast-track PR eligibility — full admissions and visa support from Shozani.",
  alternates: { canonical: "/services/study-abroad/canada" },
};

export default function Page() {
  return <ServicePage config={services["study-canada"]} />;
}