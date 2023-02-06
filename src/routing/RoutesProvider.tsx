import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import ReservationPageWrapper from "../pages/ReservationPage/ReservationPageWrapper";
import RestaurantListPageWrapper from "../pages/RestaurantList/RestaurantListPageWrapper";
import RestaurantPageWrapper from "../pages/RestaurantPageWrapper/RestaurantPageWrapper";
import { UserContext } from "../utils/providers/UserContextProvider";

function PrivateRoute({ children }: { children: any }) {
  const {isLogged} = useContext<any>(UserContext)
  return isLogged ? children : <Navigate to="/login" />;
}

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <RestaurantListPageWrapper />
          </PrivateRoute>
        }
      />
      <Route
        path="/restaurant/:id"
        element={
          <PrivateRoute>
            <RestaurantPageWrapper />
          </PrivateRoute>
        }
      />
      <Route
        path="/restaurant/:id/make-reservation"
        element={
          <PrivateRoute>
            <ReservationPageWrapper />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default RoutesProvider;
