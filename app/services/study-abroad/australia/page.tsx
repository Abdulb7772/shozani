import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Study in Australia",
  description:
    "Australian degrees with employer sponsorship and PR pathways via skilled migration — admissions and visa managed by Shozani.",
  alternates: { canonical: "/services/study-abroad/australia" },
};

export default function Page() {
  return <ServicePage config={services["study-australia"]} />;
}