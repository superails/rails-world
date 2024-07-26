const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        'screen-sm': '425px'
      },
      colors: {
        'gray-light': '#F3F2F8',
        gray: '#C6C6C8',
        'gray-8': '#F3F2F8',
        'gray-6': '#C6C6C8',
        'purple-dark': '#432463',
        'purple-light': '#4E2A73',
        red: '#CB0C1C',
        blue: '#0A4E6B',
        'blue-light': '#829ECE',
        'green-dark': '#62C554',
        'green-light': '#D8F1D4'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries')
  ]
}
