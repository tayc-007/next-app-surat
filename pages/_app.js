// pages/_app.js
import {useEffect} from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as fbq from './lib/fpixel'

import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(()=>{
    fbq.pageview()

    const handleRouteChange =()=>{
      fbq.pageview()
    }
    router.events.on('routeChangeComplete',handleRouteChange)
    return()=>{
      router.events.off('routeChangeComplete',handleRouteChange)
    }
  },[router.events])
  return (
    
    <>
      <Script
      id='fb-pixel'
      stratergy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html:`
        <!-- Meta Pixel Code -->

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');


        `
      }}
     />
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp