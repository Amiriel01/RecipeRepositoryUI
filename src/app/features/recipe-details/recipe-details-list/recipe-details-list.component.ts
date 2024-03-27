import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDetails } from '../models/recipe-details.model';
import { RecipeDetailsService } from '../services/recipe-details.service';

@Component({
  selector: 'app-recipe-details-list',
  templateUrl: './recipe-details-list.component.html',
  styleUrls: ['./recipe-details-list.component.css']
})
export class RecipeDetailsListComponent implements OnInit {

  recipeDetails$?: Observable<RecipeDetails[]>;

  constructor(private recipeDetailsService: RecipeDetailsService) {

  }

  ngOnInit(): void {
    this.recipeDetails$ = this.recipeDetailsService.getAllRecipes();
  }

}
