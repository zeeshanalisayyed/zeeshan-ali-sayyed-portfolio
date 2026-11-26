export interface Metric {
  label: string;
  value: string;
  description: string;
  subtext: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tagline: string;
  achievements: string[];
  bullets: string[];
  tags: string[];
  techStack: string[];
}

export interface Project {
  year: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  metrics: string;
  liveUrl?: string;
  href: string;
  tags: string[];
}

export interface Writing {
  title: string;
  publication: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
  href: string;
  description: string;
  external: boolean;
}

export const portfolioData = {
  name: "Zeeshan Ali Sayyed",
  handle: "@zeeshanalisayyed",
  title: "Staff AI Engineer & Systems Architect",
  status: "Building HomeoAI · Open to Advisory & High-Impact AI/Systems Roles",
  location: "Bangalore, India · Remote",
  email: "zeeshanalisayyed@gmail.com",
  phone: "+91 91307 26615",
  bio: "Staff AI Engineer and Systems Architect with 8+ years scaling systems from 0 to 30M+ MAU, founding clinical AI platforms, and architecting multi-model LLM cascades.",
  summary:
    "Staff AI Engineer and Systems Architect with 8+ years scaling systems from 0 to 30M+ MAU, founding clinical AI platforms, and architecting multi-model LLM cascades. Proven track record unblocking eight-figure enterprise deals, architecting zero-data-loss real-time telemetry pipelines, and founding HomeoAI (800+ clinicians, 4,200+ AI consultations).",
  socials: {
    github: "https://github.com/zeeshanalisayyed",
    linkedin: "https://linkedin.com/in/zeeshanalisayyed",
    twitter: "https://twitter.com/zeeshanalisayyed",
    resume: "/resume.pdf",
  },
  metrics: [
    {
      value: "30M+",
      label: "Active Users Served",
      description: "Scale architected across mobile SDKs and real-time backend pipelines.",
      subtext: "Scale architected across mobile SDKs and real-time backend pipelines.",
    },
    {
      value: "$10M+",
      label: "Enterprise ARR Unblocked",
      description: "Resolved critical mobile blockers for Tier-1 DevRev enterprise deals.",
      subtext: "Resolved critical mobile blockers for Tier-1 DevRev enterprise deals.",
    },
    {
      value: "4.2k+",
      label: "AI Consultations",
      description: "Clinical differential diagnoses powered by HomeoAI across 800+ doctors.",
      subtext: "Clinical differential diagnoses powered by HomeoAI across 800+ doctors.",
    },
    {
      value: "99.98%",
      label: "Pipeline Reliability",
      description: "Zero data-loss event streaming across 15,000+ RPS peak traffic.",
      subtext: "Zero data-loss event streaming across 15,000+ RPS peak traffic.",
    },
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Founder & Lead Architect",
      company: "HomeoAI",
      location: "Bangalore, India",
      tagline: "Autonomous clinical decision support platform for homeopathic practitioners.",
      description: "Autonomous clinical decision support platform for homeopathic practitioners.",
      bullets: [
        "Architected multi-model cascade (Gemini 2.5 Flash → GPT-4o-mini → Groq Llama 3.3 70B) with pgvector RAG, achieving sub-1.8s median clinical inference.",
        "Onboarded 800+ active homeopathic doctors, processing over 4,200 specialized clinical analyses with zero data loss.",
        "Implemented 18-step expert reasoning pipeline enforcing medical grounding, citation tracking, and strict PII anonymization under HIPAA guidelines.",
      ],
      achievements: [
        "Architected multi-model cascade (Gemini 2.5 Flash → GPT-4o-mini → Groq Llama 3.3 70B) with pgvector RAG, achieving sub-1.8s median clinical inference.",
        "Onboarded 800+ active homeopathic doctors, processing over 4,200 specialized clinical analyses with zero data loss.",
        "Implemented 18-step expert reasoning pipeline enforcing medical grounding, citation tracking, and strict PII anonymization under HIPAA guidelines.",
      ],
      tags: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "LangChain", "Supabase", "Tailwind CSS"],
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "LangChain", "Supabase", "Tailwind CSS"],
    },
    {
      period: "2022 — 2024",
      role: "Member of Technical Staff (MTS)",
      company: "DevRev",
      location: "Bangalore, India",
      tagline: "Core mobile platform and telemetry systems powering DevRev's enterprise collaboration engine.",
      description: "Core mobile platform and telemetry systems powering DevRev's enterprise collaboration engine.",
      bullets: [
        "Unblocked $10M+ enterprise ARR by resolving long-standing core mobile SDK networking and state synchronization blockers.",
        "Engineered real-time crash and session telemetry ingestion pipelines serving 30M+ monthly active users at 99.99% uptime.",
        "Spearheaded cross-platform SDK reliability initiatives, reducing crash rates from 0.42% to under 0.01% across iOS and Android.",
      ],
      achievements: [
        "Unblocked $10M+ enterprise ARR by resolving long-standing core mobile SDK networking and state synchronization blockers.",
        "Engineered real-time crash and session telemetry ingestion pipelines serving 30M+ monthly active users at 99.99% uptime.",
        "Spearheaded cross-platform SDK reliability initiatives, reducing crash rates from 0.42% to under 0.01% across iOS and Android.",
      ],
      tags: ["React Native", "TypeScript", "Go", "WebRTC", "Event-Driven", "Distributed Systems"],
      techStack: ["React Native", "TypeScript", "Go", "WebRTC", "Event-Driven", "Distributed Systems"],
    },
    {
      period: "2019 — 2022",
      role: "Founding Engineer",
      company: "UserExperior (Acquired by DevRev)",
      location: "Mumbai / Bangalore, India",
      tagline: "High-frequency mobile session recording engine built from ground zero through acquisition.",
      description: "High-frequency mobile session recording engine built from ground zero through acquisition.",
      bullets: [
        "Built low-overhead mobile recording engine capturing 60 FPS screen rendering and touch interactions with under 2% CPU overhead and <5 MB memory footprint.",
        "Designed client-side heuristic PII masking algorithms guaranteeing compliance with RBI banking security standards.",
        "Scaled analytics backend to ingest 500M+ monthly user sessions across top Indian fintech unicorns.",
      ],
      achievements: [
        "Built low-overhead mobile recording engine capturing 60 FPS screen rendering and touch interactions with under 2% CPU overhead and <5 MB memory footprint.",
        "Designed client-side heuristic PII masking algorithms guaranteeing compliance with RBI banking security standards.",
        "Scaled analytics backend to ingest 500M+ monthly user sessions across top Indian fintech unicorns.",
      ],
      tags: ["Objective-C", "Java", "C++", "Android NDK", "PostgreSQL", "Kafka"],
      techStack: ["Objective-C", "Java", "C++", "Android NDK", "PostgreSQL", "Kafka"],
    },
  ],
  projects: [
    {
      year: "2024",
      title: "HomeoAI Clinical Intelligence",
      subtitle: "Autonomous Clinical Repertorization & Miasmatic Engine",
      category: "HealthTech / AI",
      description:
        "An AI-native clinical workspace combining classical homeopathic repertories with hierarchical RAG grounding and multi-model fallback cascades.",
      highlights: [
        "800+ verified practitioner users across 6 countries",
        "Sub-2s end-to-end clinical synthesis pipeline",
        "Strict citation grounding against verified repertory texts",
      ],
      metrics: "800+ Doctors · 4.2k+ Consultations",
      liveUrl: "https://homeoai.online",
      href: "https://homeoai.online",
      tags: ["LLMs", "RAG", "pgvector", "TypeScript", "Supabase", "Tailwind"],
    },
    {
      year: "2023",
      title: "High-Throughput Mobile Telemetry Engine",
      subtitle: "Low-overhead event streaming and replay SDK",
      category: "Systems / Mobile",
      description:
        "Zero-drop offline queueing and background synchronization engine for mobile devices operating under volatile network conditions.",
      highlights: [
        "Guaranteed FIFO event delivery across app crashes",
        "Zero main-thread blocking via dedicated worker queues",
        "Adaptive compression delivering 68% payload reduction",
      ],
      metrics: "30M+ MAU · <2% Battery Drain",
      href: "https://github.com/zeeshanalisayyed",
      tags: ["Mobile Systems", "Distributed Queues", "Protobuf", "Performance"],
    },
    {
      year: "2022",
      title: "Real-time PII Masking Pipeline",
      subtitle: "Deterministic client-side sensitive data obfuscation",
      category: "Security / Computer Vision",
      description:
        "Patent-worthy client-side heuristic engine that detects and obscures credit card numbers, CVVs, and credentials before screen buffers leave the device.",
      highlights: [
        "Deterministic sub-millisecond frame analysis",
        "100% compliance with RBI and GDPR biometric/financial mandates",
        "Zero server-side decryption risk",
      ],
      metrics: "100% Banking Compliance · <1ms Overhead",
      href: "https://github.com/zeeshanalisayyed",
      tags: ["Security", "Computer Vision", "Privacy", "Algorithms"],
    },
  ],
  writings: [
    {
      title: "Architecting a Resilient Multi-Model LLM Fallback Cascade",
      publication: "HomeoAI Engineering Blog",
      date: "Nov 2024",
      readTime: "8 min read",
      category: "AI Architecture",
      url: "https://homeoai.online",
      href: "https://homeoai.online",
      description:
        "How we route clinical queries through Gemini, OpenAI, and Groq with sub-2s latency, zero downtime, and strict grounding verification.",
      external: true,
    },
    {
      title: "Low-Overhead Mobile Session Replay: Lessons from 500M+ Sessions",
      publication: "Systems Engineering",
      date: "Jan 2024",
      readTime: "12 min read",
      category: "Mobile Systems",
      url: "https://github.com/zeeshanalisayyed",
      href: "https://github.com/zeeshanalisayyed",
      description:
        "Engineering lessons on keeping memory under 5MB and CPU under 2% while capturing 60 FPS UI state transitions on low-end Android devices.",
      external: true,
    },
    {
      title: "Zero-Data-Loss Event Ingestion in Volatile Network Environments",
      publication: "Distributed Architecture",
      date: "Aug 2023",
      readTime: "10 min read",
      category: "Distributed Systems",
      url: "https://github.com/zeeshanalisayyed",
      href: "https://github.com/zeeshanalisayyed",
      description:
        "Implementing persistent write-ahead logging and adaptive backpressure algorithms for client-side SDK telemetry.",
      external: true,
    },
  ],
  skills: {
    core: ["System Architecture", "AI Engineering", "Mobile Platform Engineering", "Distributed Systems"],
    architecture: ["Multi-Model LLM Cascades", "RAG & Vector Search", "Event-Driven Pipelines", "Offline-First Sync"],
    aiMl: ["pgvector", "LangChain", "Gemini 2.5", "GPT-4o", "Llama 3.3 / Groq", "Prompt Engineering"],
    mobileWeb: ["React Native", "Next.js", "TypeScript", "React", "iOS / Swift", "Android / Kotlin"],
    databases: ["PostgreSQL", "Supabase", "Redis", "Kafka", "ClickHouse"],
    devopsCloud: ["Docker", "Vercel", "AWS", "GitHub Actions", "Turborepo"],
  },
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "University of Pune",
      year: "2015 — 2019",
      details: "Focus on Distributed Systems, Network Security, and Object-Oriented Design.",
    },
  ],
};
