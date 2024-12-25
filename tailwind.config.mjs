/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        centraNo2: ["CentraNo2", "sans-serif"],
        centraRegular: ["CentraNo2-Regular", "sans-serif"],
        CentraNo2Light: ["CentraNo2-Light", "sans-serif"],
      },
      backgroundImage: {
        goldenGradient:
          "linear-gradient(237.24deg, #87603F 15.61%, #FFF3CF 114.56%)",
      },
    },
  },
  plugins: [],
};
