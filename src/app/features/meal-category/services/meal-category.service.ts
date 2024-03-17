import { Injectable } from '@angular/core';
import { AddMealCategoryRequest } from '../models/add-meal-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealCategoryService {

  constructor(private http: HttpClient) { }

  AddMealCategory(model: AddMealCategoryRequest): Observable<void> {
    return this.http.post<void>(`https://localhost:7184/api/Meals`, model);
  }
}
