import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delivery } from '../interfaces/delivery.interface';
import { catchError, Observable, of, Subject, tap, throwError } from 'rxjs';
import { DELIVERY_MOCK } from '../../shared/mocks/delivery.mock';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private readonly deliveriesUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Delivery';
  private useMockData = false; // Flag para alternar entre dados mockados e API real

  private deliveriesUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }


  getDeliveriesUpdatedListener() {
    return this.deliveriesUpdated.asObservable();
  }

  getDeliveryByUuid(deliveryUuid: string): Observable<Delivery> {
    if (!this.isValidUuid(deliveryUuid)) {
      return throwError(() => new Error('Invalid UUID format'));
    }

    if (this.useMockData) {
      // Busca a entrega específica nos dados mockados
      const delivery = DELIVERY_MOCK.deliveries.find(del => del.uuid === deliveryUuid);

      if (delivery) {
        return of(delivery); // Retorna a entrega encontrada
      } else {
        return throwError(() => new Error('Delivery not found')); // Lança um erro se não encontrar a entrega
      }
    } else {
      // Faz uma chamada à API real para obter a entrega pelo UUID
      return this.http.get<Delivery>(`${this.deliveriesUrl}/${deliveryUuid}`).pipe(
        catchError(error => {
          console.error(`Error fetching delivery with UUID ${deliveryUuid}:`, error);
          return throwError(() => new Error(`Delivery with UUID ${deliveryUuid} not found`));
        })
      );
    }
  }

  // Função para validar o formato do UUID
  private isValidUuid(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
  }

  createDelivery(delivery: Delivery): Observable<Delivery> {
    if (this.useMockData) {
      // Simular a criação com dados mockados
      DELIVERY_MOCK.deliveries.push(delivery);
      return of(delivery); // Retorna o delivery criado
    } else {
      return this.http.post<Delivery>(this.deliveriesUrl, delivery);
    }
  }

  updateDelivery(delivery: Delivery): Observable<Delivery> {
    if (this.useMockData) {
      const index = DELIVERY_MOCK.deliveries.findIndex(d => d.uuid === delivery.uuid);
      if (index !== -1) {
        DELIVERY_MOCK.deliveries[index] = delivery; // Atualiza o delivery no mock
        return of(delivery); // Retorna o delivery atualizado
      }
      // Retorna um erro Observable se a entrega não for encontrada
      return throwError(() => new Error('Delivery not found')); // Lança um erro caso não encontre o delivery
    } else {
      return this.http.put<Delivery>(`${this.deliveriesUrl}/${delivery.uuid}`, delivery);
    }
  }

  deleteDelivery(deliveryUuid: string): Observable<void> {
    if (this.useMockData) {
      const index = DELIVERY_MOCK.deliveries.findIndex(d => d.uuid === deliveryUuid);
      if (index !== -1) {
        DELIVERY_MOCK.deliveries.splice(index, 1);
      }
      this.deliveriesUpdated.next(); // Notifica a alteração
      return of();
    } else {
      return this.http.delete<void>(`${this.deliveriesUrl}/${deliveryUuid}`).pipe(
        catchError(err => {
          console.error('Erro ao deletar entrega:', err);
          return throwError(() => new Error('Falha ao deletar entrega.'));
        }),
        tap(() => this.deliveriesUpdated.next()) // Notifica a alteração após a exclusão bem-sucedida
      );
    }
  }

}
