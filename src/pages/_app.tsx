import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`flex flex-col ${roboto.className}`}>
      <NavBar cartCount={0}/>
      <Component 
        {...pageProps} 
        />
      <Footer />
    </main>
  );
}
