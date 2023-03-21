import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  color:{
    primary:` background-color: #67009a;
    background-image: linear-gradient(to right, #67009a, #244cbe);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    `
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
})


export default theme