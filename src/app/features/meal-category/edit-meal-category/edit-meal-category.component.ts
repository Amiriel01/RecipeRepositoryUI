import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MealCategoryService } from '../services/meal-category.service';
import { MealCategory } from '../models/meal-category.model';
import { UpdateMealCategoryRequest } from '../models/update-meal-category-request.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-meal-category.component.html',
  styleUrls: ['./edit-meal-category.component.css']
})
export class EditMealCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editMealCategorySubscription?: Subscription;
  mealCategory?: MealCategory;

  constructor(private route: ActivatedRoute, private mealCategoryService: MealCategoryService, private router: Router) {

  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
       this.id = params.get('id');

       if (this.id) {
        this.mealCategoryService.getMealCategoryById(this.id)
        .subscribe({
          next: (response) => {
            this.mealCategory = response;
          }
        });
       }
      }
    });
  }

  onFormSubmit(): void {
    //create object
    const updateMealCategoryRequest: UpdateMealCategoryRequest = {
      mealName: this.mealCategory?.mealName ?? '',
      mealUrlHandle: this.mealCategory?.mealUrlHandle ?? '',
    };

    //pass object to service
    if (this.id) {
      this.editMealCategorySubscription = this.mealCategoryService.updateMealCategory(this.id, updateMealCategoryRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/meal-categories');
        }
      });
    };
  }

  onDelete(): void {
    if (this.id) {
      this.mealCategoryService.deleteMealCategory(this.id)
      .subscribe ({
        next: (response) => {
          this.router.navigateByUrl('/admin/meal-categories');
        }
      });
    }  
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editMealCategorySubscription?.unsubscribe();
  }
}
