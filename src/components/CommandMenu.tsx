"use client";

import * as React from "react";
import { Command } from "cmdk";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
  Smartphone,
  Check,
  Copy,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

interface CommandMenuProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export function CommandMenu({ open: externalOpen, setOpen: externalSetOpen }: CommandMenuProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen !== undefined ? externalOpen : internalOpen;
  const setOpen = externalSetOpen || setInternalOpen;
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm">
      <div
        className="fixed inset-0"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-10">
        <Command label="Command Menu" className="w-full">
          <div className="flex items-center px-4 border-b border-neutral-800">
            <Command.Input
              placeholder="Search sections, case studies, or links..."
              className="w-full py-3 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 outline-none"
            />
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2 space-y-1">
            <Command.Empty className="py-6 text-center text-xs text-neutral-500">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Flagship & Live Products"
              className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-2 py-1.5"
            >
              <Command.Item
                onSelect={() => {
                  window.open("https://homeoai.online", "_blank");
                  setOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Visit HomeoAI (Live Clinical SaaS)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Quick Client Actions"
              className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-2 py-1.5"
            >
              <Command.Item
                onSelect={copyEmail}
                className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                  <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500">
                  {portfolioData.email}
                </span>
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open(portfolioData.socials.resume, "_blank");
                  setOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Download Staff Engineer Resume (PDF)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Social & Code"
              className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 px-2 py-1.5"
            >
              <Command.Item
                onSelect={() => {
                  window.open(portfolioData.socials.github, "_blank");
                  setOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-3.5 h-3.5 text-neutral-400" />
                  <span>GitHub Profile</span>
                </div>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </Command.Item>

              <Command.Item
                onSelect={() => {
                  window.open(portfolioData.socials.linkedin, "_blank");
                  setOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2 text-xs rounded-lg text-neutral-200 hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </Command.Item>
            </Command.Group>
          </Command.List>

          <div className="p-2 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500 px-3">
            <span>Navigation & Actions</span>
            <span>ESC to close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
