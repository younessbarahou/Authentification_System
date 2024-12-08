/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/**/*.{html,js}"],
  theme: {
    extend: {
      borderColor:{
        input: '#D9D9D9',
        focus: '#2964B9'
      },
      borderOpacity: {
        fifty: '80%'
      },
      borderWidth:{
        inputt: '1.5px'
      },
      borderRadius:{
        md: '4px'
      },
      maxWidth:{
        lg:'450px'
      },
      width :{
        input: '80%'
      },
      height: {
        lg: '335px',
        input: '34px'
      },
      fontFamily:{
        'roboto' : 'font-family: "Roboto", sans-serif;'
      },
      backgroundColor:{
        'black': '#101820',
        'blue': '#2964B9'
      }
    },
  },
  plugins: [],
}

