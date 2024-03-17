import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCategoryListComponent } from './meal-category-list.component';

describe('MealCategoryListComponent', () => {
  let component: MealCategoryListComponent;
  let fixture: ComponentFixture<MealCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealCategoryListComponent]
    });
    fixture = TestBed.createComponent(MealCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
