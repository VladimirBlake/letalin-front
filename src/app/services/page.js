"use client";
import ServicesIntroSection from "@/components/services/ServicesIntroSection";
import ServicesSoprItem from "@/components/services/ServicesSoprSection";
import ServicesServiceSection from "@/components/services/ServicesServiceSection";
import Service1 from "@/images/services/service1.png";
import { services } from "@/data/Services";
import ExtraServicesSection from "@/components/services/ExtraServicesSection";

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
      <ServicesSoprItem />
      <ServicesServiceSection
        image={Service1}
        title={"Разработка комплектов рабочей документации:"}
        description={
          "Генеральный план; архитектурные решения; архитектурно-строительные решения; конструкции железобетонные; силовое электрооборудование, электрическое освещение внутреннее; электроснабжение; наружное электроосвещение; отопление, вентиляция и кондиционирование воздуха; тепломеханические решения тепловых сетей; внутренние системы водоснабжения и канализации; наружные сети водоснабжения; наружные сети ливневой канализации; производственная канализации сельхозпредприятий; пожарная сигнализация; сети связи; смета на строительство."
        }
      />
      <ExtraServicesSection />
    </main>
  );
}
