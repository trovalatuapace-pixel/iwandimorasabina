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
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(20, 15, 10, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
