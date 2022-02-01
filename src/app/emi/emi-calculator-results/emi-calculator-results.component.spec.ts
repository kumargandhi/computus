import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalculatorResultsComponent } from './emi-calculator-results.component';

describe('EmiCalculatorResultsComponent', () => {
    let component: EmiCalculatorResultsComponent;
    let fixture: ComponentFixture<EmiCalculatorResultsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EmiCalculatorResultsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmiCalculatorResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
