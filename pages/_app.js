// pages/_app.js
import {useEffect} from 'react'
import { useRouter } from 'next/router'

import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1053056662317635')
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>   
  )
}

export default MyApp