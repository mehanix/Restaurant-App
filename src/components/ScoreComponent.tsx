import IconProvider from "../assets/icons/IconProvider";
import { specialRound } from "../utils/float";

const ratingIndices: number[] = Array.from(Array(5).keys());

export const ScoreComponent = ({
  score,
  style = {},
  className = "",
}: {
  score: number;
  style?: { [property: string]: string };
  className?: string;
}) => {
  let roundedScore = specialRound(score);
  return (
    <div style={style} className={className}>
      {ratingIndices.map((index: number) => {
        let remainingScore = roundedScore - index;
        if (remainingScore === 0.5) {
          return (
            <IconProvider key={`star-${index}-half`} iconName="star-half" />
          );
        } else if (remainingScore > 0) {
          return (
            <IconProvider key={`star-${index}-fill`} iconName="star-fill" />
          );
        } else {
          return <IconProvider key={`star-${index}-empty`} iconName="star" />;
        }
      })}
    </div>
  );
};