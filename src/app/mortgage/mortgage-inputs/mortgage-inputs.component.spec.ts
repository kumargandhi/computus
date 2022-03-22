import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageInputsComponent } from './mortgage-inputs.component';

describe('CalculatorInputsComponent', () => {
    let component: MortgageInputsComponent;
    let fixture: ComponentFixture<MortgageInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MortgageInputsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MortgageInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
