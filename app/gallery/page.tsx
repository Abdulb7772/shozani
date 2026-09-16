import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Gallery | Shozani",
  description: "Flags and destinations Shozani works with - Germany, UK, Canada, USA, Australia, Cyprus, Malaysia, UAE, Turkey and Pakistan.",
};

const flags = [
  { src: "/images/GERMANY.png", title: "Germany", href: "/services/study-abroad/germany" },
  { src: "/images/UK.png", title: "United Kingdom", href: "/services/study-abroad/uk" },
  { src: "/images/CANADA.png", title: "Canada", href: "/services/study-abroad/canada" },
  { src: "/images/USA.png", title: "USA", href: "/services/study-abroad/usa" },
  { src: "/images/AUS.png", title: "Australia", href: "/services/study-abroad/australia" },
  { src: "/images/CYPRUS.png", title: "Cyprus", href: "/services/study-abroad/cyprus" },
  { src: "/images/malaysia.png", title: "Malaysia", href: "/services/study-abroad/malaysia" },
  { src: "/images/turkey.png", title: "Turkey", href: "/services/study-abroad/turkey" },
  { src: "/images/SA,UAE.png", title: "UAE", href: "/services/work-abroad/uae" },
  { src: "/images/pk.png", title: "Pakistan", href: "/services/study-abroad/pakistan" },
];

export default function GalleryPage() {
  return (
    <section className="bg-white pt-36 pb-20 sm:pt-44 sm:pb-28 dark:bg-navy-950">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Countries we <span className="text-gradient-gold">work with</span>
            </>
          }
          description="Flags from the destinations where Shozani places students and professionals."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {flags.map((flag) => (
            <Link
              key={flag.src}
              href={flag.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy-900/10 bg-white dark:border-white/10 dark:bg-navy-900/40"
            >
              <Image
                src={flag.src}
                alt={`Flag of ${flag.title}`}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-950/70 px-3 py-1 text-xs font-semibold text-white">
                {flag.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/why-shozani"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gold-600"
          >
            Learn why families choose Shozani
          </Link>
        </div>
      </Container>
    </section>
  );
}
