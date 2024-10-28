import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../interfaces/trip.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private readonly tripsUrl = 'https://api.example.com/trips'; // Ajuste a URL
  private readonly deliveriesUrl = 'https://api.example.com/deliveries'; // Ajuste a URL
  private readonly routeUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Route'; // Ajuste a URL
  private useMockData = true; // Flag para alternar entre dados mockados e API real

  constructor(private http: HttpClient) { }

  getAllRoutes(): Observable<Route[]> {
   return this.http.get<Route[]>(this.routeUrl); // Chamada ao backend
  }
}
