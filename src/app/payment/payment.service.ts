import { Injectable } from '@angular/core';
import { IPayment } from './shared/payment.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PaymentService {

    private items: IPayment[] = [
        {
            id: 832321,
            accountHolderId: "15651",
            accountHolderName: "Alex Dumsky",
            paymentDate: new Date("2015-01-23T18:25:43.511Z"),
            amount: 445.12,
            currency: "EUR",
            status: 0,
            statusDescription: "Pending",
            reason: null
        },
        {
            id: 806532,
            accountHolderId: "46556",
            accountHolderName: "Dudi Elias",
            paymentDate: new Date("2015-02-10T18:25:43.511Z"),
            amount: 4511.12,
            currency: "EUR",
            status: 0,
            statusDescription: "Pending",
            reason: null
        },
        {
            id: 7845431,
            accountHolderId: "48481",
            accountHolderName: "Niv Cohen",
            paymentDate: new Date("2015-04-01T18:25:43.511Z"),
            amount: 10.99,
            currency: "USD",
            status: 1,
            statusDescription: "Approved",
            reason: "Good Person"
        },
        {
            id: 545341,
            accountHolderId: "32131",
            accountHolderName: "Alex Dumsky",
            paymentDate: new Date("2016-02-21T18:25:43.511Z"),
            amount: 9952.48,
            currency: "EUR",
            status: 99,
            statusDescription: "Rejected",
            reason: "This is suspicious"
        }
    ];

    getList(): Observable<IPayment[]> {
        return Observable.of(this.items);
    }
}