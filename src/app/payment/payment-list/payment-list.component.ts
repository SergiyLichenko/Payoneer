import { Component, OnInit } from '@angular/core';
import { IPayment } from '../shared/payment.model';
import { PaymentService } from '../payment.service';

@Component({
    templateUrl: './payment-list.component.html',
    styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

    filteredPayments: IPayment[];
    payments: IPayment[];

    constructor(private paymentService: PaymentService) {
    }

    ngOnInit(): void {
        this.paymentService.getList().subscribe(x => {
            this.payments = x;
            this.filteredPayments = x;
        });
    }
}