import Image from "next/image";
import { Link } from "react-scroll";
import {
  Hide,
  Center,
  GridItem,
  Grid,
  Button,
  Heading,
  Container
} from '@chakra-ui/react'
import styles from "@/styles/stats.module.css";

export default function LandingPage() {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={['auto auto', 'auto auto auto']}
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
      >
        <GridItem pl='2' pt="50" pb={["100", , "200"]} area={'header'}>
          <Container centerContent>
            <Image src="/img/logo.png" alt="Surat-digital" height={100} width={200} />
          </Container>
        </GridItem>
        <GridItem pl="10px" area={'nav'}>
          <Heading className={styles.heading2} fontWeight="700" fontSize={['18px', '38px', '38px']}>WHAT WE DO...</Heading>
          <Heading className={styles.heading} fontSize={['20px', '50px', '50px']} color='primary'>We Help Local Dealerships Bring More Customers Through The Door With Social Media Marketing.</Heading>
          <Container maxW='auto' color='white' centerContent>
            <Button
              bgGradient="linear-gradient(to right, #67009a, #244cbe)"
              color="white"
              fontSize={['16px', '18px', '24px']}
              borderRadius="20px" pl={["100", "180", "270"]} pr={["100", "180", "270"]} pt={["5", "", "10"]} pb={["5", "", "10"]} mb="10" borderRadius="100">
              <Link to="call" spy={true} smooth={true} offset={50} duration={500}>Book Your Call Now</Link>
            </Button>
          </Container>
        </GridItem>
        <Hide below='md'>
          <GridItem pl='2' area={'main'}>
            <Center h='400px'>
              <Image src={"/img/landingpage.png"} alt="landing-page" height={300} width={600} />
            </Center>
          </GridItem>
        </Hide>
      </Grid>
    </>
  )
}






