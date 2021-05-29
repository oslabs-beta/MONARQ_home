import React from "react";
import { Link } from "react-router-dom";
import { Text, Box, Flex } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box>
        <Text>Allow Your GraphQL API to accept REST API Requests</Text>
        <Link fontColor="blue" to="/manifest">
          Manifest Creation
        </Link>
        <Text>Download Our NPM Package</Text>
      </Box>
    </Flex>
  );
};

export default Intro;
