// pages/_app.js


// import theme from '@/styles/theme';
// import { ChakraProvider } from '@chakra-ui/react'



//   return (
//     <ChakraProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraProvider>   
//   )


// export default MyApp
import '@/styles/globals.css'

// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme.ts'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp