import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentResultsComponent } from './rent-results.component';

describe('RentResultsComponent', () => {
    let component: RentResultsComponent;
    let fixture: ComponentFixture<RentResultsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RentResultsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RentResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
