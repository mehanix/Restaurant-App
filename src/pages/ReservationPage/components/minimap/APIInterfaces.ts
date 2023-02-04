export interface TableAPIObject {
  x: number;
  y: number;
  numberOfSeats: number;
  id: number;
  status: number;
}

export interface TableListAPIObject {
  tables: TableAPIObject[];
}
