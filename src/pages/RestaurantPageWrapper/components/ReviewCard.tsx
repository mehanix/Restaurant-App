import React from "react";
import IconProvider from "../../../assets/icons/IconProvider";
import { ReviewType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";

const ReviewCard = ({ review }: { review: ReviewType }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "5px 10px",
        background: "#f7f7f7",
        border: "solid 1px #d2d2d2",
        marginBottom: "1rem",
      }}
    >
      <span className="fw-bold">{review.username}</span>
      <span className="fw-light">{" - " + review.postedOn.toString()}</span>
      <ScoreComponent score={review.score} />
      <div className="fw-bold">{review.title}</div>
      <div>{review.message}</div>
      <div className="pt-2" style={{ display: "flex", alignItems: "center" }}>
        <IconProvider iconName="hand-thumbs-up" />
        <span className="px-2">{review.relevance}</span>
        <IconProvider iconName="hand-thumbs-down" />
      </div>
    </div>
  );
};

export default ReviewCard;
