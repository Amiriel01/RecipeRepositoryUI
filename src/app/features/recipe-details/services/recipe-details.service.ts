import { Injectable } from '@angular/core';
import { AddRecipeDetails } from '../models/add-recipe-details.model';
import { Observable } from 'rxjs';
import { RecipeDetails } from '../models/recipe-details.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {

  constructor(private http: HttpClient) { }

  getAllRecipes() : Observable<RecipeDetails[]> {
    return this.http.get<RecipeDetails[]>(`${environment.apiBaseUrl}/api/RecipeDetails`);
  }

  createRecipeDetails(data: AddRecipeDetails) : Observable<RecipeDetails> {
    return this.http.post<RecipeDetails>(`${environment.apiBaseUrl}/api/RecipeDetails`, data);
  }
}
