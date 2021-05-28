import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Visualizer from "./Visualizer";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/manifest">
            <Visualizer />
          </Route>
        </Switch>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
