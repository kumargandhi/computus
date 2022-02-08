import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculatorInputsComponent } from './interest-calculator-inputs.component';

describe('InterestCalculatorInputsComponent', () => {
    let component: InterestCalculatorInputsComponent;
    let fixture: ComponentFixture<InterestCalculatorInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InterestCalculatorInputsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InterestCalculatorInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
