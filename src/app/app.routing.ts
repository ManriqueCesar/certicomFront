import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', children: [], component: AppComponent},
  { path: 'ventas', pathMatch: 'full', component: VentasComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: 'ventas' },
];

export const appRoutingModule = RouterModule.forRoot(routes);