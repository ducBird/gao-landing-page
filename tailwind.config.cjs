/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sora: ["Baloo 2"],
    },
    extend: {
      colors: {
        "dark-800": "#0f0c29",
        "dark-600": "#24243e",
        "dark-400": "#302b63",
        "light-900": "#4e54c8",
        "light-700": "#8f94fb",
        // "light-500": "#AD26FF",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      boxShadow: {
        md: "6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
      },
    },
  },
  plugins: [],
};
