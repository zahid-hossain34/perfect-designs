/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        allerta: ["Allerta", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        "lucida-calligraphy": ["Lucida Unicode Calligraphy", "sans-serif"],
      },
      colors: {
        orange: {
          xl: "#F4880A",
          lg: "#F08F1D",
          base: "#F4A950",
          sm: "#FFC886",
        },
        accent: {
          primary: "#FBF8BE",
        },
      },
    },
  },
  plugins: [],
};
