import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IPayment } from '../shared/payment.model';
import { PaymentService } from '../payment.service';
import { MatDialog } from '@angular/material';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: './payment-list.component.html',
    styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {


    displayedColumns = ['paymentDate', 'statusDescription', 'amount', 'reason']
    filteredPayments: IPayment[];
    payments: IPayment[];
    hiddenStatuses = [];

    constructor(private paymentService: PaymentService,
        private location: Location,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.paymentService.getList().subscribe(x => {
            this.payments = x;
            this.filteredPayments = x;
        });

        setTimeout(() => {
            this.activatedRoute.data.subscribe(x => {
                const payment = x['payment'];
                if(!payment) return;
                
                this.onStatusChangeClick(payment);
            });
        }, 0);
    }

    onStatusChangeClick(payment: IPayment) {
        const dialogRef = this.dialog.open(PaymentEditComponent, { data: payment });
        dialogRef.afterClosed().subscribe((x: IPayment) => {
            this.location.replaceState(`payments`);
            if (!x) return;

            this.paymentService.update(x);
            Object.assign(payment, x);
        });
    }

    onStatusChange(status: number) {
        const index = this.hiddenStatuses.indexOf(status);

        if (index === -1)
            this.hiddenStatuses.push(status);
        else
            this.hiddenStatuses.splice(index, 1);

        this.onFilterPayments();
    }

    private onFilterPayments() {
        if (this.hiddenStatuses.length === 0)
            this.filteredPayments = this.payments;
        else
            this.filteredPayments = this.payments.filter(
                x => this.hiddenStatuses.includes(x.status));
    }
}