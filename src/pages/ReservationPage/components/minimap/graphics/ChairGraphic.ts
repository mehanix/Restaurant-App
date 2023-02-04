import { myP5 } from "../Minimap";
import { CHAIR_SIZE } from "../MinimapConstants";
import { TableStatus } from "../Table";
import { Graphic } from "./Graphic";

export class ChairGraphic extends Graphic {
  constructor(x: number, y: number, parentId: number, status: TableStatus) {
    super(x, y, CHAIR_SIZE, CHAIR_SIZE, status, parentId, 15);
  }
}
