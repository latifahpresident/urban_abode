/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      yellowAccent: '#E2C77E',
      darkGreen: '#494f40',
      cream: '#F0EEE4',
      lightBrown: '#AF7752',
      darkBrown: '#865432',
      redBrown: '#BA7756',
      transParentGray: '#9b9ea396',
      transparentGreen: '#494f407d',
      creamAccent: '#f8e2ba'

    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'san-serif']
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-in-out',
        slideOutLeft: 'slideOutLeft 1s ease-in-out',
      },
      keyframes: {
        slideLeft: {
            from: {
              transform: 'translate3d(-100%, 0, 0)',
              visibility: 'visible',
            },
          
          to: {
              transform: 'translate3d(0, 0, 0)',
            }
          },
        slideOutLeft: {
          from: {
            transform: 'translate3d(0, 0, 0)'
          },
          to: {
            visibility: 'hidden',
            transform: 'translate3d(-100%, 0, 0)'
          }
        }
      }
    }
  },
  plugins: [],
}

