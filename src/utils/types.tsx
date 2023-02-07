export type RestaurantType = {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  imageUrl: string;
  ratingAverage: number;
  type: string;
  feedbacks: FeedbackType[];
};

export const emptyRestaurant = {
  id: 0,
  name: "",
  description: "",
  address: "",
  phone: "",
  imageUrl: "",
  ratingAverage: 0,
  type: "",
  feedbacks: [],
};

export type FeedbackType = {
  id: number;
  username: string;
  // postedOn: Date;
  rating: number;
  title: string;
  comment: string;
  feedbackVotesRating: number;
};
