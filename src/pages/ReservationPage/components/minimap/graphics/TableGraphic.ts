/* eslint-disable @typescript-eslint/no-useless-constructor */
import { TableStatus } from "../Table";
import { Graphic } from "./Graphic";

export class TableGraphic extends Graphic {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    parentId: number,
    status: TableStatus
  ) {
    super(x, y, width, height, status, parentId, 5);
  }
}
