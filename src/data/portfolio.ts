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
  subtitle: string;
  year: string;
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
  category: string;
  platform: string;
  date: string;
  readTime: string;
  description: string;
  summary?: string;
  href: string;
  url?: string;
  tags: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  resume: string;
  website: string;
  email?: string;
}

const rawMetrics: Metric[] = [
  {
    value: "30M+",
    label: "Active Mobile Users",
    description: "Scaled cross-platform SDKs across Android, iOS, React Native, Flutter, and Cordova.",
  },
  {
    value: "6",
    label: "Mobile Platforms",
    description: "Built session replay engines from scratch across Android, iOS, Flutter, RN, Cordova, Xamarin.",
  },
  {
    value: "100+",
    label: "Enterprise Apps Integrated",
    description: "Forward-deployed integration with zero ANRs and strict 60 FPS render budgets.",
  },
  {
    value: "$10M+",
    label: "ARR Unblocked",
    description: "Delivered performance breakthroughs and custom client telemetry architectures.",
  },
];

const rawExperience: Experience[] = [
  {
    company: "HomeoAI",
    role: "Creator & AI Product Builder",
    period: "Apr 2026 — Present",
    location: "Mumbai, India",
    description: "Architected and launched an AI-native clinical assistant and patient Health Card platform trusted by 800+ clinicians.",
    achievements: [
      "Built complete cross-platform product architecture: multi-model AI pipeline, offline-first clinical case taking, and secure patient Health Card ecosystem.",
      "Implemented high-precision clinical repertorization grounded in uploaded medical literature, eliminating hallucinations with deterministic rubric scoring.",
      "Engineered real-time streaming AI differential analysis with sub-1.8s TTFT using direct model APIs and multi-tier fallbacks.",
      "Scaled practice management workflows: automated WhatsApp reminders, localized billing across multiple currencies, and zero-downtime updates.",
    ],
    tags: ["Next.js", "React Native", "TypeScript", "Multi-Model AI", "PostgreSQL", "Tailwind CSS"],
  },
  {
    company: "DevRev",
    role: "Lead SDK Engineer — Member of Technical Staff",
    period: "Feb 2024 — Apr 2026",
    location: "Mumbai, India",
    description: "Led SDK engineering for DevRev mobile observability and real-time in-app user engagement platforms.",
    achievements: [
      "Led a team of 6 engineers maintaining and innovating core mobile SDKs across Android, iOS, React Native, and Flutter, serving 30M+ MAU.",
      "Architected unified cross-platform telemetry pipeline eliminating 40% code duplication across native wrapper bridges.",
      "Acted as Forward Deployed Engineer (FDE) for Tier-1 enterprise clients, diagnosing ANRs and crash anomalies to unblock $10M+ in ARR contracts.",
      "Optimized offline SQLite buffering and batch network dispatch, achieving 99.9% event delivery on intermittent mobile networks.",
    ],
    tags: ["Android (Kotlin/Java)", "iOS (Swift/Obj-C)", "Flutter", "React Native", "SDK Architecture", "Performance Profiling"],
  },
  {
    company: "UserExperior",
    role: "Founding Engineer (Acquired by DevRev)",
    period: "Nov 2016 — Jan 2024",
    location: "Mumbai, India",
    description: "Pioneered mobile app session replay and behavioral analytics technology from ground zero through acquisition.",
    achievements: [
      "Architected mobile session replay engine from scratch across 6 distinct platforms: Android, iOS, Flutter, React Native, Cordova, and Xamarin.",
      "Integrated into 100+ production enterprise apps with strict constraints: under 2% CPU overhead, under 15MB memory footprint, and guaranteed 60 FPS.",
      "Engineered on-device PII masking engine shielding sensitive UI text, input fields, and payment forms before telemetry left the user handset.",
      "Created native bridge architectures enabling Flutter and React Native apps to stream high-fidelity vector session recordings with zero UI thread jank.",
    ],
    tags: ["Android SDK", "iOS SDK", "Cordova", "Flutter", "React Native", "Native Bridges", "Memory & ANR Optimization"],
  },
  {
    company: "Technocean IT Services",
    role: "Software Engineer — Android",
    period: "Oct 2015 — Nov 2016",
    location: "Nagpur, India",
    description: "Developed enterprise Android client applications with heavy offline storage and SQLite synchronization requirements.",
    achievements: [
      "Built modular Android apps using Java, SQLite, and custom UI components.",
      "Implemented real-time location tracking and background sync services resilient to Android Doze mode and memory kills.",
    ],
    tags: ["Android", "Java", "SQLite", "Background Services", "REST APIs"],
  },
  {
    company: "Oakland Systems",
    role: "Software Engineer — Java/J2EE",
    period: "Oct 2014 — Jun 2015",
    location: "Nagpur, India",
    description: "Engineered backend microservices and relational database access layers for enterprise web systems.",
    achievements: [
      "Designed and maintained RESTful services and relational schema migrations in PostgreSQL.",
      "Collaborated on unit testing suites and CI deployment pipelines.",
    ],
    tags: ["Java", "J2EE", "PostgreSQL", "REST APIs", "Spring MVC"],
  },
];

const rawProjects: Project[] = [
  {
    title: "HomeoAI",
    subtitle: "AI-Powered Clinical SaaS & Mobile Health Cards",
    year: "2026",
    category: "AI SaaS & Mobile",
    description: "Full-stack clinical decision support system and patient engagement platform with multi-model AI reasoning, deterministic repertory scoring, and digital Health Card generation.",
    highlights: [
      "800+ practicing clinicians onboarded with 4,200+ case analyses processed",
      "Sub-1.8s time-to-first-token streaming pipeline with automatic model fallback",
      "Deterministic rubric grading grounded directly in clinical literature PDFs",
      "Integrated branded QR Health Cards with client-side encrypted medical vault",
    ],
    tags: ["Next.js", "React Native", "Multi-Model AI", "PostgreSQL", "Tailwind CSS"],
    href: "https://homeoai.online",
    liveUrl: "https://homeoai.online",
    featured: true,
  },
  {
    title: "DevRev Unified Mobile SDK",
    subtitle: "Cross-Platform Observability & In-App Support",
    year: "2024-2026",
    category: "Mobile Infrastructure",
    description: "Cross-platform mobile SDK suite enabling real-time session tracing, user crash telemetry, and in-app customer conversation interfaces across 30M+ monthly active handsets.",
    highlights: [
      "Unified architecture across Android (Kotlin), iOS (Swift), Flutter, and React Native",
      "Eliminated 40% redundant cross-bridge marshalling overhead",
      "99.9% event delivery via transactional SQLite offline buffers",
      "Directly unblocked $10M+ in enterprise customer conversions",
    ],
    tags: ["Android", "iOS", "Flutter", "React Native", "Kotlin", "Swift"],
    href: "https://github.com/zeeshanalisayyed",
    githubUrl: "https://github.com/zeeshanalisayyed",
    featured: true,
  },
  {
    title: "UserExperior Mobile Session Replay",
    subtitle: "Low-Overhead Event Pipeline Across 6 Mobile Platforms",
    year: "2016-2024",
    category: "SDK Systems",
    description: "Industry-leading mobile visual replay and gesture analytics engine engineered from scratch across 6 mobile platforms and deployed in 100+ high-traffic applications.",
    highlights: [
      "First-of-its-kind multi-platform engine: Android, iOS, Flutter, React Native, Cordova, Xamarin",
      "Guaranteed 60 FPS UI performance with under 2% average CPU utilization",
      "Zero-jank vector wireframe reconstruction avoiding expensive screen bitmaps",
      "Led directly to acquisition by DevRev in 2024",
    ],
    tags: ["SDK Architecture", "Android", "iOS", "Flutter", "React Native", "Cordova"],
    href: "https://github.com/zeeshanalisayyed",
    githubUrl: "https://github.com/zeeshanalisayyed",
    featured: true,
  },
  {
    title: "On-Device Real-Time PII Masking Engine",
    subtitle: "Zero-Leakage Privacy Engine for Mobile Handsets",
    year: "2023",
    category: "Privacy & Security",
    description: "High-performance client-side privacy library that inspects view hierarchies and input components in real time to scrub credit cards, credentials, and PII before capture.",
    highlights: [
      "Sub-millisecond view inspection with recursive layout tree traversal",
      "Zero sensitive data leaves client memory or device boundary",
      "Supports custom masking rules, regular expressions, and layout tags across all 6 frameworks",
      "Compliant with GDPR, HIPAA, and PCI-DSS standards",
    ],
    tags: ["Data Privacy", "Kotlin", "Swift", "Flutter Engine", "Security"],
    href: "https://github.com/zeeshanalisayyed",
    githubUrl: "https://github.com/zeeshanalisayyed",
    featured: false,
  },
];

const rawWritings: Writing[] = [
  {
    title: "Building Low-Overhead Session Replay Across 6 Mobile Platforms",
    category: "Mobile SDKs",
    platform: "Engineering Deep Dive",
    date: "2024",
    readTime: "7 min read",
    description: "How to capture UI event streams, touch vectors, and layout mutations without triggering ANRs or dropping below 60 FPS.",
    href: "https://linkedin.com/in/zeeshanalisayyed",
    tags: ["Mobile SDK", "Performance", "Android", "iOS", "Flutter"],
  },
  {
    title: "Architecting Offline-First Event Buffering for Mobile Applications",
    category: "Architecture",
    platform: "Systems Design",
    date: "2023",
    readTime: "5 min read",
    description: "Guaranteeing 99.9% event delivery on spotty cellular networks using transactional SQLite queues and adaptive retry backoff.",
    href: "https://linkedin.com/in/zeeshanalisayyed",
    tags: ["Offline First", "SQLite", "Resilience", "Networking"],
  },
  {
    title: "Cross-Platform Mobile SDK Design: Native Bridges vs Pure Frameworks",
    category: "Cross-Platform",
    platform: "Technical Notes",
    date: "2023",
    readTime: "6 min read",
    description: "Bridging core C++/Java/Obj-C telemetry engines into Flutter, React Native, and Cordova with zero bridge latency.",
    href: "https://linkedin.com/in/zeeshanalisayyed",
    tags: ["React Native", "Flutter", "Cordova", "Native Bridges"],
  },
  {
    title: "Grounding LLM Reasoning in High-Precision Clinical Workflows",
    category: "Applied AI",
    platform: "HomeoAI Architecture",
    date: "2026",
    readTime: "8 min read",
    description: "Eliminating medical hallucinations using bidirectional caching, PDF vector grounding, and multi-model fallback pipelines.",
    href: "https://homeoai.online",
    tags: ["Applied AI", "LLM", "Prompt Engineering", "HomeoAI"],
  },
];

// Hydrate aliases automatically
const metrics: Metric[] = rawMetrics.map((m) => ({ ...m, subtext: m.description }));

const experience: Experience[] = rawExperience.map((e) => ({
  ...e,
  tagline: e.description,
  bullets: e.achievements,
  techStack: e.tags,
}));

const projects: Project[] = rawProjects.map((p) => ({
  ...p,
  techStack: p.tags,
  url: p.href,
}));

const writings: Writing[] = rawWritings.map((w) => ({
  ...w,
  summary: w.description,
  url: w.href,
}));

export interface PortfolioData {
  name: string;
  handle: string;
  title: string;
  status: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  socials: SocialLinks;
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
    links?: {
      github?: string;
      linkedin?: string;
      website?: string;
      twitter?: string;
    };
    socials?: {
      github?: string;
      linkedin?: string;
      website?: string;
      twitter?: string;
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

const profileLinks = {
  github: "https://github.com/zeeshanalisayyed",
  linkedin: "https://linkedin.com/in/zeeshanalisayyed",
  resume: "/Zeeshan_Ali_Sayyed_Resume.pdf",
  website: "https://zeeshanalisayyed.vercel.app",
  email: "mailto:zeeshanali.sayyed1@gmail.com",
};

export const portfolioData: PortfolioData = {
  name: "Zeeshan Ali Sayyed",
  handle: "zeeshanalisayyed",
  title: "Staff Mobile & SDK Engineer | AI Product Builder",
  status: "Available for Consulting & Contract Engagements",
  location: "Mumbai, India",
  email: "zeeshanali.sayyed1@gmail.com",
  phone: "+91 7276488049",
  bio: "Founding Engineer & Platform Architect with 10+ years building low-latency cross-platform mobile SDKs (Android, iOS, Flutter, React Native, Cordova, Xamarin) scaled to 30M+ MAU, and creator of HomeoAI.",
  links: profileLinks,
  socials: profileLinks,
  personal: {
    name: "Zeeshan Ali Sayyed",
    headline: "Staff Mobile & SDK Engineer • AI Product Builder",
    subheadline: "Architecting cross-platform mobile infrastructure (Android, iOS, Flutter, React Native, Cordova) and AI-native products with 10+ years of production experience.",
    bio: "Founding Engineer & Platform Architect with 10+ years building low-latency cross-platform mobile SDKs (Android, iOS, Flutter, React Native, Cordova, Xamarin) scaled to 30M+ MAU, and creator of HomeoAI.",
    summary: "Founding Engineer & Platform Architect with 10+ years building low-latency cross-platform mobile SDKs (Android, iOS, Flutter, React Native, Cordova, Xamarin) scaled to 30M+ MAU, and creator of HomeoAI.",
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
  metrics,
  experience,
  experiences: experience,
  projects,
  writings,
  articles: writings,
  skills: [
    {
      category: "Mobile Platforms & Frameworks",
      items: ["Android (Kotlin, Java)", "iOS (Swift, Objective-C)", "Flutter & Dart", "React Native", "Apache Cordova", "Xamarin"],
    },
    {
      category: "SDK Architecture & Systems",
      items: ["Session Replay Engines", "Low-Latency Event Streaming", "Offline-First SQLite Buffering", "On-Device PII Masking", "Native-to-Cross-Platform Bridges", "Event Dispatch Pipelines"],
    },
    {
      category: "Languages & Core Tech",
      items: ["Kotlin", "Swift", "Dart", "TypeScript", "JavaScript", "Java", "C++", "Objective-C", "SQL"],
    },
    {
      category: "Performance & Mobile Diagnostics",
      items: ["ANR Prevention & Tracing", "Memory Leak Elimination (LeakCanary)", "Battery Drain Optimization", "60 FPS UI Rendering", "ProGuard, R8 & Binary Size Shrinking"],
    },
    {
      category: "AI & Full-Stack",
      items: ["Multi-Model AI Pipelines", "Direct Gemini & OpenAI APIs", "Vector RAG & PDF Grounding", "Supabase & PostgreSQL", "Next.js & React", "REST & WebSocket Protocols"],
    },
    {
      category: "Forward Deployed & Client Advisory",
      items: ["Enterprise SDK Integration", "Client Architecture Consulting", "FDE Technical Escalations", "Developer Tooling & Documentation", "CI/CD & App Store Releases"],
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

export const PORTFOLIO_DATA = portfolioData;
export default portfolioData;
