export interface CreateTrip {
  routeUuid: string;
  departureDateTime: string;
  horseVehicleUuid: string;
  driverUuid: string;
  arrangement: number;
  contactNumber: string;
  status?: any; // Defina o tipo correto
}
