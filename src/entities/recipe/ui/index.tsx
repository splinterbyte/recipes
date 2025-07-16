import { Image, StyleSheet, Text, View } from 'react-native';
interface Props {
  name: string;
  image: string;
  difficulty: string;
  caloriesPerServing: number;
  rating: number;
  cookTimeMinutes: number;
}

export const Recipe = ({
  name,
  image,
  difficulty,
  caloriesPerServing,
  rating,
  cookTimeMinutes,
}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text>{name}</Text>
      </View>
      <Image source={{ uri: image }} />
      <View style={styles.description}>
        <Text>Difficulty: {difficulty}</Text>
        <Text>{caloriesPerServing} kcal</Text>
        <Text>{rating}⭐</Text>
        <Text>⏱ {cookTimeMinutes} min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  description: {
    backgroundColor: '#b5b5b5',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#44444447',
    padding: 20,
  },
  header: {
    backgroundColor: '#e3e3e3',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: '#44444447',
    padding: 20,
  },
});
