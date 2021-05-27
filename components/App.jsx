import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Visualizer from "./Visualizer";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Body />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
