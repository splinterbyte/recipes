import { QueryProvider } from './providers';
import { Navigation } from './navigation';
import { NavigationContainer } from '@react-navigation/native';

export const Main = () => {
  return (
    <QueryProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </QueryProvider>
  );
};
