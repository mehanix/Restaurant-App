import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { RestaurantType } from "../../../utils/types";
import RestaurantCard from "./RestaurantCard";
import { Icon, SearchIcon, StarIcon } from '@chakra-ui/icons'
import { end } from "@popperjs/core";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";

const RestaurantList = ({ restaurants }: { restaurants: RestaurantType[] }) => {
  const [searchBy, setSearchBy] = useState<string>("");
  const filteredRestaurants: RestaurantType[] = Boolean(searchBy)
    ? restaurants.filter((restaurant: RestaurantType) =>
        restaurant.name.toLowerCase().includes(searchBy.toLowerCase())
      )
    : restaurants;
  const [isLeft, setIsLeft] = useState<Boolean>(true);

  const searchIcon = <SearchIcon/>
  return (
    <Card>
      <Card.Header  style={{ display:'flex', flexDirection: 'row', justifyContent:'end', width:"100%"}}>

    <Input 
            value={searchBy}
            width="300px"
            variant='outline'
            placeholder={"Find your restaurant..."}
            onChange={(e: any) => {
              setSearchBy(e.target.value);
            }}
          /> 
          
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
