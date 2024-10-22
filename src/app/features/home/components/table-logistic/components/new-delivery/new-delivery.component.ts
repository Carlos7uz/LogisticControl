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
import { map, Observable, startWith, switchMap } from 'rxjs';
import { Branch, UnloadingType } from '../../../../../../core/interfaces/delivery.interface';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatOptionModule } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { CUSTOM_DATE_FORMATS } from '../../../../../../core/utils/date-format';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


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
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
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

  tripUuid!: string;
  tripInfo: any; // Armazena as informações básicas da Trip
  deliveryUuid!: string | null;
  deliveryForm!: FormGroup;
  unloadingTypes$!: Observable<UnloadingType[]>; // Observable para unloading types
  branches$!: Observable<Branch[]>; // Observable para branches
  filteredBranches$!: Observable<Branch[]>; // Observable para branches filtradas
  branchControl = new FormControl(''); // Controle para o campo de Filial

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
    this.route.params.subscribe(params => {
      this.tripUuid = params['tripUuid']; //'id' nome na rota
      this.deliveryUuid = params['deliveryUuid']; // Obtenha o uuid da entrega

      this.initializeForm();

      if (this.tripUuid) {
        this.loadTripInfo(this.tripUuid);
      }

      if (this.deliveryUuid) {
        this.loadDeliveryInfo(this.deliveryUuid);
      }
    });

    this.branches$ = this.branchService.getAllBranches(); // Obtém as branches
    this.unloadingTypes$ = this.unloadingTypeService.getAllUnloadingTypes(); // Obtém os unloading types

    this.filteredBranches$ = this.branchControl.valueChanges.pipe(
      startWith(''), // Para inicializar com uma string vazia
      switchMap(value => this._filterBranches(value || '')) // Usando switchMap para achatar o Observable
    );
  }

  // loadTripInfo(tripUuid: string): void {
  //   this.tripService.getTripByUuid(tripUuid).subscribe(trip => {
  //     if (trip) {
  //       this.tripInfo = trip; // Se a viagem for encontrada, armazena as informações
  //     }

  //   });
  // }

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
    this.deliveryService.getDeliveryByUuid(deliveryUuid).subscribe(delivery => {
      // Preenche o formulário com os dados da entrega
      if (delivery) {
        this.deliveryForm.patchValue({
          order: delivery.order,
          deliveryDate: delivery.deliveryDate,
          logisticsDeliveryDate: delivery.logisticsDeliveryDate,
          deliveryTime: delivery.deliveryTime,
          branchUuid: delivery.branch.uuid,
          unloadingTypeUuid: delivery.unloadingType,
        });

        // Formata a string para exibição no input de branch
        this.branchControl.setValue(`${delivery.branch.branchName} (${delivery.branch.branchCode})`);
      }
    }, error => {
      console.error('Error loading delivery info:', error);
    });
  }

  private initializeForm(): void {
    this.deliveryForm = this.fb.group({
      order: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      logisticsDeliveryDate: ['', Validators.required],
      deliveryTime: ['', Validators.required],
      tripUuid: [this.tripUuid, Validators.required],
      branchUuid: ['', Validators.required],
      unloadingTypeUuid: ['', Validators.required],
    });
  }

  private _filterBranches(value: string): Observable<Branch[]> {
    const filterValue = value.toLowerCase();

    return this.branches$.pipe(
      map(branches => branches.filter(branch => branch.branchName.toLowerCase().includes(filterValue)))
    );
  }
}
