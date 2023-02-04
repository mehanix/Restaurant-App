// cum tin obiectele in minimap
export interface TableObject {
  x: number;
  y: number;
  numberOfSeats: number;
  id: number;
  status: number;
}

// forma json-urilor din api
export interface GetRequestTableObject {
  id: number;
  capacity: 4;
  number: string;
  graphicX: number;
  graphicY: number;
}
