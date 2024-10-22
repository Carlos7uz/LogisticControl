import { Component, ViewChild } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { StepSaidaComponent } from '../components/step-saida/step-saida.component';
import { StepChegadaComponent } from '../components/step-chegada/step-chegada.component';
import { StepCaminhaoComponent } from '../components/step-caminhao/step-caminhao.component';
import { StepMotoristaComponent } from '../components/step-motorista/step-motorista.component';

@Component({
  selector: 'app-form-new-logistic',
  standalone: true,
  imports: [
    StepSaidaComponent,
    StepChegadaComponent,
    StepCaminhaoComponent,
    StepMotoristaComponent,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './form-new-logistic.component.html',
  styleUrl: './form-new-logistic.component.scss',
  providers: [
    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false },
    },
  ]
})
export class FormNewLogisticComponent {

  @ViewChild('stepper') private stepper!: MatStepper;

  constructor(private fb: FormBuilder) {}

  nextStep() {
    this.stepper.next();
  }

  /*

  saidaFormGroup = this.fb.group({
    route: ['', Validators.required],
    departureDate: ['', Validators.required],
    departureTime: ['', Validators.required],
    seq: ['', Validators.required],
    restaurant: ['', Validators.required],
    preTrips: ['', Validators.required],
    separationOrders: ['', Validators.required]
  });

  chegadaFormGroup = this.fb.group({
    deliveryDate: ['', Validators.required],
    logisticsDeliveryDate: ['', Validators.required],
    diff: ['', Validators.required],
    period: ['', Validators.required],
  });

  caminhaoFormGroup = this.fb.group({
    unloading: ['', Validators.required],
    arrangement: ['', Validators.required],
    horseSign: [''],
    trailerPlate: ['', Validators.required],
  });

  motoristaFormGroup = this.fb.group({
    driverName: ['', Validators.required],
    driverNumber: ['', Validators.required],
  });

  */


}
