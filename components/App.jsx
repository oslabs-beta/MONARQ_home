import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Visualizer from "./Visualizer";

function App() {
  return (
    <ChakraProvider>
      <Visualizer />
    </ChakraProvider>
  );
}
export default App;
