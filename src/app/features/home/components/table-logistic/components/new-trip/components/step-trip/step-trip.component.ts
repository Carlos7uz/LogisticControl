import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-trip',
  standalone: true,
  imports: [
    RouterModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './step-trip.component.html',
  styleUrl: './step-trip.component.scss'
})
export class StepTripComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  tripFormGroup = this.fb.group({
    status: ['', Validators.required],
    nameRoute: ['', Validators.required],
    departureDateTime: ['', Validators.required],
    separationOrders: ['', Validators.required],
  })

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
