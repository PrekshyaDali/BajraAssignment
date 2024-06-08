// module.exports = {
//   content: ['./*.html', './public/js/**/*.js'], // Include HTML files from public folder and JavaScript files from js folder and its subfolders
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/line-clamp'),
//   ],
// }
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/components/**/*.html', './src/js/**/*.js'], // Include paths to all your HTML and JS files
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
