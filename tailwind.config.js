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
        "btn-primary": "#E8E7FE",
        "secondary": "#1A0AD7",
        "tertiary": "#4435F6",
        "dark": "#4B4B4E",
        "gray": "#D2CEFD1A",
        "gray-font": "#DBD8FD",
        "dark-night": "#0D0C0D",
      },
      backgroundImage: {
        "hero-line": "url('./src/assets/Hero-lines.png')"
      },
      fontFamily: {
        "cerebri": ["CeribriSansPro", "san-serif"],
        "cerebri-light": ["CeribriLightPro", "san-serif"]
      }
    },
  },
  plugins: [],
}
