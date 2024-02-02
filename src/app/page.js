"use client";
import AboutSection from "@/components/main/AboutSection";
import FormSection from "@/components/main/FormSection";
import IntroSection from "@/components/main/IntroSection";
import ProfessionalsSection from "@/components/main/ProfessionalsSection";
import ServicesSection from "@/components/main/ServicesSection";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <ProfessionalsSection />
      <FormSection />
    </main>
  );
}
