import { useQuery } from '@tanstack/react-query';
import { getRecipe } from '../../../../entities/recipe';

export const useGetRecipes = () =>
  useQuery({
    queryKey: ['recipes'],
    queryFn: () => getRecipe(),
  });
