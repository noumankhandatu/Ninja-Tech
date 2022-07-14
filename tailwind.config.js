module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./scr/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
    },
    extend: {
      brightness: {
        25: ".20",
        175: "1.75",
      },
      colors: {
        "App-orange": "#FF5B2E",
      },
    },
  },
  plugins: [],
};
