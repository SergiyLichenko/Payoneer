import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IPayment } from '../shared/payment.model';
import { Location } from '@angular/common';

@Component({
    templateUrl: './payment-edit.component.html',
    styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent {

    payment: IPayment;

    constructor(private dialogRef: MatDialogRef<PaymentEditComponent>,
        private location: Location,
        @Inject(MAT_DIALOG_DATA) private data: IPayment) {
        this.payment = data;
        location.replaceState(`payments/edit/${data.id}`);
    }

    onClose() {
        this.dialogRef.close();
    }

    onOk(obj: any) {
        this.payment.status = obj.status;
        this.payment.reason = obj.reason;
        this.dialogRef.close(this.payment);
    }
}