import { CheckCircle2, Circle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { timeline } from "@/lib/data";

export function Timeline() {
  const lastIndex = timeline.length - 1;

  return (
    <section id="journey" className="section-shell py-24 md:py-32">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Learning Journey"
          title="Growth, shown honestly"
          description="No fabricated job history — just the real sequence of how I got from zero to here, and where I'm headed next."
        />
      </ScrollReveal>

      <div className="mt-14 relative max-w-2xl">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-blue/60 via-signal-purple/40 to-transparent" />

        <div className="space-y-8">
          {timeline.map((step, i) => {
            const inProgress = i === lastIndex;
            return (
              <ScrollReveal key={step.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="relative flex items-start gap-5 pl-0">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-base-elevated">
                    {inProgress ? (
                      <Circle className="h-4 w-4 text-signal-cyan animate-pulse-soft" strokeWidth={2} />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-signal-blue" strokeWidth={2} />
                    )}
                  </div>
                  <div className="glass-panel flex-1 p-5">
                    <p className="font-display font-semibold text-ink">{step.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.detail}</p>
                    {inProgress && (
                      <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.14em] text-signal-cyan">
                        In progress
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
