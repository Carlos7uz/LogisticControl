import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-step-caminhao',
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
  templateUrl: './step-caminhao.component.html',
  styleUrl: './step-caminhao.component.scss'
})
export class StepCaminhaoComponent {
  constructor(private fb: FormBuilder){}

  caminhaoFormGroup = this.fb.group({
    unloading: ['', Validators.required],
    arrangement: ['', Validators.required],
    horseSign: [''],
    trailerPlate: ['', Validators.required],
  });
}
