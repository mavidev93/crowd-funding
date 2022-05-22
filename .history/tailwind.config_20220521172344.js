/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "$",
        "secondary-color": "var(--secondary-color)",
        "heading-black-color": "var(--heading-black-color)",
        "normal-text-color": "var(--normal-text-color)",
      },
    },
  },
  plugins: [],
};
