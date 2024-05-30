import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { Providers } from '@/app/[userName]/providers';
import HeaderProfile from '@/components/header/HeaderProfile';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <HeaderProfile />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}
