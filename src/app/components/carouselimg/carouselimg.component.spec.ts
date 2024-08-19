import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselimgComponent } from './carouselimg.component';

describe('CarouselimgComponent', () => {
  let component: CarouselimgComponent;
  let fixture: ComponentFixture<CarouselimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselimgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
