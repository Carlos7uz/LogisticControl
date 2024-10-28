import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.scss'
})
export class NotFoundComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    // Verifica o status de login
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}

