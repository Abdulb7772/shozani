import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Permanent Residence",
  description:
    "Permanent residence pathways for skilled professionals in Canada, Australia, New Zealand and Europe — points, documents and filing.",
  alternates: { canonical: "/services/immigration/permanent-residence" },
};

export default function Page() {
  return <ServicePage config={services["immigration-pr"]} />;
}