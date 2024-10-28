import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Trip } from '../interfaces/trip.interface';
import { CreateTrip } from '../interfaces/createTrip.interface';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly tripsUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Trip'; // Ajuste a URL

  constructor(private http: HttpClient) { }

  getAllTrips(): Observable<Trip[]> {
    return this.http.get<{ items: Trip[] }>(this.tripsUrl).pipe(
      map(response => response.items) // Mapeia para retornar apenas os itens
    );
  }

  getTripByUuid(tripUuid: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.tripsUrl}/${tripUuid}`);
  }

  createTrip(trip: CreateTrip): Observable<Trip> {
    return this.http.post<Trip>(this.tripsUrl, trip);
  }

  updateTrip(tripUuid: string, trip: CreateTrip): Observable<Trip> {
    return this.http.put<Trip>(`${this.tripsUrl}/${tripUuid}`, trip);
  }

  // Método para deletar uma viagem existente (DELETE)
  deleteTrip(tripUuid: string): Observable<Trip> {
    const url = `${this.tripsUrl}/${tripUuid}`;
    return this.http.delete<any>(url);
  }

}
