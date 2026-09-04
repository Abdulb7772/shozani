import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Germany Job Seeker Visa",
  description:
    "The German §20 job-seeker visa — six months inside Germany to find a job, with requirements, funds proof and conversion to a work permit.",
  alternates: { canonical: "/countries/germany/job-seeker-visa" },
};

const page = germanySubpages.find((s) => s.id === "job-seeker-visa")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
