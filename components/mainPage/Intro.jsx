import React from "react";
import { GridItem, Text, Heading } from "@chakra-ui/react";

const Intro = () => {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      rowSpan={1}
      colSpan={2}
      bg="gray.100"
      margin="5px 20px"
      boxShadow="sm"
    >
      <Heading
        textColor="brand.darkBl"
        style={{ textAlign: "center" }}
        textShadow="1px 1px"
        p="10px 10px"
        maxWidth="75%"
      >
        Allow Your GraphQL API to accept REST API Requests
      </Heading>
      <Text
        style={{
          textAlign: "center",
          maxWidth: "50%",
        }}
        textColor="brand.mainBl"
      >
        With a Simple Installation of our NPM Package, allow MONARQ to cocoon a
        REST request, transform, and fly it to your GraphQL API with ease.
      </Text>
    </GridItem>
  );
};

export default Intro;
