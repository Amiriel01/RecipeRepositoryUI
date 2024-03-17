import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MealCategoryListComponent } from './features/meal-category/meal-category-list/meal-category-list.component';
import { AllergenCategoryListComponent } from './features/allergen-category/allergen-category-list/allergen-category-list.component';
import { AddMealCategoryComponent } from './features/meal-category/add-meal-category/add-meal-category.component';
import { FormsModule } from '@angular/forms';
import { AddAllergenCategoryComponent } from './features/allergen-category/add-allergen-category/add-allergen-category/add-allergen-category.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MealCategoryListComponent,
    AllergenCategoryListComponent,
    AddMealCategoryComponent,
    AddAllergenCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
