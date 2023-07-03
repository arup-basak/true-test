import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Figtree } from 'next/font/google'
import { useRouter } from 'next/router'

const figtree = Figtree({
  weight: '400',
  subsets: ['latin'],
})

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  return (
    <main className={`flex flex-col ${figtree.className} bg-[#f4f1de]`}>
      <NavBar />
      <Component
        {...pageProps}
      />
      {!(router.pathname.includes("/report/") || router.pathname.includes("/admin")) &&
        <Footer />
      }
    </main>
  );
}

export default App