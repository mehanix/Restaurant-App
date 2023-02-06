import { Heading, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { API_URL } from "../../../api";
import { UserContext } from "../../../utils/providers/UserContextProvider";
import { ReservationCard } from "./ReservationCard";

const UserReservations = ({ reservations }: any) => {
  const user = useContext(UserContext) as any;

  console.log(reservations);
  const reservationCards = reservations
    ? reservations.map((reservation: any) => {
        return <ReservationCard reservation={reservation} />;
      })
    : [];
  return <HStack>{reservationCards}</HStack>;
};

export default UserReservations;
