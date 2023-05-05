const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          gray: {
            100: '#F4F4F4',
            200: '#EAEAEA',
            300: '#A7A7A7',
            400: '#595959',
            500: '#252525',
            600: '#1E1E1E',
          }
        },
        primary: {
          DEFAULT: "#15BE62",
          light: "#E7F4EE",
          dark: "#09A751"
        },
        danger: {
          DEFAULT: "#BF0905",
          light: "#F4E7E7",
          dark: "#A61311"
        },
        warning: {
          DEFAULT: "#F9A000",
          dark: '#F09C00',
          light: '#FAF2E3',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderWidth: {
        1: "1px"
      },
      fontSize: {
        '28px': ['1.75rem', '2.25rem']
      },
      letterSpacing: {
        '2px': '0.125em'
      },
      height: {
        '1px': '0.063rem',
        '2px': '0.125em',
        '30px': "1.875rem"
      },
      width: {
        '1px': '0.063rem',
        '2px': '0.125em',
      },
      padding: {
        '1px': '1px',
      }

    },
    plugins: [],
  }
};
