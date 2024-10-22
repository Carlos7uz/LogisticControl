import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step-motorista',
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
  templateUrl: './step-motorista.component.html',
  styleUrl: './step-motorista.component.scss'
})
export class StepMotoristaComponent {
  constructor(private fb: FormBuilder){}

  motoristaFormGroup = this.fb.group({
    driverName: ['', Validators.required],
    driverNumber: ['', Validators.required],
  });

}
