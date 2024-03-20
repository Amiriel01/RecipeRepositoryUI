import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryComponent } from './edit-meal-category.component';

describe('EditCategoryComponent', () => {
  let component: EditCategoryComponent;
  let fixture: ComponentFixture<EditCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCategoryComponent]
    });
    fixture = TestBed.createComponent(EditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
