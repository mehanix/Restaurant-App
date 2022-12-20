import { TableListAPIObject } from "../../api/APIInterfaces";
import { Table, TableStatus } from "./Table";

export class TableManager {
  tables: Table[];

  constructor(apiData: TableListAPIObject) {
    this.tables = [];
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
    if (table) {
      table.handleClick();
    }
  }

  findTable(id: number): Table | null {
    let foundTable = null;
    for (let table of this.tables) {
      if (table.id == id) {
        foundTable = table;
        break;
      }
    }
    return foundTable;
  }
}
