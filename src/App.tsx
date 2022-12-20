import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReservationPage from "./pages/ReservationPage";
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
  return <RouterProvider router={router} />;
}

export default App;
