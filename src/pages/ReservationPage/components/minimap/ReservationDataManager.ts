import axios from "axios";
import { API_URL } from "../../../../api";
import { Minimap, myP5 } from "./Minimap";
import { TableManager } from "./TableManager";

export class ReservationDataManager {
  selectedNumberOfPeople: number;
  reservationDate: string;
  reservationTime: string;
  restaurantId: string;
  active: boolean;
  constructor() {
    this.selectedNumberOfPeople = 0;
    this.active = false;
    this.reservationDate = "";
    this.reservationTime = "";
    this.restaurantId = "";
  }

  setRestaurantId(id: any) {
    this.restaurantId = id;
  }
  async update() {
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
      this.reservationTime = reservationTime.value() as string;
    }

    if (
      this.selectedNumberOfPeople == 0 ||
      this.reservationDate == "" ||
      this.reservationTime == ""
    ) {
      alert("Trebuie selectate toate cele 3 campuri!");
      return;
    }

    TableManager.getAndSetAvailableTables(
      this.reservationDate,
      this.reservationTime
    );
    console.log(
      API_URL +
        `/restaurants/1/tables/availability?date=${this.reservationDate}&time=${this.reservationTime}`
    );

    this.setActive(true);
  }
  setActive(value: boolean) {
    this.active = value;
  }

  async submit() {
    const tableIds = TableManager.tableSelection.map((table) => table.id);

    try {
      let res = await axios.post(`${API_URL}/bookings/2/1`, {
        date: this.reservationDate,
        hour: this.reservationTime,
        noOfPersons: this.selectedNumberOfPeople,
        bookedTablesIds: tableIds,
      });

      if (res.status == 200) {
        alert(
          "Reservation Sent! Please confirm by clicking the link we sent to your e-mail address."
        );
      }
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }

    // console.log(
    //   this.selectedNumberOfPeople,
    //   this.reservationDate,
    //   this.reservationTime,
    //   this.restaurantId
    // );
    // console.log(TableManager.tableSelection);
  }
}
