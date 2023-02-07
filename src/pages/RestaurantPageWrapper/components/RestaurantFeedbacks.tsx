import React, { useMemo } from "react";
import { Card } from "react-bootstrap";
import { RestaurantType, FeedbackType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";
import FeedbackCard from "./FeedbackCard";

const RestaurantFeedbacks = ({
  restaurant,
}: {
  restaurant: RestaurantType;
}) => {
  const restaurantFeedback = restaurant?.feedbacks || [];
  const restaurantRating = useMemo(
    () =>
      restaurantFeedback
        .map((feedback: FeedbackType) => feedback.rating)
        .reduce((sum, score) => sum + score, 0) / restaurantFeedback.length,
    [restaurant]
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
          <span style={{ fontWeight: 700, fontSize: "22px" }}>Feedbacks:</span>
          <div
            style={{ display: "inline-flex", alignItems: "center" }}
            className="badge wine"
          >
            <ScoreComponent
              style={{ display: "flex", alignItems: "center" }}
              className="me-2"
              score={restaurantRating}
            />
            {(Math.round(restaurantRating * 10) / 10).toFixed(1)}
          </div>
        </Card.Header>
        <Card.Body style={{ overflowY: "scroll" }}>
          {restaurantFeedback.map((feedback: FeedbackType) => (
            <FeedbackCard feedback={feedback} />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default RestaurantFeedbacks;
