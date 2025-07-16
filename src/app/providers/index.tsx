import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../shared';

type QueryProviderProps = {
  children: React.ReactNode;
};

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
