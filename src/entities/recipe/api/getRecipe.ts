import axios from 'axios';

export const getRecipe = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/recipes');
    return response.data.recipes;
  } catch (error) {
    console.error('Ошибка при загрузке рецептов:', error.message);
    throw error;
  }
};
