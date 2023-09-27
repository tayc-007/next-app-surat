// pages/_app.js


import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react'



  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>   
  )
}

export default MyApp
