import React, { useMemo } from "react";
import { Card } from "react-bootstrap";
import { RestaurantType, ReviewType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";
import ReviewCard from "./ReviewCard";

const RestaurantReviews = ({
  restaurant,
  reviews,
}: {
  restaurant: RestaurantType;
  reviews: ReviewType[];
}) => {
  const restaurantRating = useMemo(
    () =>
      reviews
        .map((review: ReviewType) => review.score)
        .reduce((sum, score) => sum + score, 0),
    [reviews]
  );

  return (
    <div
      style={{
        width: "40%",
        height: "85vh",
        padding: "1rem",
      }}
    >
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Header
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span style={{ fontWeight: 700, fontSize: "22px" }}>Reviews:</span>
          <div
            style={{ display: "inline-flex", alignItems: "center" }}
            className="badge wine"
          >
            <ScoreComponent
              style={{ display: "flex", alignItems: "center" }}
              className="me-2"
              score={restaurantRating}
            />
            <span>{restaurantRating}</span>
          </div>
        </Card.Header>
        <Card.Body style={{ overflowY: "scroll" }}>
          {reviews.map((review: ReviewType) => (
            <ReviewCard review={review} />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default RestaurantReviews;
