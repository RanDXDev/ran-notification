/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F5FF",
          100: "#E5EEFF",
          200: "#C7DAFF",
          300: "#ADC9FF",
          400: "#94B8FF",
          500: "#79A6FF",
          600: "#2E74FF",
          700: "#004BE0",
          800: "#003194",
          900: "#001A4D",
          950: "#000C24",
        },
        error: {
          50: "#FFF0F0",
          100: "#FFE5E5",
          200: "#FFC7C7",
          300: "#FFADAD",
          400: "#FF9494",
          500: "#FF7878",
          600: "#FF2E2E",
          700: "#E00000",
          800: "#940000",
          900: "#4D0000",
          950: "#240000",
        },
        warning: {
          50: "#FFFCF5",
          100: "#FFF7E5",
          200: "#FFF0D1",
          300: "#FFE7B8",
          400: "#FFDF9E",
          500: "#FFD788",
          600: "#FFBD38",
          700: "#EB9C00",
          800: "#9E6900",
          900: "#4D3300",
          950: "#291B00",
        },
        success: {
          50: "#F5FFF6",
          100: "#E5FFE8",
          200: "#D1FFD6",
          300: "#B8FFC0",
          400: "#9EFFA9",
          500: "#87FF94",
          600: "#38FF4F",
          700: "#00EB1B",
          800: "#009E12",
          900: "#004D09",
          950: "#002905",
        },
      },
    },
  },

  plugins: [],
};

module.exports = config;
