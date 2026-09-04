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
import { useLanguage } from "@/lib/i18n/language-provider";
import { postListings as posts, type PostListing as Post } from "@/lib/blog-posts";

const categories = ["All", "Study Abroad", "Work Abroad", "Immigration", "Language", "News"] as const;

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
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-20 sm:pt-44 sm:pb-24 dark:bg-navy-950">
      <div className="pointer-events-none absolute inset-0 navy-radial opacity-0 dark:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 dark:opacity-0" aria-hidden />
      <Container className="relative">
        <motion.nav
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label={t("Breadcrumb")}
          className="flex items-center gap-2 text-sm text-navy-500 dark:text-navy-100/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">{t("Home")}</Link>
          <ChevronRight className="size-4" />
          <span className="text-gold-700 dark:text-gold-300">{t("Blog")}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-600 bg-gold-600 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white dark:border-gold-400/30 dark:bg-white/5 dark:text-gold-300">
            <Bookmark className="size-3.5" />
            {t("Guides, News & Resources")}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-navy-900 text-balance sm:text-5xl lg:text-6xl dark:text-white">
            {t("Learn before you")} <span className="text-gradient-gold">{t("leave")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-600 sm:text-lg dark:text-navy-100/75">
            {t("Clear, practical guidance written by our counsellors — visa rules, university strategies, timelines and real hidden costs of going abroad.")}
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
  const { t } = useLanguage();
  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-navy-950">
      <Container>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label={t("Post categories")}>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-out-gold",
                  category === c
                    ? "bg-gold-600 text-white shadow-gold"
                    : "border border-navy-900/10 text-navy-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-navy-200/70 dark:hover:text-gold-300"
                )}
              >
                {t(c)}
              </button>
            ))}
          </div>

          <div className="relative lg:w-80">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-navy-400 dark:text-navy-200/40" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search posts or tags...")}
              aria-label={t("Search blog posts")}
              className="w-full rounded-full border border-navy-900/10 bg-white py-3 pl-11 pr-5 text-sm text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 dark:border-white/10 dark:bg-navy-900/60 dark:text-white dark:placeholder:text-navy-200/40"
            />
          </div>
        </div>

        <SectionHeading
          eyebrow={t("Latest Articles")}
          title={<>{t("From our")} <span className="text-gradient-gold">{t("counsellors")}</span></>}
        />

        {showFeatured && <FeaturedPost post={featured} />}

        {visible.length === 0 ? (
          <div className="rounded-3xl border border-navy-900/10 p-12 text-center dark:border-white/10">
            <Search className="mx-auto size-8 text-navy-300 dark:text-navy-600" />
            <p className="mt-4 font-display text-lg font-semibold text-navy-900 dark:text-white">
              {t("No posts match your search")}
            </p>
            <p className="mt-1 text-sm text-navy-500 dark:text-navy-200/60">
              {t("Try a different keyword or clear the category filter.")}
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
  const { t } = useLanguage();
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="group mb-10 overflow-hidden rounded-[2rem] border border-gold-400/40 bg-navy-900 p-8 sm:p-10 lg:p-12"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-600 px-3 py-1.5 text-xs font-bold text-white">
          <Sparkles className="size-3.5" />
          {t("Featured")}
        </span>
        <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-navy-100/80">{t(post.category)}</span>
      </div>
      <h2 className="mt-5 max-w-3xl font-display text-2xl font-semibold leading-tight text-white text-balance sm:text-3xl lg:text-4xl">
        <Link href={post.href} className="transition-colors hover:text-gold-300">
          {t(post.title)}
        </Link>
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-100/70">{t(post.excerpt)}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <PostMeta post={post} dark />
        <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
        <Link
          href={post.href}
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 transition-colors hover:text-gold-200"
        >
          {t("Read the guide")}
          <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

function PostCard({ post, index }: { post: Post; index: number }) {
  const { t } = useLanguage();
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
          {t(post.categoryShort)}
        </span>
        <span className="rounded-full border border-navy-900/10 px-2.5 py-1 font-display text-[10px] font-bold tracking-widest text-navy-400 dark:border-white/10 dark:text-navy-100/50">
          {post.code}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-700 dark:text-white dark:group-hover:text-gold-300">
        <Link href={post.href}>{t(post.title)}</Link>
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-200/70">{t(post.excerpt)}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-navy-900/[0.04] px-2.5 py-1 text-[11px] text-navy-500 dark:bg-white/5 dark:text-navy-200/60"
          >
            #{t(tag)}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4 dark:border-white/10">
        <PostMeta post={post} />
        <Link
          href={post.href}
          aria-label={`${t("Read")} ${t(post.title)}`}
          className="grid size-9 place-items-center rounded-full border border-navy-900/10 text-navy-700 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-600 dark:border-white/15 dark:text-navy-100 dark:hover:text-gold-300"
        >
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </motion.article>
  );
}

function PostMeta({ post, dark }: { post: Post; dark?: boolean }) {
  const { t } = useLanguage();
  const base = dark ? "text-navy-100/60" : "text-navy-500 dark:text-navy-200/60";
  return (
    <div className={cn("flex items-center gap-4 text-xs", base)}>
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="size-3.5" />
        {post.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-3.5" />
        {t(post.readTime)}
      </span>
    </div>
  );
}

function NewsletterCta() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy-50/60 py-16 sm:py-20 dark:bg-navy-900/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-gold-400/30 bg-navy-900 p-10 text-center sm:p-14"
        >
          <h2 className="text-2xl font-semibold text-white text-balance sm:text-3xl">
            {t("Visa deadlines, scholarships and new guides —")} <span className="text-gradient-gold">{t("in your inbox")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-navy-100/70">
            {t("One useful email a week. No spam, unsubscribe anytime.")}
          </p>
          <form
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder={t("Your email address")}
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-navy-100/50 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              {t("Subscribe")}
            </button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}