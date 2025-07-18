import { useQuery } from '@tanstack/react-query';
import { getRecipe } from '../../../../entities/recipe';
import { RecipeItem } from '../../../../entities/recipe/types';

export const useGetRecipes = (recipeId: number | null) =>
  useQuery({
    queryKey: ['recipes', recipeId],
    queryFn: getRecipe,
    select: data => {
      return recipeId
        ? data.find((recipe: RecipeItem) => recipe.id === recipeId)
        : data;
    },
  });
