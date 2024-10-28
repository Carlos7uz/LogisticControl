import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from '../interfaces/trip.interface';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private readonly driverUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Driver'; // Ajuste a URL

  constructor(private http: HttpClient) { }

  getAllDriver(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driverUrl); // Chamada ao backend
  }
}
