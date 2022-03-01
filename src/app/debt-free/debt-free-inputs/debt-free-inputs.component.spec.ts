import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtFreeInputsComponent } from './debt-free-inputs.component';

describe('DebtFreeInputsComponent', () => {
    let component: DebtFreeInputsComponent;
    let fixture: ComponentFixture<DebtFreeInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DebtFreeInputsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DebtFreeInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
