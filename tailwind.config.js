/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        wf7: "#f7f7f7",
        wf060f7c: "#060f7c",
        F4F5FA: "#F4F5FA"
      },
      colors: {
        f58120: "#f58120",
        "3a3541de": "#3a3541de"
      },

      screens: {
        1200: "1200px",
        900: "900px",
        600: "600px"
      },

      fontSize: {
        cus1: ["95px", "112px"],
        cus2: ["85px", "99px"],
        cus3: ["75px", "87.9px"],
        cus4: ["56px", "65px"],
        cus5: ["24px", "32px"],
        cus6: ["14px", "21px"]
      }
    }
  },
  plugins: []
}
