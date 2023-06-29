import React, { useState } from 'react';
import Link from 'next/link';
import download_icon from 'public/download-icon.svg'
import Image from 'next/image';
import { motion } from 'framer-motion'
import NavButtons from './NavButtons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
              scale: 1.2
            }}
            whileTap={{
              scale: 0.9
            }}
            className='text-2xl mobile:mx-2 tablet:mx-0'>
            TrueTest
          </motion.div>
        </Link>
        <div className='mobile:hidden tablet:flex min-w-[30%] justify-between '>
          <NavButtons />
        </div>
        <Link href='/report'>
          <motion.div
            initial={{
              scale: .9
            }}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: .8
            }}
            className='bg-[#156b85] p-2 px-4 rounded-full text-white flex items-center drop-shadow-sm whitespace-nowrap mobile:text-sm tablet:text-base'>
            <Image
              src={download_icon}
              alt='download-icon'
              height={22}
              width={22}
              className='mr-1'
            />
            <span>Download Report</span>
          </motion.div>
        </Link>
        <div className="tablet:hidden flex items-center">
          <button
            type="button"
            className="text-slate-100 hover:text-slate-300 focus:outline-none focus:text-slate-200 px-2"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16V5H4v1zm0 5h16v-1H4v1zm0 5h16v-1H4v1z"
                  strokeWidth="2"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16V5H4v1zm0 5h16v-1H4v1zm0 5h16v-1H4v1z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{
            // y: -200
          }}
          animate={{
            // y: 0
          }}
          transition={{ type: "inertia" }}
          className="mobile:block tablet:hidden">
          <NavButtons />
        </motion.div>
      )}
    </motion.div>

  );
};

export default NavBar;
