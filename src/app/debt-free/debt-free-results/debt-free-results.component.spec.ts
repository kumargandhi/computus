import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtFreeResultsComponent } from './debt-free-results.component';

describe('DebtFreeResultsComponent', () => {
    let component: DebtFreeResultsComponent;
    let fixture: ComponentFixture<DebtFreeResultsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DebtFreeResultsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DebtFreeResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
