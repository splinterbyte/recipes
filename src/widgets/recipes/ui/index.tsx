import React from 'react';
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { useGetRecipes } from '../../../entities/recipe/api/hooks/useGetRecipes';
import { Recipe } from '../../../entities/recipe';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation/types';
import { RecipeItem } from '../../../entities/recipe/types';
import { Skeleton } from './skeleton';

export const Recipes = ({ selectedDifficulty, selectedTags, calories }) => {
  const { data, isLoading, refetch, isRefetching } = useGetRecipes(null);
  const [filteredData, setFilteredData] = React.useState(data);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const nav = React.useCallback(
    (itemId: number) => {
      navigation.navigate('Details', { id: itemId });
    },
    [navigation],
  );
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

  if (isLoading || isRefetching) {
    return (
      <View>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={1} onPress={() => nav(item.id)}>
            <Recipe {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
