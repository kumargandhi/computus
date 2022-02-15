import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagrComponent } from './cagr.component';

describe('CagrComponent', () => {
    let component: CagrComponent;
    let fixture: ComponentFixture<CagrComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CagrComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CagrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
