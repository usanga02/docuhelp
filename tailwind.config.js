/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F6F5FF",
        "secondary": "#1A0AD7",
        "dark": "#4B4B4E"
      },
      backgroundImage: {
        "hero-line": "url('./src/assets/Hero-lines.png')"
      },
      fontFamily: {
        "cerebri": ["CeribriSansPro", "san-serif"]
      }
    },
  },
  plugins: [],
}
