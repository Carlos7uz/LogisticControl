import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { catchError, finalize, of, tap, throwError } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoading = false;
  passwordVisible: boolean = false;

  showSnackBar = false;
  mensagemSnackBar: string = '';
  iconeSnackBar: string = 'error';
  corSnackBar: string = 'error';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
  ){}

  loginFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  login(): void {
    if (this.loginFormGroup.valid) {
      const { email, password } = this.loginFormGroup.value;

      this.isLoading = true;
      this.spinner.show();

      if(email && password){
        this.loginService.login(email, password).pipe(
          tap(response => {
            if (response && response.accessToken) {
              this.spinner.hide();
              this.isLoading = false;
              this.authService.setToken(response.accessToken); // Salva o token
              this.router.navigate(['/home']); // Navega para o home
            } else {
              this.spinner.hide();
              this.isLoading = false;
              this.showSnackBarMessage('Credenciais inválidas', 'error', 'error');
            }
          }),
          catchError(error => {
            this.showSnackBarMessage('Não foi possível realizar o login', 'error', 'error');
            //return of(null)
            return throwError(() => error);
          }),
          finalize(() => {
            this.isLoading = false;
            this.spinner.hide();
          })
        ).subscribe();
      } else {
        this.showSnackBarMessage('Email e senha são obrigatórios', 'error', 'error');
      }
    } else {
      this.showSnackBarMessage('Formulário inválido', 'error', 'error');
    }
  }

  showSnackBarMessage(message: string, icon: string, color: string): void {
    this.mensagemSnackBar = message;
    this.iconeSnackBar = icon;
    this.corSnackBar = color;
    this.showSnackBar = true;

    // Opcional: esconder o snack bar após alguns segundos
    setTimeout(() => {
      this.showSnackBar = false;
    }, 3000); // 3000 ms = 3 segundos
  }

  passwordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
