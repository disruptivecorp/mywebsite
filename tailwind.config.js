/** @type {import('tailwindcss').Config} */
// Tailwind config — extends the default theme with the Option B palette
// (charcoal + teal + warm gray) and a paired serif/sans font stack so the
// site reads "lab homepage" rather than "SaaS landing page".
export default {
  // Scan every .tsx/.ts/.html file in src/ + the entry index.html for
  // utility classes. Anything not present in these files gets purged from
  // the production bundle, which keeps the CSS small.
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Charcoal — primary text, nav background, strong contrasts.
        ink: {
          DEFAULT: "#1A1A1A",
          soft: "#2A2A2A",
          muted: "#555555",
        },
        // Teal — single accent color for links, underlines, active state.
        // Deep enough to read on cream, not so saturated it screams.
        teal: {
          DEFAULT: "#0E7C7B",
          hover: "#0B5F5E",
          tint: "#E6F0F0",
        },
        // Warm gray background — softer than pure white, less clinical.
        cream: {
          DEFAULT: "#F5F4F0",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        // Serif for headings — gives editorial/academic feel.
        // System-stack fallbacks mean no external font fetch needed for v1.
        serif: ['"Source Serif Pro"', '"Georgia"', "serif"],
        // Sans for body — neutral, readable, modern.
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      // Slightly tighter max-width than Tailwind's default for a calmer column.
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
