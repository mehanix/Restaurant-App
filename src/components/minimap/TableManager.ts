import { TableListAPIObject } from "../../api/APIInterfaces";
import { reservationManager } from "./Minimap";
import { Table, TableStatus } from "./Table";

export class TableManager {
  tables: Table[];
  tableSelection: Table[];

  constructor(apiData: TableListAPIObject) {
    this.tables = [];
    this.tableSelection = [];
    for (let tableData of apiData.tables) {
      let newTable = new Table({
        x: tableData.x,
        y: tableData.y,
        numberOfSeats: tableData.numberOfSeats,
        id: tableData.id,
        status: tableData.status,
      });
      this.tables.push(newTable);
    }
  }

  displayTables() {
    for (let table of this.tables) {
      table.display();
    }
  }
  checkIfClicked() {
    for (let table of this.tables) {
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
      return;
    }

    table.handleClick();
    this.computeTableSelection();
    return;
  }

  findTable(id: number): Table | null {
    let foundTable = null;
    for (let table of this.tables) {
      if (table.id == id) {
        foundTable = table;
      }
    }
    return foundTable;
  }

  computeTableSelection() {
    let tableSelection = [];
    for (let table of this.tables) {
      if (table.status == TableStatus.SELECTED) {
        tableSelection.push(table);
      }
    }
    this.tableSelection = tableSelection;
  }

  currentlySelectedTablesCapacity() {
    let sum = 0;
    for (let table of this.tableSelection) {
      sum += table.numberOfSeats;
    }
    return sum;
  }
}
