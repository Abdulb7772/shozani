import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "German Language Courses",
  description:
    "German A1 to C1 courses with visa-ready certification — intensive, evening and online classes from Shozani Global Consultancy.",
  alternates: { canonical: "/services/language/german" },
};

export default function Page() {
  return <ServicePage config={services["language-german"]} />;
}