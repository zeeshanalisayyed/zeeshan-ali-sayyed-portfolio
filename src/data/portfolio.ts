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

export interface Writing {
  title: string;
  publication: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
  external?: boolean;
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
    twitter: "https://x.com/zeeshanali_s",
    resume: "/Zeeshan_Ali_Sayyed_Resume_AI.pdf",
  },

  metrics: [
    {
      value: "800+",
      label: "Active Clinicians",
      subtext: "Practicing doctors on HomeoAI globally",
      highlight: true,
    },
    {
      value: "4.2k+",
      label: "AI Consultations",
      subtext: "End-to-end case analyses & repertorizations",
      highlight: true,
    },
    {
      value: "30M+",
      label: "Production MAU",
      subtext: "DevRev SDK & telemetry infrastructure",
    },
    {
      value: "<1.8s",
      label: "Multi-Model TTFT",
      subtext: "Cascaded RAG inference latency",
    },
  ],

  experience: [
    {
      role: "Staff AI Engineer & Principal Architect (Founder)",
      company: "HomeoAI",
      companyUrl: "https://homeoai.online",
      period: "2024 — Present",
      location: "Mumbai, India",
      tagline: "Clinical AI Copilot for Homeopathic Physicians & Healthcare Clinics",
      bullets: [
        "Architected hybrid pgvector RAG pipeline indexing 30,000+ clinical rubrics with strict PDF grounding and page-level citation tracing.",
        "Engineered multi-model fallback cascade (Gemini 2.5 Flash → GPT-4o-mini → Groq Llama 3.3 70B) slashing inference cost by 68% while sustaining 99.9% uptime.",
        "Designed append-only specialized case analysis engine, multi-currency credit wallets, and end-to-end patient vault with AES-256 encrypted health cards.",
        "Scaled platform to 800+ verified doctors across India, US, and Europe handling 4,200+ clinical sessions.",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "pgvector", "Supabase", "Gemini", "OpenAI", "Groq", "Deno Edge"],
    },
    {
      role: "Lead SDK & AI Telemetry MTS",
      company: "DevRev",
      companyUrl: "https://devrev.ai",
      period: "2021 — 2024",
      location: "Bengaluru, India",
      tagline: "Next-gen AI Native CRM & Customer Support Platform",
      bullets: [
        "Built core telemetry and analytics SDK powering 30M+ monthly active enterprise users with zero crash overhead.",
        "Unblocked $10M+ ARR by delivering enterprise-tier HIPAA and SOC-2 client-side data masking and PII redactor modules.",
        "Cut client-side token transmission overhead by 30% through binary delta sync and gzip-compressed stream serialization.",
      ],
      techStack: ["TypeScript", "Kotlin", "Swift", "WebAssembly", "Protobuf", "Distributed Telemetry"],
    },
    {
      role: "Founding Engineer & Mobile Systems Lead",
      company: "UserExperior",
      companyUrl: "https://devrev.ai",
      period: "2017 — 2021",
      location: "Mumbai, India",
      tagline: "Mobile App Behavioral Analytics & Session Replay (Acquired by DevRev)",
      bullets: [
        "Founding engineer from seed to acquisition; built session replay engine capturing high-fidelity screen state at <15% CPU load and <20MB memory.",
        "Implemented real-time banking-grade security masking for passwords, CVVs, and biometric prompts deployed on top banking apps.",
        "Created cross-platform SDK adapters across Android, iOS, React Native, Flutter, and Cordova.",
      ],
      techStack: ["Android/NDK", "iOS CoreAnimation", "React Native", "OpenGL ES", "Low-level Memory Profiling"],
    },
  ],

  projects: [
    {
      year: "2024",
      title: "HomeoAI Core Engine",
      subtitle: "Multi-Model Clinical Reasoning & Repertory Synthesis",
      category: "AI SaaS",
      description:
        "Full-stack clinical AI platform featuring 18-section case analysis, PDF grounding with Kent & Boericke repertories, and encrypted patient vaults.",
      highlights: [
        "800+ practicing clinicians onboarded",
        "Sub-2s multi-model AI cascade",
        "Deterministic grounded citation validator",
      ],
      metrics: "800+ Doctors · 4.2k+ Cases",
      liveUrl: "https://homeoai.online",
      tags: ["pgvector", "RAG", "Multi-LLM", "Edge Functions", "Supabase"],
    },
    {
      year: "2023",
      title: "High-Throughput Mobile Telemetry Engine",
      subtitle: "Enterprise-grade Event Pipeline for 30M+ MAU",
      category: "Systems",
      description:
        "Zero-drop, battery-optimized event streaming SDK for enterprise Android & iOS applications with client-side batching and adaptive backoff.",
      highlights: [
        "Sub-20MB resident memory footprint",
        "Zero UI thread frame drops (<0.01% jank)",
        "Client-side PII scrubbing with zero regex latency leaks",
      ],
      metrics: "30M+ MAU · $10M+ ARR unblocked",
      tags: ["Systems", "Performance", "Distributed Tracing", "C++ / NDK"],
    },
  ],

  writings: [
    {
      title: "Designing Cascaded Multi-LLM RAG with Deterministic Fallbacks",
      publication: "Engineering Architecture",
      date: "2024",
      readTime: "7 min",
      category: "AI Systems",
      url: "https://linkedin.com/in/zeeshanalisayyed",
      external: true,
    },
    {
      title: "Zero-Overhead Client-Side Telemetry: How to Stream Events from 30M Devices",
      publication: "Systems Engineering",
      date: "2023",
      readTime: "10 min",
      category: "Mobile Systems",
      url: "https://linkedin.com/in/zeeshanalisayyed",
      external: true,
    },
  ],

  skills: {
    "AI & Data Systems": [
      "pgvector RAG Architecture",
      "Multi-Model Cascades (Gemini, OpenAI, Groq)",
      "Prompt Optimization & Guardrails",
      "Vector Similarity & MMR Re-ranking",
      "Context Grounding & Hallucination Mitigation",
    ],
    "Languages & Frameworks": [
      "TypeScript / JavaScript",
      "Next.js / React",
      "Node.js / Deno",
      "Tailwind CSS",
      "Kotlin / Java",
      "Swift / Objective-C",
      "SQL (PostgreSQL)",
    ],
    "Systems & Cloud": [
      "Supabase / Lovable Cloud",
      "Distributed Event Telemetry (30M+ MAU)",
      "Memory & CPU Profiling (<20MB, <15% CPU)",
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
