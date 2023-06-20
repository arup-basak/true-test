import React from 'react';
import Link from 'next/link';
import download_icon from 'public/download-icon.svg'
import NavButton from './NavButton';

const NavBar = ({ cartCount }: { cartCount: number }) => {
  return (
    <div className='w-full bg-gray-900'>
      <div className="w-3/5 mx-auto p-4 text-white grid mobile:grid-cols-1 tablet:grid-cols-[1fr_40%_1fr] desktop:grid-cols-[20%_1fr_40%] items-center">

        <Link href="/" className='mobile:m-auto tablet:m-0'>
          <div className="text-2xl font-bold">TrueTest</div>
        </Link>

        <div className="w-full flex justify-between items-center px-2 mobile:py-3 tablet:py-0">
          <Link href="/labs">
            <div className="hover:text-indigo-500 text-white">Labs</div>
          </Link>
          <Link href="/products">
            <div className="hover:text-indigo-500 text-white">Products</div>
          </Link>
          <Link href="/about">
            <div className="hover:text-indigo-500 text-white">About</div>
          </Link>
        </div>

        <div className='flex mobile:m-auto tablet:m-0 pl-3'>
          <NavButton innerText='Download Report' link="/report" imageIcon={download_icon} />
          <NavButton innerText='CallNow' link="tel:+919732919663" />
          <NavButton innerText={cartCount === 0 ? 'Cart' : `Cart ${cartCount}`} link="/cart" />
        </div>
      </div>

    </div>
  );
};

export default NavBar;
