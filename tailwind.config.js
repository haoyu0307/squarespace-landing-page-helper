/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        "20px": "20px",
        "73px": "73px",
        "100px": "100px",
      },
      spacing: {
        "10px": "10px",
        "12px": "12px",
        "13px": "13px",
        "16px": "16px",
        "25px": "25px",
        "29px": "29px",
        "32px": "32px",
        "34px": "34px",
        "36px": "36px",
        "38px": "38px",
        "40px": "40px",
        "43px": "43px",
        "52px": "52px",
        "57px": "57px",
        "62px": "62px",
        "72px": "72px",
        "97px": "97px",
        "100px": "100px",
        "110px": "110px",
        "146px": "146px",
        "167px": "167px",
        "196px": "196px",
        "287px": "287px",
        "460px": "460px",
      },
      colors: {
        primary: "#000",
        secondary: "#E9272E",
        tertiary: "#172231",
        silver: "#F4F6FA",
        ocean: "#33A9FE",
        bgTertiary: "#17223180",
      },
      fontSize: {
        "40px": "40px",
        "30px": "30px",
      },
      zIndex: {
        "-1": -1,
      },
      aspectRatio: {
        "7/4": "7/4",
      },
    },
  },
  plugins: [],
};
