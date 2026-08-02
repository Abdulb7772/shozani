import { Container } from "@/components/ui/container";

const partners = [
  "DAAD",
  "TU Munich",
  "University of Sydney",
  "University of Toronto",
  "Glasgow Caledonian",
  "University of Melbourne",
  "Deakin University",
  "Wilfrid Laurier",
  "Culture Partners",
  "IUBH",
];

export function TrustedBy() {
  const doubled = [...partners, ...partners];
  return (
    <section className="border-b border-navy-900/10 bg-white py-14 dark:border-white/10 dark:bg-navy-950">
      <Container>
        <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-400 md:text-left dark:text-navy-300">
            Trusted by leading institutions
          </p>
          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-navy-950" aria-hidden />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-navy-950" aria-hidden />
            <div className="flex w-max animate-marquee items-center gap-10">
              {doubled.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.08em] text-navy-400 transition-colors hover:text-gold-500 dark:text-navy-200/50 dark:hover:text-gold-300"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}