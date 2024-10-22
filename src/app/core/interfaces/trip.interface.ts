import { Delivery } from "./delivery.interface";

export interface Trip {
  uuid: string;
  status: string;
  departureDateTime: string;
  arrangement: number;
  contactNumber: string;
  route: Route;
  horseVehicle: HorseVehicle;
  driver: Driver;
  separationOrders: number[];
  deliveries?: Delivery[];
}

export interface Route {
  uuid: string;
  nameRoute: string;
}

export interface HorseVehicle {
  uuid: string;
  licensePlate: string;
  model: string;
  vehicleType: VehicleType;
}

export interface VehicleType {
  uuid: string;
  vehicleTypeName: string;
}

export interface Driver {
  uuid: string;
  driverName: string;
  contactNumber: string;
}
