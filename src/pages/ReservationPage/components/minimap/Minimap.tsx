import p5 from "p5";
import { useEffect, useRef } from "react";
import { TableListAPIObject } from "./APIInterfaces";
import { ReservationDataManager } from "./ReservationDataManager";
import { Table, TableStatus } from "./Table";
import { TableManager } from "./TableManager";

let myP5: p5;
export let tableManager: TableManager;
export let reservationManager: ReservationDataManager;
const DemoTables: TableListAPIObject = {
  tables: [
    {
      x: 50,
      y: 50,
      numberOfSeats: 4,
      id: 1,
      status: TableStatus.AVAILABLE,
    },
    {
      x: 300,
      y: 50,
      numberOfSeats: 2,
      id: 2,
      status: TableStatus.AVAILABLE,
    },
    {
      x: 300,
      y: 300,
      numberOfSeats: 6,
      id: 3,
      status: TableStatus.AVAILABLE,
    },
    {
      x: 500,
      y: 600,
      numberOfSeats: 8,
      id: 4,
      status: TableStatus.AVAILABLE,
    },
    {
      x: 500,
      y: 200,
      numberOfSeats: 4,
      id: 5,
      status: TableStatus.UNAVAILABLE,
    },
    {
      x: 200,
      y: 500,
      numberOfSeats: 6,
      id: 6,
      status: TableStatus.UNAVAILABLE,
    },
  ],
};

export const Minimap = () => {
  const divRef = useRef<any>(null);
  const s = (s: any) => {
    s.setup = () => {
      s.createCanvas(800, 800);
      tableManager = new TableManager(DemoTables);
      reservationManager = new ReservationDataManager();
    };

    // Draw loop
    s.draw = () => {
      s.background(250);
      s.fill(255);
      tableManager.displayTables();
    };

    s.mousePressed = () => {
      tableManager.checkIfClicked();
    };
  };
  useEffect(() => {
    myP5 = new p5(s, divRef.current);
  });

  return <div ref={divRef}></div>;
};

export { myP5 };
