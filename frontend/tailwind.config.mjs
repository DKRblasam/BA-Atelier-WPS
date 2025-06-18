// tailwind.config.mjs
import animations from "@midudev/tailwind-animations";



export default {
  // rest of the options
  plugins: [animations],

  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 200ms ease-out forwards",
        "fade-out-up": "fade-out-up 400ms ease-out forwards",
      },
    },
  },
};
