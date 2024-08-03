import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTestimonialComponent } from './single-testimonial.component';

describe('SingleTestimonialComponent', () => {
  let component: SingleTestimonialComponent;
  let fixture: ComponentFixture<SingleTestimonialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SingleTestimonialComponent]
    });
    fixture = TestBed.createComponent(SingleTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
