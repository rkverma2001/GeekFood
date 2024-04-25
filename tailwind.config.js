/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepblue: "rgb(17, 24, 39)",
        graywhite: "rgb(243,244,246)",
        primarygreen: "rgb(57,149,136)",
      },
    },
  },
  plugins: [],
};
