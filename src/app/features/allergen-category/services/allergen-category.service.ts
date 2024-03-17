import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddAllergenCategoryRequest } from '../models/add-allergen-category-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllergenCategoryService {

  constructor(private http: HttpClient) { }

  AddAllergenCategory(model: AddAllergenCategoryRequest): Observable<void> {
    return this.http.post<void>(`https://localhost:7184/api/Allergen`, model);
  }

}
