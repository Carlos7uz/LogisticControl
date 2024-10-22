import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step-vehicle',
  standalone: true,
  imports: [
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './step-vehicle.component.html',
  styleUrl: './step-vehicle.component.scss'
})
export class StepVehicleComponent {
  constructor(private fb: FormBuilder){}

  vehicleFormGroup = this.fb.group({
    model: ['', Validators.required],
    licensePlate: ['', Validators.required],
    vehicleTypeName: ['', Validators.required],
    arrangement: ['', Validators.required],
  })
}
