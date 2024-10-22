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
    MatInputModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
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

      if (email && password) { // Verifica se não é null ou undefined
        this.loginService.login(email, password).subscribe(
          response => {
            console.log(response)
            if(response && response.accessToken){
              localStorage.setItem('authToken', response.accessToken);
              this.spinner.hide(); // Esconde o spinner
              this.isLoading = false; // Desativa o spinner
              this.router.navigate(['/home']);
            } else {
              console.error('Login falhou: token não recebido');
              this.isLoading = false; // Desativa o spinner
            this.spinner.hide(); // Esconde o spinner
            }
          },
          error => {
            console.error('Erro ao fazer login', error);
            this.spinner.hide(); // Esconde o spinner
            this.isLoading = false; // Desativa o spinner
          }
        );
      } else {
        console.error('Email ou senha não podem ser vazios');
        this.spinner.hide(); // Esconde o spinner
        this.isLoading = false; // Desativa o spinner
        // Aqui você pode mostrar uma mensagem de erro ao usuário
      }
    }
  }
}
