import type { Config } from "tailwindcss";

// Palette built in OKLCH (see docs/foundations.html), stored as sRGB hex.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#ebfcef", 100: "#d4f7de", 200: "#b1eec3", 300: "#82dfa2", 400: "#44c97c",
          500: "#01ad5f", 600: "#058b4c", 700: "#016d3a", 800: "#00522a", 900: "#02381c", 950: "#00200d",
        },
        leaf: {
          50: "#edfcea", 100: "#d9f7d3", 200: "#baedaf", 300: "#93de83", 400: "#65c74e",
          500: "#44ab28", 600: "#2f8b11", 700: "#1f6d03", 800: "#165204", 900: "#0e3803", 950: "#042000",
        },
        ink: {
          50: "#f5f8f6", 100: "#eaeeeb", 200: "#d8deda", 300: "#c2c9c5", 400: "#a6afaa",
          500: "#8a938e", 600: "#6e7772", 700: "#555d58", 800: "#3e4641", 900: "#29302c", 950: "#151b18",
        },
        gold: {
          50: "#fff5e7", 100: "#fdeace", 200: "#f7d7a7", 300: "#edbf75", 400: "#dba037",
          500: "#be8401", 600: "#996a04", 700: "#785304", 800: "#5b3d02", 900: "#3f2901", 950: "#251600",
        },
        // Semantic roles
        canvas: "#ffffff",
        paper: "#fefefe",
        brand: { DEFAULT: "#02381c", hover: "#00522a", soft: "#ebfcef" },
        icon: "#151b18",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        snug: "-0.012em",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
