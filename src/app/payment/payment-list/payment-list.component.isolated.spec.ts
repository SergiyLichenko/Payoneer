import { PaymentListComponent } from "./payment-list.component";
import { Observable } from "rxjs/Observable";
import { payments } from "../payments.data";
import 'rxjs/add/observable/from';

describe('PaymentListComponent isolated', () => {
    let subject: PaymentListComponent;
    let paymentService: any;
    let mockLocation: any;
    let mockActivatedRoute: any;
    let mockDialog: any;

    beforeEach(() => {
        paymentService = jasmine.createSpyObj('paymentService', ['getList']);
        paymentService.getList.and.returnValue(Observable.of(payments));

        mockLocation = jasmine.createSpyObj('location', ['replaceState']);

        mockActivatedRoute = {};
        mockActivatedRoute.data = Observable.of({ 'payment': payments[0] });

        const mockDialogRef: any = jasmine.createSpyObj('dialogRef', ['afterClosed']);
        mockDialogRef.afterClosed.and.returnValue(Observable.of(null));
        mockDialog = jasmine.createSpyObj('dialog', ['open']);
        mockDialog.open.and.returnValue(mockDialogRef);

        spyOn(window, 'setTimeout').and.callFake((funcToCall, millis) => funcToCall());

        subject = new PaymentListComponent(paymentService, mockLocation, mockActivatedRoute, mockDialog);
    });

    describe('ngOnInit', () => {
        it('should call this.paymentService.getList()', () => {
            //Act
            subject.ngOnInit();

            //Assert
            expect(paymentService.getList).toHaveBeenCalledTimes(1);
        });

        it('should set payments', () => {
            //Act
            subject.ngOnInit();

            //Assert
            expect(subject.payments).toBe(payments);
        });

        it('should set filteredPayments', () => {
            //Act
            subject.ngOnInit();

            //Assert
            expect(subject.filteredPayments).toBe(payments);
        });

        it('should call onStatusChangeClick if route contains parameter', () => {
            //Arrange
            spyOn(subject, 'onStatusChangeClick');

            //Act
            subject.ngOnInit();

            //Assert
            setTimeout(() => {
                expect(subject.onStatusChangeClick).toHaveBeenCalledTimes(1);
            }, 0);
        });

        it('should should not call onStatusChangeClick if route does not contain parameter', () => {
            //Arrange
            mockActivatedRoute.data = Observable.of({});
            subject = new PaymentListComponent(paymentService, mockLocation, mockActivatedRoute, mockDialog);
            spyOn(subject, 'onStatusChangeClick');

            //Act
            subject.ngOnInit();

            //Assert
            setTimeout(() => {
                expect(subject.onStatusChangeClick).not.toHaveBeenCalled();
            }, 0);
        });
    });
});