import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { USER_MOCK } from '../../shared/mocks/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userUrl = 'https://dev-api/user'

  constructor(private http: HttpClient) { }

  getUser(uuid: string): Observable<User> {
    const user = USER_MOCK.users.find(user => user.uuid === uuid);
    return of(user!); // O '!' é para indicar que o valor não será nulo (confiança que o usuário será encontrado)

    // const url = `${this.userUrl}/${uuid}`;
    // return this.http.get<User>(url);
  }

  getAllUsers(): Observable<User[]> {
    return of(USER_MOCK.users);

    // return this.http.get<User[]>(this.userUrl);
  }

}
