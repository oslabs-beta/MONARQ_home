import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import Bio from "./Bio";
import Intro from "./Intro";

const HomePage = () => {
  return (
    <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
      padding="30px 40px"
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Image src="../assets/facebook_.JPG" alt="Monarq" />
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Intro />
      </GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Bio />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
