module.exports = {
  content: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        bggrey: "#3a4151",
        bgdark: "#202430",
        bglight: "FBFBFB",
        orange: "#FF99C4",
        rosa: "FFD162",
        turquoise: "#F5FFA0",
        blue: "3EF3E8",

        lgorangerosa: "linear-gradient:(315deg, #FF99C4 0%, #FFD162 100%)",
        lgturquoiseyellow: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%")",
        lgturquoiseblue: "linear-gradient(315deg, #3A4AE4 0%", #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
      },
    },
  },
  plugins: [],
};
