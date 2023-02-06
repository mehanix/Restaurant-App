import axios from "axios";
import { API_URL } from "../../../../api";
import { Minimap, myP5 } from "./Minimap";
import { TableManager } from "./TableManager";

export class ReservationDataManager {
  selectedNumberOfPeople: number;
  reservationDate: string;
  reservationTime: string;
  restaurantId: string;
  userId: string;
  active: boolean;
  constructor() {
    this.selectedNumberOfPeople = 0;
    this.active = false;
    this.reservationDate = "";
    this.reservationTime = "";
    this.restaurantId = "";
    this.userId = "";
  }

  setRestaurantId(id: any) {
    this.restaurantId = id;
  }
  async update() {
    let noOfPeople = myP5.select("#noOfPeople");
    let reservationTime = myP5.select("#reservationTime");
    let reservationDate = myP5.select("#reservationDate");
    let restaurantId = myP5.select("#restaurantId");
    let userId = myP5.select("#userId");

    if (noOfPeople) {
      this.selectedNumberOfPeople = noOfPeople.value() as number;
    }
    if (reservationDate) {
      this.reservationDate = reservationDate.value() as string;
    }
    if (reservationTime) {
      this.reservationTime = reservationTime.value() as string;
    }
    if (restaurantId) {
      this.restaurantId = restaurantId.value() as string;
    }
    if (userId) {
      this.userId = userId.value() as string;
    }

    console.log(restaurantId, userId);
    if (
      this.selectedNumberOfPeople == 0 ||
      this.reservationDate == "" ||
      this.reservationTime == "" ||
      this.restaurantId == "" ||
      this.userId == ""
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
        `/restaurants/${this.restaurantId}/tables/availability?date=${this.reservationDate}&time=${this.reservationTime}`
    );

    this.setActive(true);
  }
  setActive(value: boolean) {
    this.active = value;
  }

  async submit() {
    const tableIds = TableManager.tableSelection.map((table) => table.id);

    let res = await axios.post(
      `${API_URL}/bookings/${this.userId}/${this.restaurantId}`,
      {
        date: this.reservationDate,
        hour: this.reservationTime,
        noOfPersons: this.selectedNumberOfPeople,
        bookedTablesIds: tableIds,
        notificationType: "email",
      }
    );
    console.log(res);

    if (res.status == 201) {
      alert(
        "Rezervare efectuata cu succes! Pentru a o confirma, va rugam sa accesati link-ul de pe e-mail."
      );
      window.location.href = "/";
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
