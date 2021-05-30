import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import Bio from "./Bio";
import Intro from "./Intro";
import LinkToManifest from "./LinkToManifest";
import CodeBlockNPM from "./CodeBlockCopy";

const HomePage = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
      padding="30px 40px"
    >
      <GridItem
        rowSpan={2}
        colSpan={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image boxShadow="base" src="../assets/Insta.JPG" alt="Monarq" />
      </GridItem>
      <Intro />
      <LinkToManifest />
      <CodeBlockNPM />
      <GridItem rowSpan={1} colSpan={3}>
        <Bio />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
