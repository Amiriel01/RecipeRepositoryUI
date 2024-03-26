import { Component } from '@angular/core';
import { AddRecipeDetails } from '../models/add-recipe-details.model';
import { RecipeDetailsService } from '../services/recipe-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe-details',
  templateUrl: './add-recipe-details.component.html',
  styleUrls: ['./add-recipe-details.component.css']
})
export class AddRecipeDetailsComponent {
  model: AddRecipeDetails;

  constructor(private recipeDetailsService: RecipeDetailsService, private router: Router) {
    this.model = {
      recipeName: '',
      recipeUrlHandle: '',
      recipeShortDescription: '',
      recipeContent: '',
      recipeImage: '',
      isVisible: true,
    }
  }

  onFormSubmit(): void {
    this.recipeDetailsService.createRecipeDetails(this.model)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/Recipes')
        }
      });
  }
}
