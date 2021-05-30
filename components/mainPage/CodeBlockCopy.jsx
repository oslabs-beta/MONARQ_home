import React from "react";
import { GridItem, Text, Code } from "@chakra-ui/react";

const CodeBlockNPM = () => {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      rowSpan={1}
      colSpan={1}
    >
      <Text
        style={{
          padding: "10px 10px",
        }}
        textColor="brand.darkBl"
      >
        Download Our NPM Package
      </Text>
      <Code
        style={{
          padding: "10px 10px",
        }}
        boxShadow="base"
      >
        npm install monarq
      </Code>
    </GridItem>
  );
};

export default CodeBlockNPM;
