/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#183392",
        secondary: "#cf5252",
      },
      keyframes: {
        wiggleX: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1.5px)" },
          "50%": { transform: "translateX(1.5px)" },
          "75%": { transform: "translateX(-1.5px)" },
        },
      },
      animation: {
        wiggleX: "wiggleX 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
