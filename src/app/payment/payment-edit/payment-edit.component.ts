import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IPayment } from '../shared/payment.model';

@Component({
    templateUrl: './payment-edit.component.html',
    styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent {

    payment: IPayment;

    constructor(private dialogRef: MatDialogRef<PaymentEditComponent>,
        @Inject(MAT_DIALOG_DATA) private data: IPayment) {
        this.payment = data;
    }

    onClose(){
        this.dialogRef.close();
    }

    onOk(obj: any){
        console.log(obj);
    }
}