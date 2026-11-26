import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zeeshan Ali Sayyed — Staff Mobile & SDK Engineer | AI Product Builder",
  description:
    "Staff Mobile & SDK Engineer with 10+ years scaling cross-platform mobile infrastructure (Android, iOS, Flutter, React Native, Cordova) to 30M+ MAU, and creator of HomeoAI.",
  keywords: [
    "Mobile SDK Engineer",
    "Staff Mobile Engineer",
    "Android Developer",
    "Flutter Developer",
    "React Native Developer",
    "Cordova",
    "Session Replay SDK",
    "AI Product Builder",
    "HomeoAI",
  ],
  authors: [{ name: "Zeeshan Ali Sayyed" }],
  openGraph: {
    title: "Zeeshan Ali Sayyed — Staff Mobile & SDK Engineer | AI Product Builder",
    description:
      "10+ years engineering cross-platform mobile SDKs across 6 platforms (30M+ MAU) and AI-powered products like HomeoAI.",
    url: "https://zeeshanalisayyed.vercel.app",
    siteName: "Zeeshan Ali Sayyed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan Ali Sayyed — Staff Mobile & SDK Engineer",
    description: "Mobile SDK Architect (Android, iOS, Flutter, React Native, Cordova) & AI Product Builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
