import React from "react";
import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import DeveloperBios from "./DeveloperBios";
import Intro from "./Intro";
import LinkToManifest from "./LinkToManifest";
import CodeBlockNPM from "./CodeBlockCopy";

const HomePage = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    >
      <GridItem
        rowSpan={2}
        colSpan={1}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p="10px 10px"
      >
        <Image boxShadow="base" src="../assets/Insta.JPG" alt="Monarq" />
      </GridItem>
      <Intro />
      <LinkToManifest />
      <CodeBlockNPM />
      <GridItem
        rowSpan={1}
        colSpan={3}
        margin="10px 10px"
        bg="brand.darkBl"
        color="brand.whiteT"
        boxShadow="sm"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading paddingTop="50px" paddingBottom="40px" fontFamily="'Lexend Zetta', sans-serif">CONTRIBUTORS</Heading>
        <DeveloperBios />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
