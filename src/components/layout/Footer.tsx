import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section-shell py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built honestly, one lab at a time.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Github className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Linkedin className="h-5 w-5" strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-ink-muted hover:text-ink transition-colors"
          >
            <Mail className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
