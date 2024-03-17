import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddAllergenCategoryRequest } from '../models/add-allergen-category-request.model';
import { Observable } from 'rxjs';
import { AllergenCategory } from '../models/allergen-category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AllergenCategoryService {

  constructor(private http: HttpClient) { }

  getAllergenCategories(): Observable<AllergenCategory[]> {
    return this.http.get<AllergenCategory[]>(`${environment.apiBaseUrl}/api/Allergen`);
  }

  AddAllergenCategory(model: AddAllergenCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Allergen`, model);
  }

}
