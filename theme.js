import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    // initialColorMode: 'dark'
  },
  styles: {
    global: {},
  },
  colors: {
    brand: {
      mainO: "#ED8936",
      lightO: "#FBD38D",
      dark0: "#C05621",
      mainBl: "#4299E1",
      lightBl: "#BEE3F8",
      darkBl: "#2C5282",
      mainBr: "#744210",
      whiteT: "#EDF2F7",
    },
  },
  fonts: {
    heading: "Sansita",
    body: "Manjari",
  },
});

export default theme;
