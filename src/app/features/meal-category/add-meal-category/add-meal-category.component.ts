import { Component, OnDestroy } from '@angular/core';
import { AddMealCategoryRequest } from '../models/add-meal-category-request.model';
import { MealCategoryService } from '../services/meal-category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meal-category',
  templateUrl: './add-meal-category.component.html',
  styleUrls: ['./add-meal-category.component.css']
})
export class AddMealCategoryComponent implements OnDestroy {

  //create interface model in models folder
  model: AddMealCategoryRequest
  private addMealCategorySubscription?: Subscription

  //initiate model in the constructor
  constructor(private mealCategoryService: MealCategoryService, private router: Router) {
    this.model = {
      mealName: '',
      mealUrlHandle: '',
    }
  }

  onFormSubmit() {
    this.addMealCategorySubscription = this.mealCategoryService.addMealCategory(this.model)
      .subscribe({
        next: (response => {
          this.router.navigateByUrl('/admin/Meals')
        }),
        error: (error) => {
          console.log(error)
        }
      });
  }

  ngOnDestroy(): void {
    this.addMealCategorySubscription?.unsubscribe();
  }
}
