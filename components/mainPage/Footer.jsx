import React from "react";
import { Button, Flex, Spacer, Box } from "@chakra-ui/react";
import { ImLab } from "react-icons/im";

const Footer = () => {
  const year = new Date();
  return (
    <Flex
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
      textColor="brand.whiteT"
      bg="brand.darkBl"
    >
      <Box p="0px 20px">
        <h2>PATH Developers {year.getFullYear()}</h2>
      </Box>
      <Spacer />
      <Box p="0px 20px">
        <a href="https://opensourcelabs.io/">
          <Button rightIcon={<ImLab />} variant="ghost">
            OS-Labs
          </Button>
        </a>
      </Box>
    </Flex>
  );
};

export default Footer;
