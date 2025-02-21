/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
            "cblack" : "#0B0B0B",
            "cwhite" : "#FEF4E3"
        },
        fontFamily: {
            "font0" : "PP Editorial New Ultrabold",
            "font1" : "PP Editorial New Ultralight",
            "font2" : "PP Editorial New",
            "font3" : "Founders Grotesk",
            "font4" : "Founders Grotesk Light"
        }
      },
    },
    plugins: [],
  }
