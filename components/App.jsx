import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Visualizer from "./Visualizer";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          height="100vh"
          width="100vw"
        >
          <GridItem rowSpan={1} colSpan={2}>
            <Header />
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/manifest">
                <Visualizer />
              </Route>
            </Switch>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
