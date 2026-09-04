import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "IT Jobs in Germany",
  description:
    "German IT jobs for tech professionals — the IT specialist visa without a degree, in-demand skills, salaries and the fastest tech route from Pakistan.",
  alternates: { canonical: "/countries/germany/it-jobs" },
};

const page = germanySubpages.find((s) => s.id === "it-jobs")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
