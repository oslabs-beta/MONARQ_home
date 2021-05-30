import React from "react";
import { Button, Flex, Spacer, Box } from "@chakra-ui/react";
import { ImLab } from "react-icons/im";

const Footer = () => {
  const year = new Date();
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="space-between"
      textColor="brand.darkBl"
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <Box>
        <h2>PATH Developers {year.getFullYear()}</h2>
      </Box>
      <Spacer />
      <Box>
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
