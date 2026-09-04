import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Ausbildung in Germany",
  description:
    "Paid vocational training in Germany — the dual Ausbildung system, training salaries, eligible trades and the route to a permanent German career.",
  alternates: { canonical: "/countries/germany/ausbildung" },
};

const page = germanySubpages.find((s) => s.id === "ausbildung")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
