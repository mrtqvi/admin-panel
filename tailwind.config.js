module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm" : "641px",
        "xs" : "480px"
      },
      fontFamily : {
        'shabnam' :  ["shabnam"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
