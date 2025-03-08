/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Primary': '#0e1523',
        'Second': '#111827',
        'black': '#030712',
        'sky': '#38bdf8',
        'font-white': '#dbdbe0',
        'font-dark': '#d3d0d0',
      },
    },
  },
  plugins: [],
}