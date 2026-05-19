/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Ensuring your gold layout works perfectly
        gold: "#D4AF37",
      },
      keyframes: {
        "subtle-zoom": {
          "0%": { transform: "scale(1.02) translate(0px, 0px)" },
          "50%": { transform: "scale(1.06) translate(-5px, 3px)" },
          "100%": { transform: "scale(1.02) translate(0px, 0px)" },
        }, // <-- Added missing keyframe brace
      }, // <-- Added missing extend brace
      animation: {
        // This binds the keyframe to a clean utility class: animate-subtle-zoom
        "subtle-zoom": "subtle-zoom 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
