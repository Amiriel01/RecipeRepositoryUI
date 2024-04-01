export interface AddRecipeDetails {
    recipeName: string,
    recipeUrlHandle: string,
    recipeShortDescription: string,
    recipeContent: string,
    recipeImage: string,
    isVisible: boolean,
    mealCategories: string[],
    allergenCategories: string[],
}