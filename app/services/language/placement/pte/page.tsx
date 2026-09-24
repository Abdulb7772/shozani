import type { Metadata } from "next";
import { PlacementTest } from "@/components/placement/placement-test";
import { ptePlacement } from "@/lib/placement-tests";

export const metadata: Metadata = {
  title: "PTE Placement Test",
  description:
    "Free 3-minute PTE placement test — 12 computer-style English questions that estimate your PTE score range.",
  alternates: { canonical: "/services/language/placement/pte" },
};

export default function Page() {
  return <PlacementTest config={ptePlacement} />;
}