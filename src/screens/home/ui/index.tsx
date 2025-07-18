import { Recipes } from '../../../widgets/recipes';
import { Modal, View } from 'react-native';
import { ButtonModal } from '../../../features/buttonModal';
import { Filters } from '../../../widgets/filters/ui';
import React from 'react';

export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState();
  const [selectedTag, setSelectedTag] = React.useState<string[]>([]);
  const [calories, setCalories] = React.useState({ min: 0, max: Infinity });
  return (
    <View style={{ paddingTop: 50 }}>
      <View style={{ top: 1 }}>
        <ButtonModal title="Filters" onPress={() => setOpen(true)} />
      </View>

      <Recipes
        selectedDifficulty={selectedDifficulty}
        selectedTags={selectedTag}
        calories={calories}
      />
      <ModalFilters
        open={open}
        setOpen={setOpen}
        setSelectedDifficulty={setSelectedDifficulty}
        setSelectedTag={setSelectedTag}
        setCalories={setCalories}
        selectedDifficulty={selectedDifficulty}
        selectedTags={selectedTag}
        calories={calories}
      />
    </View>
  );
};

const ModalFilters = ({
  open,
  setOpen,
  setSelectedDifficulty,
  setSelectedTag,
  setCalories,
  selectedDifficulty,
  selectedTags,
  calories,
}) => {
  return (
    <Modal visible={open} animationType="slide">
      <Filters
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        setSelectedTag={setSelectedTag}
        selectedTags={selectedTags}
        setCalories={setCalories}
        calories={calories}
      />
      <ButtonModal title="Close" onPress={() => setOpen(false)} />
    </Modal>
  );
};
