import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#020617",
          panel: "#0f172a",
          blue: "#2563eb",
          cyan: "#06b6d4",
          gold: "#facc15"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(37, 99, 235, 0.35)"
      }
    }
  },
  plugins: []
}

export default config