import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsListComponent } from './recipe-details-list.component';

describe('RecipeDetailsListComponent', () => {
  let component: RecipeDetailsListComponent;
  let fixture: ComponentFixture<RecipeDetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailsListComponent]
    });
    fixture = TestBed.createComponent(RecipeDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
