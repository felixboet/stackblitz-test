module.exports = {
  content: ["./src/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}"],
  theme: {
    fontFamily: {
      sans: ["'Signika Negative'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
