import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material.module';

import { AppComponent } from './app.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentEditComponent } from './payment/payment-edit/payment-edit.component';
import { Error404Component } from './error/404.component';

import { PaymentService } from './payment/payment.service';
import { PaymentResovlerService } from './payment/payment-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    PaymentListComponent,
    PaymentEditComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  entryComponents: [PaymentEditComponent],
  providers: [
    PaymentService,
    PaymentResovlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
