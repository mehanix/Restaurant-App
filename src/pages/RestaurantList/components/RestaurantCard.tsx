import React from "react";
import { Link } from "react-router-dom";
import IconProvider from "../../../assets/icons/IconProvider";
import { RestaurantType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";
import { Card, Stack } from "@chakra-ui/react";

const RestaurantCard = ({ restaurant, orientation }: { restaurant: RestaurantType, orientation: "left" | "right" }) => {
  return (
    <div className="p-3" style={{ display: "flex", height: "300px", textAlign: orientation, float: orientation, marginLeft: "10%", marginRight: "10%" }}>
      <Card direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >

        <div className="me-3" style={{ width: "200px", height: "200px" }}>
          <img
            style={{ borderRadius: "5px" }}
            object-fit="fill"
            src={restaurant.imageUrl}
            alt={`restaurant ${restaurant.id} presentation`}
          />
        </div>
        <Stack style={{
          backgroundColor: "#f0f0ff", width: "20%",
          padding: "20px", margin: "20px", borderRadius: "5px",
          boxShadow: "15px 15px 10px -15px #111"
        }}>

          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold"
            }}
          >
            <span>{restaurant.name}</span>
            <br />
            <ScoreComponent
              style={{ display: "flex", alignItems: "center", float: orientation }}
              score={restaurant.ratingAverage || 0}
            />
          </div>

          <div
            className="mh-80"
            style={{ textAlign: orientation, overflow: "hidden" }}
          >
            {restaurant.description}
          </div>
          <button style={{ float: orientation }}>
            <Link
              className="btn"
              style={{
                marginTop: "auto", width: "130px", float: orientation, backgroundColor: "#ccffff",
                boxShadow: "15px 15px 10px -15px #111"
              }}
              to={`../restaurant/${restaurant.id}`}
            >
              Check out
            </Link>
          </button>
        </Stack>
        <div className="me-3" style={{ width: "200px", height: "200px" }}>
          <img
            object-fit="fill"
            src={restaurant.imageUrl}
            alt={`restaurant ${restaurant.id} presentation`}
          />
        </div>
      </Card>
    </div>
  );
};

export default RestaurantCard;
