const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d5ba9",
        "on-primary": "#ffffff",
        "primary-container": "#3d5ba9",
        "on-primary-container": "#00174d",
        secondary: "#585e71",
        "on-secondary": "#ffffff",
        "secondary-container": "#585e71",
        "on-secondary-container": "#151b2c",
        tertiary: "#735470",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#735470",
        "on-tertiary-container": "#2b122b",
        error: "#ba1b1b",
        "on-error": "#ffffff",
        "error-container": "#ba1b1b",
        "on-error-container": "#410001",
        background: "#fefbff",
        "on-background": "#1b1b1f",
        surface: "#fefbff",
        "on-surface": "#1b1b1f",
        outline: "#75767f",
        "surface-variant": "#e2e2ec",
        "on-surface-variant": "#44464e",
        "inverse-surface": "#303033",
        "inverse-on-surface": "#f2f0f5",
        outline: "#79747E",
        disabled: "#1f1f1f",
      },
      boxShadow: {
        border: "inset 0 0 0 1px #79747E",
        "border-2": "inset 0 0 0 2px #79747E",
      },
      spacing: {
        13: "3.25rem",
        4.5: "1.125rem",
      },
    },
  },
  plugins: [
    // plugin(function ({ addComponents, theme }) {
    //   addComponents({
    //     ".": {},
    //   });
    // }),
  ],
};
