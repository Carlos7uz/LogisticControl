import { UnloadingTypeService } from './../../../../../../core/services/unloading-type.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TripService } from '../../../../../../core/services/trip.service';
import { CommonModule } from '@angular/common';
import { DeliveryService } from '../../../../../../core/services/delivery.service';
import { BranchService } from '../../../../../../core/services/branch.service';
import { debounceTime, map, Observable, startWith, switchMap } from 'rxjs';
import { Branch, Delivery, UnloadingType } from '../../../../../../core/interfaces/delivery.interface';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { CUSTOM_DATE_FORMATS } from '../../../../../../core/utils/date-format';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CreateDelivery } from '../../../../../../core/interfaces/createDelivery.interface';


@Component({
  selector: 'app-new-delivery',
  standalone: true,
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule
  ],
  templateUrl: './new-delivery.component.html',
  styleUrl: './new-delivery.component.scss'
})
export class NewDeliveryComponent implements OnInit {

  isEditing: boolean = false;

  tripUuid!: string;
  tripInfo: any; // Armazena as informações básicas da Trip
  deliveryUuid!: string | null;
  deliveryForm!: FormGroup;
  unloadingTypes$!: Observable<UnloadingType[]>; // Observable para unloading types
  branches$!: Observable<Branch[]>; // Observable para branches
  filteredBranches$!: Observable<Branch[]>; // Observable para branches filtradas
  branchControl = new FormControl(); // Controle para o campo de Filial

  allBranches: Branch[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tripService: TripService,
    private deliveryService: DeliveryService,
    private branchService: BranchService,
    private unloadingTypeService: UnloadingTypeService
  ){}

  ngOnInit(): void {
    this.initializeForm();

    this.route.params.subscribe(params => {
      this.tripUuid = params['tripUuid']; //'id' nome na rota
      this.deliveryUuid = this.route.snapshot.paramMap.get('deliveryUuid'); // Obtenha o uuid da entrega

      if (this.tripUuid) {
        this.loadTripInfo(this.tripUuid);
      }

      if (this.deliveryUuid) {
        this.loadDeliveryInfo(this.deliveryUuid);
        this.isEditing = true;
        this.deliveryForm.get('status')?.enable();
      }
    });

    this.loadDataBranches();

    // this.branches$ = this.branchService.getAllBranches(); // Obtém as branches
    this.unloadingTypes$ = this.unloadingTypeService.getAllUnloadingTypes(); // Obtém os unloading types

    // this.filteredBranches$ = this.branchControl.valueChanges.pipe(
    //   startWith(''), // Para inicializar com uma string vazia
    //   switchMap(value => this._filterBranches(value || '')) // Usando switchMap para achatar o Observable
    // );
  }

  loadTripInfo(tripUuid: string): void {
    this.tripService.getTripByUuid(tripUuid).subscribe(trip => {
      if (trip) {
        this.tripInfo = trip; // Se a viagem for encontrada, armazena as informações
      } else {
        this.router.navigate(['/404']); // Redireciona para a página 404 se a viagem não for encontrada
      }
    }, error => {
      this.router.navigate(['/404']); // Redireciona em caso de erro na requisição
    });
  }

  loadDeliveryInfo(deliveryUuid: string): void {
    this.deliveryService.getDeliveryByUuid(deliveryUuid).subscribe((delivery: Delivery) => {
      if (delivery) {
        this.deliveryForm.patchValue(
          // delivery
          {
            order: delivery.order,
            deliveryDate: delivery.deliveryDate,
            logisticsDeliveryDate: delivery.logisticsDeliveryDate,
            deliveryTime: delivery.deliveryTime,
            branchUuid: delivery.branch.uuid,
            unloadingTypeUuid: delivery.unloadingType?.uuid,
            status: delivery.status
          }
        );

        // Formata a string para exibição no input de branch
        this.branchControl.setValue(`${delivery.branch.branchName} (${delivery.branch.branchCode})`);
      }
    }, error => {
      console.error('Error loading delivery info:', error);
    });
  }

  save() {
    if (this.deliveryForm.valid) {
      const formData = JSON.stringify(this.deliveryForm.value);
      console.log("Dados do formulário:", formData);
    } else {
      console.warn("Formulário inválido. Verifique os campos obrigatórios.");
    }
  }

  onSubmit() {
    console.log('Submitting form');

    if (this.deliveryForm.valid) {
        if (this.deliveryUuid) {
            console.log('Updating delivery');
            this.updateDelivery(this.deliveryUuid);
        } else {
            console.log('Creating new delivery');
            this.createDelivery();
        }
    } else {
        console.error('Form is invalid');
    }
}

private createDelivery() {
    const deliveryData = this.preparePostData(); // Prepara os dados a serem enviados
    console.log('Dados a serem enviados para criação:', deliveryData);
    this.deliveryService.createDelivery(deliveryData).subscribe({
        next: newDelivery => {
            console.log('Delivery created successfully', newDelivery);
            this.router.navigate(['/home']);
        },
        error: error => {
            console.error('Error creating delivery:', error);
        }
    });
}

private updateDelivery(deliveryUuid: string) {
    const deliveryData = this.preparePutData(); // Prepara os dados a serem enviados
    console.log('Dados a serem enviados para atualização:', deliveryData);
    this.deliveryService.updateDelivery(deliveryUuid, deliveryData).subscribe({
        next: updatedDelivery => {
            console.log('Delivery updated successfully', updatedDelivery);
            this.router.navigate(['/home']);
        },
        error: error => {
            console.error('Error updating delivery:', error);
        }
    });
  }

  private preparePostData() {
    const deliveryDate = this.deliveryForm.get('deliveryDate')?.value;
    const logisticsDeliveryDate = this.deliveryForm.get('logisticsDeliveryDate')?.value;
    const deliveryTime = this.deliveryForm.get('deliveryTime')?.value;

    return {
        order: this.deliveryForm.get('order')?.value,
        deliveryDate: this.formatDate(deliveryDate),
        logisticsDeliveryDate: this.formatDate(logisticsDeliveryDate),
        deliveryTime: this.formatDeliveryTime(deliveryTime),
        tripUuid: this.tripUuid,
        branchUuid: this.deliveryForm.get('branchUuid')?.value,
        unloadingTypeUuid: this.deliveryForm.get('unloadingTypeUuid')?.value
    };
  }

  private preparePutData() {
    const deliveryDate = this.deliveryForm.get('deliveryDate')?.value;
    const logisticsDeliveryDate = this.deliveryForm.get('logisticsDeliveryDate')?.value;
    const deliveryTime = this.deliveryForm.get('deliveryTime')?.value;

    return {
        branchUuid: this.deliveryForm.get('branchUuid')?.value,
        deliveryDate: this.formatDate(deliveryDate),
        logisticsDeliveryDate: this.formatDate(logisticsDeliveryDate),
        deliveryTime: this.formatDeliveryTime(deliveryTime),
        unloadingTypeUuid: this.deliveryForm.get('unloadingTypeUuid')?.value,
        status: this.deliveryForm.get('status')?.value
    };
  }

  voltar() {
    this.router.navigate(['/home']);
  }

  private formatDate(date: Date | string): string {
    if (!date) return ''; // Retorna uma string vazia se a data não estiver definida
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private formatDeliveryTime(time: string): string {
    if (!time) return '00:00:00'; // Retorna um valor padrão se o tempo não estiver definido
    return `${time}:00`; // Adiciona os segundos
}

  private loadDataBranches() {
    this.branchService.getAllBranches().subscribe(branches => {
      this.allBranches = branches;
      this.setupBranchFiltering();
    });
  }

  selectBranch(branch: Branch) {
    this.deliveryForm.patchValue({branchUuid: branch.uuid})
  }

  private setupBranchFiltering() {
    this.filteredBranches$ = this.branchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(value => this.filterOptions(value, this.allBranches, 'branchName')),
    )
  }

  private filterOptions(value: string, options: any[], fieldName: string): any[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option[fieldName].toLowerCase().includes(filterValue));
  }

  private initializeForm() {
    this.deliveryForm = this.fb.group({
      order: [null, Validators.required],
      deliveryDate: [null, Validators.required],
      logisticsDeliveryDate: [null, Validators.required],
      deliveryTime: [null, Validators.required],
      branchUuid: [null, Validators.required],
      unloadingTypeUuid: [null, Validators.required],
      status: [{ value: 'PENDING', disabled: !this.isEditing }, Validators.required],
    });
  }

}
