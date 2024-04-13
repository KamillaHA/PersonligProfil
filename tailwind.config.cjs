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
        pops: ["poppins light", "url('https://use.typekit.net/sow1cek.css');"],
        pop: ["poppins extralight"],
      },
      backgroundImage: {
        mig: "url('/src/assets/images/mig.png')",
      },
    },
  },
};
