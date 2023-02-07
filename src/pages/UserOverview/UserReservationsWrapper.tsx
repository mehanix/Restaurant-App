import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingIndicator from "../../components/LoadingIndicator";
import { emptyRestaurant } from "../../utils/dummyData";
import { UserContext } from "../../utils/providers/UserContextProvider";
import UserReservations from "./components/UserReservations";

export const UserReservationsWrapper = () => {
  const [pastReservations, setPastReservations] = useState([]);
  const [futureReservations, setFutureReservations] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const user = useContext(UserContext) as any;

  const getPastReservations = async () => {
    let res = await axios
      .get(`http://localhost:8080/users/${1}/past-bookings`)
      .catch();

    console.log(res.data);
    return res.data;
  };

  const getFutureReservations = async () => {
    let res = await axios
      .get(`http://localhost:8080/users/${1}/future-bookings`)
      .catch();

    console.log(res.data);
    return res.data;
  };

  const getAndSetRestaurantRequest = async () => {
    setIsLoading(true);
    toast.info("Getting things ready...", { autoClose: 2000 });
    const result = await getPastReservations();
    if (result) {
      setPastReservations(result);
      console.log("rrr", pastReservations);
      toast.success(" Past Reservations successfully loaded!");
    } else {
      toast.error("Seems like something broke!");
    }

    const otherResult = await getFutureReservations();
    if (otherResult) {
      setFutureReservations(otherResult);
      toast.success(" Future Reservations successfully loaded!");
    } else {
      toast.error("Seems like something broke!");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAndSetRestaurantRequest();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Heading mt="10px">My Past Reservations</Heading>
      <UserReservations reservations={pastReservations ?? []} />;
      <Heading mt="10px">My Future Reservations</Heading>
      <UserReservations reservations={futureReservations ?? []} />;
    </>
  );
};
