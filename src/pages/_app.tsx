import type { AppProps } from 'next/app';
import '../reset.css';
import { Caveat } from '@next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={caveat.className}>
      <Component {...pageProps} />
    </main>
  );
}
