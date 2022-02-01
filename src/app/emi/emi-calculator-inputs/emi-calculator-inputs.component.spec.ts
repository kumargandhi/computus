import { ComponentFixture, TestBed } from '@angular/core/testing';

import { emiCalculatorInputsComponent } from './emi-calculator-inputs.component';

describe('CalculatorInputsComponent', () => {
    let component: emiCalculatorInputsComponent;
    let fixture: ComponentFixture<emiCalculatorInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [emiCalculatorInputsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(emiCalculatorInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
