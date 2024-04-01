import { Component, OnInit } from '@angular/core';
import { AddRecipeDetails } from '../models/add-recipe-details.model';
import { RecipeDetailsService } from '../services/recipe-details.service';
import { Router } from '@angular/router';
import { MealCategoryService } from '../../meal-category/services/meal-category.service';
import { AllergenCategoryService } from '../../allergen-category/services/allergen-category.service';
import { Observable } from 'rxjs';
import { MealCategory } from '../../meal-category/models/meal-category.model';
import { AllergenCategory } from '../../allergen-category/models/allergen-category.model';

@Component({
  selector: 'app-add-recipe-details',
  templateUrl: './add-recipe-details.component.html',
  styleUrls: ['./add-recipe-details.component.css']
})
export class AddRecipeDetailsComponent implements OnInit {
  model: AddRecipeDetails;
  mealCategories$?: Observable<MealCategory[]>;
  allergenCategories$?: Observable<AllergenCategory[]>;

  constructor(private recipeDetailsService: RecipeDetailsService, private router: Router, private mealCategoryService: MealCategoryService, private allergenCategoryService: AllergenCategoryService) {
    this.model = {
      recipeName: '',
      recipeUrlHandle: '',
      recipeShortDescription: '',
      recipeContent: '',
      recipeImage: '',
      isVisible: true,
      mealCategories: [],
      allergenCategories: [],
    }
  }

  ngOnInit(): void {
    this.mealCategories$ = this.mealCategoryService.getAllMealCategories();
    this.allergenCategories$ = this.allergenCategoryService.getAllergenCategories();
  }

  onFormSubmit(): void {
    this.recipeDetailsService.createRecipeDetails(this.model)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/recipe-details')
        }
      });
  }
}
