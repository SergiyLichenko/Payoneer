import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error/404.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/payments', pathMatch: 'full' },
    {
        path: 'payments',
        children: [
            { path: '', component: PaymentListComponent },
            //{ path: 'payment/:paymentId', component: PaymentEditComponent }
        ]
    },
    { path: '**', component: Error404Component }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}