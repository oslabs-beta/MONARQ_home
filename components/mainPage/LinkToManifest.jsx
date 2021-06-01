import React from "react";
import { Button, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LinkToManifest = () => {
  return (
    <GridItem
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      rowSpan={1}
      colSpan={1}
      textAlign="center"
      bg="brand.mainBl"
      margin="0px 20px"
      boxShadow="sm"
      borderRadius="10px"
      border="solid 1px"
      borderColor="brand.mainO"
      height="80%"
    >
      <Link to="/manifest">
        <Text
          style={{
            padding: "10px 10px",
          }}
          textColor="brand.whiteT"
          fontSize="large"
        >
          Need Help Making Your Manifest Object?
        </Text>
        <Button
          boxShadow="base"
          textColor="brand.whiteT"
          colorScheme="orange"
          style={{
            padding: "10px 10px",
          }}
        >
          Manifest Builder
        </Button>
      </Link>
    </GridItem>
  );
};

export default LinkToManifest;
