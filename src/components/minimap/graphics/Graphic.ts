import { myP5, tableManager } from "../Minimap";
import { Table, TableStatus } from "../Table";
import { TableManager } from "../TableManager";

export class Graphic {
  height: number;
  width: number;
  x: number;
  y: number;
  status: TableStatus;
  radius: number;
  color: any;

  parentId: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    status: TableStatus,
    parentId: number,
    radius: number = 0
  ) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.parentId = parentId;
    this.radius = radius;
    this.status = status;
  }

  display() {
    myP5.rect(this.x, this.y, this.width, this.height, this.radius);
  }
  contains = (x: number, y: number) => {
    return (
      this.x <= x &&
      x <= this.x + this.width &&
      this.y <= y &&
      y <= this.y + this.height
    );
  };

  checkIfClicked() {
    if (this.contains(myP5.mouseX, myP5.mouseY)) {
      tableManager.updateTable(this.parentId);
    }
  }
}
