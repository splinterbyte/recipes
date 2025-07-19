import { View, TextInput, StyleSheet } from 'react-native';

type Props = {
  setCalories: (calories: { min: string; max: string }) => void;
  calories: { min: string; max: string };
};

export const SortByCalories = ({ setCalories, calories }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.inputMin}
          placeholder="min"
          value={calories.min}
          onChangeText={value => setCalories({ ...calories, min: value })}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputMax}
          placeholder="max"
          value={calories.max}
          onChangeText={value => setCalories({ ...calories, max: value })}
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 12,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputMin: {
    width: 125,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputMax: {
    width: 125,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingLeft: 10,
    elevation: 2,
  },
});
