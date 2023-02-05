import React from "react";
import { Link } from "react-router-dom";
import IconProvider from "../../../assets/icons/IconProvider";
import { RestaurantType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => {
  return (
    <div className="p-3" style={{ display: "flex" }}>
      <div className="me-3" style={{ width: "200px", height: "200px" }}>
        <img
          className="h-100 mw-100"
          src={restaurant.presentationImageUrl}
          alt={`restaurant ${restaurant.id} presentation`}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          width: "80%",
          height: "200px",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            display: "flex",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="badge wine me-2"
          >
            <ScoreComponent
              style={{ display: "flex", alignItems: "center" }}
              className="me-2"
              score={restaurant.score}
            />
            <span>{restaurant.score}</span>
          </div>
          <span>{restaurant.name}</span>
        </div>
        <div
          id="location"
          style={{ display: "flex", alignItems: "center", color: "#888" }}
        >
          <IconProvider iconName="pin-map-fill" className="me-1" />
          <span>{restaurant.address}</span>
        </div>
        <div className="mh-80" style={{ textAlign: "justify", overflow: 'hidden' }}>
          {restaurant.description}
        </div>
        <Link
          className="btn btn-info"
          style={{ marginTop: "auto", width: "150px" }}
          to={`../restaurant/${restaurant.id}`}
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
