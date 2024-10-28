import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { RouteService } from '../../../../../../../../core/services/route.service';
import { Route } from '../../../../../../../../core/interfaces/trip.interface';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-step-trip',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
  templateUrl: './step-trip.component.html',
  styleUrl: './step-trip.component.scss'
})
export class StepTripComponent implements OnInit{
  tripFormGroup: FormGroup;
  routes$!: Observable<Route[]>; // Observable para as rotas
  filteredRoutes$!: Observable<Route[]>; // Observable para rotas filtradas
  routeControl = new FormControl(''); // Controle para o campo de rota

  constructor(private fb: FormBuilder, private router: Router, private routeService: RouteService) {
    this.tripFormGroup = this.fb.nonNullable.group({
      status: ['', Validators.required],
      nameRoute: ['', Validators.required],
      departureDateTime: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    this.routes$ = this.routeService.getAllRoutes(); // Obtém todas as rotas
    this.filteredRoutes$ = this.routeControl.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filterRoutes(value || ''))
    );

    this.filteredRoutes$.subscribe(filtered => {
      console.log("Rotas filtradas:", filtered);
    });

    // this.tripFormGroup.controls.departureDateTime.valueChanges.subscribe(motorista => {
    //   this.tripFormGroup.controls.number.patchValue(motorista.contactPhone);
    // })


    // Atualiza o UUID da rota selecionada no form
    this.routeControl.valueChanges.subscribe(value => {
      this.routes$.pipe(
        map(routes => routes.find(route => route.nameRoute === value))
      ).subscribe(selectedRoute => {
        if (selectedRoute) {
          this.tripFormGroup.patchValue({ nameRoute: selectedRoute.uuid });
        }
      });
    });
  }

  onRouteBlur(): void {
    const selectedBranch = this.filteredRoutes$; // Aqui você pode ter uma lógica para determinar se a filial está entre as opções filtradas
    if (!selectedBranch) {
      this.routeControl.setValue(''); // Limpa se não houver uma seleção válida
      this.tripFormGroup.patchValue({ branchUuid: '' }); // Limpa o ID também
    }
  }


  private _filterRoutes(value: string): Observable<Route[]> {
    const filterValue = value.toLowerCase();
    console.log("Valor de entrada para filtrar:", filterValue); // Verifica o valor a ser filtrado

    return this.routes$.pipe(
      map(routes => {
        console.log("Todas as rotas antes do filtro:", routes); // Verifica todas as rotas disponíveis

        // Retorna o filtro com o valor `nameRoute` exibido para comparar com `filterValue`
        const filteredRoutes = routes.filter(route => {
          const routeName = route.nameRoute?.toLowerCase() || '';
          console.log(`Comparando "${filterValue}" com "${routeName}"`);
          return routeName.includes(filterValue);
        });

        console.log("Rotas filtradas:", filteredRoutes); // Verifica as rotas após o filtro
        return filteredRoutes;
      })
    );
  }

  selectRoute(route: Route): void {
    this.routeControl.setValue(route.nameRoute); // Define o valor do campo de entrada como o nome da rota
    this.tripFormGroup.patchValue({
      nameRoute: route.uuid // Supondo que você queira armazenar o UUID da rota
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
