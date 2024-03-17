import { Component } from '@angular/core';
import { AddMealCategoryRequest } from '../models/add-meal-category-request.model';
import { MealCategoryService } from '../services/meal-category.service';

@Component({
  selector: 'app-add-meal-category',
  templateUrl: './add-meal-category.component.html',
  styleUrls: ['./add-meal-category.component.css']
})
export class AddMealCategoryComponent {

  //create interface model in models folder
  model: AddMealCategoryRequest

  //initiate model in the constructor
  constructor(private mealCategoryService: MealCategoryService) {
    this.model = {
      mealName: '',
      mealUrlHandle: '',
    }
  }

  onFormSubmit() {
    this.mealCategoryService.AddMealCategory(this.model)
    .subscribe({
      next: (response => {
        console.log('success')
      }),
      error: (error) => {
        
      }
    });
  }

}
