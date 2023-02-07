import React, { createContext, useMemo } from "react";
import { faker } from "@faker-js/faker";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
    let futureFakeRestaurantDataTict = { ...fakeRestaurantDataDict };
    if (!Boolean(futureFakeRestaurantDataTict[restaurantId])) {
      futureFakeRestaurantDataTict[restaurantId] = {
        description: faker.lorem.paragraphs() || "",
        imageUrl: faker.image.food(600, 400, true) || "",
      };
      setFakeRestaurantDataDict(futureFakeRestaurantDataTict);
    }
    return futureFakeRestaurantDataTict[restaurantId];
  };

  const store = {
    fakeRestaurantDataDict,
    getFakeDataForRestaurantId,
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
