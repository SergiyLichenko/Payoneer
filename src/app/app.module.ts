import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { Error404Component } from './error/404.component';

import { PaymentService } from './payment/payment.service';


@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
