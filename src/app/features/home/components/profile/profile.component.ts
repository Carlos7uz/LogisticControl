import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../core/services/user.service';
import { User } from './../../../../core/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  user: User | undefined;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    const uuid = '0558ab2a-3bd7-40d3-9750-fa6c17f3a6e9'; // Exemplo de uuid, pode vir de uma rota ou contexto
    this.userService.getUser(uuid).subscribe((user: User) => {
      this.user = user; // Armazena o usuário para exibir no template
    });
  }

  disconnectUser(): void {
    this.authService.logout()
  }
}
