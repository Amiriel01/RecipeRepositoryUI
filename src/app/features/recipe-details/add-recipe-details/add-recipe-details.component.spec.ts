import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeDetailsComponent } from './add-recipe-details.component';

describe('AddRecipeDetailsComponent', () => {
  let component: AddRecipeDetailsComponent;
  let fixture: ComponentFixture<AddRecipeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRecipeDetailsComponent]
    });
    fixture = TestBed.createComponent(AddRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
