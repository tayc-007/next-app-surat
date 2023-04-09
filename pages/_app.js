// pages/_app.js
import {useEffect} from 'react'
import TagManager from 'react-gtm-module';

import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}` });
}, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>   
  )
}

export default MyApp