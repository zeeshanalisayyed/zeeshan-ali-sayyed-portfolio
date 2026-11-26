export interface Metric {
  value: string;
  label: string;
  description: string;
  subtext?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tagline?: string;
  achievements: string[];
  bullets?: string[];
  tags: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  techStack?: string[];
  href?: string;
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Writing {
  title: string;
  platform: string;
  date: string;
  readTime: string;
  description: string;
  summary?: string;
  href: string;
  url?: string;
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subheadline: string;
    bio: string;
    summary?: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
    links: {
      github: string;
      linkedin: string;
      website: string;
    };
  };
  metrics: Metric[];
  experience: Experience[];
  experiences?: Experience[];
  projects: Project[];
  writings: Writing[];
  articles?: Writing[];
  skills: {
    category: string;
    items: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Zeeshan Ali Sayyed",
    headline: "Staff Mobile & SDK Engineer • AI Product Builder",
    subheadline: "Architecting cross-platform mobile infrastructure (Android, iOS, Flutter, React Native, Cordova) and AI-native products with 10+ years of production experience.",
    bio: "Founding Engineer & Platform Architect with 10+ years building low-latency mobile SDKs, distributed offline-first event pipelines, and production AI platforms. Built UserExperior's session replay engine across 6 mobile platforms from zero to acquisition by DevRev. Scaled cross-platform SDKs to 30M+ MAU, unblocked $10M+ in enterprise deals, and founded HomeoAI, an AI-powered clinical SaaS.",
    summary: "Founding Engineer & Platform Architect with 10+ years building low-latency mobile SDKs, distributed offline-first event pipelines, and production AI platforms. Built UserExperior's session replay engine across 6 mobile platforms from zero to acquisition by DevRev. Scaled cross-platform SDKs to 30M+ MAU, unblocked $10M+ in enterprise deals, and founded HomeoAI, an AI-powered clinical SaaS.",
    location: "Mumbai, India",
    email: "zeeshanali.sayyed1@gmail.com",
    phone: "+91 7276488049",
    availability: "Available for Consulting & Contract Engagements",
    links: {
      github: "https://github.com/zeeshanalisayyed",
      linkedin: "https://linkedin.com/in/zeeshanalisayyed",
      website: "https://homeoai.online",
    },
  },

  metrics: [
    {
      value: "30M+",
      label: "Monthly Active Users",
      description: "Supported across cross-platform SDKs at DevRev with 99.9%+ event delivery reliability.",
      subtext: "Supported across cross-platform SDKs at DevRev with 99.9%+ event delivery reliability.",
    },
    {
      value: "6 Platforms",
      label: "Native & Hybrid SDKs",
      description: "Built session replay engines from scratch for Android, iOS, Flutter, React Native, Cordova & Xamarin.",
      subtext: "Built session replay engines from scratch for Android, iOS, Flutter, React Native, Cordova & Xamarin.",
    },
    {
      value: "100+",
      label: "Production Enterprise Apps",
      description: "Integrated across banking, e-commerce, and healthcare apps, leading to DevRev acquisition.",
      subtext: "Integrated across banking, e-commerce, and healthcare apps, leading to DevRev acquisition.",
    },
    {
      value: "$10M+",
      label: "Enterprise ARR Unblocked",
      description: "Partnered on solution architecture, client migrations, and forward deployed integrations.",
      subtext: "Partnered on solution architecture, client migrations, and forward deployed integrations.",
    },
  ],

  experience: [
    {
      company: "HomeoAI",
      role: "Creator & AI Product Builder",
      period: "Apr 2026 – Present",
      location: "Mumbai, India",
      description: "AI-powered clinical practice management and decision-support platform for homeopathic doctors.",
      tagline: "AI-powered clinical practice management and decision-support platform for homeopathic doctors.",
      achievements: [
        "Architected full product vision, AI pipeline, and end-to-end engineering from 0 to production.",
        "Built LLM-assisted clinical workflows: acute case analysis, repertory PDF grounding, and patient management.",
        "Onboarded 500+ clinicians with zero-PII transmission and offline-first clinical note persistence.",
        "Engineered multi-model fallback (Gemini 2.5, OpenAI GPT-4o, Llama 3.3) for resilient clinical inference.",
      ],
      bullets: [
        "Architected full product vision, AI pipeline, and end-to-end engineering from 0 to production.",
        "Built LLM-assisted clinical workflows: acute case analysis, repertory PDF grounding, and patient management.",
        "Onboarded 500+ clinicians with zero-PII transmission and offline-first clinical note persistence.",
        "Engineered multi-model fallback (Gemini 2.5, OpenAI GPT-4o, Llama 3.3) for resilient clinical inference.",
      ],
      tags: ["AI SaaS", "React", "TypeScript", "Supabase", "LLMs", "pgvector", "RAG"],
      techStack: ["AI SaaS", "React", "TypeScript", "Supabase", "LLMs", "pgvector", "RAG"],
    },
    {
      company: "DevRev",
      role: "Member of Technical Staff — Lead SDK Engineer",
      period: "Feb 2024 – Apr 2026",
      location: "Mumbai, India",
      description: "Led 6 engineers building enterprise cross-platform SDKs for 30M+ MAU and AI-powered in-app chatbots.",
      tagline: "Led 6 engineers building enterprise cross-platform SDKs for 30M+ MAU and AI-powered in-app chatbots.",
      achievements: [
        "Scaled and led a team of 6 engineers delivering cross-platform SDKs (Android, Flutter, React Native, Cordova) for 30M+ MAU.",
        "Architected the consolidation of UserExperior and DevRev SDKs into a single modular platform, eliminating 40% code duplication.",
        "Engineered fault-tolerant mobile event ingestion pipelines processing millions of daily session replay events with 99.9%+ delivery reliability.",
        "Served as primary engineering contact for strategic enterprise accounts, unblocking $10M+ in closed deals through technical integrations.",
        "Automated cross-platform CI/CD pipelines, cutting release cycles by 50% and standardizing release processes.",
        "Delivered cross-platform SDKs with 100% API parity, reducing client integration time by 30%.",
      ],
      bullets: [
        "Scaled and led a team of 6 engineers delivering cross-platform SDKs (Android, Flutter, React Native, Cordova) for 30M+ MAU.",
        "Architected the consolidation of UserExperior and DevRev SDKs into a single modular platform, eliminating 40% code duplication.",
        "Engineered fault-tolerant mobile event ingestion pipelines processing millions of daily session replay events with 99.9%+ delivery reliability.",
        "Served as primary engineering contact for strategic enterprise accounts, unblocking $10M+ in closed deals through technical integrations.",
        "Automated cross-platform CI/CD pipelines, cutting release cycles by 50% and standardizing release processes.",
        "Delivered cross-platform SDKs with 100% API parity, reducing client integration time by 30%.",
      ],
      tags: ["Kotlin", "Swift", "Dart", "TypeScript", "Coroutines", "WorkManager", "CI/CD"],
      techStack: ["Kotlin", "Swift", "Dart", "TypeScript", "Coroutines", "WorkManager", "CI/CD"],
    },
    {
      company: "UserExperior (Acquired by DevRev)",
      role: "Founding Engineer & Mobile SDK Lead",
      period: "Nov 2016 – Jan 2024",
      location: "Mumbai, India",
      description: "Built mobile session replay and analytics platform from scratch across 6 platforms, leading to acquisition.",
      tagline: "Built mobile session replay and analytics platform from scratch across 6 platforms, leading to acquisition.",
      achievements: [
        "Built the UserExperior SDK ecosystem from scratch across Android, iOS, Flutter, React Native, Cordova, and Xamarin, scaling to 100+ production apps.",
        "Architected core mobile session replay engine: screen recording, gesture tracking, heatmaps, crash analytics, ANR monitoring, and privacy-safe UI masking.",
        "Designed an offline-first event pipeline with batching and retry logic, ensuring reliable session capture under flaky networks.",
        "Reduced SDK memory consumption by 20% and CPU overhead by 15% through low-level profiling, threading, and performance tuning.",
        "Implemented AES-256 encrypted data pipelines to satisfy enterprise security compliance, unblocking deals in regulated banking and fintech.",
        "Partnered directly with founders across product, sales, and customer success through the company's growth to acquisition.",
      ],
      bullets: [
        "Built the UserExperior SDK ecosystem from scratch across Android, iOS, Flutter, React Native, Cordova, and Xamarin, scaling to 100+ production apps.",
        "Architected core mobile session replay engine: screen recording, gesture tracking, heatmaps, crash analytics, ANR monitoring, and privacy-safe UI masking.",
        "Designed an offline-first event pipeline with batching and retry logic, ensuring reliable session capture under flaky networks.",
        "Reduced SDK memory consumption by 20% and CPU overhead by 15% through low-level profiling, threading, and performance tuning.",
        "Implemented AES-256 encrypted data pipelines to satisfy enterprise security compliance, unblocking deals in regulated banking and fintech.",
        "Partnered directly with founders across product, sales, and customer success through the company's growth to acquisition.",
      ],
      tags: ["Android", "iOS", "Flutter", "React Native", "Cordova", "Xamarin", "OpenGL", "AES-256"],
      techStack: ["Android", "iOS", "Flutter", "React Native", "Cordova", "Xamarin", "OpenGL", "AES-256"],
    },
    {
      company: "Technocean IT Services",
      role: "Software Engineer — Android",
      period: "Oct 2015 – Nov 2016",
      location: "Nagpur, India",
      description: "Developed native Android applications with low-level profiling and SQLite caching.",
      tagline: "Developed native Android applications with low-level profiling and SQLite caching.",
      achievements: [
        "Developed and maintained Android applications consuming REST APIs with local SQLite data caching.",
        "Reduced application crash rates through targeted memory profiling and background thread management.",
      ],
      bullets: [
        "Developed and maintained Android applications consuming REST APIs with local SQLite data caching.",
        "Reduced application crash rates through targeted memory profiling and background thread management.",
      ],
      tags: ["Android", "Java", "SQLite", "REST APIs"],
      techStack: ["Android", "Java", "SQLite", "REST APIs"],
    },
    {
      company: "Oakland Systems",
      role: "Java Developer",
      period: "Oct 2014 – Jun 2015",
      location: "Nagpur, India",
      description: "Built web applications and backend services using Java, Spring, Hibernate, and MySQL.",
      tagline: "Built web applications and backend services using Java, Spring, Hibernate, and MySQL.",
      achievements: [
        "Built web applications using Java, Spring, Hibernate, and MySQL with RESTful API integrations.",
        "Mentored a team of 4 interns on engineering best practices, code reviews, and delivery standards.",
      ],
      bullets: [
        "Built web applications using Java, Spring, Hibernate, and MySQL with RESTful API integrations.",
        "Mentored a team of 4 interns on engineering best practices, code reviews, and delivery standards.",
      ],
      tags: ["Java", "Spring", "Hibernate", "MySQL"],
      techStack: ["Java", "Spring", "Hibernate", "MySQL"],
    },
  ],

  projects: [
    {
      title: "HomeoAI — Clinical AI SaaS",
      category: "AI SaaS & Web App",
      description: "AI-native practice management platform for homeopathic doctors with clinical reasoning copilot, case analysis, and PDF repertory grounding.",
      highlights: [
        "500+ active clinicians onboarded",
        "Deterministic clinical guardrails & PII sanitization",
        "Multi-model fallback (Gemini 2.5, GPT-4o, Llama 3.3)",
        "Zero-PII HIPAA-aligned data pipeline",
      ],
      tags: ["AI SaaS", "React", "TypeScript", "Supabase", "LLMs", "RAG"],
      techStack: ["AI SaaS", "React", "TypeScript", "Supabase", "LLMs", "RAG"],
      href: "https://homeoai.online",
      url: "https://homeoai.online",
      liveUrl: "https://homeoai.online",
      featured: true,
    },
    {
      title: "DevRev Unified Mobile SDK",
      category: "Mobile Infrastructure",
      description: "Consolidated mobile SDK powering in-app AI support chat, session replay, ticketing, and user telemetry across 30M+ monthly active users.",
      highlights: [
        "Built for Android, Flutter, React Native & Cordova",
        "Unified two disparate SDK architectures, cutting code duplication by 40%",
        "100% cross-platform API parity",
        "Fault-tolerant event queue with 99.9%+ delivery reliability",
      ],
      tags: ["Kotlin", "Swift", "Flutter", "React Native", "Cordova", "WorkManager"],
      techStack: ["Kotlin", "Swift", "Flutter", "React Native", "Cordova", "WorkManager"],
      href: "https://devrev.ai",
      url: "https://devrev.ai",
      liveUrl: "https://devrev.ai",
      featured: true,
    },
    {
      title: "UserExperior Mobile Session Replay",
      category: "SDK Platforms",
      description: "Founding session replay and mobile experience analytics engine engineered across 6 mobile platforms, scaled to 100+ production enterprise apps.",
      highlights: [
        "Screen recording, heatmaps, ANRs, crash analytics",
        "Supported Android, iOS, React Native, Flutter, Cordova & Xamarin",
        "Offline-first event pipeline with batching and retry logic",
        "AES-256 data encryption and automatic privacy masking for PII",
      ],
      tags: ["Android", "iOS", "Flutter", "React Native", "Cordova", "Xamarin", "OpenGL"],
      techStack: ["Android", "iOS", "Flutter", "React Native", "Cordova", "Xamarin", "OpenGL"],
      href: "https://userexperior.com",
      url: "https://userexperior.com",
      liveUrl: "https://userexperior.com",
      featured: true,
    },
  ],

  writings: [
    {
      title: "Building Low-Overhead Session Replay Across 6 Mobile Platforms",
      platform: "Architecture Notes",
      date: "2026",
      readTime: "7 min read",
      description: "Lessons from engineering session recording for Android, iOS, Flutter, and React Native without degrading FPS, battery, or memory.",
      summary: "Lessons from engineering session recording for Android, iOS, Flutter, and React Native without degrading FPS, battery, or memory.",
      href: "https://homeoai.online",
      url: "https://homeoai.online",
      tags: ["Mobile SDK", "Performance", "Android", "Flutter"],
    },
    {
      title: "Designing Offline-First Event Pipelines for Mobile Resilience",
      platform: "Engineering Blog",
      date: "2025",
      readTime: "6 min read",
      description: "How to design mobile event buffering, local SQLite queues, and exponential retry strategies for 99.9%+ data delivery over flaky networks.",
      summary: "How to design mobile event buffering, local SQLite queues, and exponential retry strategies for 99.9%+ data delivery over flaky networks.",
      href: "https://homeoai.online",
      url: "https://homeoai.online",
      tags: ["Distributed Systems", "SQLite", "WorkManager"],
    },
    {
      title: "Building Deterministic Guardrails into AI-Powered Clinical Workflows",
      platform: "AI Architecture",
      date: "2026",
      readTime: "5 min read",
      description: "Architecting multi-model fallbacks, zero-PII sanitization, and grounding LLM reasoning against proprietary knowledge bases.",
      summary: "Architecting multi-model fallbacks, zero-PII sanitization, and grounding LLM reasoning against proprietary knowledge bases.",
      href: "https://homeoai.online",
      url: "https://homeoai.online",
      tags: ["LLM", "RAG", "Healthcare AI", "HomeoAI"],
    },
  ],

  skills: [
    {
      category: "Mobile Platforms & Frameworks",
      items: ["Android (Native)", "iOS (Native)", "Flutter", "React Native", "Cordova / Capacitor", "Xamarin"],
    },
    {
      category: "Languages & Core Runtimes",
      items: ["Kotlin", "Java", "Swift", "Dart", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "SDK Architecture & Systems",
      items: ["SDK Design", "Session Replay", "Event Ingestion Pipelines", "Offline-First Sync", "Modular Architecture", "AES-256 Encryption"],
    },
    {
      category: "Performance & Reliability",
      items: ["ANR Elimination", "Low-Level Memory Profiling", "Thread Optimization", "Battery Tuning", "Crash-Free Systems (99.9%+)"],
    },
    {
      category: "AI & Full-Stack Systems",
      items: ["LLM Integration (Gemini, Claude, GPT-4o)", "RAG Systems", "PII Sanitization", "React", "Next.js", "Supabase / PostgreSQL"],
    },
    {
      category: "Forward Deployed & Client Advisory",
      items: ["Enterprise Solution Architecture", "Client Migration & Onboarding", "Escalation Leadership", "CI/CD & Release Automation"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Nagpur University",
      year: "2014",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic, Nagpur",
      year: "2011",
    },
  ],
};

// Aliases for seamless component compatibility
portfolioData.experiences = portfolioData.experience;
portfolioData.articles = portfolioData.writings;
