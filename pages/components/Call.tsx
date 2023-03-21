import Script from "next/script"
import Head from "next/head";
import styles from "@/styles/Call.module.css"
import {CheckCircleIcon} from "@chakra-ui/icons";
import {  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,ChakraProvider,GridItem,Grid,Button, Card, CardHeader, CardBody, CardFooter,Text,Heading,Stack,StackDivider,Box ,SimpleGrid  ,Container} from '@chakra-ui/react'

export default function Call(){
    return(
      <>
      
<Grid
    
  templateAreas={`
                  "nav main"
                  "nav main"`}
  gridTemplateRows={'50px 1fr'}
  gridTemplateColumns={'1fr 1fr'}

  
  
>
  
  <GridItem pl='2' bg='pink.300' area={'nav'}>
  <Script src="https://www.google-analytics.com/analytics.js" strategy="lazyOnload" />

  <Script  src="https://asset-tidycal.b-cdn.net//js/embed.js"/>
      <div id="tidycal-embed" data-path="tayseer/30-minute-meeting"></div>
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
  <List spacing={5}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='purple.500' />
     Businesses looking to convert their current website into a high quality & streamlined     funnel format.
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='purple.500' />
    ​Businesses looking to take their offline business online
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='purple.500' />
    ​Businesses looking to understand their increased revenue potential with funnels & conversion rate optimization.
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='purple.500' />
   Businesses looking to maximize their conversion rates & average order value.
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='purple.500' />
   Businesses looking for a reliable agency that can make their company a priority.
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  
   
</List>
  </GridItem>
  
</Grid>
      
      </>  
    )
}