import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export const SortByCalories = ({ setCalories, calories }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sort by calories</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.inputMin}
          placeholder="min"
          value={calories.min}
          onChangeText={value => setCalories({ ...calories, min: value })}
        />
        <TextInput
          style={styles.inputMax}
          placeholder="max"
          value={calories.max}
          onChangeText={value => setCalories({ ...calories, max: value })}
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
  title: {
    fontWeight: 'bold',
    marginBottom: 3,
  },

  inputMin: {
    width: 125,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,

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

    elevation: 2,
  },
});
