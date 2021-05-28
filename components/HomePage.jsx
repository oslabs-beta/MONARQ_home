import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Bio from "./Bio";

const HomePage = () => {
  return (
    <Flex>
      <Link to="/manifest">Manifest Creation</Link>
      <Bio />
    </Flex>
  );
};

export default HomePage;
