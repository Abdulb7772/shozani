import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "Germany Salary Guide",
  description:
    "Realistic German salaries by profession — engineers, IT, nursing and trades, with gross-to-net calculations and regional differences explained.",
  alternates: { canonical: "/countries/germany/salary-guide" },
};

const page = germanySubpages.find((s) => s.id === "salary-guide")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
