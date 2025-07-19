import axios from 'axios';

export const getRecipe = async () => {
  const response = await axios.get('https://dummyjson.com/recipes');
  return response.data.recipes;
};
