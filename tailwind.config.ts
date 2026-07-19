import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        base: {
          DEFAULT: "#05070D",
          elevated: "#0A0E1C",
          card: "#0D1120",
        },
        ink: {
          DEFAULT: "#E9ECF5",
          muted: "#8B93A7",
          faint: "#5A6178",
        },
        line: "rgba(255,255,255,0.08)",
        signal: {
          blue: "#4C7CFF",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
          learn: "#34D399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,7,13,0.9) 85%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "glow-blue-purple":
          "radial-gradient(60% 60% at 30% 20%, rgba(76,124,255,0.20), transparent 70%), radial-gradient(50% 50% at 80% 60%, rgba(139,92,246,0.16), transparent 70%)",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
        "glow-cyan": "0 0 40px -8px rgba(34,211,238,0.35)",
        "glow-blue": "0 0 40px -8px rgba(76,124,255,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
