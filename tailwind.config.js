/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:{
          900:"#042c5c",
          700:"#294d75",
          200:"#9dabbe",
      },
    green:{
      200:"#3acfc5",
      250:"#2fb3aa"
    }}
    },
  },
  plugins: [],
}

