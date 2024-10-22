import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken'); // Obtém o token do local storage

    if (token) {
      console.log(token)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Adiciona o token ao header
        }
      });
    } else {
      console.log('Não tem token')
    }
    return next.handle(request); // Continua com a requisição

  }
}
