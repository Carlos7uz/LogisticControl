import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxMaskDirective } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CUSTOM_DATE_FORMATS } from '../../../../../core/utils/date-format'
import { Trip } from '../../../../../core/interfaces/trip.interface';
import { TripService } from '../../../../../core/services/trip.service';
import { DeliveryService } from '../../../../../core/services/delivery.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Delivery } from '../../../../../core/interfaces/delivery.interface';

@Component({
  selector: 'app-table-logistic',
  standalone: true,
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskDirective,
    ScrollingModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './table-logistic.component.html',
  styleUrl: './table-logistic.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TableLogisticComponent implements OnInit {
  //real
  trips: Trip[] = [];
  expandedElement: Trip | null = null;
  columnsToDisplay = [
    'route',
    'departureDateTime',
    'separationOrders',
    'horseVehicle',
    'vehicleType',
    'arrangement',
    'driver',
    'contactNumber',
    'status'
  ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  dataSource = new MatTableDataSource<Trip>([]);

  columnHeaders: { [key: string]: string } = {
    route: 'Rota',
    departureDateTime: 'Data e Hora de Partida',
    separationOrders: 'Ordens de separação',
    horseVehicle: 'Veículo',
    vehicleType: 'Tipo Veículo',
    arrangement: 'Arranjo',
    driver: 'Motorista',
    contactNumber: 'Número de Contato',
    status: 'Status'
  };

  //SnackBar properties
  showSnackBar = false;
  mensagemSnackBar = '';
  iconeSnackBar = '';
  corSnackBar = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  filtersForm!: FormGroup;

  //Data filtering
  allData: Trip[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private tripService: TripService,
    private deliveryService: DeliveryService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadTrips();
    this.initializeForm();
    // this.setupFilters();
  }

  loadTrips(): void {
    this.tripService.getAllTrips().subscribe(trips => {
      this.trips = trips;
      this.dataSource.data = trips;
    });
  }

  private initializeForm(): void {
    this.filtersForm = this.fb.group({
      restaurantFilter: [''],
      startDate: [null],
      endDate: [null]
    });
  }

  toggleExpandedElement(element: Trip): void {
    if (this.expandedElement === element) {
      this.expandedElement = null; // Fecha se já estiver expandido
    } else {
      this.expandedElement = element; // Expande a linha
      this.loadDeliveries(element.uuid); // Carrega as entregas relacionadas
    }
  }

  loadDeliveries(tripUuid: string): void {
    this.tripService.getDeliveriesByTrip(tripUuid).subscribe(deliveries => {
      const trip = this.trips.find(t => t.uuid === tripUuid);
      if (trip) {
        trip.deliveries = deliveries; // Adiciona as entregas à viagem
      }
    });
  }

  navigateToNewDelivery(tripUuid: string): void {
    this.router.navigate(['new-delivery'], { queryParams: { tripUuid } });
  }


  addNewDelivery(tripUuid: string): void {
    this.router.navigate(['/home/new-delivery', tripUuid]); // Navega para nova entrega
  }


  editDelivery(tripUuid: string, deliveryUuid: string): void {
    console.log('Navigating to edit with:', tripUuid, deliveryUuid); // Verifique se os valores estão corretos
    this.router.navigate(['/home/edit-delivery', tripUuid, deliveryUuid]);
  }

  confirmDelete(deliveryUuid: string): void {
    const snackBarRef = this.snackBar.open('Tem certeza que deseja excluir esta entrega?', 'Excluir', {
      duration: 5000
    });

    snackBarRef.onAction().subscribe(() => {
      this.deliveryService.deleteDelivery(deliveryUuid).subscribe({
        next: () => {
          // Atualize a lista removendo a entrega excluída
          this.dataSource.data = this.dataSource.data.filter((trip: Trip) => {
            return !trip.deliveries?.some(delivery => delivery.uuid === deliveryUuid);
          });

          this.snackBar.open('Entrega excluída com sucesso.', 'Fechar', { duration: 3000 });
        },
        error: () => {
          // Notifique o usuário sobre a falha
          this.snackBar.open('Falha ao excluir a entrega. Tente novamente.', 'Fechar', { duration: 3000 });
        }
      });
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.cdr.detectChanges();
  }

  // private setupFilters(): void {
  //   this.filtersForm.valueChanges.pipe(debounceTime(500)).subscribe(() => this.applyFilters());
  // }

  // applyFilters(): void {
  //   const { restaurantFilter, startDate, endDate } = this.filtersForm.value;

  //   this.dataSource.data = this.allData.filter(item => {
  //       const matchesRestaurant = restaurantFilter
  //           ? item.restaurante.toLowerCase().includes(restaurantFilter.trim().toLowerCase())
  //           : true;

  //       const itemDataSaida = this.convertToDate(item.dataSaida);
  //       const itemDataEntrega = this.convertToDate(item.dataEntrega);

  //       const matchesStartDate = startDate
  //           ? itemDataSaida && itemDataSaida.toDateString() === new Date(startDate).toDateString()
  //           : true;

  //       const matchesEndDate = endDate
  //           ? itemDataEntrega && itemDataEntrega.toDateString() === new Date(endDate).toDateString()
  //           : true;

  //       return matchesRestaurant && matchesStartDate && matchesEndDate;
  //   });
  // }

  // clearFilters(): void {
  //   this.filtersForm.reset();
  //   this.applyFilters();
  // }

  openSnackBar(tipo: string): void {
    this.mensagemSnackBar = tipo === 'sucesso' ? 'Atualizado com sucesso' : 'Falha ao atualizar';
    this.iconeSnackBar = tipo === 'sucesso' ? 'verified' : 'report';
    this.corSnackBar = tipo === 'sucesso' ? 'accent' : 'warn';

    this.showSnackBar = true;
    this.cdr.detectChanges();
    setTimeout(() => {
      this.showSnackBar = false;
    }, 4000);
  }

  formatColumnName(column: string): string {
    return column
      .replace(/([A-Z])/g, ' $1') // Adiciona espaço antes das letras maiúsculas
      .replace(/_/g, ' ') // Substitui sublinhados por espaços
      .toLowerCase() // Converte para minúsculas
      .replace(/\b\w/g, char => char.toUpperCase()); // Capitaliza a primeira letra de cada palavra
  }

  formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toLocaleString('pt-BR').replace(',', '');
  }

  formatDate(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toLocaleDateString('pt-BR');
  }

  formatContactNumber(contactNumber: string): string {
    if (!contactNumber) return '';
    return contactNumber.replace(/^(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');
  }

  formatStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      'COMPLETED': 'CONCLUÍDO',
      'PLANNED': 'PLANEJADO',
      'IN_PROGRESS': 'EM ANDAMENTO',
      'CANCELED': 'CANCELADO'
    };

    return statusMap[status] || status; // Retorna o status formatado ou o próprio status se não encontrado
  }


}

