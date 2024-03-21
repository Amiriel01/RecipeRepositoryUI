import { Injectable } from '@angular/core';
import { AddMealCategoryRequest } from '../models/add-meal-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MealCategory } from '../models/meal-category.model';
import { environment } from 'src/environments/environment.development';
import { UpdateMealCategoryRequest } from '../models/update-meal-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class MealCategoryService {

  constructor(private http: HttpClient) { }

  getAllMealCategories(): Observable<MealCategory[]> {
    return this.http.get<MealCategory[]>(`${environment.apiBaseUrl}/api/Meals`);
  }

  getMealCategoryById(id: string): Observable<MealCategory> {
    return this.http.get<MealCategory>(`${environment.apiBaseUrl}/api/Meals/${id}`);
  }

  addMealCategory(model: AddMealCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Meals`, model);
  }

  updateMealCategory(id: string, updateMealCategoryRequest: UpdateMealCategoryRequest): Observable<MealCategory> {
    return this.http.put<MealCategory>(`${environment.apiBaseUrl}/api/Meals/${id}`, updateMealCategoryRequest);
  }

  deleteMealCategory(id: string): Observable<MealCategory> {
    return this.http.delete<MealCategory>(`${environment.apiBaseUrl}/api/Meals/${id}`);
  }
}
