import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sabina: {
          50: "#faf6f0",
          100: "#f2e8d9",
          200: "#e3cead",
          300: "#d0ac78",
          400: "#c0904f",
          500: "#a8753a",
          600: "#8a5c2e",
          700: "#6d4726",
          800: "#4a3019",
          900: "#241a10",
          950: "#140f0a",
        },
        pine: {
          50: "#eef6f5",
          100: "#d7e9e6",
          200: "#a9cdc7",
          300: "#7dafa8",
          400: "#548f88",
          500: "#3c6f6a",
          600: "#2d5652",
          700: "#234441",
          800: "#182f2d",
          900: "#0f1e1c",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(20, 15, 10, 0.25)",
        glow: "0 0 0 1px rgba(192, 144, 79, 0.35), 0 12px 40px rgba(20, 15, 10, 0.45)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        drift: "drift 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
