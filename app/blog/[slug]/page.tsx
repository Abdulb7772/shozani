import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/blog-post-view";
import { postListings, postsBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return Object.keys(postsBySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsBySlug[slug];
  if (!post) return {};
  const listing = postListings.find((p) => p.href === `/blog/${slug}`);
  return {
    title: listing?.title ?? slug,
    description: listing?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!postsBySlug[slug]) {
    notFound();
  }
  return <BlogPostView slug={slug} />;
}