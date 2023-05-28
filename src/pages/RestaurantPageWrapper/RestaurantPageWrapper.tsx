import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../api";
import LoadingIndicator from "../../components/LoadingIndicator";
import PageTitle from "../../components/PageTitle";
import { FakeDataContext } from "../../utils/providers/FakeDataProvider";
import { emptyRestaurant, RestaurantType } from "../../utils/types";
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantFeedbacks from "./components/RestaurantFeedbacks";
import { Center } from "@chakra-ui/layout";
import { Spinner } from "react-bootstrap";

const RestaurantPage = ({
  restaurant,
}: {
  restaurant: RestaurantType;
}) => {
  return (
    <div style={{ display: "flex", flexDirection:"column" }}>
      <RestaurantDetails restaurant={restaurant} />
      <RestaurantFeedbacks restaurant={restaurant} />
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
  let restaurant = emptyRestaurant
  const restaurantResult = await axios
    .get(`${API_URL}/restaurants/${restaurantId}`)
    .then((res: any) => res)
    .catch((err: any) => err);
  if (Boolean(restaurantResult?.data)) {
    restaurant = restaurantResult.data;
    let fakeRestaurantData = getFakeDataForRestaurantId(restaurantId);
    restaurant = { ...restaurant, ...fakeRestaurantData };
  }

  return restaurant;
};

const RestaurantPageWrapper = () => {
  const { id } = useParams<any>();
  const { getFakeDataForRestaurantId } = useContext<any>(FakeDataContext);
  const [restaurant, setRestaurant] = useState<RestaurantType>(emptyRestaurant);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAndSetRestaurantData = async () => {
    setIsLoading(true);
    const restaurantData = await getRestaurantRequest({
      restaurantId: parseInt(id || "0"),
      getFakeDataForRestaurantId,
    });
    setIsLoading(false);
    setRestaurant(restaurantData);
  };

  useEffect(() => {
    getAndSetRestaurantData();
  }, []);

  if (!Boolean(restaurant.id) || isLoading) {
    return <Center pt="500">
    <Spinner />
          </Center>
  }

  const pageTitle = `${restaurant?.name}`;

  return (
    <div style={{paddingTop:"30px"}}>
      <PageTitle pageTitle={pageTitle} />
      <RestaurantPage restaurant={restaurant} />
    </div>
  );
};

export default RestaurantPageWrapper;
