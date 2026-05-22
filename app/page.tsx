"use client";

import { useMemo, useState } from "react";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  Header,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from "@/components/portfolio-sections";
import { Lang, portfolioData } from "@/data/portfolioData";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  const content = useMemo(() => portfolioData.content[lang], [lang]);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-platinum">
      <Header
        lang={lang}
        nav={content.nav}
        onLanguageChange={() => setLang((current) => (current === "en" ? "es" : "en"))}
      />
      <HeroSection content={content} lang={lang} />
      <AboutSection content={content} />
      <ExperienceSection content={content} />
      <SkillsSection content={content} />
      <ProjectsSection content={content} />
      <EducationSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} />
    </main>
  );
}
