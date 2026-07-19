"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { tools } from "@/lib/data";

export function Tools() {
  return (
    <section id="tools" className="section-shell py-24 md:py-32">
      <ScrollReveal>
        <SectionHeading eyebrow="Toolbox" title="What I work with day to day" />
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tools.map((tool, i) => (
          <ScrollReveal key={tool.name} delay={Math.min(i * 0.03, 0.24)}>
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-panel flex items-center gap-3 p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.03]">
                <Wrench className="h-4 w-4 text-ink-muted" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-sm font-medium text-ink">{tool.name}</p>
                {tool.learning && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-signal-learn">
                    Learning
                  </p>
                )}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
