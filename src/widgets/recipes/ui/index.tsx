import { FlatList, TouchableOpacity, View } from 'react-native';
import { useGetRecipes } from '../../../entities/recipe/api/hooks/useGetRecipes';
import { Recipe } from '../../../entities/recipe';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation/types';
import React from 'react';
import { RecipeItem } from '../../../entities/recipe/types';
import { Skeleton } from './skeleton';

export const Recipes = ({ selectedDifficulty, selectedTags, calories }) => {
  const { data, isLoading } = useGetRecipes(null);
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    const getFilteredData = () => {
      if (!data) return [];
      return data.filter((item: RecipeItem) => {
        if (selectedDifficulty && item.difficulty !== selectedDifficulty)
          return false;

        const itemCalories = item.caloriesPerServing ?? 0;
        const minCal = Number(calories.min) || 0;
        const maxCal = Number(calories.max) || Infinity;

        if (itemCalories < minCal || itemCalories > maxCal) {
          return false;
        }
        if (
          selectedTags.length > 0 &&
          !selectedTags.every((tag: string) => (item.tags ?? []).includes(tag))
        ) {
          return false;
        }

        return true;
      });
    };
    setFilteredData(getFilteredData());
  }, [selectedDifficulty, selectedTags, data, calories]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      {isLoading ? (
        [...new Array(5)].map((_, index) => <Skeleton key={index} />)
      ) : (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                navigation.navigate('Details', {
                  id: item.id,
                })
              }
            >
              <Recipe {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};
