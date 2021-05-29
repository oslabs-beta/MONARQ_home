import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    // initialColorMode: 'dark'
  },
  colors: {
    brand: {
      100: "#F56565"
    }
  }
})

export default theme