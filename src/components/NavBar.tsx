import React from 'react';
import Link from 'next/link';

const NavBar = ({ cartCount }: { cartCount: number }) => {
  return (
    <div className='w-full bg-gray-900'>
      <div className="w-3/5 mx-auto p-4 text-white grid mobile:grid-cols-1 tablet:grid-cols-[1fr_40%_1fr] desktop:grid-cols-[1fr_30%_1fr]">

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

        <div className='flex flex-row justify-end mobile:m-auto tablet:m-0'>
          <Link href="tel:+919732919663" className='px-2'>
            <div className="px-4 py-2 bg-purple-800 rounded text-white">CallNow</div>
          </Link>
          <Link href="/cart" className='px-2'>
            <div className="px-4 py-2 bg-purple-800 rounded text-white">
              {cartCount === 0 ? 'Cart' : `Cart ${cartCount}`}
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
