import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AuthGuard } from './guards/auth.guards';
import { CartComponent } from './pages/cart/cart/cart.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'history', component: HistoryComponent
      }
    ]
  },
  { path: 'home/producto/:id', canActivate: [AuthGuard], component: ProductComponent },
  { path: 'principal/home/cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'principal/home/checkout', canActivate: [AuthGuard], component: CheckoutComponent },
  { path: 'principal/profile/update', canActivate: [AuthGuard], component: UpdateprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
