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
        pops: ["poppins light"],
        pop: [
          "poppins extralight",

          // "url('https://use.typekit.net/sow1cek.css')",
        ],
      },
      // fontWeight: {
      //   pops: "300", // Define font weight 300 as 'light'
      //   pop: "200", // Define font weight 200 as 'extralight'
      // },
      // fontStyle: {
      //   pops: "normal",
      //   pop: "normal",
      // },
      backgroundImage: {
        mig: "url('/src/assets/images/mig.png')",
      },
    },
  },
};
