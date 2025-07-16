import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useGetRecipes } from '../api/hooks/useGetRecipes';
import { Recipe } from '../../../entities/recipe';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation/types';

export const Recipes = () => {
  const { data: data = [] } = useGetRecipes();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('Details', {
              item,
            })
          }
        >
          <Recipe
            name={item.name}
            image={item.image}
            difficulty={item.difficulty}
            caloriesPerServing={item.caloriesPerServing}
            rating={item.rating}
            cookTimeMinutes={item.cookTimeMinutes}
          />
        </TouchableOpacity>
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
