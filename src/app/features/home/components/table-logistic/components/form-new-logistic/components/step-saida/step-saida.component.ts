import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-saida',
  standalone: true,
  imports: [
    RouterModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './step-saida.component.html',
  styleUrl: './step-saida.component.scss'
})
export class StepSaidaComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  saidaFormGroup = this.fb.group({
    route: ['', Validators.required],
    departureDate: ['', Validators.required],
    departureTime: ['', Validators.required],
    seq: ['', Validators.required],
    restaurant: ['', Validators.required],
    preTrips: ['', Validators.required],
    separationOrders: ['', Validators.required]
  });

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
