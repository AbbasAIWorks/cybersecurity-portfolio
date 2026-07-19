// Generates a deterministic, abstract thumbnail for a project instead of a
// placeholder stock photo or a fabricated product screenshot. Swap this out
// for a real screenshot (via next/image) once one exists for a given project.
function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const PALETTES = [
  ["#4C7CFF", "#22D3EE"],
  ["#8B5CF6", "#4C7CFF"],
  ["#22D3EE", "#8B5CF6"],
  ["#4C7CFF", "#34D399"],
];

export function ProjectThumbnail({ seed: rawSeed }: { seed: string }) {
  const seed = rawSeed.replace(/[^a-zA-Z0-9]/g, "-");
  const hash = hashString(rawSeed);
  const [c1, c2] = PALETTES[hash % PALETTES.length];
  const rows = 5;
  const cols = 9;
  const cells = Array.from({ length: rows * cols }, (_, i) => i);
  // deterministic pseudo-random active cells based on hash
  const activeSet = new Set<number>();
  cells.forEach((i) => {
    const v = (hash * (i + 7)) % 97;
    if (v < 22) activeSet.add(i);
  });

  return (
    <svg viewBox="0 0 360 200" className="h-full w-full">
      <defs>
        <linearGradient id={`grad-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} stopOpacity="0.35" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id={`glow-${seed}`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={c2} stopOpacity="0.35" />
          <stop offset="100%" stopColor={c2} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="360" height="200" fill="#0A0E1C" />
      <rect width="360" height="200" fill={`url(#grad-${seed})`} />
      <rect width="360" height="200" fill={`url(#glow-${seed})`} />
      {cells.map((i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = 20 + col * 36;
        const y = 24 + row * 32;
        const active = activeSet.has(i);
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width="20"
            height="20"
            rx="4"
            fill={active ? c1 : "#ffffff"}
            fillOpacity={active ? 0.5 : 0.04}
          />
        );
      })}
    </svg>
  );
}
