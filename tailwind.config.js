/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/cjs/components/**/*.js",
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
      services: "url('/intro_services.png')",
      serviceSopr:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%), url('/sopr.png')",
      serviceExtra1:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%), url('/service-extra-1.png')",
      serviceExtra2:
        " linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%), url('/service-extra-2.png')",
    },
    fontFamily: {
      objectSans: ["Object Sans", "sans-serif"],
      darco: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};
