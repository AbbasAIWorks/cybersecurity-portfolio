"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectThumbnail } from "./ProjectThumbnail";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-24 md:py-32">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've actually built"
          description="Small, real, and mine — each one solving a specific problem I ran into while learning."
        />
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={Math.min(i * 0.04, 0.3)}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="glass-panel group h-full flex flex-col overflow-hidden p-0"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                  <ProjectThumbnail seed={project.title} />
                </div>
                {project.featured && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-signal-cyan/30 bg-base/70 px-3 py-1 backdrop-blur-md">
                    <Sparkles className="h-3 w-3 text-signal-cyan" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-cyan">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink-faint">
                  <span className="text-ink-muted font-medium">Problem solved: </span>
                  {project.problemSolved}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-ink-faint">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Button size="sm" variant="secondary">
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </Button>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="ghost">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
