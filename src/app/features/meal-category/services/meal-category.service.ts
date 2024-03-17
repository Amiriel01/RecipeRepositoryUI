import { Injectable } from '@angular/core';
import { AddMealCategoryRequest } from '../models/add-meal-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MealCategory } from '../models/meal-category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MealCategoryService {

  constructor(private http: HttpClient) { }

  getAllMealCategories(): Observable<MealCategory[]> {
    return this.http.get<MealCategory[]>(`${environment.apiBaseUrl}/api/Meals`);
  }

  addMealCategory(model: AddMealCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Meals`, model);
  }
}
