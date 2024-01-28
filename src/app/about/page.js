"use client";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import CertificatesSection from "@/components/about/CertificatesSection";
import ParticipatesSection from "@/components/about/ParticipatesSection";
import PartnersSection from "@/components/about/PartnersSection";
import { participants } from "@/data/Participants";

export default function AboutPage() {
  return (
    <main>
      <AboutIntroSection />
      <CertificatesSection />
      {participants.map((participation, i) => (
        <ParticipatesSection key={i} {...participation} />
      ))}
      <PartnersSection />
    </main>
  );
}
