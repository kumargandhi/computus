import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagrInputsComponent } from './cagr-inputs.component';

describe('CagrInputsComponent', () => {
    let component: CagrInputsComponent;
    let fixture: ComponentFixture<CagrInputsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CagrInputsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CagrInputsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
