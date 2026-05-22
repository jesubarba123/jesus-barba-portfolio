"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
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
      <p className="mb-3 text-xs font-black uppercase tracking-[0.34em] text-ignition">
        {kicker}
      </p>
      <h2 className="text-balance text-4xl font-black uppercase leading-[0.94] text-white sm:text-5xl lg:text-6xl">
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="focus-ring flex items-center gap-3" aria-label="Go to hero">
          <span className="grid h-9 w-9 place-items-center bg-white text-sm font-black text-ink [clip-path:polygon(0_0,80%_0,100%_20%,100%_100%,20%_100%,0_80%)]">
            JB
          </span>
          <span className="hidden text-xs font-black uppercase tracking-[0.24em] text-white sm:block">
            Talent Intelligence
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-xs font-bold uppercase tracking-[0.18em] text-white/68 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="focus-ring inline-flex h-10 items-center gap-2 border border-white/15 px-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-ignition hover:text-ignition"
            type="button"
            onClick={onLanguageChange}
            aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
          >
            <Languages size={16} aria-hidden />
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a
            href="#contact"
            className="focus-ring hidden h-10 items-center gap-2 bg-racing px-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-ignition hover:text-ink sm:inline-flex"
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % content.photos.length);
    }, 8500);

    return () => window.clearInterval(timer);
  }, [content.photos.length]);

  return (
    <section
      id="hero"
      className="diagonal-slice relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="precision-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute inset-x-0 top-16 h-px bg-white/10" aria-hidden />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-ink to-transparent" />

      <div className="section-shell grid items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, x: -42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-3 border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white/72 backdrop-blur-xl">
            <Zap size={16} className="text-ignition" aria-hidden />
            {content.hero.eyebrow}
          </div>

          <h1 className="hero-name max-w-5xl font-black uppercase text-white">
            {content.hero.name}
          </h1>

          <div className="my-6 flex flex-wrap gap-2">
            {content.hero.roles.map((role) => (
              <span
                key={role}
                className="border border-white/14 bg-white/[0.045] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/82"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 bg-ignition px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink transition hover:bg-white"
            >
              {content.hero.ctas.projects}
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href={asset(portfolioData.shared.cvPath)}
              download
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 border border-white/18 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-racing hover:text-racing"
            >
              {content.hero.ctas.cv}
              <Download size={18} aria-hidden />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex h-13 items-center justify-center gap-3 border border-white/18 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-volt hover:text-volt"
            >
              {content.hero.ctas.contact}
              <ArrowDown size={18} aria-hidden />
            </a>
          </div>

          <p className="mt-7 text-balance max-w-3xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            {content.hero.value}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            {content.hero.summary}
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm font-bold text-white/62">
            <ShieldCheck size={18} className="text-volt" aria-hidden />
            {content.hero.status}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative z-10"
        >
          <div className="absolute -inset-6 -z-10 bg-racing/20 blur-3xl" aria-hidden />
          <div className="angled-card relative overflow-hidden border border-white/16 bg-white/[0.045] shadow-premium backdrop-blur">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute inset-0 z-10 mix-blend-screen opacity-40 [background:linear-gradient(115deg,transparent_0_42%,rgba(247,181,0,.45)_42.2%,transparent_43%,transparent_68%,rgba(242,48,48,.5)_68.2%,transparent_69%)]" />
            <Image
              src={asset(photo.src)}
              alt={photo.alt}
              width={1800}
              height={1350}
              priority
              className={`h-[min(72vh,760px)] min-h-[440px] w-full object-cover ${
                photo.treatment === "performance"
                  ? "contrast-125 saturate-0 brightness-90"
                  : "contrast-110 saturate-0"
              }`}
              sizes="(min-width: 1024px) 48vw, 100vw"
            />

            <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-ignition">
                  {photo.label}
                </p>
                <p className="mt-2 text-2xl font-black uppercase text-white">{photo.caption}</p>
              </div>
              <div className="flex gap-2" aria-label={content.hero.carouselHint}>
                <button
                  type="button"
                  className="focus-ring grid h-11 w-11 place-items-center border border-white/18 bg-ink/70 text-white transition hover:border-ignition hover:text-ignition"
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
                  className="focus-ring grid h-11 w-11 place-items-center border border-white/18 bg-ink/70 text-white transition hover:border-ignition hover:text-ignition"
                  onClick={() => setActive((current) => (current + 1) % content.photos.length)}
                  aria-label={lang === "en" ? "Next portrait" : "Siguiente retrato"}
                >
                  <ChevronRight size={18} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 hidden w-[min(92vw,980px)] -translate-x-1/2 grid-cols-4 border border-white/10 bg-ink/76 backdrop-blur-xl lg:grid">
        {content.stats.map((stat, index) => (
          <div key={stat.label} className="border-r border-white/10 p-5 last:border-r-0">
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-xs font-bold uppercase leading-5 tracking-[0.15em] text-white/54">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="about" className="section-y relative border-t border-white/10">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading kicker={content.about.kicker} title={content.about.title} />

        <motion.div {...fadeUp(0.08)} className="space-y-8">
          <div className="space-y-5 text-lg leading-9 text-white/70">
            {content.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.about.strengths.map((strength, index) => (
              <div
                key={strength}
                className="border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:border-ignition/70"
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] text-white/36">
                  0{index + 1}
                </p>
                <p className="mt-5 text-lg font-black uppercase leading-tight text-white">
                  {strength}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-racing bg-racing/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-racing">
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
    <section id="experience" className="section-y relative bg-white/[0.025]">
      <div className="section-shell">
        <SectionHeading kicker={content.experience.kicker} title={content.experience.title} />

        <div className="mt-14 space-y-6">
          {content.experience.items.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              {...fadeUp(index * 0.05)}
              className="grid gap-6 border border-white/10 bg-ink/68 p-5 backdrop-blur-xl transition hover:border-ignition/60 lg:grid-cols-[0.34fr_0.66fr]"
            >
              <div className="border-b border-white/10 pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-ignition">
                  {item.period}
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-white">
                  {item.role}
                </h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-white/52">
                  {item.company}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
                <ul className="space-y-3 text-sm leading-7 text-white/68">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <Check size={18} className="mt-1 shrink-0 text-volt" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="bg-white/[0.055] p-4">
                      <p className="text-sm font-bold leading-6 text-white">{highlight}</p>
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
                className="group border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-racing/70 hover:bg-white/[0.055]"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-black uppercase tracking-[0.08em] text-white">
                    {group.title}
                  </h3>
                  <span className="grid h-11 w-11 place-items-center border border-white/12 text-ignition transition group-hover:border-racing group-hover:text-racing">
                    <Icon size={20} aria-hidden />
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-ink/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/72"
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
    <section id="projects" className="section-y relative bg-white/[0.025]">
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
              className="group overflow-hidden border border-white/10 bg-ink/80 transition hover:-translate-y-1 hover:border-ignition/60 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                <Image
                  src={asset(project.thumbnail)}
                  alt={`${project.name} visual thumbnail`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.26em] text-ignition">
                      Featured build
                    </p>
                    <h3 className="mt-3 text-2xl font-black uppercase text-white">
                      {project.name}
                    </h3>
                  </div>
                  <span className="border border-volt/30 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-volt">
                    Live
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-white/68">{project.description}</p>
                <p className="mt-4 text-sm font-bold text-white/46">{project.signal}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ExternalAnchor
                    href={project.repo}
                    className="focus-ring inline-flex items-center justify-center gap-2 border border-white/14 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-ink"
                  >
                    <GitBranch size={16} aria-hidden />
                    {content.projects.buttons.repo}
                  </ExternalAnchor>
                  {project.demo ? (
                    <ExternalAnchor
                      href={project.demo}
                      className="focus-ring inline-flex items-center justify-center gap-2 bg-racing px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-ignition hover:text-ink"
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
              className="border border-white/10 bg-white/[0.035] p-5 transition hover:border-ignition/60"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-racing">
                {item.period}
              </p>
              <h3 className="mt-3 text-xl font-black uppercase leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-white/52">
                {item.institution}
              </p>
              {item.note ? <p className="mt-4 text-sm leading-6 text-white/58">{item.note}</p> : null}
            </motion.article>
          ))}
        </div>

        <motion.div {...fadeUp(0.1)} className="mt-8 border border-white/10 bg-ink/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-ignition">
            {content.education.volunteeringTitle}
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {content.education.volunteering.map((item) => (
              <p key={item} className="border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/68">
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
    <section id="contact" className="section-y relative bg-white/[0.025]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading kicker={content.contact.kicker} title={content.contact.title} />
          <motion.p {...fadeUp(0.08)} className="mt-7 max-w-xl text-lg leading-8 text-white/68">
            {content.contact.body}
          </motion.p>

          <motion.div {...fadeUp(0.12)} className="mt-9 grid gap-3">
            <a
              href={`mailto:${content.contact.email}`}
              className="focus-ring flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white/78 transition hover:border-ignition hover:text-white"
            >
              <Mail size={18} className="text-ignition" aria-hidden />
              {content.contact.email}
            </a>
            <a
              href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
              className="focus-ring flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white/78 transition hover:border-ignition hover:text-white"
            >
              <Phone size={18} className="text-ignition" aria-hidden />
              {content.contact.phone}
            </a>
            <ExternalAnchor
              href={content.contact.linkedin}
              className="focus-ring flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white/78 transition hover:border-ignition hover:text-white"
            >
              <Link2 size={18} className="text-ignition" aria-hidden />
              LinkedIn
            </ExternalAnchor>
            <ExternalAnchor
              href={content.contact.github}
              className="focus-ring flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-white/78 transition hover:border-ignition hover:text-white"
            >
              <GitBranch size={18} className="text-ignition" aria-hidden />
              GitHub
            </ExternalAnchor>
          </motion.div>
        </div>

        <motion.form
          {...fadeUp(0.08)}
          onSubmit={handleSubmit}
          className="angled-card border border-white/12 bg-ink/82 p-5 shadow-premium backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/50">
                {content.contact.form.name}
              </span>
              <input
                required
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                className="focus-ring w-full border border-white/12 bg-white/[0.045] px-4 py-4 text-white outline-none transition placeholder:text-white/28 hover:border-white/24"
                placeholder="Jesús Barba"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/50">
                {content.contact.form.email}
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="focus-ring w-full border border-white/12 bg-white/[0.045] px-4 py-4 text-white outline-none transition placeholder:text-white/28 hover:border-white/24"
                placeholder="name@company.com"
                autoComplete="email"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/50">
              {content.contact.form.message}
            </span>
            <textarea
              required
              rows={8}
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              className="focus-ring min-h-48 w-full resize-y border border-white/12 bg-white/[0.045] px-4 py-4 text-white outline-none transition placeholder:text-white/28 hover:border-white/24"
              placeholder="Tell me what you want to build, improve or automate."
            />
          </label>
          <button
            type="submit"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-3 bg-ignition px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-ink transition hover:bg-white"
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
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
        {content.footer ? <p>{content.footer}</p> : <span aria-hidden />}
        <p className="font-black uppercase tracking-[0.18em] text-white/60">Jesús Barba</p>
      </div>
    </footer>
  );
}
