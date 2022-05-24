/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",

  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-color-dark": "var(--primary-color-dark)",

        "secondary-color": "var(--secondary-color)",
        "--secondary-color-light": "var()",

        "--heading-black-color": "var(--heading-black-color)",

        "normal-text-color": "var(--normal-text-color)",

        "white-color": "var(--white-color)",

        "white-color-dark": "var(--white-color-dark)",

        "gray-color": "var(--gray-color)",
        "gray-color-dark": "var(--gray-color-dark)",

        "black-color": "var(--black-color)",

        "tx-black": "var(--tx-black)",
        "tx-white": "var(--tx-white)",
        "bdr-gray": "var(--bdr-gray)",
      },
    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),


  ],
};
