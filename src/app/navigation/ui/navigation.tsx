import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../../screens/home';
import { Details } from '../../../screens/details';
import { RootStackParamList } from '../types';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipes" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
