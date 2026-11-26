"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, ExternalLink, Mail, Copy, Check, FileText } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors font-mono"
      >
        <Search className="w-3.5 h-3.5 text-neutral-500" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden sm:inline px-1 py-0.5 text-[10px] bg-neutral-950 border border-neutral-800 rounded text-neutral-400">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-[15vh] p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#0c0c0e] border border-neutral-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="w-full">
              <div className="flex items-center gap-2 px-3 border-b border-neutral-800">
                <Search className="w-4 h-4 text-neutral-500 shrink-0" />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full py-3 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
                  autoFocus
                />
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2 text-xs space-y-1">
                <Command.Empty className="py-6 text-center text-xs text-neutral-500">
                  No matching results.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-neutral-500 px-2 py-1 uppercase text-[10px] font-mono">
                  <Command.Item
                    onSelect={() => {
                      window.open(portfolioData.projects[0].liveUrl, "_blank");
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span>HomeoAI Live App</span>
                    <span className="font-mono text-[10px] text-emerald-400">800+ Doctors Live</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span>Work History</span>
                    <span className="font-mono text-[10px] text-neutral-500">HomeoAI · DevRev · UserExperior</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span>Technical Expertise</span>
                    <span className="font-mono text-[10px] text-neutral-500">pgvector · RAG · Systems</span>
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Quick Actions" className="text-neutral-500 px-2 py-1 uppercase text-[10px] font-mono pt-2">
                  <Command.Item
                    onSelect={copyEmail}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      <span>{copied ? "Copied email to clipboard!" : "Copy Email"}</span>
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500">{portfolioData.email}</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open(portfolioData.socials.resume, "_blank");
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Resume</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </Command.Item>
                </Command.Group>

                <Command.Group heading="Links" className="text-neutral-500 px-2 py-1 uppercase text-[10px] font-mono pt-2">
                  <Command.Item
                    onSelect={() => {
                      window.open(portfolioData.socials.github, "_blank");
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      window.open(portfolioData.socials.linkedin, "_blank");
                      setOpen(false);
                    }}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-800 hover:text-white cursor-pointer"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between px-3 py-2 border-t border-neutral-900 bg-neutral-950/50 text-[10px] text-neutral-500 font-mono">
                <span>Navigate: ↑ ↓</span>
                <span>Select: ↵</span>
                <span>Close: ESC</span>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
