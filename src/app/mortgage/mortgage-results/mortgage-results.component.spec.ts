import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageResultsComponent } from './mortgage-results.component';

describe('CalculatorResultsComponent', () => {
    let component: MortgageResultsComponent;
    let fixture: ComponentFixture<MortgageResultsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MortgageResultsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MortgageResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
