import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#145dfd",
          50: "#eef3ff",
          100: "#dbe6ff",
          200: "#bed0ff",
          300: "#92b0ff",
          400: "#6085ff",
          500: "#3b62ff",
          600: "#145dfd",
          700: "#1a3ad8",
          800: "#1c33ad",
          900: "#1d3288",
        },
        ink: {
          DEFAULT: "#0b0d10",
          soft: "#1a1d22",
          muted: "#555b66",
          subtle: "#838992",
        },
        surface: {
          DEFAULT: "#f7f7f5",
          raised: "#ffffff",
          sunken: "#efefec",
          border: "#e6e5e0",
          hairline: "#ececea",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "display-xl": [
          "clamp(2rem, 5.2vw, 4.5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(1.75rem, 4vw, 3.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.4rem, 2.6vw, 2.5rem)",
          { lineHeight: "1.18", letterSpacing: "-0.02em" },
        ],
        "eyebrow": [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.14em" },
        ],
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(17, 24, 39, 0.04), 0 1px 2px 0 rgba(17, 24, 39, 0.04)",
        raised:
          "0 1px 0 0 rgba(17, 24, 39, 0.04), 0 4px 20px -6px rgba(17, 24, 39, 0.08)",
        ring: "0 0 0 1px rgba(17, 24, 39, 0.06)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.04) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
