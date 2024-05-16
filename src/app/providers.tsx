'use client';

import { NextUIProvider } from '@nextui-org/react';
import { GlobalContextProvider } from '@/lib/globalContext/GlobalContext';
import ReactQueryProvider from '@/lib/queryProvider/ReactQueryProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <GlobalContextProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </GlobalContextProvider>
    </ReactQueryProvider>
  );
};
