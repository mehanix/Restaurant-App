import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingIndicator from "../../components/LoadingIndicator";
import PageTitle from "../../components/PageTitle";
import { restaurants } from "../../utils/dummyData";
import { RestaurantType } from "../../utils/types";
import RestaurantList from "./components/RestaurantList";

const getRestaurantsFromRequest = async () => {
  return restaurants; // it will be replaced by the response of the call
};

const RestaurantListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  const getAndSetRequests = async () => {
    setIsLoading(true);
    toast.loading("Getting things ready...");
    const result = await getRestaurantsFromRequest();
    if (Boolean(result) && Array.isArray(result)) {
      setRestaurants(result);
      toast.success("Restaurants successfully loaded!");
    } else {
      toast.error("Seems like something broke!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAndSetRequests();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return <RestaurantList restaurants={restaurants} />;
};

const RestaurantListPageWrapper = () => {
  const pageTitle = "Restaurant List";
  console.log("LOADED")
  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <RestaurantListPage />
    </>
  );
};

export default RestaurantListPageWrapper;
