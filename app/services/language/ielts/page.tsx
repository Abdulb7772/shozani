import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "IELTS Preparation",
  description:
    "IELTS band 7+ coaching with mock tests and feedback — structured study plans from Shozani Global Consultancy.",
  alternates: { canonical: "/services/language/ielts" },
};

export default function Page() {
  return <ServicePage config={services["language-ielts"]} />;
}