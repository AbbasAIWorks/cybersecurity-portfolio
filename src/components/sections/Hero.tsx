"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="section-shell relative z-10 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-cyan opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal-cyan" />
            </span>
            Open to junior roles &amp; small business projects
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight"
          >
            <span className="gradient-text">Hi, I&apos;m {profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl md:text-2xl font-display text-ink-muted"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-ink-muted"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-ink transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 hover:text-ink transition-colors"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-base to-transparent" />
    </section>
  );
}
