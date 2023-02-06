import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../api";
import LoadingIndicator from "../../components/LoadingIndicator";
import PageTitle from "../../components/PageTitle";
import { FakeDataContext } from "../../utils/providers/FakeDataProvider";
import { RestaurantType } from "../../utils/types";
import RestaurantList from "./components/RestaurantList";

const getRestaurantsFromRequest = async ({
  getFakeDataForRestaurantId,
}: {
  getFakeDataForRestaurantId: Function;
}) => {
  const result = await axios
    .get(`${API_URL}/restaurants`)
    .then((res: any) => res)
    .catch((err: any) => err);
  if (
    !Boolean(result) ||
    !Boolean(result.data) ||
    !Array.isArray(result.data)
  ) {
    return { error: true, data: null };
  }
  let restaurants = result.data;
  restaurants = restaurants.map((restaurant: RestaurantType) => {
    let fakeRestaurantData = getFakeDataForRestaurantId(restaurant.id);
    return { ...restaurant, ...fakeRestaurantData };
  });
  return { error: false, data: restaurants }; // it will be replaced by the response of the call
};

const RestaurantListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const { getFakeDataForRestaurantId } = useContext<any>(FakeDataContext);

  const getAndSetRequests = async () => {
    setIsLoading(true);
    toast.info("Getting things ready...", { autoClose: 2000 });
    const result = await getRestaurantsFromRequest({
      getFakeDataForRestaurantId,
    });
    if (!Boolean(result?.error) && Array.isArray(result?.data)) {
      setRestaurants(result?.data);
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
  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <RestaurantListPage />
    </>
  );
};

export default RestaurantListPageWrapper;
