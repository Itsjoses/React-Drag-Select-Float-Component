/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        selectedShadow: "0 1px 2px rgba(0, 0, 0, .3), inset 0 0 0 1px #0090d1",
        tempSelectedShadow:
          "0 1px 2px rgba(0, 0, 0, .3), inset 0 0 0 1px #9e9e9e",
      },
    },
  },
  plugins: [],
}