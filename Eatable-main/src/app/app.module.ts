
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
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
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HistoryComponent,
    ProfileComponent,
    LoginComponent,
    PrincipalComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    RegisterComponent,
    ProductoCardComponent,
    UpdateprofileComponent,
    LoadingComponent
    ,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
