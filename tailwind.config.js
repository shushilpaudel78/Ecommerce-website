/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      primaryBlue: "#006CB8",
      lightBlue: "#D4E9FC",
      textBlue: "#072A4A",
      textOrange: "#FF6B35",
      white: "#F0F8FF",
      black: "#000000",
      colorBorder: "#072A4A",
      secondaryWhite: "#e5e5e5"
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '900px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        grotesque: ['Bricolage Grotesque', 'sans-serif'],

      },
    },
  },
  plugins: [],
}