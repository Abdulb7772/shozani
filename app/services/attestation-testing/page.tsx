import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Attestation & Testing",
  description:
    "Degree attestation, HEC verification, apostille, certified translation and language testing from Shozani Global Consultancy.",
  alternates: { canonical: "/services/attestation-testing" },
};

export default function Page() {
  return <ServicePage config={services["attestation-testing"]} />;
}