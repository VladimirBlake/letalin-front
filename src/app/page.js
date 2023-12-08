import AboutSection from "@/components/main/AboutSection";
import IntroSection from "@/components/main/IntroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
    </main>
  );
}
