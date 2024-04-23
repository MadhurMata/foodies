import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from '@/lib/queryProvider/ReactQueryProvider';
import { GlobalContextProvider } from '@/lib/globalContext/GlobalContext';
import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <GlobalContextProvider>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between">
              {children}
            </main>
            <Navbar />
          </GlobalContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
