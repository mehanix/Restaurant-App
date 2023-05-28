import React from "react";
import { Link } from "react-router-dom";
import IconProvider from "../../../assets/icons/IconProvider";
import { RestaurantType } from "../../../utils/types";
import { Card, Stack } from "@chakra-ui/react";

const RestaurantDetails = ({ restaurant }: { restaurant: RestaurantType }) => {
  return (
    <div style={{ paddingLeft: "20rem", paddingRight: "20rem" }}>
      <Card>
        <Stack>

          <img
            style={{ width: "100%", borderRadius: "15px" }}
            src={restaurant.imageUrl}
            alt={`restaurant ${restaurant.id} presentation`}
          />
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

          <div
            className="px-4"
            style={{
              width: "100%",
              height: "57.5%",
              overflowY: "scroll",
              textAlign: "center",
              marginBottom: "20px"
            }}
          >
            {restaurant.description}
          </div>
          <div style={{textAlign:"center"}}>
          <Link
            className="btn btn-info"
            style={{ marginTop: "auto", marginBottom:"20px", width: "25%", backgroundColor: "#ccffff", 
            boxShadow: "15px 15px 10px -15px #111"}}
            to={`../restaurant/${restaurant.id}/make-reservation`}
          >
            Make a reservation
          </Link>
          </div>

        </Stack>
      </Card>
    </div>
  );
};

export default RestaurantDetails;
