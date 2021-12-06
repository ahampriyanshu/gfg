module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin", "Lato"],
      },
      colors: {
        blue: {
          450: "#5eb2ca",
          550: "#2b6cb0",
          850: "#204759",
        },
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.75rem",
      },
      width: {
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
        "2/22": "9.09%",
        "9/22": "40.90%",
        "px-sm": "48px",
        "px-md": "74px",
        "px-xl": "112px",
      },
      height: {
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
        "10/10": "100%",
        "2/22": "9.09%",
        "9/22": "40.90%",
        "px-sm": "48px",
        "px-md": "74px",
        "px-xl": "112px",
      },
      margin: {
        sm: "28rem",
        md: "32rem",
        lg: "36rem",
      },
    },
  },
  screens: {
    sm: "478px",
    // => @media (min-width: 478px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1440px",
    // => @media (min-width: 1440px) { ... }

    "3xl": "1920px",
    // => @media (min-width: 1920px) { ... }
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
