import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shozani Global Consultancy — a global opportunities platform helping students and professionals study, work, and settle abroad for over 20 years.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Shozani Global Consultancy",
    description:
      "Learn about Shozani Global Consultancy — our story, mission and the values that drive 100+ success stories worldwide.",
  },
};

export default function Page() {
  return <AboutPage />;
}