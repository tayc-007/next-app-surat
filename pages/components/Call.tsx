import Script from "next/script"
import Image from "next/image";
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
    
  templateAreas={[`
  "nav nav"
  "main main"`,`
  "nav main"
  "nav main"`,`
  "nav main"
  "nav main"`]}
  gridTemplateRows={['1fr','1fr 1fr','1fr 1fr']}
  gridTemplateColumns={['1fr 1fr']}

  
  
>
  
  <GridItem pl='2'  area={'nav'} id="call">
  
  {/* <!-- Calendly inline widget begin --> */}
  <style jsx>{`
        .calendly-inline-widget {
          min-width:270px;
          height:900px;
         
          
        }
      
      `}</style>
<div className="calendly-inline-widget" data-url="https://calendly.com/surat-digital/discovery-call" id="call"></div>
<Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
{/* <!-- Calendly inline widget end --> */}

  </GridItem>
  <GridItem pl='2' pt="2"  area={'main'} >
    <Container centerContent maxW="100%">
    <Image className={styles.callimg} src="/img/hamad+tayseer.jpg" alt="" width={170}height={170}/>
 <Heading fontWeight="900"color="rgb(71,71,71)" className={styles.callh2} fontSize={["14px","15px","20px"]}textAlign="left"> SCHEDULE YOUR CALL WITH THE FOUNDERS</Heading>
 
 <Heading fontWeight="900"className={styles.callh1} fontSize={["42px","52px","62px"]} textAlign="left">Free 30-Minute Demo Call</Heading>
<Text>By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.
<br></br>
<br></br>
Find a time on Name’s calendar to schedule your call today and we look forward to speaking to you soon!</Text>
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
</Container>
  </GridItem>
  
</Grid>
      
      </>  
    )
}