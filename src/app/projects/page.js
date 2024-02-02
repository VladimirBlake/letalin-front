"use client";
import OurProjectsSection from "@/components/projects/OurProjectsSection";
import ProjectIntroSection from "@/components/projects/ProjectIntroSection";

export default function ProjectsPage() {
  return (
    <main className="overflow-x-clip">
      <ProjectIntroSection />
      <OurProjectsSection />
    </main>
  );
}
