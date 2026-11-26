"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Search,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Cpu,
  Activity,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { portfolioData, type Project, type Writing } from "../data/portfolio";
import { CommandMenu } from "../components/CommandMenu";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activePlatformFilter, setActivePlatformFilter] = useState<string>("All");
  const [activeWritingCategory, setActiveWritingCategory] = useState<string>("All");

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const openSearch = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  const platformFilters = [
    "All",
    "Android & iOS",
    "Flutter",
    "React Native",
    "Cordova",
    "AI & Systems",
  ];

  const filteredProjects = portfolioData.projects.filter((project: Project) => {
    if (activePlatformFilter === "All") return true;
    if (activePlatformFilter === "Android & iOS")
      return (
        project.tags.includes("Android") ||
        project.tags.includes("iOS") ||
        project.tags.includes("Kotlin") ||
        project.tags.includes("Swift")
      );
    if (activePlatformFilter === "Flutter") return project.tags.includes("Flutter");
    if (activePlatformFilter === "React Native")
      return project.tags.includes("React Native");
    if (activePlatformFilter === "Cordova") return project.tags.includes("Cordova");
    if (activePlatformFilter === "AI & Systems")
      return (
        project.tags.includes("Multi-Model AI") ||
        project.tags.includes("SDK Architecture") ||
        project.tags.includes("Security") ||
        project.tags.includes("Data Privacy")
      );
    return true;
  });

  const writingCategories = ["All", "Architecture", "Mobile SDKs", "Cross-Platform", "Applied AI"];

  const filteredWritings = portfolioData.writings.filter((w: Writing) => {
    if (activeWritingCategory === "All") return true;
    return w.category === activeWritingCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white relative font-sans overflow-x-hidden">
      {/* Background Subtle Dot Mesh */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Command Menu Palette */}
      <CommandMenu />

      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-900 px-4 sm:px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono text-xs font-semibold tracking-tight text-white shrink-0">
              /zeeshanalisayyed
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="hidden sm:inline">Available for Q1/Q2 Consulting</span>
              <span className="sm:hidden">Available</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 text-xs font-mono text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block text-[10px] bg-neutral-800 px-1.5 py-0.5 rounded border border-neutral-700">
                ⌘K
              </kbd>
            </button>
            <a
              href="/Zeeshan_Ali_Sayyed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-300 hover:text-white border-b border-neutral-700 hover:border-white pb-0.5 transition-colors hidden sm:inline-block"
            >
              Resume →
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-20 space-y-16 sm:space-y-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="space-y-6 sm:space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest flex-wrap">
              <Terminal className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>Staff Mobile & Platform Architect · AI Product Builder</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
              {portfolioData.personal.name}
            </h1>

            <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              10+ years engineering cross-platform mobile SDKs across{" "}
              <strong className="text-white font-medium">6 platforms</strong> (Android, iOS, Flutter, React Native, Cordova, Xamarin) scaled to{" "}
              <strong className="text-white font-medium">30M+ MAU</strong>, and creator of HomeoAI.
            </p>
          </div>

          {/* Action Callouts — Fully Responsive on Mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
            <a
              href={`mailto:${portfolioData.personal.email}?subject=Consulting%20Inquiry%20%E2%80%94%20Mobile%20%2F%20SDK%20Architecture`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-semibold rounded-md transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Book Architecture Call</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-mono rounded-md transition-colors min-w-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[180px] sm:max-w-none">{portfolioData.personal.email}</span>
                  </>
                )}
              </button>

              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors shrink-0"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Metrics Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 border-t border-neutral-900">
            {portfolioData.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-3 sm:p-3.5 bg-neutral-900/50 border border-neutral-850 rounded-lg space-y-1 hover:border-neutral-750 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-semibold tracking-tight text-white font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-neutral-300">
                  {metric.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-500 leading-snug line-clamp-2">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION I: CLIENT ADVISORY & CONSULTING */}
        <section className="space-y-5 sm:space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <div className="space-y-1">
              <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                ( I ) Client Advisory & Consulting
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-white">
                How I Work With Founders & Engineering Teams
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              Contract & Advisory
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-white">
                0-to-1 Mobile Apps & Production SaaS
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Full-cycle execution from system design to App Store/Play Store deployment. Cross-platform clients (Flutter, React Native) built with native performance, offline-first sync, and scalable cloud backends.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Flutter", "React Native", "Next.js", "PostgreSQL", "App Store"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-white">
                Custom Mobile SDKs & Native Bridges
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Building SDKs that thousands of developers integrate into their apps. Zero-jank vector recording, low-overhead event streaming, and native C++/Java/Swift bridges across Android, iOS, Flutter, and React Native.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Native Bridges", "Event Buffers", "Session Replay", "Zero ANRs"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-white">
                Applied AI & Streaming Copilot Pipelines
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Integrating LLMs into mission-critical workflows with sub-1.8s TTFT, deterministic PDF vector grounding, multi-model fallbacks (Gemini → OpenAI), and zero hallucination guarantees for regulated verticals.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["RAG", "Direct Gemini API", "OpenAI", "Streaming TTFT", "Grounding"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-b from-neutral-900/80 to-neutral-900/30 border border-neutral-800 rounded-xl space-y-3 hover:border-neutral-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-white">
                Performance, Memory & ANR Profiling
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Forward-deployed engineering audits for enterprise apps hitting performance bottlenecks. LeakCanary memory profiling, background execution optimizations, and strict 60 FPS UI budgets under heavy load.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["60 FPS", "<2% CPU", "LeakCanary", "Battery Optimization"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION II: FLAGSHIP PRODUCTION CASE STUDY (HomeoAI) */}
        <section className="space-y-5 sm:space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
            <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
              ( II ) Flagship Production Case Study
            </h2>
            <span className="text-[11px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live in Production
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 p-5 sm:p-8 space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono bg-neutral-800 text-neutral-200 border border-neutral-700">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Clinical AI & Digital Health SaaS</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-semibold text-white tracking-tight">
                  HomeoAI — Clinical Decision Support & Health Card Ecosystem
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  Conceived, architected, and built from zero to 800+ practicing clinicians. Features streaming multi-tier AI reasoning, deterministic repertorization grounded in uploaded clinical literature PDFs, and branded QR patient Health Cards.
                </p>
              </div>

              <a
                href="https://homeoai.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-neutral-950 text-xs font-semibold rounded-lg transition-colors shrink-0 w-full sm:w-auto"
              >
                <span>Visit Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-[10px] sm:text-xs font-mono text-neutral-500">Adoption</div>
                <div className="text-sm sm:text-base font-semibold text-white font-mono mt-0.5 sm:mt-1">
                  800+ Clinicians
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                  4.2k+ AI Consultations
                </div>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-[10px] sm:text-xs font-mono text-neutral-500">Latency</div>
                <div className="text-sm sm:text-base font-semibold text-white font-mono mt-0.5 sm:mt-1">
                  &lt;1.8s TTFT
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                  Direct Gemini + Fallback
                </div>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-[10px] sm:text-xs font-mono text-neutral-500">Grounding</div>
                <div className="text-sm sm:text-base font-semibold text-white font-mono mt-0.5 sm:mt-1 truncate">
                  Deterministic
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                  PDF Rubric Citations
                </div>
              </div>

              <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg">
                <div className="text-[10px] sm:text-xs font-mono text-neutral-500">Patient Data</div>
                <div className="text-sm sm:text-base font-semibold text-white font-mono mt-0.5 sm:mt-1 truncate">
                  Encrypted
                </div>
                <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                  Branded QR Health Card
                </div>
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-2 pt-2 border-t border-neutral-900">
              <div className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Engineering Highlights
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                {[
                  "Deterministic rubric scoring eliminating clinical hallucinations",
                  "Multi-model pipeline (Direct Gemini → OpenAI → Groq Llama fallback)",
                  "Offline-first clinical case forms with IndexedDB transactional queueing",
                  "Automated WhatsApp follow-up reminders and localized multi-currency passes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION III: 6-PLATFORM SDK & MOBILE SYSTEMS */}
        <section className="space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-neutral-900 pb-3">
            <div className="space-y-1">
              <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                ( III ) Mobile SDK & Platform Systems
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-white">
                Engineered Across 6 Production Frameworks
              </p>
            </div>

            {/* Touch-Friendly Horizontal Scrollable Pills on Mobile */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              {platformFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActivePlatformFilter(filter)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md whitespace-nowrap transition-all shrink-0 ${
                    activePlatformFilter === filter
                      ? "bg-white text-neutral-950 font-medium"
                      : "bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: Project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 bg-neutral-900/60 border border-neutral-850 hover:border-neutral-700 rounded-xl space-y-4 flex flex-col justify-between transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">{project.subtitle}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 pt-1 sm:pt-2">
                      {project.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-neutral-400">
                          <span className="text-neutral-500 mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-neutral-850">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-800 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors pt-1"
                    >
                      <span>View Project Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION IV: WORK HISTORY & LEADERSHIP */}
        <section className="space-y-5 sm:space-y-6">
          <div className="flex items-baseline justify-between border-b border-neutral-900 pb-3">
            <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
              ( IV ) Work History & Leadership
            </h2>
            <span className="text-xs font-mono text-neutral-500">10+ Years</span>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {portfolioData.experience.map((job, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 border-l-2 border-neutral-800 hover:border-neutral-500 bg-neutral-900/20 hover:bg-neutral-900/40 rounded-r-xl transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      {job.company}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400">{job.role}</p>
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono text-neutral-500">
                    {job.period} · {job.location}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">{job.description}</p>

                <ul className="space-y-1.5 text-xs text-neutral-400">
                  {job.achievements.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-600 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                  {job.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-900 border border-neutral-800 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION V: TECHNICAL ARCHITECTURE ESSAYS */}
        <section className="space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-neutral-900 pb-3">
            <div className="space-y-1">
              <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                ( V ) Technical Architecture Notes
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-white">
                Engineering Deep Dives & Systems
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              {writingCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveWritingCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md whitespace-nowrap transition-all shrink-0 ${
                    activeWritingCategory === cat
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
            {filteredWritings.map((article: Writing, idx: number) => (
              <a
                key={idx}
                href={article.href}
                className="group block p-4 sm:p-5 bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-850 hover:border-neutral-700 rounded-xl transition-all space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5">
                  <h3 className="text-sm sm:text-base font-medium text-white group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  <span className="self-start text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-750 shrink-0">
                    {article.category}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 pt-1">
                  <span>{article.readTime}</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer className="border-t border-neutral-900 pt-10 sm:pt-12 pb-12 sm:pb-16 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-semibold text-white">Let’s build together</h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Available for advisory, architecture audits, and cross-platform mobile/AI contracts.
              </p>
            </div>
            <a
              href={`mailto:${portfolioData.personal.email}?subject=Project%20Inquiry%20%E2%80%94%20Mobile%20%2F%20SDK%20Engineering`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-semibold rounded-lg transition-colors w-full sm:w-auto"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Project Brief</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-neutral-500 border-t border-neutral-900/60 pt-6">
            <div>© 2026 Zeeshan Ali Sayyed · Mumbai, India</div>
            <div>Next.js 15 · Tailwind · Framer Motion · Vercel</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
