import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularDrinksComponent } from './most-popular-drinks.component';

describe('MostPopularDrinksComponent', () => {
  let component: MostPopularDrinksComponent;
  let fixture: ComponentFixture<MostPopularDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPopularDrinksComponent]
    });
    fixture = TestBed.createComponent(MostPopularDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
