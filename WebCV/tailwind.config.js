/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '1115px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1600px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
    },
  },
  plugins: [],
}