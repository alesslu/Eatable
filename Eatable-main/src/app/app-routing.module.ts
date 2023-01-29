import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { DescripcionPlatoComponent } from './pages/descripcion-plato/descripcion-plato.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'profile',component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'plato/:id', component: DescripcionPlatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
