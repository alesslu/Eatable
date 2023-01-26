import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'principal', pathMatch: 'full'
  },
  {
    path: 'login',component: LoginComponent
  },
  {
    path: 'principal', component: PrincipalComponent,
    children: [
      { 
        path: 'home', component: HomeComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'history', component: HistoryComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
