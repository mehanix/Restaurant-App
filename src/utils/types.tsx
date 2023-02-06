export type RestaurantType = {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  imageUrl: string;
  ratingAverage: number;
  type: string;
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
};

export type ReviewType = {
  id: number;
  username: string;
  postedOn: Date;
  score: number;
  title: string;
  message: string;
  relevance: number;
};

export const emptyReview = {
  id: 0,
  username: "",
  postedOn: new Date(),
  score: 0,
  title: "",
  message: "",
  relevance: 0,
};
