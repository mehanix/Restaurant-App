import React, { createContext, useMemo } from "react";
import { faker } from "@faker-js/faker";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { RestaurantType } from "../types";

const FakeDataContext = createContext({});

export type FakeResturantDataType = {
  description: string;
  imageUrl: string;
};

export type FakeRestaurantDataDictType = {
  [restaurantId: string]: FakeResturantDataType;
};

const FakeDataProvider = ({ children }: { children: any }) => {
  const [fakeRestaurantDataDict, setFakeRestaurantDataDict] =
    useLocalStorage<FakeRestaurantDataDictType>("fakeData", {});

  const getFakeDataForRestaurantId = (
    restaurantId: number
  ): FakeResturantDataType => {
    let futureFakeRestaurantDataDict = { ...fakeRestaurantDataDict };
    if (!Boolean(futureFakeRestaurantDataDict[restaurantId])) {
      futureFakeRestaurantDataDict[restaurantId] = {
        description: faker.lorem.paragraphs() || "",
        imageUrl: faker.image.food(600, 400, true) || "",
      };
      setFakeRestaurantDataDict(futureFakeRestaurantDataDict);
    }
    return futureFakeRestaurantDataDict[restaurantId];
  };

  const getFakeDataForRestaurantsList = (
    restaurants: RestaurantType[]
  ): FakeRestaurantDataDictType => {
    let futureFakeRestaurantDataDict = { ...fakeRestaurantDataDict };
    restaurants.forEach((restaurant: RestaurantType) => {
      if (!Boolean(futureFakeRestaurantDataDict[restaurant.id])) {
        futureFakeRestaurantDataDict[restaurant.id] = {
          description: faker.lorem.paragraphs() || "",
          imageUrl: faker.image.food(600, 400, true) || "",
        };
      }
    });
    setFakeRestaurantDataDict(futureFakeRestaurantDataDict);
    return futureFakeRestaurantDataDict;
  };

  const store = {
    fakeRestaurantDataDict,
    getFakeDataForRestaurantId,
    getFakeDataForRestaurantsList,
  };

  const storeForProvider = useMemo(() => store, [store]);
  return (
    <FakeDataContext.Provider value={storeForProvider}>
      {children}
    </FakeDataContext.Provider>
  );
};

export { FakeDataContext };
export default FakeDataProvider;
