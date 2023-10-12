/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors:{
        primary: '#10141E',
        secondary: '#FC4747',
        third: '#161D2F' 
           },
    },
  },
  plugins:[
    require('tailwind-scrollbar-hide')
  ],
}

