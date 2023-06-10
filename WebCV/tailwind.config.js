/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'programming': "url('/programming.jpg')",
        'myface': "url('/myface.jpeg')",
        'cSharp': "url('/c-sharp.png')",
        'c': "url('/icons/c.png')",
        'c+': "url('/c+.png')",
        'js': "url('/js.png')",
        'python': "url('/python.png')"
      }
    },
  },
  plugins: [],
}