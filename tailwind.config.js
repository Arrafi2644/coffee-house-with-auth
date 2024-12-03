/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"]
      },
      backgroundImage: {
        bgImage: "url('https://i.ibb.co.com/8P9QRSv/3.png')",
        contactBg: "url('https://i.ibb.co.com/LJfV4ng/11.png')",
        footerBg: "url('https://i.ibb.co.com/9pw2G6q/24.jpg')",
        viewBg: "url('https://i.ibb.co.com/HgwNBng/13.jpg')",
      },
      colors: {
        primary : '#331A15',
        secondary : '#ECEAE3',
      }
    },
  },
  plugins: [require('daisyui'),],
}