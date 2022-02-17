import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagrResultsComponent } from './cagr-results.component';

describe('CagrResultsComponent', () => {
  let component: CagrResultsComponent;
  let fixture: ComponentFixture<CagrResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagrResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagrResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
