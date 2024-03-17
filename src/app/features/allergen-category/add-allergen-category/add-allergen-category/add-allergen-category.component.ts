import { Component } from '@angular/core';
import { AddAllergenCategoryRequest } from '../../models/add-allergen-category-request.model';
import { AllergenCategoryService } from '../../services/allergen-category.service';

@Component({
  selector: 'app-add-allergen-category',
  templateUrl: './add-allergen-category.component.html',
  styleUrls: ['./add-allergen-category.component.css']
})
export class AddAllergenCategoryComponent {

    //create interface model in models folder
    model: AddAllergenCategoryRequest

    //initiate model in the constructor
  constructor(private allergenCategoryService: AllergenCategoryService) {
    this.model = {
      allergenName: '',
      allergenUrlHandle: '',
    }
  }

  onFormSubmit() {
    this.allergenCategoryService.AddAllergenCategory(this.model)
    .subscribe({
      next: (response => {
        console.log('success')
      }),
      error: (error) => {
        
      }
    });
  }

}
