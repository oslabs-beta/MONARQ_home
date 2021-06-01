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
        <Box p="0px 10px">
          <img
            alt="MONARQ Logo"
            src="public/Logo.png"
            height="75"
            width="75"
          />
        </Box>
      </Link>
      <Link to="/">
        <Box p="10px 5px">
          <Heading fontSize="50px" color="brand.whiteT" fontFamily="'Lexend Zetta', sans-serif">MONARQ</Heading>
        </Box>
      </Link>
      <Spacer />
      <NavBar />
    </Flex>
  );
};

export default Header;
