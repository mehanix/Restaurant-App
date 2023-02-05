import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ReservationPageWrapper from "../pages/ReservationPage/ReservationPageWrapper";
import RestaurantListPageWrapper from "../pages/RestaurantList/RestaurantListPageWrapper";
import RestaurantPageWrapper from "../pages/RestaurantPageWrapper/RestaurantPageWrapper";

function PrivateRoute({ children }: { children: any }) {
  const auth = true; // to be replaced by auth from user context provider
  return auth ? children : <Navigate to="/login" />;
}

const RoutesProvider = () => {
  return (
    <Routes>
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
