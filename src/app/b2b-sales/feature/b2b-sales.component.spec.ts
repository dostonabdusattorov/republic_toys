import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2bSalesComponent } from './b2b-sales.component';

describe('B2bSalesComponent', () => {
  let component: B2bSalesComponent;
  let fixture: ComponentFixture<B2bSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2bSalesComponent]
    });
    fixture = TestBed.createComponent(B2bSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
