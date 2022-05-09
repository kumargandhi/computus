import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentReceiptsComponent } from './rent-receipts.component';

describe('RentReceiptsComponent', () => {
    let component: RentReceiptsComponent;
    let fixture: ComponentFixture<RentReceiptsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RentReceiptsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RentReceiptsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
