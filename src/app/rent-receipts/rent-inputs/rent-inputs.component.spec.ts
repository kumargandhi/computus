import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentInputsComponent } from './rent-inputs.component';

describe('RentInputsComponent', () => {
    let component: RentInputsComponent;
    let fixture: ComponentFixture<RentInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RentInputsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RentInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
