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
        paddingLeft: "20rem", paddingRight: "20rem", marginTop: "20px"
      }}
    >
      <Card style={{ width: "100%" }}>
        <Card.Header
          style={{ float: "right" }}
        >
          <ScoreComponent
            style={{ display: "flex", alignItems: "center", float: "right" }}
            className="me-2"
            score={restaurantRating}
          />
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
