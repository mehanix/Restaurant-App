import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingIndicator from "../../components/LoadingIndicator";
import PageTitle from "../../components/PageTitle";
import { restaurants } from "../../utils/dummyData";
import { RestaurantType } from "../../utils/types";

const getRestaurantFromRequestById = async (id: number) => {
  return (
    restaurants.find((restaurant: RestaurantType) => restaurant.id === id) ||
    null
  );
};

const RestaurantPage = ({}: {}) => {
  return <></>;
};

const RestaurantPageWrapper = () => {
  const { id } = useParams<any>();
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAndSetRestaurantRequest = async () => {
    setIsLoading(true);
    toast.info("Getting things ready...", { autoClose: 2000 });
    const result = await getRestaurantFromRequestById(parseInt(id || "0"));
    if (Boolean(result?.id)) {
      setRestaurant(result);
      toast.success("Restaurants successfully loaded!");
    } else {
      toast.error("Seems like something broke!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getAndSetRestaurantRequest();
  }, []);

  if (!Boolean(restaurant) || isLoading) {
    return <LoadingIndicator />;
  }

  const pageTitle = `Restaurant ${restaurant?.name}`;

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <RestaurantPage />
    </>
  );
};

export default RestaurantPageWrapper;
