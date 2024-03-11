const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ["Inter","sans-serif"]
    },
    extend: {},
  },
  plugins: [],
});