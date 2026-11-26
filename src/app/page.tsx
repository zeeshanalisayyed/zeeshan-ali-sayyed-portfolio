"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Terminal,
  Cpu,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
  Code2,
  Briefcase,
  Calendar,
  Mail,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Search,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { portfolioData, type Project, type Writing } from "@/data/portfolio";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  const [platformFilter, setPlatformFilter] = React.useState<string>("All");
  const [writingFilter, setWritingFilter] = React.useState<string>("All");
  const [copied, setCopied] = React.useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platforms = [
    "All",
    "Android & iOS",
    "Flutter",
    "React Native",
    "Cordova",
    "AI & Systems",
  ];

  const writingCategories = [
    "All",
    "Mobile SDKs",
    "Architecture",
    "Cross-Platform",
    "Applied AI",
  ];

  const filteredProjects = portfolioData.projects.filter((p: Project) => {
    if (platformFilter === "All") return true;
    if (platformFilter === "Android & iOS")
      return p.tags.some((t) => /android|ios|kotlin|swift/i.test(t));
    if (platformFilter === "Flutter")
      return p.tags.some((t) => /flutter/i.test(t));
    if (platformFilter === "React Native")
      return p.tags.some((t) => /react native/i.test(t));
    if (platformFilter === "Cordova")
      return p.tags.some((t) => /cordova/i.test(t));
    if (platformFilter === "AI & Systems")
      return p.tags.some((t) => /ai|ml|sdk|privacy/i.test(t));
    return true;
  });

  const filteredWritings = portfolioData.writings.filter((w: Writing) => {
    if (writingFilter === "All") return true;
    return w.category === writingFilter;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white relative font-sans">
      <CommandMenu open={commandMenuOpen} setOpen={setCommandMenuOpen} />

      {/* Subtle Ambient Background Mesh */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating Top Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900 px-6 py-3.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-semibold tracking-tight text-white">
              /{portfolioData.handle}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q1/Q2 Consulting
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCommandMenuOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1 text-xs font-mono text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
            >
              <Search className="w-3 h-3" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
                ⌘K
              </kbd>
            </button>

            <a
              href={portfolioData.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-300 hover:text-white border-b border-neutral-700 hover:border-white pb-0.5 transition-colors hidden sm:inline-block"
            >
              Resume →
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24 relative z-10">
        {/* HERO SECTION */}
        <section className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5 text-neutral-500" />
              <span>Staff Mobile & Platform Architect · AI Product Builder</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              {portfolioData.name}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              10+ years engineering cross-platform mobile SDKs across{" "}
              <strong className="text-white font-medium">6 platforms</strong>{" "}
              (Android, iOS, Flutter, React Native, Cordova, Xamarin) scaled to{" "}
              <strong className="text-white font-medium">30M+ MAU</strong>, and creator
              of HomeoAI.
            </p>
          </div>

          {/* Quick CTA & Contact Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${portfolioData.email}?subject=Consulting%20Inquiry%20%E2%80%94%20Mobile%20%2F%20SDK%20Architecture`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-medium rounded-md transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Book Architecture Call</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-mono rounded-md transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{portfolioData.email}</span>
                </>
              )}
            </button>

            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-900">
            {portfolioData.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-neutral-900/50 border border-neutral-850 rounded-lg space-y-1 hover:border-neutral-750 transition-colors"
              >
                <div className="text-2xl font-semibold tracking-tight text-white font-mono">
                  {m.value}
                </div>
                <div className="text-xs font-medium text-neutral-300">
                  {m.label}
                </div>
                <div className="text-[11px] text-neutral-500 leading-snug line-clamp-2">
                  {m.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONSULTING & ENGAGEMENT MODELS (UPGRADE 3) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <div className="space-y-1">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                ( I ) Client Advisory & Consulting
              </h2>
              <p className="text-xl font-semibold text-white">
                How I Work With Founders & Engineering Teams
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              Contract & Advisory
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-white">
                0-to-1 Mobile Apps & Production SaaS
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Full-cycle execution from system design to App Store/Play Store deployment.
                Cross-platform clients (Flutter, React Native) built with native performance,
                offline-first sync, and scalable cloud backends.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Flutter", "React Native", "Next.js", "PostgreSQL", "App Store"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-white">
                Custom Mobile SDKs & Native Bridges
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Building SDKs that thousands of developers integrate into their apps.
                Zero-jank vector recording, low-overhead event streaming, and native C++/Java/Swift
                bridges across Android, iOS, Flutter, and React Native.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Native Bridges", "Event Buffers", "Session Replay", "Zero ANRs"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-white">
                Applied AI & Streaming Copilot Pipelines
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Integrating LLMs into mission-critical workflows with sub-1.8s TTFT,
                deterministic PDF vector grounding, multi-model fallbacks (Gemini → OpenAI),
                and zero hallucination guarantees for regulated verticals.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["RAG", "Direct Gemini API", "OpenAI", "Streaming TTFT", "Grounding"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium text-white">
                Performance, Memory & ANR Profiling
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Forward-deployed engineering audits for enterprise apps hitting performance bottlenecks.
                LeakCanary memory profiling, background execution optimizations, and strict
                60 FPS UI budgets under heavy load.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["60 FPS", "<2% CPU", "LeakCanary", "Battery Optimization"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP SPOTLIGHT: HOMEOAI (UPGRADE 2) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              ( II ) Flagship Production Case Study
            </h2>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live in Production
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono bg-neutral-800 text-neutral-200 border border-neutral-700">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Clinical AI & Digital Health SaaS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  HomeoAI — Clinical Decision Support & Health Card Ecosystem
                </h3>
                <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  Conceived, architected, and built from zero to 800+ practicing clinicians.
                  Features streaming multi-tier AI reasoning, deterministic repertorization grounded
                  in uploaded clinical literature PDFs, and branded QR patient Health Cards.
                </p>
              </div>

              <a
                href="https://homeoai.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-semibold rounded-lg transition-colors shrink-0"
              >
                <span>Visit Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Architecture Metrics Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-xs font-mono text-neutral-500">Adoption</div>
                <div className="text-base font-semibold text-white font-mono mt-1">
                  800+ Clinicians
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  4.2k+ AI Consultations
                </div>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-xs font-mono text-neutral-500">Latency</div>
                <div className="text-base font-semibold text-white font-mono mt-1">
                  &lt;1.8s TTFT
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Direct Gemini + Fallback
                </div>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-xs font-mono text-neutral-500">Grounding</div>
                <div className="text-base font-semibold text-white font-mono mt-1">
                  Deterministic
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  PDF Rubric Citations
                </div>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-xs font-mono text-neutral-500">Patient Data</div>
                <div className="text-base font-semibold text-white font-mono mt-1">
                  Client Encrypted
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  Branded QR Health Card
                </div>
              </div>
            </div>

            {/* Key Bullet Highlights */}
            <div className="space-y-2 pt-2 border-t border-neutral-900">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Engineering Highlights
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Deterministic rubric scoring eliminating clinical hallucinations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Multi-model pipeline (Direct Gemini → OpenAI → Groq Llama fallback)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Offline-first clinical case forms with IndexedDB transactional queueing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Automated WhatsApp follow-up reminders and localized multi-currency passes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SELECTED WORK & SYSTEMS WITH 6-PLATFORM FILTER (UPGRADE 1) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-900 pb-3">
            <div className="space-y-1">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                ( III ) Mobile SDK & Platform Systems
              </h2>
              <p className="text-xl font-semibold text-white">
                Engineered Across 6 Production Frameworks
              </p>
            </div>

            {/* Interactive Platform Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {platforms.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setPlatformFilter(filter)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                    platformFilter === filter
                      ? "bg-white text-neutral-950 font-medium"
                      : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 bg-neutral-900/60 border border-neutral-850 hover:border-neutral-700 rounded-xl space-y-4 flex flex-col justify-between transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                        {p.category}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {p.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">{p.subtitle}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {p.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-[11px] text-neutral-400"
                        >
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-neutral-850">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-800 text-neutral-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors pt-1"
                      >
                        <span>View Project Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* WORK HISTORY / TRACK RECORD */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-neutral-900 pb-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              ( IV ) Work History & Leadership
            </h2>
            <span className="text-xs font-mono text-neutral-500">10+ Years</span>
          </div>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 border-l-2 border-neutral-800 hover:border-neutral-500 bg-neutral-900/20 hover:bg-neutral-900/40 rounded-r-xl transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">{exp.role}</p>
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {exp.period} · {exp.location}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-600 mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WRITINGS & SYSTEM DESIGN ESSAYS */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-900 pb-3">
            <div className="space-y-1">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                ( V ) Technical Architecture Notes
              </h2>
              <p className="text-xl font-semibold text-white">
                Engineering Deep Dives & Systems Thinking
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {writingCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setWritingFilter(cat)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                    writingFilter === cat
                      ? "bg-white text-neutral-950 font-medium"
                      : "bg-neutral-900 text-neutral-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredWritings.map((w, idx) => (
              <a
                key={idx}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-neutral-900/40 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-700 rounded-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {w.title}
                      </h3>
                      <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-800 text-neutral-400 border border-neutral-700">
                        {w.category}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {w.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-neutral-500">
                    <span>{w.readTime}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-neutral-900 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-white">Let’s build together</h3>
              <p className="text-xs text-neutral-400">
                Available for advisory, architecture audits, and cross-platform mobile/AI contracts.
              </p>
            </div>

            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-neutral-950 text-xs font-semibold rounded-lg hover:bg-neutral-200 transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Project Brief</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 pt-6 gap-2 border-t border-neutral-900/50">
            <span>
              © {new Date().getFullYear()} {portfolioData.name} · Mumbai, India
            </span>
            <span className="font-mono text-[11px] text-neutral-600">
              Next.js 15 · Tailwind · Framer Motion · Vercel
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
