import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
  const email1 = "tayseer@surat-digital.com";
  const email2 = "hamadrehman@surat-digital.com";

  return (
    <Box as="footer" bg="black" color="white" py={4}>
      <Center>
        <img src="/img/logo-1.png" alt="Logo" width={400} height={400} />
      </Center>
      <Text textAlign="center" fontSize="sm" mt={2}>
        &copy; {new Date().getFullYear()} Surat Digital
      </Text>
      <Text textAlign="center" fontSize="sm" mt={2}>
        Contact us:{" "}
        <a href={`mailto:${email1}`}>{email1}</a>,{" "}
        <a href={`mailto:${email2}`}>{email2}</a>
      </Text>
    </Box>
  );
};

export default Footer;
