/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { DetailsScreenParams } from '../types';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

type DetailsScreenRouteProp = RouteProp<
  {
    Details: DetailsScreenParams;
  },
  'Details'
>;

type DetailsProps = {
  route: DetailsScreenRouteProp;
};

export const Details = ({ route }: DetailsProps) => {
  const {
    item: {
      name,
      ingredients,
      instructions,
      prepTimeMinutes,
      cookTimeMinutes,
      servings,
      difficulty,
      cuisine,
      caloriesPerServing,
      tags,
      image,
      rating,
      reviewCount,
      mealType,
    },
  } = route.params;
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.description}>
          <View>
            <Text style={styles.text}>Difficulty: {difficulty}</Text>
            <Text style={styles.text}>⏱ {cookTimeMinutes} min</Text>
            <Text style={styles.text}>{caloriesPerServing} kcal</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <StarRatingDisplay
                rating={rating ?? 0}
                starSize={24}
                color="white"
              />
              <Text style={styles.text}>{rating}</Text>
            </View>
            <Text style={styles.text}>Reviewed: {reviewCount}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.about}>
          <Text>Cuisine: {cuisine}</Text>
          <Text>Meal type: {mealType}</Text>
          <Text>Prep time minutes: {prepTimeMinutes}</Text>
          <Text>Servings: {servings}</Text>
        </View>

        <View style={styles.ingredients}>
          <Text style={styles.title}>Ingredients:</Text>
          <FlatList
            data={ingredients}
            renderItem={({ item }) => <Text style={styles.list}>• {item}</Text>}
            nestedScrollEnabled
          />
        </View>

        <View style={styles.instructions}>
          <Text style={styles.title}>Instructions:</Text>
          <FlatList
            data={instructions}
            renderItem={({ item, index }) => (
              <Text style={styles.list}>
                {index + 1}. {item}
              </Text>
            )}
            nestedScrollEnabled
          />
        </View>

        <View>
          <Text style={styles.title}>Tags:</Text>
          <FlatList
            data={tags}
            renderItem={({ item }) => <Text style={styles.list}># {item}</Text>}
            nestedScrollEnabled
          />
        </View>
      </View>
      <View />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  image: {
    borderRadius: 15,
    width: 120,
    height: 120,
    marginBottom: 5,

    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Тень для Android
    elevation: 10,
  },

  card: {
    padding: 20,
    display: 'flex',
    backgroundColor: '#0a96ea',
    borderRadius: 20,
    margin: 20,

    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Тень для Android
    elevation: 10,
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },

  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
  },

  ingredients: {
    marginBottom: 10,
  },

  instructions: {
    marginBottom: 10,
  },

  list: {
    paddingLeft: 5,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  about: {
    marginBottom: 5,
  },
});
