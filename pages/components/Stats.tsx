import { ChakraProvider,Center,GridItem,Grid,Button, Card, CardHeader, CardBody, CardFooter,Text,Heading,Stack,StackDivider,Box ,SimpleGrid  ,Container} from '@chakra-ui/react'


export default function Stats(){
    return(
      <>
 
<Grid
mt={"10px"}
  templateAreas={`
                  "nav nav"
                  "main main"`}
  gridTemplateRows={['1fr','1fr','1fr 1fr']}
  gridTemplateColumns={'1fr 1fr'}
  bgGradient={"linear-gradient(to right, #67009a, #244cbe)"}
  
>
 
  <GridItem  area={'nav'} >
  
    <Container  maxW="auto" centerContent>
    <Heading fontSize={['16px','','36px']} fontWeight={'900'} textAlign={'center'} color='white'>
  THE POWER OF FACEBOOK ADVERTISING:</Heading>
  <Heading fontSize={['55px','','85px']} fontWeight={'900'} textAlign={'center'} color='white'>£67.8 BILLION</Heading>
  <Heading fontSize={['1.75rem','','']} fontWeight={'600'} textAlign={'center'} color='white'>Total Ads Revenue in 2022</Heading>
  
</Container>
  </GridItem>
  <GridItem  mt={["0px","0px","10px"]} area={'main'}>
  <Container  centerContent maxW="auto" pb="3">
      
      <SimpleGrid columns={[1,1,3]} spacing={["1","1","4"]} >
      <Card textAlign="center" borderRadius={20}>
    <CardHeader>
      <Heading fontSize={["32px","34px","46px"]} fontWeight="900"> £1.53</Heading>
    </CardHeader>
    <CardBody>
      <Text fontSize={["14px","16px","20px"]} fontWeight="900">AVERAGE CPC</Text>
    </CardBody>
  </Card>
  <Card borderRadius={20} mt={["10px","0px","0px"]} ml={["0","0","10px"]} textAlign="center">
    <CardHeader>
      <Heading fontSize={["32px","34px","46px"]} fontWeight="900"> £11.52</Heading>
    </CardHeader>
    <CardBody>
      <Text fontSize={["14px","16px","20px"]} fontWeight="900">AVERAGE CPM</Text>
    </CardBody>
   
  </Card >
  <Card borderRadius={20} mb={["10px","0px","0px"]} mt={["10px","0px","0px"]} ml={["0","0","10px"]} textAlign="center">
    <CardHeader>
      <Heading fontSize={["32px","34px","46px"]} fontWeight="900"> 2.1 BILLION</Heading>
    </CardHeader>
    <CardBody>
      <Text fontSize={["14px","16px","20px"]} fontWeight="900">POTENTIAL USER REACH</Text>
    </CardBody>
    
  </Card>
       </SimpleGrid>     
  </Container>
  </GridItem>
  
</Grid>
      </>  
    )
}