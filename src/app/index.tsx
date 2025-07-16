import React from 'react';
import { QueryProvider } from './providers';
import { Recipes } from '../widgets/recipes/ui';

export const Main = () => {
  return (
    <QueryProvider>
      <Recipes />
    </QueryProvider>
  );
};
