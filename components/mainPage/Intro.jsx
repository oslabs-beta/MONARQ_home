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
      bg="brand.mainBl"
      borderRadius="10px"
      border="solid 1px"
      borderColor="brand.mainO"
      margin="5px 20px"
      boxShadow="sm"
    >
      <Heading
        textColor="brand.mainO"
        style={{ textAlign: "center" }}
        p="10px 10px"
        maxWidth="80%"
        fontFamily="'Noto Sans', sans-serif"
      >
        Enjoy the benefits of <i>both</i> GraphQL and REST 
      </Heading>
      <Text
        style={{
          textAlign: "center",
          maxWidth: "70%",
          marginBottom: "20px"
        }}
        textColor="brand.whiteT"
      >
        MONARQ is a lightweight NPM package that enables a GraphQL server to accept REST requests
      </Text>
    </GridItem>
  );
};

export default Intro;
