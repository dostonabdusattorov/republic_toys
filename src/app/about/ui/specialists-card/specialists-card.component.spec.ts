import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistsCardComponent } from './specialists-card.component';

describe('SpecialistsCardComponent', () => {
  let component: SpecialistsCardComponent;
  let fixture: ComponentFixture<SpecialistsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpecialistsCardComponent]
    });
    fixture = TestBed.createComponent(SpecialistsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
