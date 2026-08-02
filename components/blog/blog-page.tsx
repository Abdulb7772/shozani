"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Bookmark,
  Clock,
  Calendar,
  ArrowRight,
  Search,
  Tag,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = ["All", "Study Abroad", "Work Abroad", "Immigration", "Language", "News"] as const;

type Post = {
  title: string;
  excerpt: string;
  category: (typeof categories)[number];
  categoryShort: string;
  tags: string[];
  readTime: string;
  date: string;
  href: string;
  code: string;
};

const posts: Post[] = [
  {
    title: "Germany Opportunity Card 2026: Complete Guide for Pakistani Professionals",
    excerpt:
      "The Chancenkarte is your point-based entry ticket to Germany — here's who qualifies, how many points you need, and exactly how to apply.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Opportunity Card", "Germany", "Visa"],
    readTime: "8 min read",
    date: "July 28, 2026",
    href: "/blog/germany-opportunity-card-guide",
    code: "DEU",
  },
  {
    title: "Tuition-Free Study in Germany: 12 Universities That Charge No Fees",
    excerpt:
      "Public universities in Germany are still (almost) free. We break down which states still waive tuition, and what you really pay per month to live.",
    category: "Study Abroad",
    categoryShort: "Study",
    tags: ["Germany", "Universities", "Scholarships"],
    readTime: "6 min read",
    date: "July 21, 2026",
    href: "/blog/tuition-free-study-germany",
    code: "DEU",
  },
  {
    title: "IELTS vs PTE: Which English Test Should You Take in 2026?",
    excerpt:
      "Both are accepted across the UK, Canada and Australia. We compare scoring, availability, resits and which test is easier for your profile.",
    category: "Language",
    categoryShort: "Language",
    tags: ["IELTS", "PTE", "English Test"],
    readTime: "5 min read",
    date: "July 14, 2026",
    href: "/blog/ielts-vs-pte-2026",
    code: "GBR",
  },
  {
    title: "Canada Express Entry July 2026: Latest CRS Scores & In-Demand Jobs",
    excerpt:
      "CRS cut-offs keep moving. This month's update covers the latest draws, category-based selection and who got an ITA.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["Canada", "Express Entry", "CRS"],
    readTime: "7 min read",
    date: "July 8, 2026",
    href: "/blog/canada-express-entry-july-2026",
    code: "CAN",
  },
  {
    title: "Nursing in Germany: Salary, B2 German, and the Anerkennung Process",
    excerpt:
      "Nurses are among the most in-demand professionals in Germany. Here's the realistic timeline, pay scale and paperwork from application to Anerkennung.",
    category: "Work Abroad",
    categoryShort: "Work",
    tags: ["Nursing", "Healthcare", "Germany"],
    readTime: "9 min read",
    date: "July 1, 2026",
    href: "/blog/nursing-in-germany",
    code: "DEU",
  },
  {
    title: "Studio in Australia: Building Schools and a 2026 Blueprint",
    excerpt:
      "From choosing the right DHA-registered institution to the genuine-student interview, a practical blueprint for Australian enrolment.",
    category: "Study Abroad",
    categoryShort: "Study",
    tags: ["Australia", "Admissions", "PR Pathway"],
    readTime: "6 min read",
    date: "June 24, 2026",
    href: "/blog/study-in-australia",
    code: "AUS",
  },
  {
    title: "German Language A1–B2: How Long Does It Really Take?",
    excerpt:
      "That TELC or Goethe path doesn't have to take two years. A realistic timeline for studying A1 to B2 while working or studying.",
    category: "Language",
    categoryShort: "Language",
    tags: ["German", "Goethe", "Language"],
    readTime: "5 min read",
    date: "June 17, 2026",
    href: "/blog/german-a1-to-b2-timeline",
    code: "DEU",
  },
  {
    title: "UK Graduate Visa 2026: Post-Study Work Rules Still Worth It?",
    excerpt:
      "With the UK's updated salary thresholds, is the Graduate Route still the right path? The honest answer for fresh graduates.",
    category: "Immigration",
    categoryShort: "PR",
    tags: ["UK", "Graduate Route", "Visa"],
    readTime: "6 min read",
    date: "June 10, 2026",
    href: "/blog/uk-graduate-visa-2026",
    code: "GBR",
  },
  {
    title: "IELTS Band 7 in 6 Weeks: The Exact Study Plan Our Trainers Use",
    excerpt:
      "A tight, proven schedule our IELTS coaches give every student targeting a 7.0 — with the resources and mock tests that matter.",
    category: "Language",
    categoryShort: "Language",
    tags: ["IELTS", "Training", "Band 7"],
    readTime: "7 min read",
    date: "June 3, 2026",
    href: "/blog/ielts-band-7-in-6-weeks",
    code: "GBR",
  },
];

const featured = posts[0];

export function BlogPage() {
  const [category, setCategory] = React.useState<(typeof categories)[number]>("All");
  const [query, setQuery] = React.useState("");

  const isFeaturedVisible = category === "All" || featured.category === category;
  const showFeatured = isFeaturedVisible && query.trim() === "";

  const visiblePosts = posts
    .filter((p) => p.href !== featured.href)
    .filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });

  return (
    <>
      <BlogHero />
      <BlogFeeds
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
        visible={visiblePosts}
        showFeatured={showFeatured}
      />
      <NewsletterCta />
    </>
  );
}

function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-gold-50/40 pt-36 pb-20 sm:pt-44 sm:pb-24 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
      <div className="pointer-events-none absolute right-[-10%] top-0 size-[520px] rounded-full bg-gold-400/15 blur-[130px]" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">Home</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-700 dark:text-gold-300">Blog</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <Bookmark className="size-3.5" />
            Guides, News &amp; Resources
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            Learn before you <span className="text-gradient-gold">leave</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            Clear, practical guidance written by our counsellors — visa rules, university strategies,
            timelines and real hidden costs of going abroad.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function BlogFeeds({
  category,
  setCategory,
  query,
  setQuery,
  visible,
  showFeatured,
}: {
  category: (typeof categories)[number];
  setCategory: (c: (typeof categories)[number]) => void;
  query: string;
  setQuery: (q: string) => void;
  visible: Post[];
  showFeatured: boolean;
}) {
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Post categories">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-out-gold",
                  category === c
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold"
                    : "border border-navy-900/10 text-navy-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-navy-200/70 dark:hover:text-gold-300"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative lg:w-80">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-400 dark:text-navy-200/40" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts or tags..."
              aria-label="Search blog posts"
              className="w-full rounded-full border border-navy-900/10 bg-white py-3 pl-11 pr-5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 dark:border-white/10 dark:bg-navy-900/60 dark:text-white dark:placeholder:text-navy-200/40"
            />
          </div>
        </div>

        <SectionHeading
          eyebrow="Latest Articles"
          title={<>From our <span className="text-gradient-gold">counsellors</span></>}
        />

        {showFeatured && <FeaturedPost post={featured} />}

        {visible.length === 0 ? (
          <div className="rounded-3xl border border-navy-900/10 p-12 text-center dark:border-white/10">
            <Search className="mx-auto size-8 text-navy-300 dark:text-navy-600" />
            <p className="mt-4 font-display text-lg font-semibold text-navy-900 dark:text-white">
              No posts match your search
            </p>
            <p className="mt-1 text-sm text-navy-500 dark:text-navy-200/60">
              Try a different keyword or clear the category filter.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((post, i) => (
                <PostCard key={post.href} post={post} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="group mb-10 overflow-hidden rounded-[2rem] border border-gold-400/40 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-8 sm:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute -top-24 right-0 size-64 rounded-full bg-gold-400/15 blur-[80px]" aria-hidden />
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-3 py-1.5 text-xs font-bold text-navy-950">
          <Sparkles className="size-3.5" />
          Featured
        </span>
        <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-navy-100/80">{post.category}</span>
      </div>
      <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight text-white text-balance sm:text-3xl lg:text-4xl">
        <Link href={post.href} className="transition-colors hover:text-gold-300">
          {post.title}
        </Link>
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-100/70">{post.excerpt}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <PostMeta post={post} dark />
        <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
        <Link
          href={post.href}
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
        >
          Read the guide
          <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      layout
      key={post.href}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex h-full flex-col rounded-3xl border border-navy-900/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-luxe dark:border-white/10 dark:bg-navy-900/40"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 px-3 py-1.5 text-xs font-medium text-navy-700 dark:bg-white/10 dark:text-navy-100">
          <Tag className="size-3" />
          {post.categoryShort}
        </span>
        <span className="rounded-full border border-navy-900/10 px-2.5 py-1 font-display text-[10px] font-bold tracking-widest text-navy-400 dark:border-white/10 dark:text-navy-100/50">
          {post.code}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-700 dark:text-white dark:group-hover:text-gold-300">
        <Link href={post.href}>{post.title}</Link>
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{post.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-navy-900/[0.04] px-2.5 py-1 text-[11px] text-navy-500 dark:bg-white/5 dark:text-navy-200/60"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4 dark:border-white/10">
        <PostMeta post={post} />
        <Link
          href={post.href}
          aria-label={`Read ${post.title}`}
          className="grid size-9 place-items-center rounded-full border border-navy-900/10 text-navy-700 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-600 dark:border-white/15 dark:text-navy-100 dark:hover:text-gold-300"
        >
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </motion.article>
  );
}

function PostMeta({ post, dark }: { post: Post; dark?: boolean }) {
  const base = dark ? "text-navy-100/60" : "text-navy-500 dark:text-navy-200/60";
  return (
    <div className={cn("flex items-center gap-4 text-xs", base)}>
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="size-3.5" />
        {post.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-3.5" />
        {post.readTime}
      </span>
    </div>
  );
}

function NewsletterCta() {
  return (
    <section className="bg-gold-50/40 py-16 sm:py-20 dark:bg-navy-900/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-gold-400/30 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-10 text-center sm:p-14"
        >
          <h2 className="text-2xl font-semibold text-white text-balance sm:text-3xl">
          Visa deadlines, scholarships and new guides — <span className="text-gradient-gold">in your inbox</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/70">
            One useful email a week. No spam, unsubscribe anytime.
          </p>
          <form
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-navy-100/50 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 text-sm font-semibold text-navy-950 transition-colors hover:from-gold-400 hover:to-gold-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}