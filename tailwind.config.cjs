/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      colors: {
        backg: "#DAD5CF",
        textc: "#2E1915",
      },
      fontFamily: {
        pops: ['"poppins"', "sans-serif", "300", "normal"],
        pop: ['"poppins"', "sans-serif", "200", "normal"],
      },
      fontSize: {
        big: "2.75rem",
      },
      backgroundImage: {
        mig: "url('/src/assets/images/mig.png')",
      },
    },
  },
};
