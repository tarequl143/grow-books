/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        condensed: ['var(--font-roboto-condensed)'],
      },
      backgroundImage: {
        "top-border-gradiant": "linear-gradient(90deg,#80cfdc,#9ac93d)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'header': '0px -1px 0px 0px #ECEEF3 inset',
        'dropdown': '0 4px 50px rgba(0,0,0,.15)',
      }
    },
  },
  plugins: [],
};
