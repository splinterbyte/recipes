import { Image, StyleSheet, Text, View } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { RecipeItem } from '../types';

export const Recipe = ({
  name,
  image,
  difficulty,
  caloriesPerServing,
  rating,
  cookTimeMinutes,
}: RecipeItem) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.inner}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>{name}</Text>
          <Text style={styles.transparentText}>Difficulty: {difficulty}</Text>
        </View>
        <Text style={styles.text}>⏱ {cookTimeMinutes} min</Text>
        <View style={styles.description}>
          <Text style={styles.text}>{caloriesPerServing} kcal</Text>
          <View style={styles.rating}>
            <StarRatingDisplay
              rating={rating ?? 0}
              color="white"
              starSize={11}
            />
            <Text style={styles.text}>{rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  inner: {
    color: 'white',
    paddingLeft: 30,
    backgroundColor: '#0a96ea',
    borderRadius: 20,
    padding: 20,
    width: '80%',

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
  title: { marginBottom: 10 },

  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  transparentText: {
    color: '#ffffff91',
    fontWeight: 'bold',
    fontSize: 11,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },

  description: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  rating: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    marginTop: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,

    left: 1,
    position: 'absolute',
    width: 100,
    height: 100,
    zIndex: 1,
  },
});
