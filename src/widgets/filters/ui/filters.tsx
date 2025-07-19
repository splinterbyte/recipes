import { View, StyleSheet, Text } from 'react-native';
import { SortByDifficulty } from '../../../features/sortByDifficulty';
import { SortByTags } from '../../../features/sortByTags';
import { SortByCalories } from '../../../features/sortByCalories';

type Props = {
  setSelectedDifficulty: (difficulty: string) => void;
  setSelectedTag: (tag: string[]) => void;
  selectedDifficulty: string;
  selectedTags: string[];
  setCalories: (calories: { min: string; max: string }) => void;
  calories: { min: string; max: string };
};

export const Filters = ({
  setSelectedDifficulty,
  setSelectedTag,
  selectedDifficulty,
  selectedTags,
  setCalories,
  calories,
}: Props) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <Text style={styles.title}>Sort by difficulty</Text>
        <SortByDifficulty
          setSelectedDifficulty={setSelectedDifficulty}
          selectedDifficulty={selectedDifficulty}
        />
        <Text style={styles.title}>Sort by tags</Text>
        <SortByTags
          setSelectedTag={setSelectedTag}
          selectedTags={selectedTags}
        />
        <Text style={styles.title}>Sort by calories</Text>
        <SortByCalories setCalories={setCalories} calories={calories} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  title: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
