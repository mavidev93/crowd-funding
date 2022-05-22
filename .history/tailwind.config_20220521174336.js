/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "$Joybooks-3-hex",
        "secondary-color": "var(--secondary-color)",
        "heading-black-color": "var(--heading-black-color)",
        "normal-text-color": "var(--normal-text-color)",

        --primary-color: #148aff;
        --primary-color-dark: #05416b;

        --secondary-color: #ff7300;
        --secondary-color-light: #fadd05;

        --heading-black-color: #282828;

        --normal-text-color: #656969;

        --white-color: #fff;

        --white-color-dark: #d9d9d9;

        --gray-color: #a1a3a6;
        --gray-color-dark: #595857;

        --black-color: #0d0d0d;
      },
    },
  },
  plugins: [],
};
