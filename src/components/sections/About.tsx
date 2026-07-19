import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { aboutParagraphs } from "@/lib/data";
import { Compass, Terminal, ShieldQuestion } from "lucide-react";

const markers = [
  {
    icon: Compass,
    title: "Curious by default",
    detail: "I dig into how things break before I try to fix them.",
  },
  {
    icon: Terminal,
    title: "Practice over talk",
    detail: "Labs, write-ups, and small tools instead of buzzwords.",
  },
  {
    icon: ShieldQuestion,
    title: "Honest about the gaps",
    detail: "Still learning — and comfortable saying so.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] items-start">
        <ScrollReveal>
          <SectionHeading eyebrow="About" title="Early career. Real practice." />
          <div className="mt-8 grid gap-4">
            {markers.map((m) => (
              <div key={m.title} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                  <m.icon className="h-4 w-4 text-signal-cyan" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{m.title}</p>
                  <p className="text-sm text-ink-muted">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="glass-panel p-8 md:p-10">
            <div className="space-y-5">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
