import { Check, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-shell py-24 md:py-32">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Services"
          title="Beginner-friendly, clearly scoped"
          description="Priced and scoped for small businesses — every engagement states exactly who it's for, what's included, and which tools I use."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={Math.min(i * 0.05, 0.3)}>
            <Card className="h-full flex flex-col">
              <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{service.audience}</p>

              <ul className="mt-5 space-y-2.5 flex-1">
                {service.included.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal-cyan" strokeWidth={2} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.toolsUsed.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-signal-blue hover:text-signal-cyan transition-colors"
              >
                Ask about this
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
