import { FlatList, StyleSheet } from 'react-native';
import { useGetRecipes } from '../api/hooks/useGetRecipes';
import { Recipe } from '../../../entities/recipe';

export const Recipes = () => {
  const { data: data = [] } = useGetRecipes();

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <Recipe
          name={item.name}
          image={item.image}
          difficulty={item.difficulty}
          caloriesPerServing={item.caloriesPerServing}
          rating={item.rating}
          cookTimeMinutes={item.cookTimeMinutes}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
