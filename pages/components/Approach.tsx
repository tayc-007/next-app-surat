/* eslint-disable react/no-unescaped-entities */
import { ChakraProvider,GridItem,Grid,Button, Card, CardHeader, CardBody, CardFooter,Text,Heading,Stack,StackDivider,Box ,SimpleGrid  ,Container, Hide} from '@chakra-ui/react'
import Image from 'next/image'
import styles from '@/styles/Approach.module.css';
export default function Approach(){
    return(
      <>
     
<Grid mt={10}

  templateAreas={`"header header"
                  "nav main"
                   `}
  gridTemplateRows={'1fr'}
  gridTemplateColumns={['1fr','1fr','1fr 1fr']}
 
  
>
  <GridItem   area={'header'}>
    <Container maxW={'auto'} centerContent mb="15px" >
      <Heading fontSize={["46px","","62px"]} className={styles.approachh1}>OUR APPROACH</Heading>
      <Heading fontSize="20px" fontWeight="400" className={styles.approachh2}>"Advertising that brings clear results."</Heading>
    </Container>
  </GridItem>
  <GridItem  area={'nav'}>
      <Container maxW={["100%","70%","70%"]} >
      <Text>What we do is very simple:
      <br></br>
<br></br>
We first study your audience to deeply understand their interests, behaviors, motivators and emotional drivers.
<br></br>
<br></br>
Based on this data we work on your messaging by coming up with the best angles and hooks to use on your advertising campaigns. 
<br></br>
<br></br>
We then find the best interests and keywords to target on Facebook and Google in order to reach your exact target audience.
<br></br>
<br></br>
Once that's done, we launch your advertising campaign with said assets and deploy our proprietary campaign strategy to ensure you get the best result out of every pound that you invest. </Text>
      </Container>
  </GridItem>
  <Hide below={'md'}>
  <GridItem  area={'main'}>
    <Container  maxW={"100%"}>
      <Image alt="" src="/img/design-1.png" width={650} height={650}/>
    </Container>
  </GridItem>
  </Hide>
</Grid>
      </>  
    )
}