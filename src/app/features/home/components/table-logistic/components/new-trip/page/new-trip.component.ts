import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { StepTripComponent } from '../components/step-trip/step-trip.component';
import { StepVehicleComponent } from '../components/step-vehicle/step-vehicle.component';
import { StepDriverComponent } from '../components/step-driver/step-driver.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TripService } from '../../../../../../../core/services/trip.service';
import { Driver, HorseVehicle, Route, Trip, VehicleType } from '../../../../../../../core/interfaces/trip.interface';
import { debounceTime, map, Observable, startWith, switchMap } from 'rxjs';
import { RouteService } from '../../../../../../../core/services/route.service';
import { DriverService } from '../../../../../../../core/services/driver.service';
import { HorseVehicleService } from '../../../../../../../core/services/horse-vehicle.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CreateTrip } from '../../../../../../../core/interfaces/createTrip.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { CUSTOM_DATE_FORMATS } from '../../../../../../../core/utils/date-format';
import { NgxMaskApplierService } from 'ngx-mask/lib/ngx-mask-applier.service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-new-trip',
  standalone: true,
  imports: [
    StepTripComponent,
    StepVehicleComponent,
    StepDriverComponent,
    CommonModule,
    MatStepperModule,
    MatIconModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    NgxMaskDirective
  ],
  templateUrl: './new-trip.component.html',
  styleUrl: './new-trip.component.scss',
  providers: [
    provideNgxMask(),
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class NewTripComponent implements OnInit {

  originalTripData: Trip | null = null;

  isEditMode = false;

  tripFormGroup: FormGroup;
  routeControl = new FormControl();
  driverControl = new FormControl();
  vehicleControl = new FormControl();
  tripUuid!: string;

  allRoutes: Route[] = [];
  allDrivers: Driver[] = [];
  allVehicles: HorseVehicle[] = [];

  filteredRoutes$!: Observable<Route[]>;
  filteredDrivers$!: Observable<Driver[]>;
  filteredVehicles$!: Observable<HorseVehicle[]>;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private routeService: RouteService,
    private driverService: DriverService,
    private vehicleService: HorseVehicleService,
    private router: Router, // Adicione Router para navegação
    private snackBar: MatSnackBar // Adicione MatSnackBar para exibir mensagens
  ) {
    this.tripFormGroup = this.fb.group({
      routeUuid: ['', Validators.required],
      departureDateTime: ['', Validators.required],
      horseVehicleUuid: ['', Validators.required],
      driverUuid: ['', Validators.required],
      arrangement: ['', Validators.required],
      contactNumber: ['', Validators.required],
      status: [{ value: 'PLANNED', disabled: !this.isEditMode }, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadAllData();

    this.activatedRoute.params.subscribe(params => {
      this.tripUuid = params['tripUuid'];
      if (this.tripUuid) {
        this.isEditMode = true;
        this.loadTripData(this.tripUuid);
        this.tripFormGroup.get('status')?.enable(); // Habilita o campo status
      } else {
        this.tripFormGroup.get('status')?.disable(); // Desabilita o campo status
      }
    });
  }

  private loadTripData(tripUuid: string) {
    this.tripService.getTripByUuid(tripUuid).subscribe(trip => {
      this.originalTripData = trip; // Armazena os dados originais
      this.tripFormGroup.patchValue({
        routeUuid: trip.route.uuid,
        departureDateTime: this.formatDateTime(trip.departureDateTime),
        horseVehicleUuid: trip.horseVehicle.uuid,
        driverUuid: trip.driver.uuid,
        arrangement: trip.arrangement,
        contactNumber: trip.contactNumber,
        status: trip.status
      });

      // Se você precisar preencher os campos de autocomplete, também pode fazer isso aqui
      this.routeControl.setValue(trip.route.nameRoute);
      this.driverControl.setValue(trip.driver.driverName);
      this.vehicleControl.setValue(trip.horseVehicle.licensePlate);
    });
  }

  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString('pt-BR');
    const formattedTime = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  }

  private loadAllData() {
    this.routeService.getAllRoutes().subscribe(routes => {
      this.allRoutes = routes;
      this.setupRouteFiltering();
    });

    this.driverService.getAllDriver().subscribe(drivers => {
      this.allDrivers = drivers;
      this.setupDriverFiltering();
    });

    this.vehicleService.getAllVehicle().subscribe(vehicles => {
      this.allVehicles = vehicles;
      this.setupVehicleFiltering();
    });
  }

  private setupRouteFiltering() {
    this.filteredRoutes$ = this.routeControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300), // Opcional: debounce para limitar requisições
      map(value => this.filterOptions(value, this.allRoutes, 'nameRoute'))
    );
  }

  private setupDriverFiltering() {
    this.filteredDrivers$ = this.driverControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(value => this.filterOptions(value, this.allDrivers, 'driverName'))
    );
  }

  private setupVehicleFiltering() {
    this.filteredVehicles$ = this.vehicleControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(value => this.filterOptions(value, this.allVehicles, 'licensePlate'))
    );
  }

  private filterOptions(value: string, options: any[], fieldName: string): any[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option[fieldName].toLowerCase().includes(filterValue));
  }

  selectRoute(route: Route) {
    this.tripFormGroup.patchValue({ routeUuid: route.uuid });
  }

  selectDriver(driver: Driver) {
    this.tripFormGroup.patchValue({ driverUuid: driver.uuid });
  }

  selectVehicle(vehicle: HorseVehicle) {
    this.tripFormGroup.patchValue({ horseVehicleUuid: vehicle.uuid });

    // Exibe a informação legível no controle
    this.vehicleControl.setValue(`${vehicle.model} (${vehicle.licensePlate})`);
  }

  onSubmit() {
    console.log('Submitting form'); // Adiciona um log para verificar se o método está sendo chamado
    console.log('isEditMode:', this.isEditMode); // Adiciona log para verificar o estado do isEditMode

    if (this.tripFormGroup.valid) { // Verifica se o formulário é válido
        if (this.isEditMode) {
            console.log('Updating trip'); // Log para verificar se está atualizando
            this.updateTrip();
        } else {
            console.log('Creating new trip'); // Log para verificar se está criando nova viagem
            this.createTrip();
        }
    } else {
        console.error('Form is invalid'); // Loga se o formulário não é válido
    }
  }

  private createTrip() {
    const postData = this.preparePostData();
    console.log('Dados a serem enviados para criação:', postData); // Loga os dados que serão enviados
    this.tripService.createTrip(postData).subscribe({
      next: response => {
        console.log('Viagem criada com sucesso:', response); // Loga a resposta do backend
        this.router.navigate(['/home']);
      },
      error: error => {
        console.error('Erro ao criar viagem', error);
      }
    });
  }

  private updateTrip() {
    const putData = this.preparePutData();
    console.log('Dados a serem enviados para atualização:', putData); // Loga os dados que serão enviados
    this.tripService.updateTrip(this.tripUuid, putData).subscribe({
      next: response => {
        console.log('Viagem atualizada com sucesso:', response); // Loga a resposta do backend
        this.router.navigate(['/home']);
      },
      error: error => {
        console.error('Erro ao atualizar viagem', error);
      }
    });
  }

  private preparePostData() {
    const departureDateTime = this.tripFormGroup.get('departureDateTime')?.value;

    return {
      routeUuid: this.tripFormGroup.get('routeUuid')?.value,
      departureDateTime: this.formatDate(departureDateTime),
      horseVehicleUuid: this.tripFormGroup.get('horseVehicleUuid')?.value,
      driverUuid: this.tripFormGroup.get('driverUuid')?.value,
      arrangement: this.tripFormGroup.get('arrangement')?.value,
      contactNumber: this.tripFormGroup.get('contactNumber')?.value
    };
  }

  private preparePutData() {
    const departureDateTime = this.tripFormGroup.get('departureDateTime')?.value;

    return {
      routeUuid: this.tripFormGroup.get('routeUuid')?.value,
      departureDateTime: this.formatDate(departureDateTime),
      horseVehicleUuid: this.tripFormGroup.get('horseVehicleUuid')?.value,
      driverUuid: this.tripFormGroup.get('driverUuid')?.value,
      arrangement: this.tripFormGroup.get('arrangement')?.value,
      contactNumber: this.tripFormGroup.get('contactNumber')?.value,
      status: this.tripFormGroup.get('status')?.value
    };
  }

  private formatDate(dateTime: string): string {
    // Adiciona delimitadores, caso estejam ausentes
    if (dateTime.length === 12) {
        dateTime = `${dateTime.slice(0, 2)}/${dateTime.slice(2, 4)}/${dateTime.slice(4, 8)} ${dateTime.slice(8, 10)}:${dateTime.slice(10, 12)}`;
    }

    // Valida a presença de espaço entre data e hora
    if (!dateTime.includes(' ')) {
        console.warn('Data e hora inválidas:', dateTime);
        return '';
    }

    const [datePart, timePart] = dateTime.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);

    // Verifica se os valores estão completos e válidos
    if (!day || !month || !year || hours === undefined || minutes === undefined) {
        console.warn('Data ou hora incompleta:', dateTime);
        return '';
    }

    // Cria o objeto Date no formato UTC e obtém a string ISO
    const date = new Date(Date.UTC(year, month - 1, day, hours, minutes));
    if (isNaN(date.getTime())) {
        console.warn('Data inválida após criar objeto Date:', date);
        return '';
    }

    // Converte para o formato ISO desejado
    return date.toISOString().replace(/\.000Z$/, '.0Z');
  }
}

