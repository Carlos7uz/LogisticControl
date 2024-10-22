import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step-chegada',
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
  templateUrl: './step-chegada.component.html',
  styleUrl: './step-chegada.component.scss'
})
export class StepChegadaComponent {
  constructor(private fb: FormBuilder) {}

  chegadaFormGroup = this.fb.group({
    deliveryDate: ['', Validators.required],
    logisticsDeliveryDate: ['', Validators.required],
    diff: ['', Validators.required],
    period: ['', Validators.required],
  });

}
