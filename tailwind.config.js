module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
      },

      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },

      animation: {
        fade: "fade 0.5s ease-in-out",
      },

      colors: {
        "primary-color": {
          //light: '#642dfd',
          DEFAULT: "#642dfd",
          //dark: '#642dfd',
        },
        "font-color": {
          dark: "#141414",
          DEFAULT: "#141414",
          light: "#C0C0C0",
        },
        "button-classic": {
          DEFAULT: "#EFEFEF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
