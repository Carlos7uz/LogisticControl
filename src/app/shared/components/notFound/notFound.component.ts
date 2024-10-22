import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.scss'
})
export class NotFoundComponent {

}

