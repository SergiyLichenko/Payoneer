import { IPayment } from "./shared/payment.model";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PaymentService } from "./payment.service";

@Injectable()
export class PaymentResovlerService implements Resolve<IPayment>{

    constructor(private paymentService : PaymentService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<IPayment> {
        const paymentId = +route.params["paymentId"];
        return this.paymentService.getById(paymentId);
    }
}