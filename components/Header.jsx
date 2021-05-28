import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Flex align="center">
      <img alt="MONARQ Logo" src="public/TempLogo.PNG" height="75" width="55"/>
      <h1>MONARQ</h1>
      <Spacer />
      <NavBar />
    </Flex>
  );
};

export default Header;
