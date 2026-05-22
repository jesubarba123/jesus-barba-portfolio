"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  GitBranch,
  Languages,
  Link2,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";
import { portfolioData, type Lang, type PortfolioContent } from "@/data/portfolioData";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function asset(path: string) {
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}

const tokenPillClasses = [
  "border-racing/35 bg-racing/10 text-racing shadow-[0_0_24px_rgba(63,124,255,0.1)]",
  "border-electric/35 bg-electric/10 text-electric shadow-[0_0_24px_rgba(54,191,212,0.1)]",
  "border-volt/35 bg-volt/10 text-volt shadow-[0_0_24px_rgba(46,232,143,0.1)]",
  "border-amber/35 bg-amber/10 text-amber shadow-[0_0_24px_rgba(167,123,68,0.1)]"
];

function fadeUp(delay = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: "easeOut" as const, delay }
  };
}

function SectionHeading({
  kicker,
  title,
  align = "left"
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      {...fadeUp()}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-white/70">
        <span className="line-number mr-3">const</span>
        <span className="neon-cyan">section</span>
        <span className="text-white/44"> = </span>
        <span className="neon-green">"{kicker}"</span>
      </p>
      <h2 className="neon-title text-balance text-4xl font-black uppercase leading-[0.94] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </motion.div>
  );
}

function ExternalAnchor({
  href,
  children,
  className,
  ariaLabel
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export function Header({
  lang,
  nav,
  onLanguageChange
}: {
  lang: Lang;
  nav: PortfolioContent["nav"];
  onLanguageChange: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-electric/20 bg-black/88 font-mono shadow-[0_0_36px_rgba(54,191,212,0.07)] backdrop-blur-xl">
      <div className="editor-chrome mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="focus-ring flex items-center gap-3" aria-label="Go to hero">
          <span className="grid h-9 w-9 place-items-center border border-volt/40 bg-volt/10 text-sm font-black text-volt shadow-[0_0_18px_rgba(46,232,143,0.18)] [clip-path:polygon(0_0,80%_0,100%_20%,100%_100%,20%_100%,0_80%)]">
            .jb
          </span>
          <span className="hidden text-xs font-black uppercase tracking-[0.16em] text-white sm:block">
            <span className="neon-pink">portfolio</span>
            <span className="text-white/42">.</span>
            <span className="neon-cyan">tsx</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-xs font-bold uppercase tracking-[0.12em] text-white/62 transition hover:text-electric"
            >
              <span className="text-racing">#</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="focus-ring inline-flex h-10 items-center gap-2 border border-electric/25 bg-electric/10 px-3 text-xs font-black uppercase tracking-[0.14em] text-electric transition hover:border-volt hover:text-volt"
            type="button"
            onClick={onLanguageChange}
            aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
          >
            <Languages size={16} aria-hidden />
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a
            href="#contact"
            className="focus-ring hidden h-10 items-center gap-2 border border-racing/35 bg-racing/10 px-4 text-xs font-black uppercase tracking-[0.14em] text-racing shadow-[0_0_22px_rgba(63,124,255,0.12)] transition hover:bg-racing hover:text-white sm:inline-flex"
          >
            <Mail size={16} aria-hidden />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export function HeroSection({ content, lang }: { content: PortfolioContent; lang: Lang }) {
  const [active, setActive] = useState(0);
  const photo = content.photos[active];

  return (
    <section
      id="hero"
      className="diagonal-slice relative flex min-h-screen items-center overflow-hidden bg-black py-24"
    >
      <div className="precision-grid absolute inset-0 opacity-70" aria-hidden />
      <div className="absolute inset-x-0 top-16 h-px bg-electric/25" aria-hidden />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-ink to-transparent" />

      <div className="section-shell relative z-10 flex flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="code-panel angled-card w-full max-w-6xl overflow-hidden p-5 sm:p-7 lg:p-8"
        >
          <div className="editor-chrome -mx-5 -mt-5 mb-7 flex items-center justify-between gap-4 px-5 py-3 sm:-mx-7 sm:-mt-7 sm:px-7 lg:-mx-8 lg:-mt-8 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-racing shadow-[0_0_14px_rgba(63,124,255,0.58)]" />
              <span className="h-3 w-3 rounded-full bg-amber shadow-[0_0_14px_rgba(167,123,68,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-volt shadow-[0_0_14px_rgba(46,232,143,0.52)]" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/58">
              hero.profile.tsx
            </p>
          </div>

          <div className="relative z-10">
            <div className="mb-5 grid gap-1 text-xs font-bold uppercase tracking-[0.14em] sm:text-sm">
              <p>
                <span className="line-number mr-4">01</span>
                <span className="neon-purple">import</span>
                <span className="text-white/55"> {"{"} precision, data, automation {"}"} </span>
                <span className="neon-purple">from</span>
                <span className="neon-green"> "talent-intelligence"</span>
              </p>
              <p>
                <span className="line-number mr-4">02</span>
                <span className="neon-cyan">const</span>
                <span className="text-white/55"> signal = </span>
                <span className="neon-green">"{content.hero.eyebrow}"</span>
              </p>
            </div>

            <div className="mb-7 inline-flex items-center gap-3 border border-electric/25 bg-electric/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-electric backdrop-blur-xl">
              <Zap size={16} className="text-volt" aria-hidden />
              <span className="terminal-cursor">{content.hero.eyebrow}</span>
            </div>

            <h1 className="hero-name mx-auto max-w-full text-center font-black uppercase">
              {content.hero.name}
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative w-full max-w-3xl"
        >
          <div className="absolute -inset-6 -z-10 bg-racing/10 blur-3xl" aria-hidden />
          <div className="code-panel angled-card relative overflow-hidden shadow-premium backdrop-blur">
            <div className="editor-chrome relative z-20 flex items-center justify-between px-5 py-3">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-electric">
                portrait.render.jpg
              </p>
              <div className="flex gap-1">
                <span className="h-2 w-2 bg-racing" />
                <span className="h-2 w-2 bg-electric" />
                <span className="h-2 w-2 bg-volt" />
              </div>
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute inset-0 z-10 mix-blend-screen opacity-40 [background:linear-gradient(115deg,transparent_0_42%,rgba(54,191,212,.32)_42.2%,transparent_43%,transparent_68%,rgba(63,124,255,.34)_68.2%,transparent_69%)]" />
            <div className="minimap absolute bottom-24 right-4 z-20 hidden h-52 w-8 border border-white/10 sm:block" aria-hidden />
            <Image
              src={asset(photo.src)}
              alt={photo.alt}
              width={1448}
              height={1086}
              priority
              className={`aspect-[4/3] w-full object-cover object-center ${
                photo.treatment === "performance"
                  ? "contrast-125 saturate-0 brightness-90"
                  : "contrast-105 saturate-[0.9] brightness-95"
              }`}
              sizes="(min-width: 1024px) 760px, 92vw"
            />

            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-electric">
                  {photo.label}
                </p>
                <p className="neon-title mt-2 text-2xl font-black uppercase text-white">{photo.caption}</p>
              </div>
              <div className="flex gap-2" aria-label={content.hero.carouselHint}>
                <button
                  type="button"
                  className="focus-ring grid h-11 w-11 place-items-center border border-electric/30 bg-ink/80 text-electric transition hover:border-volt hover:text-volt"
                  onClick={() =>
                    setActive((current) =>
                      current === 0 ? content.photos.length - 1 : current - 1
                    )
                  }
                  aria-label={lang === "en" ? "Previous portrait" : "Retrato anterior"}
                >
                  <ChevronLeft size={18} aria-hidden />
                </button>
                <button
                  type="button"
                  className="focus-ring grid h-11 w-11 place-items-center border border-electric/30 bg-ink/80 text-electric transition hover:border-volt hover:text-volt"
                  onClick={() => setActive((current) => (current + 1) % content.photos.length)}
                  aria-label={lang === "en" ? "Next portrait" : "Siguiente retrato"}
                >
                  <ChevronRight size={18} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 flex w-full max-w-5xl flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {content.hero.roles.map((role, index) => (
              <span
                key={role}
                className={`border px-3 py-2 text-xs font-black uppercase tracking-[0.12em] ${tokenPillClasses[index % tokenPillClasses.length]}`}
              >
                <span className="text-white/42">{"<"}</span>
                {role}
                <span className="text-white/42">{" />"}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 border border-racing/35 bg-racing px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_0_28px_rgba(63,124,255,0.18)] transition hover:bg-electric hover:text-ink"
            >
              {content.hero.ctas.projects}
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href={asset(portfolioData.shared.cvPath)}
              download
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 border border-electric/30 bg-electric/10 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-electric transition hover:border-electric hover:bg-electric hover:text-ink"
            >
              {content.hero.ctas.cv}
              <Download size={18} aria-hidden />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 border border-volt/30 bg-volt/10 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-volt transition hover:border-volt hover:bg-volt hover:text-ink"
            >
              {content.hero.ctas.contact}
              <ArrowDown size={18} aria-hidden />
            </a>
          </div>

          <p className="neon-title mt-7 text-balance max-w-3xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            {content.hero.value}
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            <span className="line-number mr-3">03</span>
            <span className="neon-purple">return</span>
            <span className="text-white/55"> (</span>
            {content.hero.summary}
            <span className="text-white/55">)</span>
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm font-bold text-white/70">
            <ShieldCheck size={18} className="text-volt" aria-hidden />
            <span className="neon-green">{content.hero.status}</span>
          </div>
        </motion.div>

        <div className="code-panel grid w-full max-w-5xl grid-cols-1 overflow-hidden backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, index) => (
            <div key={stat.label} className="relative z-10 border-b border-electric/15 p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
              <p className={index % 2 === 0 ? "text-3xl font-black neon-green" : "text-3xl font-black neon-pink"}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-white/62">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="about" className="section-y relative border-t border-electric/15">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading kicker={content.about.kicker} title={content.about.title} />

        <motion.div {...fadeUp(0.08)} className="code-panel angled-card space-y-8 overflow-hidden p-5 sm:p-7">
          <div className="space-y-5 text-lg leading-9 text-white/70">
            {content.about.body.map((paragraph, index) => (
              <p key={paragraph} className="relative z-10">
                <span className="line-number mr-4">{String(index + 4).padStart(2, "0")}</span>
                <span className={index === 0 ? "neon-green" : index === 1 ? "neon-cyan" : "neon-pink"}>
                  //
                </span>{" "}
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.about.strengths.map((strength, index) => (
              <div
                key={strength}
                className="relative z-10 border border-electric/15 bg-black/55 p-5 backdrop-blur transition hover:border-racing/70 hover:shadow-glow"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                  0{index + 1}
                </p>
                <p className="neon-title mt-5 text-lg font-black uppercase leading-tight">
                  {strength}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 border-l-4 border-volt bg-volt/10 p-6 shadow-[0_0_24px_rgba(46,232,143,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-volt">
              {content.about.opportunitiesTitle}
            </p>
            <p className="mt-3 text-base leading-7 text-white/76">{content.about.opportunities}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ExperienceSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="experience" className="section-y relative bg-black/60">
      <div className="section-shell">
        <SectionHeading kicker={content.experience.kicker} title={content.experience.title} />

        <div className="mt-14 space-y-6">
          {content.experience.items.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              {...fadeUp(index * 0.05)}
              className="code-panel angled-card grid gap-6 overflow-hidden p-5 backdrop-blur-xl transition hover:border-racing/60 hover:shadow-glow lg:grid-cols-[0.34fr_0.66fr]"
            >
              <div className="relative z-10 border-b border-electric/15 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber">
                  {item.period}
                </p>
                <h3 className="neon-title mt-4 text-2xl font-black uppercase leading-tight">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-volt">
                  {item.company}
                </p>
              </div>

              <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_0.42fr]">
                <ul className="space-y-3 text-sm leading-7 text-white/68">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <Check size={18} className="mt-1 shrink-0 text-electric" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="border border-racing/18 bg-racing/10 p-4">
                      <p className="text-sm font-bold leading-6 text-white">
                        <span className="neon-pink">git commit:</span> {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection({ content }: { content: PortfolioContent }) {
  const icons = [BriefcaseBusiness, BarChart3, Bot, Sparkles, ShieldCheck, Languages];

  return (
    <section id="skills" className="section-y relative">
      <div className="section-shell">
        <SectionHeading kicker={content.skills.kicker} title={content.skills.title} align="center" />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.skills.groups.map((group, index) => {
            const Icon = icons[index] ?? Sparkles;

            return (
              <motion.article
                key={group.title}
                {...fadeUp(index * 0.04)}
                className="code-panel angled-card group overflow-hidden p-6 transition hover:-translate-y-1 hover:border-volt/70"
              >
                <div className="relative z-10 mb-6 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black uppercase tracking-[0.08em] text-white">
                    <span className="line-number mr-2">{String(index + 1).padStart(2, "0")}</span>
                    {group.title}
                  </h3>
                  <span className="grid h-11 w-11 place-items-center border border-electric/25 text-electric transition group-hover:border-racing group-hover:text-racing">
                    <Icon size={20} aria-hidden />
                  </span>
                </div>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className={`border bg-ink/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] ${tokenPillClasses[itemIndex % tokenPillClasses.length]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="projects" className="section-y relative bg-black/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <SectionHeading kicker={content.projects.kicker} title={content.projects.title} />
          <motion.p {...fadeUp(0.08)} className="text-base leading-7 text-white/62">
            {content.projects.intro}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {content.projects.items.map((project, index) => (
            <motion.article
              key={project.name}
              {...fadeUp(index * 0.08)}
              className="code-panel angled-card group overflow-hidden transition hover:-translate-y-1 hover:border-racing/60 hover:shadow-glow"
            >
              <div className="editor-chrome relative z-20 flex items-center justify-between px-5 py-3">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-electric">
                  projects/{project.name.toLowerCase().replace(/\s+/g, "-")}.json
                </p>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-volt">live</span>
              </div>

              <div className="relative z-10 aspect-[16/10] overflow-hidden border-b border-electric/15">
                <Image
                  src={asset(project.thumbnail)}
                  alt={`${project.name} visual thumbnail`}
                  fill
                  className="object-cover saturate-150 hue-rotate-[20deg] transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="relative z-10 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-racing">
                      <span className="line-number mr-2">{String(index + 1).padStart(2, "0")}</span>
                      Featured build
                    </p>
                    <h3 className="neon-title mt-3 text-2xl font-black uppercase">
                      {project.name}
                    </h3>
                  </div>
                  <span className="border border-volt/35 bg-volt/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-volt">
                    Live
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-white/72">
                  <span className="neon-purple">description:</span> {project.description}
                </p>
                <p className="mt-4 text-sm font-bold text-electric">{project.signal}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`border bg-black/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] ${tokenPillClasses[techIndex % tokenPillClasses.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ExternalAnchor
                    href={project.repo}
                    className="focus-ring inline-flex items-center justify-center gap-2 border border-electric/25 bg-electric/10 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-electric transition hover:border-electric hover:bg-electric hover:text-ink"
                  >
                    <GitBranch size={16} aria-hidden />
                    {content.projects.buttons.repo}
                  </ExternalAnchor>
                  {project.demo ? (
                    <ExternalAnchor
                      href={project.demo}
                      className="focus-ring inline-flex items-center justify-center gap-2 border border-racing/35 bg-racing px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-volt hover:text-ink"
                    >
                      <ExternalLink size={16} aria-hidden />
                      {content.projects.buttons.demo}
                    </ExternalAnchor>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="education" className="section-y relative">
      <div className="section-shell">
        <SectionHeading kicker={content.education.kicker} title={content.education.title} />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {content.education.items.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.institution}`}
              {...fadeUp(index * 0.035)}
              className="code-panel angled-card overflow-hidden p-5 transition hover:border-electric/60"
            >
              <p className="relative z-10 text-xs font-black uppercase tracking-[0.18em] text-racing">
                {item.period}
              </p>
              <h3 className="neon-title relative z-10 mt-3 text-xl font-black uppercase leading-tight">
                {item.title}
              </h3>
              <p className="relative z-10 mt-3 text-sm font-bold uppercase tracking-[0.14em] text-volt">
                {item.institution}
              </p>
              {item.note ? <p className="relative z-10 mt-4 text-sm leading-6 text-white/64">{item.note}</p> : null}
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp(0.1)} className="code-panel angled-card mt-8 overflow-hidden p-6">
          <p className="relative z-10 text-xs font-black uppercase tracking-[0.18em] text-electric">
            {content.education.volunteeringTitle}
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {content.education.volunteering.map((item, index) => (
              <p key={item} className={`relative z-10 border bg-black/60 p-4 text-sm leading-6 ${tokenPillClasses[index % tokenPillClasses.length]}`}>
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection({ content }: { content: PortfolioContent }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact - ${form.name || "New message"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    return `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
  }, [content.contact.email, form]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="section-y relative bg-black/60">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading kicker={content.contact.kicker} title={content.contact.title} />
          <motion.p {...fadeUp(0.08)} className="mt-7 max-w-xl text-lg leading-8 text-white/68">
            {content.contact.body}
          </motion.p>

          <motion.div {...fadeUp(0.12)} className="mt-9 grid gap-3">
            <a
              href={`mailto:${content.contact.email}`}
              className="focus-ring code-panel flex items-center gap-3 overflow-hidden p-4 text-white/78 transition hover:border-racing hover:text-white"
            >
              <Mail size={18} className="relative z-10 text-racing" aria-hidden />
              <span className="relative z-10">{content.contact.email}</span>
            </a>
            <a
              href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
              className="focus-ring code-panel flex items-center gap-3 overflow-hidden p-4 text-white/78 transition hover:border-electric hover:text-white"
            >
              <Phone size={18} className="relative z-10 text-electric" aria-hidden />
              <span className="relative z-10">{content.contact.phone}</span>
            </a>
            <ExternalAnchor
              href={content.contact.linkedin}
              className="focus-ring code-panel flex items-center gap-3 overflow-hidden p-4 text-white/78 transition hover:border-volt hover:text-white"
            >
              <Link2 size={18} className="relative z-10 text-volt" aria-hidden />
              <span className="relative z-10">LinkedIn</span>
            </ExternalAnchor>
            <ExternalAnchor
              href={content.contact.github}
              className="focus-ring code-panel flex items-center gap-3 overflow-hidden p-4 text-white/78 transition hover:border-racing hover:text-white"
            >
              <GitBranch size={18} className="relative z-10 text-racing" aria-hidden />
              <span className="relative z-10">GitHub</span>
            </ExternalAnchor>
          </motion.div>
        </div>

        <motion.form
          {...fadeUp(0.08)}
          onSubmit={handleSubmit}
          className="code-panel angled-card overflow-hidden p-5 shadow-premium backdrop-blur-xl sm:p-8"
        >
          <div className="editor-chrome -mx-5 -mt-5 mb-7 flex items-center justify-between px-5 py-3 sm:-mx-8 sm:-mt-8 sm:px-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-electric">contact.form.ts</p>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-volt">ready</span>
          </div>

          <div className="relative z-10 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-racing">
                {content.contact.form.name}
              </span>
              <input
                required
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="focus-ring w-full border border-electric/20 bg-black/70 px-4 py-4 text-volt outline-none transition placeholder:text-white/28 hover:border-electric"
                placeholder="Jesús Barba"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-electric">
                {content.contact.form.email}
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="focus-ring w-full border border-electric/20 bg-black/70 px-4 py-4 text-volt outline-none transition placeholder:text-white/28 hover:border-electric"
                placeholder="name@company.com"
                autoComplete="email"
              />
            </label>
          </div>
          <label className="relative z-10 mt-5 block">
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-volt">
              {content.contact.form.message}
            </span>
            <textarea
              required
              rows={8}
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              className="focus-ring min-h-48 w-full resize-y border border-electric/20 bg-black/70 px-4 py-4 text-volt outline-none transition placeholder:text-white/28 hover:border-electric"
              placeholder="Tell me what you want to build, improve or automate."
            />
          </label>
          <button
            type="submit"
            className="focus-ring relative z-10 mt-6 inline-flex w-full items-center justify-center gap-3 border border-racing/35 bg-racing px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(63,124,255,0.18)] transition hover:bg-volt hover:text-ink"
          >
            <Send size={18} aria-hidden />
            {content.contact.form.submit}
          </button>
          {sent ? (
            <p className="mt-4 text-sm font-bold text-volt" role="status">
              {content.contact.form.success}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}

export function Footer({ content }: { content: PortfolioContent }) {
  return (
    <footer className="border-t border-electric/15 bg-black py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
        {content.footer ? <p>{content.footer}</p> : <span aria-hidden />}
        <p className="font-black uppercase tracking-[0.16em] text-white/70">
          <span className="neon-pink">Jesús</span>
          <span className="text-white/35">.</span>
          <span className="neon-cyan">Barba</span>
        </p>
      </div>
    </footer>
  );
}
