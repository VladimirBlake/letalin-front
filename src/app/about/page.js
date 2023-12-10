import AboutIntroSection from "@/components/about/AboutIntroSection";
import CertificatesSection from "@/components/about/CertificatesSection";
import ParticipatesSection from "@/components/about/ParticipatesSection";
import { participants } from "@/data/Participants";

export default function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <CertificatesSection />
      {participants.map((participation, i) => (
        <ParticipatesSection key={i} {...participation} />
      ))}
    </>
  );
}
