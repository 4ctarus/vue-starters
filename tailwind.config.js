function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

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
        primary: withOpacityValue("--primary"),
        "on-primary": withOpacityValue("--on-primary"),
        "primary-container": withOpacityValue("--primary-container"),
        "on-primary-container": withOpacityValue("--on-primary-container"),
        secondary: withOpacityValue("--secondary"),
        "on-secondary": withOpacityValue("--on-secondary"),
        "secondary-container": withOpacityValue("--secondary-container"),
        "on-secondary-container": withOpacityValue("--on-secondary-container"),
        tertiary: withOpacityValue("--tertiary"),
        "on-tertiary": withOpacityValue("--on-tertiary"),
        "tertiary-container": withOpacityValue("--tertiary-container"),
        "on-tertiary-container": withOpacityValue("--on-tertiary-container"),
        error: withOpacityValue("--error"),
        "on-error": withOpacityValue("--on-error"),
        "error-container": withOpacityValue("--error-container"),
        "on-error-container": withOpacityValue("--on-error-container"),
        background: withOpacityValue("--background"),
        "on-background": withOpacityValue("--on-background"),
        surface: withOpacityValue("--surface"),
        "on-surface": withOpacityValue("--on-surface"),
        "surface-variant": withOpacityValue("--surface-variant"),
        "on-surface-variant": withOpacityValue("--on-surface-variant"),
        "inverse-surface": withOpacityValue("--inverse-surface"),
        "inverse-on-surface": withOpacityValue("--inverse-on-surface"),
        outline: withOpacityValue("--outline"),
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
  plugins: [],
};
