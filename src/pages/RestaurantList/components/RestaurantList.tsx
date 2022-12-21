import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { RestaurantType } from "../../../utils/types";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }: { restaurants: RestaurantType[] }) => {
  const [searchBy, setSearchBy] = useState<string>("");
  const filteredRestaurants: RestaurantType[] = Boolean(searchBy)
    ? restaurants.filter((restaurant: RestaurantType) =>
        restaurant.name.includes(searchBy)
      )
    : restaurants;

  return (
    <Card>
      <Card.Header>
        <input
          value={searchBy}
          placeholder={"Find your restaurant..."}
          onChange={(e: any) => {
            setSearchBy(e.target.value);
          }}
        />
      </Card.Header>

      <Card.Body>
        {filteredRestaurants.map((restaurant: RestaurantType) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default RestaurantList;
