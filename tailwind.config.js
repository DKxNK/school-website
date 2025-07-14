// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        welcome: ["'Dancing Script'", "cursive"], // custom font
        heading: ["'Playfair Display'", "serif"],
        nav: ["Poppins", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
