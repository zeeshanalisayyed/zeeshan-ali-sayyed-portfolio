"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";
import { CommandMenu } from "../components/CommandMenu";

export default function PortfolioPage() {
  const [copied, setCopied] = React.useState(false);
  const [writingFilter, setWritingFilter] = React.useState<string>("all");

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredWritings =
    writingFilter === "all"
      ? PORTFOLIO_DATA.writings
      : PORTFOLIO_DATA.writings.filter((w) => w.category === writingFilter);

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-200 antialiased relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-neutral-800/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-20">
        {/* NAV HEADER */}
        <header className="flex items-center justify-between border-b border-neutral-900 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-400">/{PORTFOLIO_DATA.handle}</span>
            <span className="h-3 w-px bg-neutral-800" />
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-neutral-400">{PORTFOLIO_DATA.status}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CommandMenu />
            <a
              href={PORTFOLIO_DATA.socials.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-neutral-100 hover:bg-white text-neutral-950 font-medium rounded-lg transition-colors"
            >
              <span>Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              {PORTFOLIO_DATA.name}
            </h1>
            <p className="font-mono text-xs sm:text-sm text-neutral-400">
              {PORTFOLIO_DATA.title} · {PORTFOLIO_DATA.location}
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            {PORTFOLIO_DATA.bio}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 rounded-lg transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied to clipboard" : PORTFOLIO_DATA.email}</span>
            </button>
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 rounded-lg transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* IMPACT METRICS (BENTO GRID) */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">Metrics</span>
            <div className="h-px flex-1 bg-neutral-900" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PORTFOLIO_DATA.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors space-y-1.5"
              >
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-mono">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-neutral-300">{m.label}</div>
                <div className="text-[11px] text-neutral-500 leading-snug">{m.subtext}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work" className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">Selected Experience</span>
            <div className="h-px flex-1 bg-neutral-900" />
          </div>

          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((job, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-medium text-white flex items-center gap-2">
                      <span>{job.company}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800/80 text-neutral-400 font-normal">
                        {job.role}
                      </span>
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">{job.tagline}</p>
                  </div>
                  <span className="font-mono text-xs text-neutral-500">{job.period}</span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {job.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-neutral-300 leading-relaxed flex items-start gap-2">
                      <span className="text-neutral-600 select-none mt-1">↳</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.techStack.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS & RESEARCH */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">Projects & Research</span>
            <div className="h-px flex-1 bg-neutral-900" />
          </div>

          <div className="grid gap-4">
            {PORTFOLIO_DATA.projects.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-900 hover:border-neutral-800 transition-all space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-medium text-white">{p.title}</h3>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-400">
                        {p.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">{p.subtitle}</p>
                  </div>
                  <span className="font-mono text-xs text-neutral-500">{p.year}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {p.description}
                </p>

                <div className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-900 space-y-1">
                  {p.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                      <span className="text-emerald-500/80 font-mono text-[10px]">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono text-neutral-500">
                        #{t}
                      </span>
                    ))}
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WRITINGS */}
        <section id="writings" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">Writings & Thoughts</span>
              <div className="h-px flex-1 bg-neutral-900 mr-4" />
            </div>
            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-lg border border-neutral-800 text-[11px]">
              {["all", "tech", "culture", "life", "literary"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setWritingFilter(filter)}
                  className={`px-2.5 py-1 rounded capitalize transition-colors ${
                    writingFilter === filter
                      ? "bg-neutral-800 text-white font-medium"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-neutral-900">
            {filteredWritings.map((w, idx) => (
              <a
                key={idx}
                href={w.href}
                target="_blank"
                rel="noreferrer"
                className="group py-4 flex items-start justify-between gap-4 block hover:opacity-90 transition-opacity"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                      {w.title}
                    </h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                      {w.category}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-1">{w.description}</p>
                </div>
                <div className="flex items-center gap-2 text-right shrink-0">
                  <div className="text-right">
                    <div className="font-mono text-xs text-neutral-500">{w.date}</div>
                    <div className="text-[10px] text-neutral-600">{w.readTime}</div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-300 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-neutral-900 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-white">Let's connect</h3>
              <p className="text-xs text-neutral-400">
                Always open to discussing high-performance mobile architectures and platform engineering.
              </p>
            </div>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-white text-neutral-950 text-xs font-medium rounded-lg transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 pt-6">
            <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}</span>
            <span className="font-mono text-[11px]">Next.js · Tailwind · Vercel</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
