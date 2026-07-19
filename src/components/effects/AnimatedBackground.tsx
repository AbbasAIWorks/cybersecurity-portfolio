"use client";

import { useEffect, useRef } from "react";

// Signature hero element: a quiet network-topology visualization.
// Nodes drift, edges form between nearby nodes, and occasional "packets"
// travel along an edge — a nod to monitoring/scanning without leaning on
// hacker-movie cliches (no matrix rain, no green terminal).
type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Packet = {
  from: number;
  to: number;
  progress: number;
  speed: number;
};

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let raf = 0;

    const NODE_COUNT_BASE = 46;
    const LINK_DIST = 150;

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? 560;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(
        (NODE_COUNT_BASE * (width * height)) / (1280 * 560)
      );
      nodes = Array.from({ length: Math.max(18, Math.min(count, 70)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
      packets = [];
    }

    function maybeSpawnPacket() {
      if (packets.length > 5 || nodes.length < 2) return;
      if (Math.random() > 0.02) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      if (to === from) to = (to + 1) % nodes.length;
      packets.push({ from, to, progress: 0, speed: 0.006 + Math.random() * 0.006 });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = n.x - mouse.current.x;
        const dy = n.y - mouse.current.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          n.x += (dx / (dist || 1)) * force * 0.6;
          n.y += (dy / (dist || 1)) * force * 0.6;
        }
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            const mDist = Math.hypot(
              (a.x + b.x) / 2 - mouse.current.x,
              (a.y + b.y) / 2 - mouse.current.y
            );
            const proximity = Math.max(0, 1 - mDist / 260);
            const baseAlpha = (1 - dist / LINK_DIST) * 0.16;
            const alpha = Math.min(0.5, baseAlpha + proximity * 0.28);
            ctx.strokeStyle = `rgba(139, 168, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const mDist = Math.hypot(n.x - mouse.current.x, n.y - mouse.current.y);
        const proximity = Math.max(0, 1 - mDist / 200);
        const r = 1.4 + proximity * 1.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 200, 255, ${0.45 + proximity * 0.5})`;
        ctx.fill();
      }

      // packets travelling along random edges
      if (!prefersReduced) {
        maybeSpawnPacket();
        packets = packets.filter((p) => p.progress < 1);
        for (const p of packets) {
          p.progress += p.speed;
          const a = nodes[p.from];
          const b = nodes[p.to];
          if (!a || !b) continue;
          const x = a.x + (b.x - a.x) * p.progress;
          const y = a.y + (b.y - a.y) * p.progress;
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
          glow.addColorStop(0, "rgba(34, 211, 238, 0.9)");
          glow.addColorStop(1, "rgba(34, 211, 238, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }

    function handlePointerLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    if (prefersReduced) {
      draw(); // draw a single static frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-glow-blue-purple" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-grid-fade" />
    </div>
  );
}
