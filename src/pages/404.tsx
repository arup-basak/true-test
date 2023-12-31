import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import icon_404 from 'public/icon-404.svg';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="flex flex-col items-center space-y-6"
        >
          <Image src={icon_404} alt="404icon" height={100} width={100} />
          <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text">
            Oh! Snap
          </div>
          <div className="text-3xl">Page Not Found</div>
        </motion.div>
      </div>
    </>
  );
}
