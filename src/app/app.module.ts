import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SigngUpComponent } from './signg-up/signg-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    SigngUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
