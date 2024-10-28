import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private router: Router){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

    const token = localStorage.getItem('authToken');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    } else {
      this.authService.logout()
    }

     return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) { // Verifica se a resposta é 401 Unauthorized
          this.authService.logout(); // Chama o método de logout
          this.router.navigate(['/']); // Redireciona para a tela de login
        }
        return throwError(() => error); // Re-throw the error
      }),
      finalize(() => this.spinner.hide())
    );
  }
}
