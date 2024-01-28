"use client";
import ServicesIntroSection from "@/components/services/ServicesIntroSection";
import ServicesServiceSection from "@/components/services/ServicesServiceSection";
import { services } from "@/data/Services";

export default function ServicesPage() {
  return (
    <main>
      <ServicesIntroSection />
      {services.map((service, i) => (
        <ServicesServiceSection
          key={i}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </main>
  );
}
