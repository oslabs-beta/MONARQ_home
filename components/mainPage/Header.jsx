import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      bg="brand.darkBl"
    >
      <Link to="/">
        <Box p="0px 20px">
          <img
            alt="MONARQ Logo"
            src="public/TempLogo.PNG"
            height="75"
            width="55"
          />
        </Box>
      </Link>
      <Link to="/">
        <Box p="10px 50px">
          <Heading color="brand.mainO" fontFamily="'Noto Sans', sans-serif">MONARQ</Heading>
        </Box>
      </Link>
      <Spacer />
      <NavBar />
    </Flex>
  );
};

export default Header;
