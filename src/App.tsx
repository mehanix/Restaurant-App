import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import RoutesProvider from "./routing/RoutesProvider";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary: {
      main: "#ED8936"
    },
    secondary: {
      main: "#ED8936"
    }
  }
})

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <div>
            <NavbarComponent />
            <RoutesProvider />
          </div>
        </BrowserRouter>
        <ToastContainer position="bottom-right" />
      </ChakraProvider>
    </>
  );
}

export default App;
