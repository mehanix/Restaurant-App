import { Select } from "@chakra-ui/react";
import { Minimap, reservationManager } from "../components/minimap/Minimap";

const Page = () => {
  return (
    <>
      Book a table!
      <Select
        onChange={() => {
          reservationManager.update();
        }}
        id="noOfPeople"
        width="200px"
        placeholder="Numar persoane"
      >
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </Select>
      <Minimap />
    </>
  );
};

export default Page;
