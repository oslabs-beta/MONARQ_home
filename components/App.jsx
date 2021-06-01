import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./mainPage/Header";
import Footer from "./mainPage/Footer";
import HomePage from "./mainPage/HomePage";
import Visualizer from "./visualizer/Visualizer";

const App = () => {
  const [isLoaded, setIsLoaded] = useState();
  
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Grid
          templateRows="auto 1fr auto"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          height="100vh"
          width="100vw"
          isLoaded={isLoaded}
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
                <Visualizer isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
              </Route>
            </Switch>
          </GridItem>
          <GridItem rowStart={3} rowEnd={4} colSpan={2}>
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
