/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0437cc',     // Primary Blue
        action: '#f77704',    // Orange for buttons/links
        highlight: '#a6e71c', // Lime for icons/badges
      }
    },
  },
  plugins: [],
}