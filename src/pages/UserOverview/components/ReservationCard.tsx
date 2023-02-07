import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

export const ReservationCard = ({ reservation }: any) => {
  console.log("card", reservation);
  return (
    <Card>
      <CardBody>
        <p>Restaurant id:{reservation.restaurantId}</p>
        <p>Number of people: {reservation.noOfPersons}</p>
        <p>Date: {new Date(reservation.date).toLocaleDateString("ro-RO")}</p>
        <p>Time: {reservation.hour}</p>

        <p>
          Status: {reservation.emailConfirmed ? "Confirmed" : "Not confirmed"}
        </p>
        <p>Onorata: {reservation.emailConfirmed ? "Yes" : "No"}</p>
      </CardBody>
    </Card>
  );
};
