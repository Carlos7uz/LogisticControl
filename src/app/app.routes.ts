
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/page/home.component').then(c => c.HomeComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/components/table-logistic/page/table-logistic.component').then(c => c.TableLogisticComponent)
      },
      {
        path: 'new-trip',
        loadComponent: () => import('./features/home/components/table-logistic/components/new-trip/page/new-trip.component').then(c => c.NewTripComponent)
      },
      {
        path: 'new-delivery/:tripUuid',
        loadComponent: () => import('./features/home/components/table-logistic/components/new-delivery/new-delivery.component').then(c => c.NewDeliveryComponent)
      },
      {
        path: 'edit-delivery/:tripUuid/:deliveryUuid',
        loadComponent: () => import('./features/home/components/table-logistic/components/new-delivery/new-delivery.component').then(c => c.NewDeliveryComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/home/components/profile/profile.component').then(c => c.ProfileComponent)
      }
    ]
  },
  {
    path: 'teste',
    loadComponent: () => import('./features/testes/testes.component').then(c => c.TestesComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./shared/components/notFound/notFound.component').then(c => c.NotFoundComponent)
  },
  {
    path: '**',
     redirectTo: '/404'
  },
];
