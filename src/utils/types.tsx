export type RestaurantType = {
  id: number;
  name: string;
  desccription: string;
  location: string;
  presentationImageUrl: string;
  score: number;
  reviews: any[];
};

export type ReviewType = {
  id: number;
  username: string;
  postedOn: Date;
  score: number;
  message: string;
  relevance: number;
};
