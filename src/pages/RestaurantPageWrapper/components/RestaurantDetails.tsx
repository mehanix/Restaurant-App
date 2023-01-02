import React from "react";
import { Link } from "react-router-dom";
import IconProvider from "../../../assets/icons/IconProvider";
import { RestaurantType } from "../../../utils/types";

const RestaurantDetails = ({ restaurant }: { restaurant: RestaurantType }) => {
  return (
    <div style={{ width: "60%", height: "75vh", padding: "1rem" }}>
      <div
        style={{
          width: "100%",
          height: "25%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          style={{ position: "absolute", top: "-75%", width: "100%" }}
          src={restaurant.presentationImageUrl}
          alt={`restaurant ${restaurant.id} presentation`}
        />
      </div>
      <div
        id="location"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#888",
          padding: "1rem",
        }}
      >
        <IconProvider iconName="pin-map-fill" className="me-1" />
        <span>{restaurant.address}</span>
      </div>
      <Link
        className="btn btn-info"
        style={{ marginTop: "auto", width: "250px" }}
        to={`../restaurant/${restaurant.id}`}
      >
        Make a reservation
      </Link>
      <span
        style={{
          display: "block",
          fontWeight: "500",
          fontSize: "20px",
          padding: "1rem",
        }}
      >
        Description
      </span>
      <div
        className="px-4"
        style={{
          width: "100%",
          height: "57.5%",
          overflowY: "scroll",
          textAlign: "justify",
        }}
      >
        {restaurant.description}
      </div>
    </div>
  );
};

export default RestaurantDetails;
