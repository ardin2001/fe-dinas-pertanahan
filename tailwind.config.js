/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "97/100": "97%",
      },
      dropShadow: {
        custom: "0 0 5px rgb(210, 210, 210)",
        "custom-login": "0 0 5px rgb(152,152,152)",
      },
      colors: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#D8D8D8",
        quinary: "#DEDEDE",
      },
      textColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#9CA3AF",
        quinary: "#DEDEDE",
        custom: "#1E3554",
      },
      backgroundColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#DEDEDE",
        quinary: "#E5E7EB",
      },
      outlineColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#9CA3AF",
        quinary: "#DEDEDE",
      },
    },
  },
  plugins: [],
};
