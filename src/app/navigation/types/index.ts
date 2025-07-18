import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Recipes: undefined;
  Details: { id: number };
};

export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
