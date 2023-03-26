import { ChakraProvider,GridItem,Grid,Button, Card, CardHeader, CardBody, CardFooter,Text,Heading,Stack,StackDivider,Box ,SimpleGrid  ,Container, Hide} from '@chakra-ui/react'
import Image from 'next/image';
import styles from '@/styles/Founders.module.css'
export default function Founders(){
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
  gridTemplateColumns={'1fr 1fr'}
  
  bgGradient="linear-gradient(to right, #67009a, #244cbe)"

  fontWeight='bold'
  mt={"10px"}
>
  
  <GridItem   area={'nav'} pt="3" pb="2">
      <Container centerContent maxWidth={"100%"}>
    <Image className={styles.img} src="/img/hamad+tayseer.jpg" alt="" height={300} width={300}  />
    <Hide below="md">
    <Heading color={'white'} fontSize="22px">HAMAD & TAYSEER</Heading>
    <Heading color={'white'} fontSize="22px">FOUNDERS</Heading>
    </Hide>
    </Container>
  </GridItem>
  <GridItem   area={'main'}>
    <Container color={'white'} centerContent maxWidth={"100%"}>
   
    <Heading fontSize={["20px","30px","30px"]}>MEET THE FOUNDERS</Heading>
               
                    <Text fontWeight="400">Co-founded by Hamad Mahboob and Tayseer Syed. <br></br> 
                        <br></br> 
                        With a strong background in the automotive industry, we are passionate about everything cars. We use this passion to offer only the best value from our service, helping dealerships grow in sales and customers.
                        <br></br> 
                        <br></br> 
                        <br></br> 
                        <br></br> 
                       <b>- Founders</b></Text>
    </Container>
  </GridItem>
  
</Grid>
      </>  
    )
}