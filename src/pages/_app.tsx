import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <main className={`flex flex-col ${roboto.className}`}>
      {!router.pathname.includes("/report/") &&
        < NavBar cartCount={0} />
      }
      <Component
        {...pageProps}
      />
      {!router.pathname.includes("/report/") &&
        <Footer />
      }
    </main>
  );
}
