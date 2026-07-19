"use client";

import { motion } from "framer-motion";
import {
  Network,
  Terminal,
  Monitor,
  FileCode2,
  GitBranch,
  Github,
  Radar,
  ScanLine,
  Bug,
  Braces,
  Search,
  Globe,
  Server,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { skills, type Skill } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Networking: Network,
  Linux: Terminal,
  Windows: Monitor,
  Python: FileCode2,
  Bash: Terminal,
  HTML: FileCode2,
  CSS: FileCode2,
  JavaScript: Braces,
  Git: GitBranch,
  GitHub: Github,
  Nmap: Radar,
  Wireshark: ScanLine,
  "Burp Suite": Bug,
  "OWASP Top 10": ShieldAlert,
  "SQL Injection Basics": Braces,
  "XSS Testing": Bug,
  "Directory Enumeration": Search,
  "Subdomain Enumeration": Globe,
  "Basic API Testing": Server,
  "Risk Assessment": ShieldAlert,
};

const STATUS_FILL: Record<Skill["status"], number> = {
  Learning: 1,
  Practicing: 2,
  Comfortable: 3,
};

const STATUS_COLOR: Record<Skill["status"], string> = {
  Learning: "text-signal-learn",
  Practicing: "text-signal-cyan",
  Comfortable: "text-signal-blue",
};

function ProgressDots({ status }: { status: Skill["status"] }) {
  const filled = STATUS_FILL[status];
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${
            i <= filled ? "bg-current " + STATUS_COLOR[status] : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-shell py-24 md:py-32">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Skills"
          title="What I'm building, honestly labeled"
          description="Every skill is marked by where I actually am with it right now — not a fabricated expertise score."
        />
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => {
          const Icon = ICONS[skill.name] ?? Terminal;
          return (
            <ScrollReveal key={skill.name} delay={Math.min(i * 0.03, 0.3)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel h-full p-5 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                    <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.6} />
                  </div>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] ${STATUS_COLOR[skill.status]}`}
                  >
                    {skill.status}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink leading-snug">{skill.name}</p>
                  <div className="mt-3">
                    <ProgressDots status={skill.status} />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
