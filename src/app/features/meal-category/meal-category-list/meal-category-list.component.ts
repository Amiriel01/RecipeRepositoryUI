import { Component, OnInit } from '@angular/core';
import { MealCategoryService } from '../services/meal-category.service';
import { MealCategory } from '../models/meal-category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal-category-list',
  templateUrl: './meal-category-list.component.html',
  styleUrls: ['./meal-category-list.component.css']
})
export class MealCategoryListComponent implements OnInit {

  mealCategories$?: Observable<MealCategory[]>

  constructor(private mealCategoryService: MealCategoryService) {

  }
  ngOnInit(): void {
    this.mealCategories$ = this.mealCategoryService.getAllMealCategories();
  }
}
