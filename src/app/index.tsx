import React from 'react';
import { QueryProvider } from './providers';
import { RootStack } from './navigation';
import { NavigationContainer } from '@react-navigation/native';

export const Main = () => {
  return (
    <QueryProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryProvider>
  );
};
