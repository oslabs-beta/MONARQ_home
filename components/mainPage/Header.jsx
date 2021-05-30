import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      textColor="brand.whiteT"
    >
      <Link to="/">
        <img
          alt="MONARQ Logo"
          src="public/TempLogo.PNG"
          height="75"
          width="55"
        />
      </Link>
      <Link to="/">
        <Box p="10px 50px">
          <Heading>MONARQ</Heading>
        </Box>
      </Link>
      <Spacer />
      <NavBar />
    </Flex>
  );
};

export default Header;
