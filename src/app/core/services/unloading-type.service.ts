import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UnloadingType } from '../interfaces/delivery.interface';
import { UNLOADING_TYPE_MOCK } from '../../shared/mocks/unloadingType.mock';

@Injectable({
  providedIn: 'root'
})
export class UnloadingTypeService {
  private readonly tripsUrl = 'https://api.example.com/trips'; // Ajuste a URL
  private readonly deliveriesUrl = 'https://api.example.com/deliveries'; // Ajuste a URL
  private readonly unloadingTypesUrl = 'https://api.example.com/UnloadingType'; // Ajuste a URL
  private useMockData = true; // Flag para alternar entre dados mockados e API real

  constructor(private http: HttpClient) { }

  getAllUnloadingTypes(): Observable<UnloadingType[]> {
    if(this.useMockData) {
      return of(UNLOADING_TYPE_MOCK.unloadingTypes);
    } else {
      return this.http.get<UnloadingType[]>(this.unloadingTypesUrl);
    }
  }
}
