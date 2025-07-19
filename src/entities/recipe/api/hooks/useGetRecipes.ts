import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getRecipe } from '../getRecipe';
import { RecipeItem, RecipesResponse } from '../../types';

export function useGetRecipes(
  recipeId: number,
): UseQueryResult<RecipeItem | undefined, Error>;

export function useGetRecipes(
  recipeId: null,
): UseQueryResult<RecipeItem[], Error>;

export function useGetRecipes(
  recipeId: number | null,
): UseQueryResult<RecipeItem | RecipeItem[] | undefined, Error> {
  return useQuery({
    queryKey: ['recipes', recipeId],
    queryFn: getRecipe,
    select: (data: RecipesResponse) => {
      const recipes = data.recipes || [];
      if (recipeId !== null) {
        return recipes.find((recipe: RecipeItem) => recipe.id === recipeId);
      }
      return recipes;
    },
  });
}
