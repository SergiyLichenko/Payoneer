import { Injectable } from '@angular/core';
import { IPayment } from './shared/payment.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { payments } from './payments.data';

@Injectable()
export class PaymentService {

    payments: IPayment[];
    
    constructor() {
        this.payments = payments;
    }

    getList(): Observable<IPayment[]> {
        return Observable.of(this.payments);
    }

    getById(id: number) {
        if (!id) return;

        const payment = this.payments.find(x => x.id === id);
        return Observable.of(payment);
    }

    update(payment: IPayment) {
        if (payment) return;

        let foundPayment = this.payments.find(x => x.id === payment.id);
        Object.assign(foundPayment, payment);
    }
}