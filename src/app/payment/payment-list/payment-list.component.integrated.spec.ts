import { RouterTestingModule } from '@angular/router/testing';
import { SharedMaterialModule } from "../../shared-material.module";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { PaymentListComponent } from "./payment-list.component";
import { PaymentService } from '../payment.service';
import { Observable } from 'rxjs/Observable';
import { payments } from '../payments.data';
import { By } from '@angular/platform-browser';

describe('PaymentListComponent integrated', () => {
    let component: PaymentListComponent;
    let fixture: ComponentFixture<PaymentListComponent>;
    let paymentService: any;

    beforeEach(async () => {
        paymentService = jasmine.createSpyObj('paymentService', ['getList']);
        paymentService.getList.and.returnValue(Observable.of(payments));

        TestBed.configureTestingModule({
            imports: [SharedMaterialModule, RouterTestingModule],
            declarations: [PaymentListComponent],
            providers: [{
                provide: PaymentService,
                useValue: paymentService
            }]
        }).compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(PaymentListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('constructor', () => {
        it('should create', () => {
            //Assert
            expect(component).toBeTruthy();
        });
    });

    describe('UI', () => {
        it('should display all payments', () => {
            //Act
            const rows = fixture.debugElement.queryAll(By.css('mat-row'));

            //Assert
            expect(rows.length).toBe(payments.length);
        });

        it('should filter by pending payments', () => {
            //Arrange
            const checkboxes = fixture.debugElement.queryAll(By.css('mat-checkbox'));

            //Act
            checkboxes[0].nativeElement.click();
            fixture.detectChanges();

            //Assert
            const rows = fixture.debugElement.queryAll(By.css('mat-row'));
            expect(rows.length).toBe(payments.filter(x => x.status === 0).length);
        });

        it('should filter by approved payments', () => {
            //Arrange
            const checkboxes = fixture.debugElement.queryAll(By.css('mat-checkbox'));

            //Act
            checkboxes[1].nativeElement.click();
            fixture.detectChanges();
            
            //Assert
            const rows = fixture.debugElement.queryAll(By.css('mat-row'));
            expect(rows.length).toBe(payments.filter(x => x.status === 1).length);
        });

        it('should filter by rejected payments', () => {
            //Arrange
            const checkboxes = fixture.debugElement.queryAll(By.css('mat-checkbox'));

            //Act
            checkboxes[2].nativeElement.click();
            fixture.detectChanges();
            
            //Assert
            const rows = fixture.debugElement.queryAll(By.css('mat-row'));
            expect(rows.length).toBe(payments.filter(x => x.status === 99).length);
        });
    });
});