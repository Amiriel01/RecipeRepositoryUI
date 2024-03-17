import { Component } from '@angular/core';
import { AddAllergenCategoryRequest } from '../../models/add-allergen-category-request.model';

@Component({
  selector: 'app-add-allergen-category',
  templateUrl: './add-allergen-category.component.html',
  styleUrls: ['./add-allergen-category.component.css']
})
export class AddAllergenCategoryComponent {

    //create interface model in models folder
    model: AddAllergenCategoryRequest

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
