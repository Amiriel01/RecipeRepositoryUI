import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealCategoryListComponent } from './features/meal-category/meal-category-list/meal-category-list.component';
import { AllergenCategoryListComponent } from './features/allergen-category/allergen-category-list/allergen-category-list.component';

const routes: Routes = [
  {
    path: 'admin/meal-categories',
    component: MealCategoryListComponent
  },
  {
    path: 'admin/allergen-categories',
    component: AllergenCategoryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
