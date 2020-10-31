const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**"],
  theme: {
    extend: {
      colors: {
        twitter: "#1DA1F2",
        linkedin: "#0077B5",
        github: "#24292e",
      },
      fontFamily: {
        heading: ["Bungee"],
      },
    },
  },
  variants: {},
  plugins: [],
};
