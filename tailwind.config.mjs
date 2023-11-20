/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ["Bebas Neue", "regular"],
        Oswald: ["Oswald Variable", 200],
        PTSerif: ["PT Serif", "regular"],
        "zen-kaku-gothic-new": ["Zen Kaku Gothic New", 300],
        OpenSans: ["open-sans", 200],
      },
    },
  },
  plugins: [],
};
