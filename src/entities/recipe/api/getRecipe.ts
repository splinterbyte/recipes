import axios from 'axios';
import { RecipesResponse } from '../types';

export const getRecipe = async (): Promise<RecipesResponse> => {
  const response = await axios.get<RecipesResponse>(
    'https://dummyjson.com/recipes',
  );
  return response.data;
};
