import type { Metadata } from "next";
import { PlacementCards } from "@/components/placement/placement-cards";
import { PlacementBanner } from "@/components/placement/placement-banner";

export const metadata: Metadata = {
  title: "Free Language Placement Tests",
  description:
    "Free, 3-minute pure-language placement tests for German, IELTS and PTE — find your current level before you book the real exam.",
  alternates: { canonical: "/services/language/placement" },
};

export default function Page() {
  return (
    <>
      <PlacementBanner label="all three placement tests" href="/services/language/placement/german" />
      <PlacementCards showHeading />
    </>
  );
}