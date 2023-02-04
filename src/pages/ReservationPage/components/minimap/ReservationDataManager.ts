import { myP5 } from "./Minimap";

export class ReservationDataManager {
  selectedNumberOfPeople: number;
  constructor() {
    this.selectedNumberOfPeople = 0;
  }

  update() {
    let a = myP5.select("#noOfPeople");
    if (a) {
      this.selectedNumberOfPeople = a.value() as number;
    }
  }
}
