import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HorseVehicle } from '../interfaces/trip.interface';

@Injectable({
  providedIn: 'root'
})
export class HorseVehicleService {

  private readonly vehicleUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Vehicle'; // Ajuste a URL

  constructor(private http: HttpClient) { }

  getAllVehicle(): Observable<HorseVehicle[]> {
    return this.http.get<HorseVehicle[]>(this.vehicleUrl); // Chamada ao backend
  }
}
