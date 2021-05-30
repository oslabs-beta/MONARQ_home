import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./mainPage/Header";
import Footer from "./mainPage/Footer";
import HomePage from "./mainPage/HomePage";
import Visualizer from "./visualizer/Visualizer";
import theme from "../theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Grid
          templateRows="repeat(3, 1fr)"
          height="101vh"
          width="100vw"
          bgGradient="linear(to-tl, brand.whiteT, brand.darkBl)"
        >
          <GridItem rowSpan={1}>
            <Header />
          </GridItem>
          <GridItem rowSpan={1}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/manifest">
                <Visualizer />
              </Route>
            </Switch>
          </GridItem>
          <GridItem rowSpan={1}>
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
