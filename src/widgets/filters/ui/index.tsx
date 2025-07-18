import { View, StyleSheet } from 'react-native';
import { SortByDifficulty } from '../../../features/sortByDifficulty';
import { SortByTags } from '../../../features/sortByTags';
import { SortByCalories } from '../../../features/sortByCalories';

export const Filters = ({
  setSelectedDifficulty,
  setSelectedTag,
  selectedDifficulty,
  selectedTags,
  setCalories,
  calories,
}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <SortByDifficulty
          setSelectedDifficulty={setSelectedDifficulty}
          selectedDifficulty={selectedDifficulty}
        />
        <SortByTags
          setSelectedTag={setSelectedTag}
          selectedTags={selectedTags}
        />
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
});
