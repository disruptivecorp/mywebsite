// PostCSS pipeline — Tailwind first (generates utility classes from the
// tailwind.config.js), then autoprefixer (adds vendor prefixes for the
// browsers we care about, mostly for older Safari).
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
