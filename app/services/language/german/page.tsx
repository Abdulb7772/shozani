import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { PlacementBanner } from "@/components/placement/placement-banner";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "German Language Courses",
  description:
    "German A1 to B2 courses with visa-ready certification — intensive, evening, in-person and online classes from Shozani Global Consultancy.",
  alternates: { canonical: "/services/language/german" },
};

export default function Page() {
  return (
    <>
      <PlacementBanner label="the German placement test" href="/services/language/placement/german" />
      <ServicePage config={services["language-german"]} />
    </>
  );
}