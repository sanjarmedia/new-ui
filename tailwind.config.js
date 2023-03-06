const defaultTheme = require('tailwindcss/defaultTheme')
// const {sans} = require("@material-tailwind/react/theme/base/typography");

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'background-color': '#F8F8F8',
        'background-dark-color': '#16181A',
        'black': '#25252A',
        'primary': '#007AFC',
        'secondary': '#65696B',
        'default-icon-color': '#ACACAC',
        'dropdown-color': '#2A303A',
        'placeholder-color': '#8F8F8F',
        'blue-color': '#1470C6',
        'green-color': '#219B68',
        'yellow-color': '#FCA600',
        'red-color': '#E84141',
        'gray-color': '#65686B',
        'purple-color': '#A066EB',
        'transparent': '#00000033',
        'input-border-color': '#E5E5E5',
        'hover': '#026FE2',
      },
      fondSize: {
        xs: '0.625rem',
        sm: '0.9375rem',
      },
      lineHeight: {
        'xl': '56px'
      },
      backgroundImage: {
        'background-main': "url('/image/background-image.svg')",
        'background-nav': "url('/image/nav-bg.svg')"
      },
      animation: {
        'pulse-low': 'pulse 5s cubic-bezier(1, 0.5, 0.4, 1.5) infinite;',
        'text': 'text 10s ease infinite',
      },
      keyframes: {
        'pulse': {
          '0%': {
            opacity: 1,
            position: {bottom: '-25%'}
          },
          '50%': {
            opacity: 0,
            position: {bottom: '50%'}
          },
          '100%': {
            opacity: 1.5,
            position: {bottom: '125%'}
          },
        },
        'text': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      }
    },
  },
  plugins:
    [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
    ],
  variants:
    {
      // ...
      scrollbar: ['dark']
    }
}
