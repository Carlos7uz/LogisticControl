import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';
import { Trip } from '../interfaces/trip.interface';
import { Delivery } from '../interfaces/delivery.interface';
import { TRIP_MOCK } from '../../shared/mocks/trip.mock';
import { DELIVERY_MOCK } from '../../shared/mocks/delivery.mock';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly tripsUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Trip'; // Ajuste a URL
  private readonly deliveriesUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Delivery'; // Ajuste a URL
  private useMockData = false; // Flag para alternar entre dados mockados e API real

  constructor(private http: HttpClient) { }

  getTripByUuid(tripUuid: string): Observable<Trip> {
    if (this.useMockData) {
      // Busca a viagem específica nos dados mockados
      const trip = TRIP_MOCK.trips.find(trip => trip.uuid === tripUuid);

      if (trip) {
        return of(trip); // Retorna a viagem encontrada
      } else {
        return throwError(() => new Error('Trip not found')); // Lança um erro se não encontrar a viagem
      }

    } else {
      // Faz uma chamada à API real para obter a viagem pelo UUID
      return this.http.get<Trip>(`${this.tripsUrl}/${tripUuid}`);
    }
  }

  getAllTrips(): Observable<Trip[]> {
    if (this.useMockData) {
      return of(TRIP_MOCK.trips); // Retorna dados mockados
    } else {
      return this.http.get<{ items: Trip[] }>(this.tripsUrl).pipe(
        map(response => response.items) // Mapeia para retornar apenas os itens
      );
    }
  }

  getDeliveriesByTrip(tripUuid: string): Observable<Delivery[]> {
    if (this.useMockData) {
      // Filtra entregas mockadas com base no tripUuid
      const deliveries = DELIVERY_MOCK.deliveries.filter(delivery => delivery.tripUuid === tripUuid);
      return of(deliveries);
    } else {
      return this.http.get<Delivery[]>(`${this.deliveriesUrl}?tripUuid=${tripUuid}`); // Retorna dados da API
    }
  }

}
