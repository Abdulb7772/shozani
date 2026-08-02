import type { Metadata } from "next";
import { BlogPage } from "@/components/blog/blog-page";

export const metadata: Metadata = {
  title: "Blog — Guides, News & Resources",
  description:
    "Guides, visa updates, university spotlights and career resources from Shozani Global Consultancy — study abroad, work abroad, immigration and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Shozani Global Consultancy",
    description:
      "Practical guides on studying, working and settling abroad — updated every week by our counsellors.",
  },
};

export default function Page() {
  return <BlogPage />;
}