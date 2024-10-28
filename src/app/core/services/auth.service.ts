import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private loggedIn = new BehaviorSubject<boolean>(false); // Gerencia o estado do login

  isLoggedIn$ = this.loggedIn.asObservable(); // Observável para outras partes da aplicação

  constructor(private router: Router) {
    this.isLoggedIn(); // Verifica o login ao inicializar
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Salva o token no localStorage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.loggedIn.next(true);
  }

  // Remove o token e atualiza o estado de login
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  // Método para verificar login status (sincroniza com o Guard)
  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
