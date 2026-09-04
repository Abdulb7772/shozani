import type { Metadata } from "next";
import { ServicePage } from "@/components/service/service-page";
import { germanySubpages } from "@/lib/germany-data";

export const metadata: Metadata = {
  title: "German Language Training",
  description:
    "German language training A1 to B2 with exam preparation — which CEFR level each Germany visa requires and how long each level takes.",
  alternates: { canonical: "/countries/germany/german-language" },
};

const page = germanySubpages.find((s) => s.id === "german-language")!;

export default function Page() {
  return <ServicePage config={page.config} />;
}
