import { Component, OnInit } from '@angular/core';
import { IPayment } from '../shared/payment.model';
import { PaymentService } from '../payment.service';
import { MatDialog } from '@angular/material';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';

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
        private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.paymentService.getList().subscribe(x => {
            this.payments = x;
            this.filteredPayments = x;
        });
    }

    onStatusChangeClick(payment: IPayment) {
        const dialogRef = this.dialog.open(PaymentEditComponent, {
            data: payment
        });

        dialogRef.afterClosed().subscribe(x => {
            if(!x) return;
            
            payment.status = x.status;
            payment.reason = x.reason;
        })
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