/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/cjs/components/Carousel/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      black: "#252525",
      green: "#178080",
      white: "#FFFFFF",
    },
    backgroundImage: {
      intro: "url('/intro.png')",
      projects: "url('/intro_projects.png')",
    },
    fontFamily: {
      objectSans: ["Object Sans", "sans-serif"],
      darco: ["Darco", "sans-serif"],
    },
  },
  plugins: [],
};
