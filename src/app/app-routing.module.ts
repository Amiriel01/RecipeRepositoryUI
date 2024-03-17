import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealCategoryListComponent } from './features/meal-category/meal-category-list/meal-category-list.component';
import { AllergenCategoryListComponent } from './features/allergen-category/allergen-category-list/allergen-category-list.component';
import { AddMealCategoryComponent } from './features/meal-category/add-meal-category/add-meal-category.component';
import { AddAllergenCategoryComponent } from './features/allergen-category/add-allergen-category/add-allergen-category/add-allergen-category.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
