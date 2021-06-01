import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./mainPage/Header";
import Footer from "./mainPage/Footer";
import HomePage from "./mainPage/HomePage";
import Visualizer from "./visualizer/Visualizer";
import theme from "../theme";

const App = () => {
  const [isLoaded, setIsLoaded] = useState();
  
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Grid
          templateRows="repeat(9, 1fr)"
          bgGradient="linear(to-tl, brand.whiteT, brand.darkBl)"
        >
          <GridItem rowSpan={1}>
            <Header />
          </GridItem>
          <GridItem rowSpan={7}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/manifest">
                <Visualizer isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
              </Route>
            </Switch>
          </GridItem>
          <GridItem
            rowSpan={1}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignContent="center"
          >
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
