import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1A3C34",
        gold: "#D4A017",
        porcelain: "#F5F5F5",
        sage: "#A8C06C",
        ink: "#050706"
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(212, 160, 23, 0.22)",
        glass: "0 24px 80px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
