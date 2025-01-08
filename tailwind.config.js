// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust based on your HTML/JS file structure
    "./public/**/*.html",   // Include paths where your HTML files are stored
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [],
};

