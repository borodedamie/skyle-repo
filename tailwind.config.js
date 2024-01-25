/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",
        md1: "414px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        'herogif': "url('./src/assets/gif/Landingpage .gif')",
        'portfolio': "url('./src/assets/gif/page.gif')",
        'individual': "url('./src/assets/gif/individualworkpage.gif')",
      }
    },
  },
  plugins: [],
};
