import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { RestaurantType } from "../../../utils/types";
import RestaurantCard from "./RestaurantCard";
import { StarIcon } from '@chakra-ui/icons'

const RestaurantList = ({ restaurants }: { restaurants: RestaurantType[] }) => {
  const [searchBy, setSearchBy] = useState<string>("");
  const filteredRestaurants: RestaurantType[] = Boolean(searchBy)
    ? restaurants.filter((restaurant: RestaurantType) =>
        restaurant.name.toLowerCase().includes(searchBy.toLowerCase())
      )
    : restaurants;
  const [isLeft, setIsLeft] = useState<Boolean>(true);

  return (
    <Card>
      <Card.Header >
        <div style={{borderRadius:"20px", borderStyle:"solid", borderColor:"black", 
       borderWidth:"2px", float:"right", width:"40%"}}>
          <input
            value={searchBy}
            placeholder={"Find your restaurant..."}
            onChange={(e: any) => {
              setSearchBy(e.target.value);
            }}
          />
          </div>
      </Card.Header>
      <Card.Body style={{display:"flex", flexDirection:"column"}}>
        {filteredRestaurants.map((restaurant: RestaurantType) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} orientation={"right"} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default RestaurantList;
