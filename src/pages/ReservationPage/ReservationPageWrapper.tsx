import { Box, Button, Center, Container, Flex, Heading, HStack, Input, Select, Spacer } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../utils/providers/UserContextProvider";
import { Minimap, reservationManager } from "./components/minimap/Minimap";
import { FormControl } from "react-bootstrap";

const Page = () => {
  const { id } = useParams();
  const user = useContext(UserContext) as any;

  const timesList = [...Array(12).keys()].map((x: number) => {
    return <option value={`${x + 10}:00`}>{x + 10}:00</option>;
  });

  return (
    <Container maxW="1000px"  >
      <input hidden id="restaurantId" value={id} />

      <input hidden id="userId" value={user.user.id} />
      <Heading mt="10px" size="xl">
        Make a reservation
      </Heading>
      <Flex mt="10px">
        <Input mr="5px"
          onChange={() => {
            reservationManager.setActive(false);
          }}
          placeholder="Select Date"
          size="md"
          type="date"
          width="200px"
          id="reservationDate"
        />
       
        <Select mr="5px"
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
                <Spacer />
        <Button
          colorScheme="blue"
          onClick={() => {
            reservationManager.update();
          }}
        >
          Check availability
        </Button>
      </Flex>
      <Center padding="15pt">
      <Minimap />

      </Center>
          <Center>
          <Button mb="10px"
        onClick={() => {
          reservationManager.submit();
        }}
        mt="10px"
        colorScheme="blue"
      >
        Rezerva
      </Button>
          </Center>
    </Container>
  );
};

export default Page;
