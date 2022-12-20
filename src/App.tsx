import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReservationPage from "./pages/ReservationPage";
import { ChakraProvider } from "@chakra-ui/react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/make-reservation",
    element: <ReservationPage />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />;
    </ChakraProvider>
  );
}

export default App;
