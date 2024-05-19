'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { GlobalContextProvider } from '@/lib/globalContext/GlobalContext';
import ReactQueryProvider from '@/lib/queryProvider/ReactQueryProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <GlobalContextProvider>
        <SessionProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </SessionProvider>
      </GlobalContextProvider>
    </ReactQueryProvider>
  );
};
