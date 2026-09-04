import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { GermanyGuideSection } from "@/components/service/germany-guide-section";
import { countries } from "@/lib/countries-data";

export const metadata: Metadata = {
  title: "Germany Destination Guide",
  description:
    "The complete Germany guide from Shozani Global Consultancy — work visas, Opportunity Card, nursing, Ausbildung, IT jobs, salary guide, German language and FAQs.",
  alternates: { canonical: "/countries/germany" },
};

export default function Page() {
  return (
    <>
      <ServicePage config={countries.germany} />
      <GermanyGuideSection />
    </>
  );
}
