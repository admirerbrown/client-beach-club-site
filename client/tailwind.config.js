/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Cormorant-Garamond': ['Cormorant Garamond', 'sans-serif'],
        'IBM-Plex-Sans': ['IBM Plex Sans', ' sans-serif'],
      },
      backgroundImage: {
        "bg_image": "url('https://img.freepik.com/free-photo/best-friends-singing-beach_23-2148651339.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais')",
      }
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
  variants: {
    display: ['group-hover']
  }
}

