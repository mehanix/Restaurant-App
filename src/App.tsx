import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import RoutesProvider from "./routing/RoutesProvider";

function App() {
  return (
    <>
      <ChakraProvider>
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
