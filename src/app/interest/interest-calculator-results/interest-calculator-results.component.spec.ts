import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculatorResultsComponent } from './interest-calculator-results.component';

describe('InterestCalculatorResultsComponent', () => {
    let component: InterestCalculatorResultsComponent;
    let fixture: ComponentFixture<InterestCalculatorResultsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InterestCalculatorResultsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InterestCalculatorResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
