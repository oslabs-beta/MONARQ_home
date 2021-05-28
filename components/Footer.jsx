import React from "react";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { ImLab } from "react-icons/im";

const Footer = () => {
  const year = new Date();
  return (
    <Flex align="center">
      <h2>PATH Developers {year.getFullYear()}</h2>
      <Spacer />
      <a href="https://opensourcelabs.io/">
        <Button rightIcon={<ImLab />} variant="ghost">
          OS-Labs
        </Button>
      </a>
    </Flex>
  );
};

export default Footer;
