import { Component } from '@angular/core';
import { AddMealCategoryRequest } from '../models/add-meal-category-request.model';

@Component({
  selector: 'app-add-meal-category',
  templateUrl: './add-meal-category.component.html',
  styleUrls: ['./add-meal-category.component.css']
})
export class AddMealCategoryComponent {

  //create interface model in models folder
  model: AddMealCategoryRequest

  //initiate model in the constructor
  constructor() {
    this.model = {
      name: '',
      urlHandle: '',
    }
  }

  onFormSubmit() {
    
  }

}
