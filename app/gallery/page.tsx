import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Gallery | Shozani",
  description:
    "The leadership behind Shozani and the official certifications that verify our work.",
};

const LEADER = {
  src: "/images/WhatsApp Image 2026-09-11 at 11.23.07 AM.jpeg",
  name: "Our Leadership",
  role: "Founder & CEO",
  quote:
    "Every family that walks through our doors is carrying a future in their hands. We treat that trust as a responsibility — not a transaction.",
};

const CERTS = [
  { src: "/certificates/01.JPG", label: "Official Recognition" },
  { src: "/certificates/02.JPG", label: "Government Registered" },
  { src: "/certificates/03.JPG", label: "Licensed Consultancy" },
  { src: "/certificates/04.JPG", label: "Certified Service Provider" },
  { src: "/certificates/05.JPG", label: "Accredited Partner" },
  { src: "/certificates/06.JPG", label: "Member — Industry Body" },
  { src: "/certificates/07.JPG", label: "Registered Agent" },
  { src: "/certificates/08.JPG", label: "Association Member" },
  { src: "/certificates/09.JPG", label: "Verified Member" },
  { src: "/certificates/10.JPG", label: "Registered Office" },
  { src: "/certificates/11.JPG", label: "Authorized Representative" },
  { src: "/certificates/13.JPG", label: "Compliance Certified" },
  { src: "/certificates/14.JPG", label: "Trusted Partner" },
  { src: "/certificates/WhatsApp%20Image%202026-09-17%20at%206.47.59%20PM.jpeg", label: "Verified Certification" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-white pb-20 pt-36 dark:bg-navy-950 sm:pb-28 sm:pt-44">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                The people and proof behind <span className="text-gradient-gold">every story</span>
              </>
            }
            description="Leadership you can meetament and certificates you can check — sources of the trust families place in Shozani."
          />
        </Container>
      </section>

      <section className="bg-navy-50 py-20 dark:bg-navy-900/40">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Meet the people who <span className="text-gradient-gold">guide you</span>
              </>
            }
            align="left"
          />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
            <div className="relative mx-auto w-64 sm:w-72 lg:mx-0">
              <div className="absolute -inset-3 -rotate-3 rounded-3xl bg-gradient-to-br from-gold-500 to-gold-700 opacity-80" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-2xl dark:border-navy-900">
                <Image
                  src={LEADER.src}
                  alt={LEADER.name}
                  fill
                  sizes="(min-width: 1024px) 320px, 288px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold leading-snug text-navy-900 dark:text-white sm:text-3xl">
                &ldquo;{LEADER.quote}&rdquo;
              </p>
              <p className="mt-6 font-semibold text-navy-900 dark:text-white">{LEADER.name}</p>
              <p className="text-sm text-navy-500 dark:text-navy-200/70">{LEADER.role}</p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-600"
              >
                Get to know our team better
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 dark:bg-navy-950">
        <Container>
          <SectionHeading
            eyebrow="Certificates"
            title={
              <>
                Officially <span className="text-gradient-gold">certified</span>
              </>
            }
            description="Genuine licences and recognitions that verify our work — available to view in person at our offices."
          />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {CERTS.map((cert) => (
              <div
                key={cert.src}
                className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-lg border border-navy-900/10 bg-navy-50 p-1 shadow-sm transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-navy-900/40"
              >
                <Image
                  src={cert.src}
                  alt={cert.label}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-2.5">
                  <p className="text-center text-xs font-semibold text-white sm:text-sm">{cert.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
