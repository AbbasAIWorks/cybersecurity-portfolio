# Cybersecurity Portfolio

A premium, honest portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion — designed for a junior cybersecurity specialist targeting recruiters and small-business clients.

No fake certifications, clients, testimonials, or metrics are included anywhere. Everything is either real content from the brief or a clearly marked placeholder.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — replace these placeholders

All real content lives in **`src/lib/data.ts`**. Search that file for `PLACEHOLDER` and update:

- `profile.location`, `profile.email`, `profile.github`, `profile.linkedin`
- `profile.resumeUrl` — replace `public/resume-placeholder.pdf` with your real resume (same filename, or update the path)
- Every project's `githubUrl` and `liveUrl` — point to your real repos and demos, or remove `liveUrl` for projects that aren't deployed
- Skill/service/tool lists — add, remove, or relabel anything that isn't accurate for you yet

## Contact form

The form in `src/components/sections/Contact.tsx` posts to `src/app/api/contact/route.ts`, which currently only validates input and logs it server-side — it does **not** send an email yet. Before deploying, wire it up to a real email/notification service, for example:

- [Resend](https://resend.com/docs) (simple, generous free tier)
- Postmark, SendGrid, or your own SMTP relay
- A hosted form service (Formspree, Web3Forms) if you'd rather skip the backend

## Project thumbnails

Project cards use a generated abstract SVG thumbnail (`ProjectThumbnail.tsx`) instead of a fake product screenshot. Once a project has a real screenshot or demo GIF, swap in a `next/image` there.

## Structure

```
src/
  app/            Routes, layout, global styles, API route
  components/
    layout/       Navbar, Footer
    sections/     Hero, About, Skills, Services, Projects, Timeline, Tools, WhyWorkWithMe, Contact
    ui/           Small primitives (Button, Card, Badge, SectionHeading)
    effects/      AnimatedBackground (hero network visual), ScrollReveal
  lib/            data.ts (all content) and utils.ts
```

## Notes

- Respects `prefers-reduced-motion` throughout (hero animation, scroll reveals, smooth scroll).
- Visible keyboard focus states on all interactive elements.
- Fully responsive from mobile up.
