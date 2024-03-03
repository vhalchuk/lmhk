/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    colors: {
      black: {
        20: "#666666",
        40: "#4E4D4E",
        60: "#313031",
        80: "#252425",
        100: "#0D0B0D",
      },
      yellow: {
        20: "#EEF8AE",
        40: "#DDFE07",
        60: "#C9E41A",
        80: "#B6CE19",
        100: "#5C651C",
        120: "#363C0B",
      },
      white: {
        60: "#A2A2A2",
        80: "#E4E4E4",
        100: "#FFFFFF",
      },
      header: "rgba(37, 36, 37, 0.5)",
    },
    screens: {
      tabletV: "768px",
      tabletH: "1024px",
      laptop: "1440px",
      desktop: "1920px",
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to bottom right, #0D0B0D, transparent), url('./assets/images/square-black-80.svg')",
        "small-hero": "url('./assets/images/square-black-60.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
