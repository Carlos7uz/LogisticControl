import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { CustomDateAdapter } from './custom-date-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-testes',
  standalone: true,
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMATS,
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR' // Definindo o locale para português
    }
  ],
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.scss']
})

export class TestesComponent {
  selectedDate!: string
}
