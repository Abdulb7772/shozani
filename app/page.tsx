import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { Services } from "@/components/home/services";
import { Countries } from "@/components/home/countries";
import { Process } from "@/components/home/process";
import { Faq } from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Countries />
      <Process />
      <Faq />
    </>
  );
}