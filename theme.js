import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {},
  },
  colors: {
    brand: {
      mainO: "#f7931e",
      lightO: "#FBD38D",
      darkO: "#DD6B20",
      mainBl: "#2C5282",
      lightBl: "#BEE3F8",
      darkBl: "#2A4365",
      mainBr: "#744210",
      whiteT: "#EDF2F7",
      gray: "#2D3748",
    },
  },
});

export default theme;
