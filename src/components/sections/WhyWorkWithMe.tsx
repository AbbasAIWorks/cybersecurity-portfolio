import {
  DollarSign,
  Heart,
  BookOpen,
  Focus,
  MessageSquare,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Card } from "@/components/ui/card";
import { whyWorkWithMe } from "@/lib/data";

const ICONS = [DollarSign, Heart, BookOpen, Focus, MessageSquare, Target];

export function WhyWorkWithMe() {
  return (
    <section className="section-shell py-24 md:py-32">
      <ScrollReveal>
        <SectionHeading eyebrow="Why work with me" title="What you can expect" align="center" />
      </ScrollReveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyWorkWithMe.map((item, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <ScrollReveal key={item.title} delay={Math.min(i * 0.05, 0.3)}>
              <Card className="h-full text-center sm:text-left">
                <div className="mx-auto sm:mx-0 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                  <Icon className="h-[18px] w-[18px] text-signal-cyan" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-display font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
