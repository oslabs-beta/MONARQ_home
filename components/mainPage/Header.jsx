import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Flex align="center" bg="lightskyblue">
      <Link to="/">
        <img
          alt="MONARQ Logo"
          src="public/TempLogo.PNG"
          height="75"
          width="55"
        />
        <h1>MONARQ</h1>
      </Link>
      <Spacer />
      <NavBar />
    </Flex>
  );
};

export default Header;
