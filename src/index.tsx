import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import UserContextProvider from "./utils/providers/UserContextProvider";
import FakeDataProvider from "./utils/providers/FakeDataProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode> Se dubleaza eventul de click pe mese si se selecteaza si deselecteaza imediat lol
  <UserContextProvider>
    <FakeDataProvider>
      <App />
    </FakeDataProvider>
  </UserContextProvider>
  // </React.StrictMode>
);
