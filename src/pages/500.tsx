import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import icon_500 from 'public/icon-500.svg';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 Internal Server Error</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="flex flex-col items-center space-y-6"
        >
          <Image src={icon_500} alt="500icon" height={100} width={100} />
          <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text">
            Oops!
          </div>
          <div className="text-3xl">Internal Server Error</div>
        </motion.div>
      </div>
    </>
  );
}
