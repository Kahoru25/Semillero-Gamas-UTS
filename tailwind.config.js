/** @type {import('tailwindcss').Config} */
const withMT = require("./node_modules/@material-tailwind/html/utils/withMT"); // Cambio aquí

module.exports = withMT({
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailgrids/plugin"),
    require("flowbite/plugin"),
  ],
});


