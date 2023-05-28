import React from "react";
import { Link } from "react-router-dom";
import IconProvider from "../../../assets/icons/IconProvider";
import { RestaurantType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";
import { Card, Stack } from "@chakra-ui/react";

const RestaurantCard = ({ restaurant, orientation }: { restaurant: RestaurantType, orientation: "left" | "right" }) => {
  return (
    <div className="p-3" style={{ display: "flex", height: "400px", textAlign: orientation, float: orientation, marginLeft: "10%", marginRight: "10%" }}>
      <Card direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        backgroundImage={restaurant.imageUrl}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      >
        <Stack style={{
          backgroundColor: "#eeeeee", width: "20%",
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
            style={{ textAlign: orientation, overflow:"hidden", textOverflow: "ellipsis", display:"inline-block", width:"calc(100%)", height:"calc(60%)"}}
          >
            {restaurant.description}
          </div>
          <button style={{ float: orientation }}>
            <Link
              className="btn"
              style={{
                marginTop: "auto", width: "130px", float: orientation, backgroundColor: "#DD6B20", color:"white",
                boxShadow: "15px 15px 10px -15px #111"
              }}
              to={`../restaurant/${restaurant.id}`}
            >
              Check out
            </Link>
          </button>
        </Stack>
      
      </Card>
    </div>
  );
};

export default RestaurantCard;
