import { AllergenCategory } from "../../allergen-category/models/allergen-category.model";
import { MealCategory } from "../../meal-category/models/meal-category.model";

export interface RecipeDetails {
    id: string,
    recipeName: string,
    recipeUrlHandle: string,
    recipeShortDescription: string,
    recipeContent: string,
    recipeImage: string,
    isVisible: boolean,
    mealCategories: MealCategory[],
    allergenCategories: AllergenCategory[],
}