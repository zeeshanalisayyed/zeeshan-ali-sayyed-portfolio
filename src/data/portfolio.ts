export interface WorkExperience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  tagline: string;
  bullets: string[];
  techStack: string[];
}

export interface Metric {
  value: string;
  label: string;
  subtext: string;
  highlight?: boolean;
}

export interface Project {
  year: string;
  title: string;
  subtitle: string;
  category: "AI SaaS" | "Architecture" | "Systems";
  description: string;
  highlights: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  name: "Zeeshan Ali Sayyed",
  handle: "zeeshanalisayyed",
  title: "Staff AI Engineer • Applied AI & LLM Systems Architect • Founding Engineer",
  status: "Principal AI Architect @ HomeoAI · Ex-DevRev",
  location: "Mumbai, India",
  email: "zeeshanali.sayyed1@gmail.com",
  phone: "+91 7276488049",
  socials: {
    github: "https://github.com/zeeshanalisayyed",
    linkedin: "https://linkedin.com/in/zeeshanalisayyed",
    website: "https://homeoai.online",
    resume: "/Zeeshan_Ali_Sayyed_Resume_AI.pdf",
  },
  bio: "10+ years engineering production-grade distributed systems, mobile SDK infrastructure, and applied GenAI platforms from 0 to 1 and 1 to 100. Creator of HomeoAI; previously led mobile telemetry for 30M+ MAU at DevRev and founding engineer at UserExperior (acquired by DevRev).",

  metrics: [
    {
      value: "800+",
      label: "Clinicians in Production",
      subtext: "Using HomeoAI with 4,200+ multi-step clinical AI transactions",
      highlight: true,
    },
    {
      value: "30M+",
      label: "MAU Telemetry Scale",
      subtext: "Real-time event pipelines feeding DevRev AI agents & triage",
    },
    {
      value: "$10M+",
      label: "Enterprise ARR Unblocked",
      subtext: "Forward-deployed enterprise architecture & SDK bridges at DevRev",
    },
    {
      value: "<1.8s",
      label: "Time to First Token",
      subtext: "Multi-tier LLM inference cascade with 30% lower token cost",
    },
  ] as Metric[],

  experience: [
    {
      company: "HomeoAI",
      companyUrl: "https://homeoai.online",
      role: "AI Product Builder & Principal AI Architect",
      period: "Apr 2026 — Present",
      location: "Mumbai, India",
      tagline: "0-to-1 Clinical AI SaaS serving 800+ registered practitioners and 4,200+ AI consultations.",
      bullets: [
        "Designed and shipped an end-to-end clinical AI platform with hybrid pgvector RAG over 30,000+ classical passages with exact page citations.",
        "Architected multi-model inference router (Gemini 2.5 Flash → GPT-4o-mini → Groq Llama 3.3) with bidirectional context caching, slashing token costs by 30%.",
        "Engineered client-side zero-PII sanitization and bilingual voice extraction pipeline using Groq Whisper.",
      ],
      techStack: ["TypeScript", "pgvector", "Deno Edge Functions", "Gemini 2.5", "GPT-4o", "Groq Whisper", "Supabase", "React"],
    },
    {
      company: "DevRev",
      companyUrl: "https://devrev.ai",
      role: "Member of Technical Staff — Lead SDK & AI Telemetry",
      period: "Feb 2024 — Apr 2026",
      location: "Mumbai, India",
      tagline: "Led team of 6 engineers building cross-platform SDKs and real-time ingestion pipelines for 30M+ MAU.",
      bullets: [
        "Engineered high-throughput event processing handling tens of millions of daily session events feeding DevRev's AI triage and support bots.",
        "Partnered with enterprise architects as Forward Deployed Engineer to unblock $10M+ in closed enterprise ARR.",
        "Unified UserExperior and DevRev mobile engines into a single modular architecture, eliminating 40% duplicate codebase.",
      ],
      techStack: ["Kotlin", "Swift", "Dart", "TypeScript", "Coroutines", "WorkManager", "CI/CD", "GitHub Actions"],
    },
    {
      company: "UserExperior (Acquired by DevRev)",
      role: "Founding Engineer & Mobile Systems Lead",
      period: "Nov 2016 — Jan 2024",
      location: "Mumbai, India",
      tagline: "0-to-1 founding journey building session replay & mobile analytics scaled to 100+ enterprise apps.",
      bullets: [
        "Built the client SDK engine from line zero across 6 client platforms, scaling to tens of millions of users leading to acquisition.",
        "Engineered low-level frame recording with banking-grade client-side PII masking and AES-256 encryption.",
        "Profiled runtime performance to maintain <20MB memory footprint and <15% CPU load at 60fps across device tiers.",
      ],
      techStack: ["Kotlin", "Java", "Low-level Threading", "SQLite", "AES-256", "Android Internals"],
    },
  ] as WorkExperience[],

  projects: [
    {
      year: "2026",
      title: "HomeoAI — Clinical AI Intelligence SaaS",
      subtitle: "Production Applied GenAI Platform",
      category: "AI SaaS",
      description: "Full-stack AI SaaS empowering 800+ registered homeopathic doctors with hybrid RAG, multi-tier LLM inference, bilingual voice-to-prescription extraction, and deterministic clinical safety guardrails.",
      highlights: [
        "30,000+ classical passages indexed via pgvector with strict page-level citation",
        "Resilient multi-model fallback cascade (Gemini 2.5 Flash → GPT-4o-mini → Groq Llama 3.3)",
        "Zero-PII client-side sanitization preserving patient privacy before LLM transmission",
      ],
      metrics: "800+ Doctors · 4.2k+ AI Consultations · <1.8s TTFT",
      liveUrl: "https://homeoai.online",
      tags: ["pgvector", "RAG", "Multi-Model", "LLM Guardrails", "Groq Whisper", "FastAPI/Deno"],
    },
    {
      year: "2024",
      title: "DevRev Real-Time AI Telemetry Pipeline",
      subtitle: "High-Throughput Mobile Event Ingestion",
      category: "Systems",
      description: "A resilient client-side streaming engine processing millions of session replay frames and behavioral events with intelligent dynamic batching, compression, and offline storage.",
      highlights: [
        "99.9%+ event delivery reliability across intermittent network conditions",
        "Directly powers DevRev's semantic search and automated AI support agent triage",
        "Zero UI thread contention with custom buffer recycling",
      ],
      metrics: "30M+ MAU · 99.9% Ingestion Reliability",
      tags: ["Distributed Ingestion", "Event Streaming", "Mobile Systems", "Telemetry"],
    },
    {
      year: "2023",
      title: "Banking-Grade On-Device PII Masking Engine",
      subtitle: "Client-Side Privacy Engine (UserExperior)",
      category: "Architecture",
      description: "Proprietary on-device layout traversal algorithm automatically detecting and masking sensitive user input fields, credit card numbers, and PII prior to video buffer encoding.",
      highlights: [
        "Compliant with RBI, GDPR, and PCI-DSS enterprise banking mandates",
        "Zero plain-text frame data ever touches persistent device disk unencrypted",
      ],
      metrics: "100+ Enterprise Banking & Fintech Apps",
      tags: ["Privacy-by-Design", "AES-256", "Mobile Security", "Buffer Recycling"],
    },
  ] as Project[],

  skills: {
    aiArchitecture: [
      "Hybrid RAG",
      "pgvector",
      "MMR Reranking",
      "Multi-Model Cascading",
      "Context Caching",
      "Function Calling / Tools",
      "Structured Outputs",
      "Prompt Optimization",
      "Hallucination Prevention",
    ],
    guardrailsAndPrivacy: [
      "Deterministic Medical Guardrails",
      "Client-side PII Sanitization",
      "Zero-PII Transmission",
      "Groq Whisper Voice AI",
      "Document Chunking",
      "AES-256 Encryption",
    ],
    fullStackAndCloud: [
      "TypeScript",
      "Python / FastAPI",
      "React",
      "Vite",
      "Node.js",
      "Deno / Edge Functions",
      "PostgreSQL / Supabase",
      "Tailwind CSS",
      "IndexedDB",
    ],
    systemsAndScale: [
      "High-throughput Telemetry (30M+ MAU)",
      "Cross-Platform SDKs (Kotlin, Swift, Dart)",
      "Memory/CPU Profiling (<20MB, <15% CPU)",
      "CI/CD (GitHub Actions)",
      "0-to-1 Architecture",
    ],
  },

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Nagpur University",
      period: "2011 — 2014",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic, Nagpur",
      period: "2008 — 2011",
    },
  ],
};
