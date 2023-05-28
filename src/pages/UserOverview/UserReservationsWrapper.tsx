import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../api";
import LoadingIndicator from "../../components/LoadingIndicator";
import { UserContext } from "../../utils/providers/UserContextProvider";
import UserReservations from "./components/UserReservations";

export const UserReservationsWrapper = () => {
  const [pastReservations, setPastReservations] = useState([]);
  const [futureReservations, setFutureReservations] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {user} = useContext<any>(UserContext)
  const userId = user?.id || 0;

  const getPastReservations = async () => {
    let res = await axios
      .get(`${API_URL}/users/${userId}/past-bookings`)
      .catch();

    console.log(res.data);
    return res.data;
  };

  const getFutureReservations = async () => {
    let res = await axios
      .get(`${API_URL}/users/${userId}/future-bookings`)
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
    <Container maxW="1000pt" padding="10pt">
      <Heading mt="10px" mb="10px">My Past Reservations</Heading>
      <UserReservations reservations={pastReservations ?? []} />
      <Heading mt="10px" mb="10px">My Future Reservations</Heading>
      <UserReservations reservations={futureReservations ?? []} />
    </Container>
  );
};
