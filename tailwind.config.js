module.exports = {
  purge: [
    "./src/**/*.tsx",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.css",
  ],
  theme: {
    fontFamily: {
      sans: ["aktiv-grotesk, sans-serif"],
      serif: ["Saol Display, serif"],
    },
    inset: {
      "0": "0",
      "1": "1.5rem",
      "2": "2rem",
      "3": "3rem",
      "4": "4rem",
      "-1": "-1.5rem",
      "-2": "-2rem",
      "-3": "-3rem",
      "-4": "-4rem",
      "-5": "-5rem",
      minusAll: "-100%",
    },
    extend: {
      borderWidth: {
        "1": "1px",
      },
      maxHeight: {
        "screen-3/4": "75vh",
      },
      margin: {
        "2px": "2px",
        "30": "7.5rem",
      },
      padding: {
        "19": "4.75rem",
        "27": "6.75rem",
        "28": "7rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "44": "11rem",
        "36": "9rem",
        "50": "12.5rem",
        "25p": "25%",
        "30p": "30%",
        "35p": "35%",
      },
      colors: {
        Brand: {
          black: "#2F2F2F",
          green: "#433A1A",
          gold: "#AB9C66",
          biscuit: "#F3F1ED",
          white: "#F9F8F6",
        },
        secondaryBrand: {
          "10": "#685523",
          "9": "#A48537",
          "8": "#BBA63A",
          "5": "#A59132",
          "7": "#CAAC60",
          "2": "#ECE4D4",
          "1": "#FAF8F4",
        },
        topDoctorsPrimary: "#5478CC",
        black: "#222222",
        blackDark: "#000000",
        white: "#ffffff",
        whiteBright: "#FFFFFF",
        whiteWarm: "#FAF9F7",
        rhino: "#263353",
        body: "#3B3B3B",
        grayWarm: "#A39E93",
        gray: {
          "100": "#F7F7F7",
          "200": "#E1E1E1",
          "300": "#CFCFCF",
          "400": "#B1B1B1",
          "500": "#717171",
          "600": "#7E7E7E",
          "700": "#515151",
          "800": "#3B3B3B",
          "900": "#222222",
        },
      },
      zIndex: {
        "60": 60,
        "999": 999,
      },
      width: {
        "18": "4.5rem",
        content: "max-content",
      },
      minWidth: {
        "3/4": "75%",
      },
      maxWidth: {
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "33-perc": "33%",
      },
      height: {
        "0.10": "0.10rem",
        "0.5": "0.5rem",
        "18": "4.5rem",
        "28": "7rem",
        "3/5-screen": "75vh",
        "3/4": "80%",
        "610": "610px",
      },
    },
  },
  variants: {},
  plugins: [],
}
