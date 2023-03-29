/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#12577a",
        
"secondary": "#88a31d",
        
"accent": "#e2d75f",
        
"neutral": "#1E182A",
        
"base-100": "#ffffff",
        
"info": "#5476D4",
        
"success": "#6FECD7",
        
"warning": "#8D6A0C",
        
"error": "#FC5487",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
