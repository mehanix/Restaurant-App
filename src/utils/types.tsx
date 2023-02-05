export type RestaurantType = {
  id: number;
  name: string;
  description: string;
  address: string;
  presentationImageUrl: string;
  score: number;
  reviews: any[];
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
