import React from 'react';
import Link from 'next/link';
import download_icon from 'public/download-icon.svg'
import NavButton from './NavButton';
import LinkNavButton from './LinkNavButton';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='drop-shadow-sm p-2 bg-[#A2D2FF] '>
      <div className='flex tablet:w-3/5 m-auto items-center justify-between'>
        <div className='text-2xl'>
          TrueTest
        </div>
        <div className='flex min-w-[30%] justify-between'>
          <LinkNavButton innerText='Cart' />
          <LinkNavButton innerText='Labs' />
          <LinkNavButton innerText='About' />
        </div>
        <Link href='/report'>
          <div className='bg-[#074052] p-2 px-4 rounded-full text-white flex'>
            <Image
              src={download_icon}
              alt='download-icon'
              height={24}
              width={24}
              className='mr-2'
            />
            Download Report
          </div>
        </Link>

      </div>
    </div>

  );
};

export default NavBar;
