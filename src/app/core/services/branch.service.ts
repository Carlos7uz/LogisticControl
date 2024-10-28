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
  private useMockData = false; // Flag para alternar entre dados mockados e API real
  private readonly branchesUrl = 'https://api-dev-logisticcontrol.azurewebsites.net/api/Branch'; // Ajuste a URL

  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.branchesUrl); // Chamada ao backend
  }

}
