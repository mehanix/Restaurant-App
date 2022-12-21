import React from "react";
import { RestaurantType } from "../../../utils/types";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => {
  return <div>{restaurant.name}</div>;
};

export default RestaurantCard;
