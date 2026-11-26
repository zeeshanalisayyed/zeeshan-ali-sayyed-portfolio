import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeeshan Ali Sayyed — Staff AI Engineer & Systems Architect",
  description:
    "Founder of HomeoAI (800+ doctors, 4.2k+ consultations), Ex-DevRev MTS (30M+ MAU), Founding Engineer at UserExperior. Applied AI & LLM Systems Architect.",
  openGraph: {
    title: "Zeeshan Ali Sayyed — Staff AI Engineer & Systems Architect",
    description:
      "Founder of HomeoAI, Ex-DevRev, Founding Engineer at UserExperior. Applied AI & LLM Systems Architect.",
    url: "https://zeeshanalisayyed.vercel.app",
    siteName: "Zeeshan Ali Sayyed Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#09090b] text-neutral-200 antialiased selection:bg-neutral-800`}>
        {children}
      </body>
    </html>
  );
}
