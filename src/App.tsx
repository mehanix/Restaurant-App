import React from "react";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import RoutesProvider from "./routing/RoutesProvider";

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <NavbarComponent />
          <RoutesProvider />
        </div>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
