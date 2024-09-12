/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkColor: "#282b2e",
        lightColor: "white",
        grayColor: "#6c757d",
        yellowColor: "#ddae71",
        lightBg: "#f3f4f4",
      },
      height: {
        landing: "90vh",
      },
      screens: {
        vsm: "540px",
      },
    },
  },
  plugins: [],
};
