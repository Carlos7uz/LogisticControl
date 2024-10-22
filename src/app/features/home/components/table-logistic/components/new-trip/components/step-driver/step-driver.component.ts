import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-step-driver',
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
  templateUrl: './step-driver.component.html',
  styleUrl: './step-driver.component.scss'
})
export class StepDriverComponent {
  constructor(private fb: FormBuilder){}

  driverFormGroup = this.fb.group({
    driverName: ['', Validators.required],
    contactNumber: ['', Validators.required]
  })
}
