import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Texas Rangers brand-inspired palette
        rangers: {
          // Brand colors (unchanged)
          blue: "#003278",         // Rangers primary navy
          "blue-deep": "#001A47",
          "blue-bright": "#0F4FA8",
          red: "#C0111F",          // Rangers red
          "red-bright": "#E31837",
          // Light theme tokens (semantic — names kept for backward compat)
          ink: "#FAFAF7",          // page bg (paper white)
          graphite: "#F5F1E8",     // card bg (cream tinted)
          steel: "#EAE3D2",        // accent / divider
          chalk: "#001A47",        // primary heading (deep navy)
          bone: "#001A47",         // body text (deep navy — same as chalk for max contrast)
          cream: "#F5F1E8",        // legacy alias for graphite
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        ultra: "-0.06em",
      },
      animation: {
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "ticker": "ticker 40s linear infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
