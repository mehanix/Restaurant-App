import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../api";
import LoadingIndicator from "../../components/LoadingIndicator";
import PageTitle from "../../components/PageTitle";
import { FakeDataContext } from "../../utils/providers/FakeDataProvider";
import { emptyRestaurant, RestaurantType, ReviewType } from "../../utils/types";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantReviews from "./components/RestaurantReviews";

const RestaurantPage = ({
  restaurant,
  reviews,
}: {
  restaurant: RestaurantType;
  reviews: ReviewType[];
}) => {
  return (
    <div style={{ display: "flex" }}>
      <RestaurantDetails restaurant={restaurant} />
      <RestaurantReviews restaurant={restaurant} reviews={reviews} />
    </div>
  );
};

const getRestaurantRequest = async ({
  restaurantId,
  getFakeDataForRestaurantId,
}: {
  restaurantId: number;
  getFakeDataForRestaurantId: Function;
}) => {
  let restaurant = emptyRestaurant,
    reviews = [];
  const restaurantResult = await axios
    .get(`${API_URL}/restaurants/${restaurantId}`)
    .then((res: any) => res)
    .catch((err: any) => err);
  if (Boolean(restaurantResult?.data)) {
    restaurant = restaurantResult.data;
    let fakeRestaurantData = getFakeDataForRestaurantId(restaurantId);
    restaurant = { ...restaurant, ...fakeRestaurantData };
  }

  const reviewsResult = await axios
    .get(`${API_URL}/feedbacks/${restaurantId}`)
    .then((res: any) => res)
    .catch((err: any) => err);
  if (Boolean(reviewsResult?.data) && Array.isArray(reviewsResult?.data)) {
    reviews = reviewsResult.data;
  }

  return { restaurant, reviews };
};

const RestaurantPageWrapper = () => {
  const { id } = useParams<any>();
  const { getFakeDataForRestaurantId } = useContext<any>(FakeDataContext);
  const [restaurant, setRestaurant] = useState<RestaurantType>(emptyRestaurant);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAndSetRestaurantData = async () => {
    setIsLoading(true);
    const restaurantData = await getRestaurantRequest({
      restaurantId: parseInt(id || "0"),
      getFakeDataForRestaurantId,
    });
    setIsLoading(false);
    setRestaurant(restaurantData.restaurant);
    setReviews(restaurantData.reviews);
  };

  useEffect(() => {
    getAndSetRestaurantData();
  }, []);

  if (!Boolean(restaurant.id) || isLoading) {
    return <LoadingIndicator />;
  }

  const pageTitle = `Restaurant ${restaurant?.name}`;

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <RestaurantPage restaurant={restaurant} reviews={reviews} />
    </>
  );
};

export default RestaurantPageWrapper;
