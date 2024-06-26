/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
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
        custom: "#1E3554",
      },
      inset: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        "5/100": "5%",
        "15/100": "15%",
        "25/100": "25%",
        "35/100": "35%",
        "38/100": "38%",
        "45/100": "45%",
        "55/100": "55%",
        "65/100": "65%",
        "75/100": "75%",
        "85/100": "85%",
        "95/100": "95%",
      },
      translate: {
        "1.5full": "150%",
        "2full": "200%",
      },
      borderColor: {
        primary: "#1F4162",
        secondary: "#3B6F9E",
        tertiary: "#F4BE42",
        quaternary: "#DEDEDE",
        quinary: "#E5E7EB",
        custom: "#1E3554",
      },
      borderWidth: {
        1: "1px",
        1.5: "1.5px",
      },
      height: {
        "100": "28.5rem",
      }
    },
  },
  plugins: [],
};
