import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllergenCategoryComponent } from './edit-allergen-category.component';

describe('EditAllergenCategoryComponent', () => {
  let component: EditAllergenCategoryComponent;
  let fixture: ComponentFixture<EditAllergenCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAllergenCategoryComponent]
    });
    fixture = TestBed.createComponent(EditAllergenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
