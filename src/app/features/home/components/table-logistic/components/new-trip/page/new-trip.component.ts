import { Component, ViewChild } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { StepTripComponent } from '../components/step-trip/step-trip.component';
import { StepVehicleComponent } from '../components/step-vehicle/step-vehicle.component';
import { StepDriverComponent } from '../components/step-driver/step-driver.component';


@Component({
  selector: 'app-new-trip',
  standalone: true,
  imports: [
    StepTripComponent,
    StepVehicleComponent,
    StepDriverComponent,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './new-trip.component.html',
  styleUrl: './new-trip.component.scss',
  providers: [
    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false },
    },
  ]
})
export class NewTripComponent {

  @ViewChild('stepper') private stepper!: MatStepper;

  constructor(private fb: FormBuilder) {}

  nextStep() {
    this.stepper.next();
  }

}
