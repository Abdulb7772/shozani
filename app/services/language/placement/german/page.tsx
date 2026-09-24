import type { Metadata } from "next";
import { PlacementTest } from "@/components/placement/placement-test";
import { germanPlacement } from "@/lib/placement-tests";

export const metadata: Metadata = {
  title: "German Placement Test",
  description:
    "Free 3-minute German placement test — 12 pure-language questions that place you on the CEFR scale from A1 to B2.",
  alternates: { canonical: "/services/language/placement/german" },
};

export default function Page() {
  return <PlacementTest config={germanPlacement} />;
}