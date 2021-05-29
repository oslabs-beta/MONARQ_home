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
    >
      <Heading style={{ textAlign: "center" }} textShadow=".5px .5px">
        Allow Your GraphQL API to accept REST API Requests
      </Heading>
      <Text
        style={{
          textAlign: "center",
          maxWidth: "50%",
        }}
      >
        With a Simple Installation of our NPM Package, allow MONARQ to cocoon a
        REST request, transform, and fly it to your GraphQL API with ease.
      </Text>
    </GridItem>
  );
};

export default Intro;
