import { ChairGraphic } from "./graphics/ChairGraphic";
import { Coordinate } from "./graphics/Coordinate";
import { TableGraphic } from "./graphics/TableGraphic";
import { myP5 } from "./Minimap";
import {
  CHAIR_SIZE,
  CHAIR_SPACING,
  CHAIR_SPACING_BETWEEN,
  TABLE_HEIGHT,
  TABLE_MIN_WIDTH,
  TABLE_WIDTH_UNIT,
} from "./MinimapConstants";

export enum TableStatus {
  AVAILABLE,
  UNAVAILABLE,
  SELECTED,
}

export interface TableParams {
  numberOfSeats: number;
  x: number;
  y: number;
  id: number;
  status: TableStatus;
}

const colorAvailable = { r: 220, g: 220, b: 220 };
const colorUnavailable = { r: 50, g: 50, b: 50 };
const colorSelected = { r: 175, g: 225, b: 175 };

export class Table {
  numberOfSeats: number;
  x: number;
  y: number;
  status: TableStatus;
  tableGraphic: TableGraphic;
  chairGraphics: ChairGraphic[];
  id: number;
  bounds: Coordinate;

  chairPositions: Coordinate[];
  constructor(params: TableParams) {
    this.numberOfSeats = params.numberOfSeats;
    this.x = params.x;
    this.y = params.y;
    this.id = params.id;
    this.status = params.status;

    const tableWidth = Math.max(
      TABLE_MIN_WIDTH,
      Math.ceil(this.numberOfSeats / 2 - 1) * TABLE_WIDTH_UNIT
    );
    const tableHeight = TABLE_HEIGHT;
    this.tableGraphic = new TableGraphic(
      this.x,
      this.y,
      tableWidth,
      tableHeight,
      this.id,
      this.status
    );

    this.chairGraphics = [];
    this.chairPositions = [];

    this.bounds = {
      x: tableWidth + 2 * (CHAIR_SIZE + CHAIR_SPACING),
      y: tableHeight + 2 * (CHAIR_SIZE + CHAIR_SPACING),
    };
    this.generateTableDrawing();
  }

  display() {
    let color = this.findColor(this.status);

    myP5.fill(color);
    this.tableGraphic.display();
    for (let chairGraphic of this.chairGraphics) {
      chairGraphic.display();
    }
  }

  findColor(status: TableStatus) {
    switch (status) {
      case TableStatus.AVAILABLE:
        return myP5.color(colorAvailable.r, colorAvailable.g, colorAvailable.b);
      case TableStatus.SELECTED:
        return myP5.color(colorSelected.r, colorSelected.g, colorSelected.b);
      case TableStatus.UNAVAILABLE:
        return myP5.color(
          colorUnavailable.r,
          colorUnavailable.g,
          colorUnavailable.b
        );
    }
  }

  checkIfClicked() {
    this.tableGraphic.checkIfClicked();
    for (let chair of this.chairGraphics) {
      chair.checkIfClicked();
    }
  }

  handleClick() {
    if (this.status == TableStatus.UNAVAILABLE) {
      alert("Cannot select table: already booked by someone else!");
      return;
    }
    if (this.status == TableStatus.AVAILABLE) {
      this.status = TableStatus.SELECTED;
      return;
    }
    if (this.status == TableStatus.SELECTED) {
      this.status = TableStatus.AVAILABLE;
      return;
    }
  }

  // math to generate table and chair elements
  generateTableDrawing() {
    if (this.numberOfSeats < 2) {
      console.error("Tables must have at least 2 seats");
      return;
    }

    // scaune: capete
    this.chairPositions.push({
      x: this.tableGraphic.x - (CHAIR_SIZE + CHAIR_SPACING),
      y: this.tableGraphic.y + (this.tableGraphic.height - CHAIR_SIZE) / 2,
    });

    this.chairPositions.push({
      x: this.tableGraphic.x + (this.tableGraphic.width + CHAIR_SPACING),
      y: this.tableGraphic.y + (this.tableGraphic.height - CHAIR_SIZE) / 2,
    });

    // scaune: restul:
    const chairAreaWidth = CHAIR_SIZE + CHAIR_SPACING_BETWEEN;
    const seatColumns = Math.ceil((this.numberOfSeats - 2) / 2);
    const offset =
      (this.tableGraphic.width - seatColumns * chairAreaWidth) / 2 +
      CHAIR_SPACING_BETWEEN / 2;

    for (let i = 0; i < seatColumns; i++) {
      this.chairPositions.push({
        x: offset + this.tableGraphic.x + i * chairAreaWidth,
        y: this.tableGraphic.y - CHAIR_SIZE - CHAIR_SPACING,
      });

      this.chairPositions.push({
        x: offset + this.tableGraphic.x + i * chairAreaWidth,
        y: this.tableGraphic.y + this.tableGraphic.height + CHAIR_SPACING,
      });
    }
    for (let chairPosition of this.chairPositions) {
      this.chairGraphics.push(
        new ChairGraphic(chairPosition.x, chairPosition.y, this.id, this.status)
      );
    }
  }
}
