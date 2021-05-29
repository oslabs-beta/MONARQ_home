import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import Bio from "./Bio";
import Intro from "./Intro";

const HomePage = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      padding="30px 40px"
    >
      <GridItem>
        <Image style={{}} src="../assets/facebook_.JPG" alt="Monarq" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Intro />
      </GridItem>
      <GridItem rowSpan={1} colSpan={2}>
        <Bio />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
