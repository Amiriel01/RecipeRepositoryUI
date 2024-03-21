import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllergenCategory } from '../models/allergen-category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateAllergenCategoryRequest } from '../models/update-allergen-category-request.models';
import { AllergenCategoryService } from '../services/allergen-category.service';

@Component({
  selector: 'app-edit-allergen-category',
  templateUrl: './edit-allergen-category.component.html',
  styleUrls: ['./edit-allergen-category.component.css']
})
export class EditAllergenCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramsSubscription?: Subscription;
  editAllergenCategorySubscription?: Subscription;
  allergenCategory?: AllergenCategory;

  constructor(private route: ActivatedRoute, private allergenCategoryService: AllergenCategoryService, private router: Router) {

  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          this.allergenCategoryService.getAllergenCategoryById(this.id)
            .subscribe({
              next: (response) => {
                this.allergenCategory = response;
              }
            });
        }
      }
    });
  }

  onFormSubmit(): void {
    //create object
    const updateAllergenCategoryRequest: UpdateAllergenCategoryRequest = {
      allergenName: this.allergenCategory?.allergenName ?? '',
      allergenUrlHandle: this.allergenCategory?.allergenUrlHandle ?? '',
    };

    //pass object to service
    if (this.id) {
      this.editAllergenCategorySubscription = this.allergenCategoryService.updateAllergenCategory(this.id, updateAllergenCategoryRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/allergen-categories');
          }
        });
    };
  }

  onDelete(): void {
    if (this.id) {
      this.allergenCategoryService.deleteAllergenCategory(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/allergen-categories');
          }
        });
    }
  }


  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editAllergenCategorySubscription?.unsubscribe();
  }
}
