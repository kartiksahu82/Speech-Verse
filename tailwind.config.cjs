/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ✅ Add this line to enable dark mode via a class
  theme: {
    extend: {
      // Optional: customize Apple-style colors here
      colors: {
        'zinc-900': '#0f0f0f',
        'zinc-800': '#181818',
        'zinc-700': '#2d2d2d',
      },
    },
  },
  plugins: [],
}
