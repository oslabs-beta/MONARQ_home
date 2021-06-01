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
      <ChakraProvider theme={theme}>
        <Grid
          templateRows="repeat(9, 1fr)"
          height="100vh"
          width="100vw"
          gap={4}
          fontFamily="'Noto Sans', sans-serif"
          backgroundColor="brand.darkBl"
          isLoaded={isLoaded}
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
            rowStart={9}
            rowEnd={10}
            position="fixed" 
            bottom="0px"
            width="100%"
          >
            <Footer />
          </GridItem>
        </Grid>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
