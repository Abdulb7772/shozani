import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Germany Skilled Worker Visa",
  description:
    "The German Skilled Worker Visa (Fachkraft) — for professionals with recognised qualifications, including requirements, process and the PR timeline.",
  alternates: { canonical: "/countries/germany/skilled-worker-visa" },
};

const page = germanySubpages.find((s) => s.id === "skilled-worker-visa")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
