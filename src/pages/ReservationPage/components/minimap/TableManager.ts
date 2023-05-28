import axios from "axios";
import { API_URL } from "../../../../api";
import { TableObject } from "./APIInterfaces";
import { getTableMapFromRequest, reservationManager } from "./Minimap";
import { Table, TableParams, TableStatus } from "./Table";

interface TableAPI {
  available: boolean;
  capacity: number;
  graphicX: number;
  graphicY: number;
  id: number;
  number: string;
}

export class TableManager {
  static tables: Table[];
  static tableSelection: Table[];

  constructor(apiData: TableObject[]) {
    TableManager.tables = [];
    TableManager.tableSelection = [];
    // for (let tableData of apiData) {
    //   let newTable = new Table({
    //     x: tableData.x,
    //     y: tableData.y,
    //     numberOfSeats: tableData.numberOfSeats,
    //     id: tableData.id,
    //     status: tableData.status,
    //   });
    //   TableManager.tables.push(newTable);
    // }
  }

  static async getAndSetAvailableTables(date: string, time: string) {
    let res = await axios.get(
      API_URL + `/restaurants/1/tables/availability?date=${date}&time=${time}`
    );
    if (res.status != 200) {
      alert(`Eroare API! ${res.status}`);
      return;
    }

    TableManager.tables = getTableMapFromRequest().map((apiObject: TableParams) => {
      return new Table(apiObject);
    });

    // TableManager.tables = res.data.map((apiObject: TableAPI) => {
    //   return new Table({
    //     x: apiObject.graphicX,
    //     y: apiObject.graphicY,
    //     id: apiObject.id,
    //     numberOfSeats: apiObject.capacity,
    //     status: apiObject.available
    //       ? TableStatus.AVAILABLE
    //       : TableStatus.UNAVAILABLE,
    //   });
    // });
  }
  displayTables() {
    for (let table of TableManager.tables) {
      table.display();
    }
  }
  checkIfClicked() {
    for (let table of TableManager.tables) {
      table.checkIfClicked();
    }
  }

  updateTable(id: number) {
    const table = this.findTable(id);
    if (!table) return;

    if (
      table.status == TableStatus.AVAILABLE &&
      reservationManager.selectedNumberOfPeople -
        this.currentlySelectedTablesCapacity() <=
        0
    ) {
      alert(
        "Ai selectat suficiente mese pentru o rezervare cu " +
          reservationManager.selectedNumberOfPeople +
          " oameni!"
      );
      return;
    }

    table.handleClick();
    this.computeTableSelection();
    return;
  }

  findTable(id: number): Table | null {
    let foundTable = null;
    for (let table of TableManager.tables) {
      if (table.id == id) {
        foundTable = table;
      }
    }
    return foundTable;
  }

  computeTableSelection() {
    let tableSelection = [];
    for (let table of TableManager.tables) {
      if (table.status == TableStatus.SELECTED) {
        tableSelection.push(table);
      }
    }
    TableManager.tableSelection = tableSelection;
  }

  currentlySelectedTablesCapacity() {
    let sum = 0;
    for (let table of TableManager.tableSelection) {
      sum += table.numberOfSeats;
    }
    return sum;
  }
}
