import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from '../interfaces/delivery.interface';
import { catchError, Observable, of, Subject, tap, throwError } from 'rxjs';
import { CreateDelivery } from '../interfaces/createDelivery.interface';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private readonly deliveriesUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Delivery';

  private deliveriesUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getDeliveriesUpdatedListener() {
    return this.deliveriesUpdated.asObservable();
  }

  getDeliveriesByTrip(tripUuid: string): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.deliveriesUrl}/Trip/${tripUuid}`);
  }

  getDeliveryByUuid(deliveryUuid: string): Observable<Delivery> {
    if (!this.isValidUuid(deliveryUuid)) {
      return throwError(() => new Error('Invalid UUID format'));
    } else {
      return this.http.get<Delivery>(`${this.deliveriesUrl}/${deliveryUuid}`).pipe(
        catchError(error => {
          console.error(`Error fetching delivery with UUID ${deliveryUuid}:`, error);
          return throwError(() => new Error(`Delivery with UUID ${deliveryUuid} not found`));
        })
      );
    }
  }

  createDelivery(delivery: CreateDelivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.deliveriesUrl, delivery);
  }

  updateDelivery(deliveryUuid: string, delivery: CreateDelivery): Observable<Delivery> {
    return this.http.put<Delivery>(`${this.deliveriesUrl}/${deliveryUuid}`, delivery);
  }

  deleteDelivery(deliveryUuid: string): Observable<void> {
    return this.http.delete<void>(`${this.deliveriesUrl}/${deliveryUuid}`).pipe(
      catchError(err => {
        console.error('Erro ao deletar entrega:', err);
        return throwError(() => new Error('Falha ao deletar entrega.'));
      }),
      tap(() => this.deliveriesUpdated.next()) // Notifica a alteração após a exclusão bem-sucedida
    );
  }

  // Função para validar o formato do UUID
  private isValidUuid(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

}
