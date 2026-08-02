import type { Metadata } from "next";
import { SuccessStoriesPage } from "@/components/success/success-stories-page";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real stories from students, workers and business owners who moved abroad through Shozani Global Consultancy — study, work, PR and settlement.",
  alternates: { canonical: "/success-stories" },
  openGraph: {
    title: "Success Stories | Shozani Global Consultancy",
    description:
      "Read verified stories from 10,000+ clients who studied, worked and settled abroad through Shozani.",
  },
};

export default function Page() {
  return <SuccessStoriesPage />;
}