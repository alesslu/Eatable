
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { PrincipalComponent } from './components/principal/principal.component';
import { httpInterceptorProviders } from './interceptors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart/cart.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { UpdateprofileComponent } from './pages/updateprofile/updateprofile.component';
import { CommonModule } from '@angular/common';
=======
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './interceptors';
import { CartComponent } from './pages/cart/cart/cart.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout.component';
import { ProductComponent } from './pages/product/product.component';


>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HistoryComponent,
    ProfileComponent,
    LoginComponent,
    PrincipalComponent,
<<<<<<< HEAD
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    RegisterComponent,
    ProductoCardComponent,
    UpdateprofileComponent,
=======
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
  ],
  imports: [
    CommonModule,
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
=======
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
