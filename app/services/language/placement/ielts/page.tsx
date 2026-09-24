import type { Metadata } from "next";
import { PlacementTest } from "@/components/placement/placement-test";
import { ieltsPlacement } from "@/lib/placement-tests";

export const metadata: Metadata = {
  title: "IELTS Placement Test",
  description:
    "Free 3-minute IELTS placement test — 12 pure English questions that estimate your starting band from 4.0 to 7.5.",
  alternates: { canonical: "/services/language/placement/ielts" },
};

export default function Page() {
  return <PlacementTest config={ieltsPlacement} />;
}