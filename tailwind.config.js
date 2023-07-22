/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#8f8f8f",
          "200": "#031c30",
          "300": "rgba(255, 255, 255, 0.65)",
        },
        white: "#fff",
        deeppink: "#f8098e",
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      fontFamily: {
        poppins: "Poppins",
        ramabhadra: "Ramabhadra",
        "hind-vadodara": "'Hind Vadodara'",
      },
    },
    fontSize: {
      base: "16px",
      "44xl-1": "63.1px",
      "5xl": "24px",
      "109xl": "128px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
