import React from 'react';
import Link from 'next/link';
import download_icon from 'public/download-icon.svg'
import LinkNavButton from './LinkNavButton';
import Image from 'next/image';
import { motion } from 'framer-motion'

const NavBar = () => {
  return (
    <motion.div 
      initial={{
        opacity: 0.5,
        y: -50
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      className='drop-shadow-sm p-2 bg-[#08223a] text-white'>
      <div className='flex tablet:w-3/5 m-auto items-center justify-between'>
        <Link href="/">
          <motion.div 
            whileHover={{
              scale: 1.3
            }}
            whileTap={{
              scale: 0.9
            }}
            className='text-2xl'>
            TrueTest
          </motion.div>
        </Link>
        <div className='flex min-w-[30%] justify-between'>
          <LinkNavButton innerText='Cart' />
          <LinkNavButton innerText='Labs' />
          <LinkNavButton innerText='About' />
        </div>
        <Link href='/report'>
          <motion.div 
            initial={{
              scale: .9
            }}
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: .8
            }}
            className='bg-[#156b85] p-2 px-4 rounded-full text-white flex drop-shadow-sm whitespace-nowrap'>
            <Image
              src={download_icon}
              alt='download-icon'
              height={24}
              width={24}
              className='mr-2'
            />
            Download Report
          </motion.div>
        </Link>

      </div>
    </motion.div>

  );
};

export default NavBar;
