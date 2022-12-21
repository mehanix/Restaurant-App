import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RestaurantListPageWrapper from "../pages/RestaurantList/RestaurantListPageWrapper";

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
    </Routes>
  );
};

export default RoutesProvider;
