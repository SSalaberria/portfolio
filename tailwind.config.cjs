/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      xs: ["0.75rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      s: ["0.875rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      m: ["1rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      l: ["1.125rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      xl: ["1.25rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      xxl: ["1.5rem", { lineHeight: "120%", letterSpacing: "0.03em" }],
      title: ["3.5rem", { lineHeight: "200%", letterSpacing: "0.03em" }],
    },
    extend: {
      colors: {
        primary: {
          200: "#a58bf4",
          300: "#987af3",
          400: "#8b6af1",
          500: "#7f5af0",
        },
        background: {
          light: {
            primary: "#fffffe",
            secondary: "#f2f2f1",
          },
          dark: {
            primary: "#16161a",
            secondary: "#242629",
          },
        },
        paragraph: {
          dark: "#94a1b2",
          light: "#2d334a",
        },
        headline: {
          dark: "#fffffe",
          light: "#272343",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
