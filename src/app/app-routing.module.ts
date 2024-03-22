import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealCategoryListComponent } from './features/meal-category/meal-category-list/meal-category-list.component';
import { AllergenCategoryListComponent } from './features/allergen-category/allergen-category-list/allergen-category-list.component';
import { AddMealCategoryComponent } from './features/meal-category/add-meal-category/add-meal-category.component';
import { AddAllergenCategoryComponent } from './features/allergen-category/add-allergen-category/add-allergen-category/add-allergen-category.component';
import { EditMealCategoryComponent } from './features/meal-category/edit-meal-category/edit-meal-category.component';
import { EditAllergenCategoryComponent } from './features/allergen-category/edit-allergen-category/edit-allergen-category.component';
import { RecipeDetailsListComponent } from './features/recipe-details/recipe-details-list/recipe-details-list.component';
import { AddRecipeDetailsComponent } from './features/recipe-details/add-recipe-details/add-recipe-details.component';

const routes: Routes = [
  {
    path: 'admin/meal-categories',
    component: MealCategoryListComponent
  },
  {
    path: 'admin/allergen-categories',
    component: AllergenCategoryListComponent
  },
  {
    path: 'admin/meal-categories/add',
    component: AddMealCategoryComponent
  },
  {
    path: 'admin/allergen-categories/add',
    component: AddAllergenCategoryComponent
  },
  {
    path: 'admin/meal-categories/:id',
    component: EditMealCategoryComponent
  },
  {
    path: 'admin/allergen-categories/:id',
    component: EditAllergenCategoryComponent
  },
  {
    path: 'admin/recipe-details',
    component: RecipeDetailsListComponent
  },
  {
    path: 'admin/recipe-details/add',
    component: AddRecipeDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
