"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, FileDown, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.access_key = "b9838f3d-a1e6-427b-afcb-c489d3c9d63c";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your security"
            description="Whether you're a recruiter or a small business owner, I read every message myself and reply personally."
          />

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <Mail className="h-4 w-4 text-signal-cyan" /> {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <MapPin className="h-4 w-4 text-signal-cyan" /> {profile.location}
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <Github className="h-4 w-4 text-signal-cyan" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <Linkedin className="h-4 w-4 text-signal-cyan" /> LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              className="flex items-center gap-3 text-sm text-ink-muted hover:text-ink transition-colors"
            >
              <FileDown className="h-4 w-4 text-signal-cyan" /> Download Resume
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-line bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-cyan/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-line bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-cyan/60"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="text-xs text-ink-muted">
                I&apos;m reaching out as a...
              </label>
              <select
                id="reason"
                name="reason"
                className="mt-1.5 w-full rounded-lg border border-line bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-cyan/60"
              >
                <option value="recruiter">Recruiter</option>
                <option value="business">Small business owner</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-xs text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full resize-none rounded-lg border border-line bg-white/[0.03] px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-cyan/60"
                placeholder="What can I help with?"
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "sent" && <CheckCircle2 className="h-4 w-4" />}
              {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send message"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
