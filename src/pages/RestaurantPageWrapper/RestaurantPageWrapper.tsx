import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingIndicator from "../../components/LoadingIndicator";
import PageTitle from "../../components/PageTitle";
import { emptyRestaurant, restaurants } from "../../utils/dummyData";
import { RestaurantType } from "../../utils/types";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantReviews from "./components/RestaurantReviews";

const getRestaurantFromRequestById = async (id: number) => {
  return (
    restaurants.find((restaurant: RestaurantType) => restaurant.id === id) ||
    null
  );
};

const RestaurantPage = ({ restaurant }: { restaurant: RestaurantType }) => {
  return (
    <div style={{ display: "flex" }}>
      <RestaurantDetails restaurant={restaurant} />
      <RestaurantReviews restaurant={restaurant} />
    </div>
  );
};

const RestaurantPageWrapper = () => {
  const { id } = useParams<any>();
  const [restaurant, setRestaurant] = useState<RestaurantType>(emptyRestaurant);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAndSetRestaurantRequest = async () => {
    setIsLoading(true);
    toast.info("Getting things ready...", { autoClose: 2000 });
    const result = await getRestaurantFromRequestById(parseInt(id || "0"));
    if (Boolean(result?.id)) {
      setRestaurant(result || emptyRestaurant);
      toast.success("Restaurants successfully loaded!");
    } else {
      toast.error("Seems like something broke!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAndSetRestaurantRequest();
  }, []);

  if (!Boolean(restaurant.id) || isLoading) {
    return <LoadingIndicator />;
  }

  const pageTitle = `Restaurant ${restaurant?.name}`;

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <RestaurantPage restaurant={restaurant} />
    </>
  );
};

export default RestaurantPageWrapper;
