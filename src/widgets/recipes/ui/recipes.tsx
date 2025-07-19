import React from 'react';
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useGetRecipes, RecipeItem, Recipe } from '../../../entities/recipe';
import { RootStackParamList } from '../../../app/navigation/types';

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

        if (
          item.caloriesPerServing < (calories.min || 0) ||
          item.caloriesPerServing > (calories.max || Infinity)
        ) {
          return false;
        }
        if (
          selectedTags.length > 0 &&
          !selectedTags.every((tag: string) => item.tags.includes(tag))
        ) {
          return false;
        }

        return true;
      });
    };
    setFilteredData(getFilteredData());
  }, [selectedDifficulty, selectedTags, data, calories]);

  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

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
        renderItem={({ item }: { item: RecipeItem }) => (
          <TouchableOpacity activeOpacity={1} onPress={() => nav(item.id)}>
            <Recipe {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
