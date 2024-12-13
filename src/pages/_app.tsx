import { AppProvider } from '@/data/context/AppContext';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';

const roboto = Rubik({
  weight: '300',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
