import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSliderComponent } from './clients-slider.component';

describe('ClientsSliderComponent', () => {
  let component: ClientsSliderComponent;
  let fixture: ComponentFixture<ClientsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClientsSliderComponent]
    });
    fixture = TestBed.createComponent(ClientsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
