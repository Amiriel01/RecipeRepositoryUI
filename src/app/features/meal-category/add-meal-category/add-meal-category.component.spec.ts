import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealCategoryComponent } from './add-meal-category.component';

describe('AddMealCategoryComponent', () => {
  let component: AddMealCategoryComponent;
  let fixture: ComponentFixture<AddMealCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMealCategoryComponent]
    });
    fixture = TestBed.createComponent(AddMealCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
