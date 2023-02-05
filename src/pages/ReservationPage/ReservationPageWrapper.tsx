import { Button, Heading, HStack, Input, Select } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Minimap, reservationManager } from "./components/minimap/Minimap";

const Page = () => {
  const timesList = [...Array(12).keys()].map((x: number) => {
    return <option value={`${x + 10}:00`}>{x + 10}:00</option>;
  });

  return (
    <>
      <Heading mt="10px" size="xl">
        Make a reservation
      </Heading>
      <HStack mt="10px">
        <Input
          onChange={() => {
            reservationManager.setActive(false);
          }}
          placeholder="Select Date"
          size="md"
          type="date"
          width="200px"
          id="reservationDate"
        />
        <Select
          onChange={() => {
            reservationManager.setActive(false);
          }}
          placeholder="Select Time"
          width="200px"
          id="reservationTime"
        >
          {timesList}
        </Select>
        <Select
          onChange={() => {
            reservationManager.setActive(false);
          }}
          id="noOfPeople"
          width="200px"
          placeholder="Numar persoane"
        >
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </Select>
        <Button
          colorScheme="blue"
          onClick={() => {
            reservationManager.update();
          }}
        >
          Check availability
        </Button>
      </HStack>
      <Minimap />
      <Button
        onClick={() => {
          reservationManager.submit();
        }}
        mt="10px"
        colorScheme="blue"
      >
        Rezerva
      </Button>
    </>
  );
};

export default Page;
