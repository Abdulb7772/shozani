import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Architecture, interior design, house building and project management — design & build with dedicated site supervision and on-time handovers.",
  alternates: { canonical: "/services/construction" },
};

export default function Page() {
  return <ServicePage config={services.construction} />;
}