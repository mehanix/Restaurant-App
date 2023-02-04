import { Minimap, myP5 } from "./Minimap";
import { TableManager } from "./TableManager";

export class ReservationDataManager {
  selectedNumberOfPeople: number;
  reservationDate: string;
  reservationTime: number;
  active: boolean;
  constructor() {
    this.selectedNumberOfPeople = 0;
    this.active = false;
    this.reservationDate = "";
    this.reservationTime = 0;
  }

  update() {
    let noOfPeople = myP5.select("#noOfPeople");
    let reservationTime = myP5.select("#reservationTime");
    let reservationDate = myP5.select("#reservationDate");

    if (noOfPeople) {
      this.selectedNumberOfPeople = noOfPeople.value() as number;
    }
    if (reservationDate) {
      this.reservationDate = reservationDate.value() as string;
    }
    if (reservationTime) {
      this.reservationTime = reservationTime.value() as number;
    }

    if (
      this.selectedNumberOfPeople == 0 ||
      this.reservationDate == "" ||
      this.reservationTime == 0
    ) {
      alert("Trebuie selectate toate cele 3 campuri!");
      return;
    }

    this.setActive(true);
  }
  setActive(value: boolean) {
    this.active = value;
  }

  submit() {
    console.log(TableManager.tableSelection);
  }
}
