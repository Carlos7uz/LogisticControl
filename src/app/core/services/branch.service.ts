import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../interfaces/delivery.interface';
import { Observable, of } from 'rxjs';
import { BRANCH_MOCK } from '../../shared/mocks/branch.mock';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private readonly tripsUrl = 'https://api.example.com/trips'; // Ajuste a URL
  private readonly deliveriesUrl = 'https://api.example.com/deliveries'; // Ajuste a URL
  private readonly branchesUrl = 'https://api.example.com/Branch'; // Ajuste a URL
  private useMockData = true; // Flag para alternar entre dados mockados e API real

  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<Branch[]> {
    if(this.useMockData) {
      return of(BRANCH_MOCK.branches); // Retorna o mock
    } else {
      return this.http.get<Branch[]>(this.branchesUrl); // Chamada ao backend
    }
  }


}
