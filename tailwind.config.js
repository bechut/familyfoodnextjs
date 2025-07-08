// tailwind.config.js
const { heroui } = require("@heroui/theme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // single component styles
    "./node_modules/@heroui/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    "./node_modules/@heroui/theme/dist/components/(button|snippet|code|input).js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "#ffffff",
          "--foreground": "#171717",
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--background": "#0a0a0a",
            "--foreground": "#ededed",
          },
        },
      });
    }),
    heroui(),
  ],
};
