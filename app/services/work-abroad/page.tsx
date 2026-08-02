import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Work Abroad",
  description:
    "Work abroad programmes matching your skills to in-demand roles — Germany, UK, Europe and GCC with Shozani's placement desk.",
  alternates: { canonical: "/services/work-abroad" },
};

export default function Page() {
  return <ServicePage config={services["work-abroad"]} />;
}