import React from "react";
import IconProvider from "../../../assets/icons/IconProvider";
import { FeedbackType } from "../../../utils/types";
import { ScoreComponent } from "../../../components/ScoreComponent";

const FeedbackCard = ({ feedback }: { feedback: FeedbackType }) => {
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
      <span className="fw-bold">{feedback.username}</span>
      {/* <span className="fw-light">{" - " + feedback.postedOn.toString()}</span> */}
      <ScoreComponent
        style={{ display: "flex", alignItems: "center" }}
        className="me-2"
        score={feedback.rating}
      />
      <div className="fw-bold">{feedback.title}</div>
      <div>{feedback.comment}</div>
      <div className="pt-2" style={{ display: "flex", alignItems: "center" }}>
        <IconProvider iconName="hand-thumbs-up" />
        <span className="px-2">{feedback.feedbackVotesRating}</span>
        <IconProvider iconName="hand-thumbs-down" />
      </div>
    </div>
  );
};

export default FeedbackCard;
