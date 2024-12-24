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
        centraNo2: ['CentraNo2', 'sans-serif'], 
        "centraRegular": ['CentraNo2-Regular', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
