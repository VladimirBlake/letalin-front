import AboutSection from "@/components/main/AboutSection";
import IntroSection from "@/components/main/IntroSection";
import ServicesSection from "@/components/main/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
