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
  name: "Zeeshan Ali Sayyed",
  handle: "zeeshanalisayyed",
  title: "Staff Mobile & SDK Engineer | AI Product Builder",
  status: "Available for Consulting & Contract Engagements",
  location: "Mumbai, India",
  email: "zeeshanali.sayyed1@gmail.com",
  phone: "+91 7276488049",
  bio: "Founding Engineer & Platform Architect with 10+ years building low-latency cross-platform mobile SDKs (Android, iOS, Flutter, React Native, Cordova, Xamarin) scaled to 30M+ MAU, and creator of HomeoAI.",
  socials: {
    github: "https://github.com/zeeshanalisayyed",
    linkedin: "https://linkedin.com/in/zeeshanalisayyed",
    resume: "/Zeeshan_Ali_Sayyed_Resume.pdf",
    website: "https://homeoai.online",
    email: "mailto:zeeshanali.sayyed1@gmail.com",
  },
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
  metrics: [
    {
      value: "30M+",
      label: "Active Mobile Users",
      description: "Scaled cross-platform SDKs across Android, iOS, React Native, Flutter, and Cordova.",
      subtext: "Scaled cross-platform SDKs across Android, iOS, React Native, Flutter, and Cordova.",
    },
    {
      value: "6",
      label: "Mobile Platforms",
      description: "Built session replay engines from scratch across Android, iOS, Flutter, RN, Cordova, Xamarin.",
      subtext: "Built session replay engines from scratch across Android, iOS, Flutter, RN, Cordova, Xamarin.",
    },
    {
      value: "100+",
      label: "Enterprise Apps Integrated",
      description: "Forward-deployed integration with zero ANRs and strict 60 FPS render budgets.",
      subtext: "Forward-deployed integration with zero ANRs and strict 60 FPS render budgets.",
    },
    {
      value: "$10M+",
      label: "ARR Unblocked",
      description: "Delivered performance breakthroughs and custom client telemetry architectures.",
      subtext: "Delivered performance breakthroughs and custom client telemetry architectures.",
    },
  ],
  experience: [
    {
      company: "HomeoAI",
      role: "Creator & AI Product Builder",
      period: "Apr 2026 — Present",
      location: "Mumbai, India",
      description: "Architected and launched an AI-native clinical assistant and patient Health Card platform trusted by 800+ clinicians.",
      tagline: "AI-native clinical assistant and patient Health Card platform.",
      achievements: [
        "Built complete cross-platform product architecture: multi-model AI pipeline, offline-first clinical case taking, and secure patient Health Card ecosystem.",
        "Implemented high-precision clinical repertorization grounded in uploaded medical literature, eliminating hallucinations with deterministic rubric scoring.",
        "Engineered real-time streaming AI differential analysis with sub-1.8s TTFT using direct model APIs and multi-tier fallbacks.",
        "Scaled practice management workflows: automated WhatsApp reminders, localized billing across multiple currencies, and zero-downtime updates.",
      ],
      bullets: [
        "Built complete cross-platform product architecture: multi-model AI pipeline, offline-first clinical case taking, and secure patient Health Card ecosystem.",
        "Implemented high-precision clinical repertorization grounded in uploaded medical literature, eliminating hallucinations with deterministic rubric scoring.",
        "Engineered real-time streaming AI differential analysis with sub-1.8s TTFT using direct model APIs and multi-tier fallbacks.",
        "Scaled practice management workflows: automated WhatsApp reminders, localized billing across multiple currencies, and zero-downtime updates.",
      ],
      tags: ["Next.js", "React Native", "TypeScript", "Multi-Model AI", "PostgreSQL", "Tailwind CSS"],
      techStack: ["Next.js", "React Native", "TypeScript", "Multi-Model AI", "PostgreSQL", "Tailwind CSS"],
    },
    {
      company: "DevRev",
      role: "Lead SDK Engineer — Member of Technical Staff",
      period: "Feb 2024 — Apr 2026",
      location: "Mumbai, India",
      description: "Led SDK engineering for DevRev's mobile observability and real-time in-app user engagement platforms.",
      tagline: "Mobile observability and real-time in-app user engagement platforms.",
      achievements: [
        "Led a team of 6 engineers maintaining and innovating core mobile SDKs across Android, iOS, React Native, and Flutter, serving 30M+ MAU.",
        "Architected unified cross-platform telemetry pipeline eliminating 40% code duplication across native wrapper bridges.",
        "Acted as Forward Deployed Engineer (FDE) for Tier-1 enterprise clients, diagnosing ANRs and crash anomalies to unblock $10M+ in ARR contracts.",
        "Optimized offline SQLite buffering and batch network dispatch, achieving 99.9% event delivery on intermittent mobile networks.",
      ],
      bullets: [
        "Led a team of 6 engineers maintaining and innovating core mobile SDKs across Android, iOS, React Native, and Flutter, serving 30M+ MAU.",
        "Architected unified cross-platform telemetry pipeline eliminating 40% code duplication across native wrapper bridges.",
        "Acted as Forward Deployed Engineer (FDE) for Tier-1 enterprise clients, diagnosing ANRs and crash anomalies to unblock $10M+ in ARR contracts.",
        "Optimized offline SQLite buffering and batch network dispatch, achieving 99.9% event delivery on intermittent mobile networks.",
      ],
      tags: ["Android (Kotlin/Java)", "iOS (Swift/Obj-C)", "Flutter", "React Native", "SDK Architecture", "Performance Profiling"],
      techStack: ["Android (Kotlin/Java)", "iOS (Swift/Obj-C)", "Flutter", "React Native", "SDK Architecture", "Performance Profiling"],
    },
    {
      company: "UserExperior",
      role: "Founding Engineer (Acquired by DevRev)",
      period: "Nov 2016 — Jan 2024",
      location: "Mumbai, India",
      description: "Pioneered mobile app session replay and behavioral analytics technology from ground zero through acquisition.",
      tagline: "Mobile session replay and behavioral analytics technology across 6 platforms.",
      achievements: [
        "Architected mobile session replay engine from scratch across 6 distinct platforms: Android, iOS, Flutter, React Native, Cordova, and Xamarin.",
        "Integrated into 100+ production enterprise apps with strict constraints: <2% CPU overhead, <15MB memory footprint, and guaranteed 60 FPS.",
        "Engineered on-device PII masking engine shielding sensitive UI text, input fields, and payment forms before telemetry left the user's handset.",
        "Created native bridge architectures enabling Flutter and React Native apps to stream high-fidelity vector session recordings with zero UI thread jank.",
      ],
      bullets: [
        "Architected mobile session replay engine from scratch across 6 distinct platforms: Android, iOS, Flutter, React Native, Cordova, and Xamarin.",
        "Integrated into 100+ production enterprise apps with strict constraints: <2% CPU overhead, <15MB memory footprint
