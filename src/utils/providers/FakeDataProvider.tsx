import React, { createContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

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
    useState<FakeRestaurantDataDictType>({});

  const getFakeDataForRestaurantId = (
    restaurantId: number
  ): FakeResturantDataType => {
    let futureFakeRestaurantDataTict = { ...fakeRestaurantDataDict };
    if (!Boolean(futureFakeRestaurantDataTict[restaurantId])) {
      futureFakeRestaurantDataTict[restaurantId] = {
        description: faker.lorem.paragraphs() || "",
        imageUrl: faker.image.food(600, 400, true) || "",
      };
    }
    setFakeRestaurantDataDict(futureFakeRestaurantDataTict);
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
